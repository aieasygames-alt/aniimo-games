import React from "react";
import { ChevronRight } from "lucide-react";
import { aniimo, regions, siteLastUpdated, statuses } from "../../data/content.js";
import { aniimoPath, localizedAniimoPath, elementPath, regionPath, rolePath, stagePath, statusPath } from "../lib/routes.js";
import { messagesForPath } from "../../data/locales/index.js";

function uiMessages() {
  return messagesForPath(typeof window === "undefined" ? "/" : window.location.pathname).ui;
}

export function StatusBadge({ status }) {
  return <span className={`status status-${status.toLowerCase()}`}>{status}</span>;
}

export function LaunchStatusPanel({ entries, title = "Launch Status" }) {
  const ui = uiMessages();
  return (
    <section className="launch-status-panel" aria-label={title}>
      <div className="launch-status-heading">
        <h2>{title}</h2>
        <span>{ui.officialOnly}</span>
      </div>
      <div className="launch-status-grid">
        {entries.map((entry) => (
          <article key={entry.id}>
            <div className="launch-status-label">
              <h3>{entry.label}</h3>
              <StatusBadge status={entry.status} />
            </div>
            <p>{entry.value}</p>
            <p className="small">{ui.checked} {entry.lastChecked}</p>
            <p className="small">{entry.note}</p>
            <a className="text-link" href={entry.source} target="_blank" rel="noreferrer">
              {ui.checkSource} <ChevronRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TaxonomyLinks({ navigate }) {
  const elementNames = [...new Set(aniimo.map((item) => item.element))];
  const roleNames = [...new Set(aniimo.map((item) => item.role))];
  const stageNames = [...new Set(aniimo.map((item) => item.stage))];
  const statusNames = [...new Set(aniimo.map((item) => item.status))];

  return (
    <div className="taxonomy-links">
      {elementNames.map((item) => (
        <a key={item} href={elementPath(item)} onClick={(event) => navigate(event, elementPath(item))}>
          {item} Aniimo
        </a>
      ))}
      {roleNames.map((item) => (
        <a key={item} href={rolePath(item)} onClick={(event) => navigate(event, rolePath(item))}>
          {item} Aniimo
        </a>
      ))}
      {stageNames.map((item) => (
        <a key={item} href={stagePath(item)} onClick={(event) => navigate(event, stagePath(item))}>
          {item}
        </a>
      ))}
      {statusNames.map((item) => (
        <a key={item} href={statusPath(item)} onClick={(event) => navigate(event, statusPath(item))}>
          {item} Data
        </a>
      ))}
    </div>
  );
}

export function CreatureImage({ item, large = false }) {
  return item.image ? (
    <img className={`creature-image ${large ? "large" : ""}`} src={item.image} alt={`${item.name} Aniimo`} width={large ? 148 : 86} height={large ? 148 : 86} loading={large ? "eager" : "lazy"} />
  ) : (
    <div className={`creature-mark ${large ? "large" : ""}`}>{item.name.slice(0, 1)}</div>
  );
}

export function RegionImage({ region, compact = false }) {
  return region.image ? (
    <img className={`region-image ${compact ? "compact-map" : ""}`} src={region.image} alt={`${region.name} region`} width={compact ? 260 : 640} height={compact ? 168 : 360} loading="lazy" />
  ) : (
    <div className={`region-map ${compact ? "compact-map" : ""}`}><span>{region.name}</span></div>
  );
}

export function QuickCard({ icon, title, text, href, navigate }) {
  return (
    <a className="quick-card" href={href} onClick={(event) => navigate(event, href)}>
      {React.cloneElement(icon, { size: 22 })}
      <h2>{title}</h2>
      <p>{text}</p>
    </a>
  );
}

export function SectionTitle({ icon, kicker, title }) {
  return (
    <div className="section-title">
      <span>{React.cloneElement(icon, { size: 18 })} {kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

export function Select({ label, value, onChange, options }) {
  return (
    <label className="select-field">
      <span>{label}</span>
      <select aria-label={label} value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export function GuideItem({ title, text }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function FaqBlock({ items }) {
  const ui = uiMessages();
  return (
    <section className="faq-block">
      <h2>{ui.faq}</h2>
      <div className="faq-list">
        {items.map(([question, answer]) => (
          <article key={question}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function InfoPanel({ title, rows }) {
  return (
    <article className="info-panel">
      <h2>{title}</h2>
      <dl>
        {rows.map(([label, value]) => (
          <React.Fragment key={`${label}-${value}`}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </React.Fragment>
        ))}
      </dl>
    </article>
  );
}

export function EditorialBlock({ title, items }) {
  return (
    <section className="editorial-block">
      <h2>{title}</h2>
      <div className="guide-columns">
        {items.map(([heading, text]) => (
          <GuideItem key={heading} title={heading} text={text} />
        ))}
      </div>
    </section>
  );
}

export function SeoGuideBlock({ items, compact = false }) {
  return (
    <div className={`seo-guide ${compact ? "seo-guide-compact" : ""}`}>
      {items.map((item) => (
        <article key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function SourcePanel({ source, status }) {
  const ui = uiMessages();
  return (
    <article className="info-panel source-panel">
      <h2>{ui.officialSource}</h2>
      <p>{statuses[status]}</p>
      <dl>
        <dt>{ui.status}</dt>
        <dd>{status}</dd>
        <dt>{ui.lastUpdated}</dt>
        <dd>{siteLastUpdated}</dd>
      </dl>
      <a className="text-link" href={source} target="_blank" rel="noreferrer">
        {ui.visitSource} <ChevronRight size={16} />
      </a>
    </article>
  );
}

export function RelatedAniimo({ title, items, navigate, localized = false }) {
  if (!items.length) return null;

  return (
    <section className="related-section">
      <h2>{title}</h2>
      <div className="related-grid">
        {items.map((item) => (
          <a className="related-card" key={item.id} href={localized ? localizedAniimoPath(item) : aniimoPath(item)} onClick={(event) => navigate(event, localized ? localizedAniimoPath(item) : aniimoPath(item))}>
            <span className="related-mark">{item.no}</span>
            <strong>{item.name}</strong>
            <span>{item.element} / {item.role}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function RelatedRegions({ currentRegion, navigate }) {
  const ui = uiMessages();
  const items = regions.filter((region) => region.name === currentRegion);
  if (!items.length) return null;

  return (
    <section className="related-section">
      <h2>{ui.relatedRegion}</h2>
      <div className="region-grid">
        {items.map((region) => (
          <article className="region-card" key={region.id}>
            <RegionImage region={region} />
            <h3>{region.name}</h3>
            <p>{region.theme}</p>
            <a className="text-link" href={regionPath(region)} onClick={(event) => navigate(event, regionPath(region))}>
              {ui.viewRegion} <ChevronRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Compass,
  Download,
  Gift,
  Map,
  Search,
  Sparkles,
  Sprout,
} from "lucide-react";
import { aniimo, codes, faqs, platforms, regions, statuses, updates } from "../data/content.js";
import "./styles.css";

const nav = [
  ["Database", "/aniimo"],
  ["Map", "/map"],
  ["Evolution", "/evolution"],
  ["Codes", "/codes"],
  ["Download", "/download"],
  ["Guides", "/beginner-guide"],
];

function StatusBadge({ status }) {
  return <span className={`status status-${status.toLowerCase()}`}>{status}</span>;
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [query, setQuery] = useState("");
  const [element, setElement] = useState("All");
  const [region, setRegion] = useState("All");

  const elements = ["All", ...new Set(aniimo.map((item) => item.element))];
  const regionNames = ["All", ...new Set(aniimo.map((item) => item.region))];

  const filteredAniimo = useMemo(() => {
    return aniimo.filter((item) => {
      const text = `${item.name} ${item.element} ${item.region} ${item.ability}`.toLowerCase();
      return (
        text.includes(query.toLowerCase()) &&
        (element === "All" || item.element === element) &&
        (region === "All" || item.region === region)
      );
    });
  }, [query, element, region]);

  function navigate(event, href) {
    if (!href.startsWith("/")) return;
    event.preventDefault();
    window.history.pushState({}, "", href);
    setPath(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  React.useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  React.useEffect(() => {
    const titles = {
      "/": "Aniimo Wiki, Database & Map Guide",
      "/aniimo": "All Aniimo List, Locations & Abilities | Aniimo Wiki",
      "/map": "Aniimo Map & Region Guide | Spawn Locations",
      "/evolution": "Aniimo Evolution & Forms Guide",
      "/codes": "Aniimo Codes & Rewards",
      "/download": "Aniimo Download, Release Date & Platforms",
      "/beginner-guide": "Aniimo Beginner Guide",
    };
    const aniimoMatch = path.match(/^\/aniimo\/([^/]+)/);
    const regionMatch = path.match(/^\/regions\/([^/]+)/);
    const detail = aniimoMatch ? aniimo.find((item) => item.id === aniimoMatch[1]) : null;
    const regionDetail = regionMatch ? regions.find((item) => item.id === regionMatch[1]) : null;
    document.title = detail
      ? `${detail.name} Location, Evolution, Forms & Abilities | Aniimo Wiki`
      : regionDetail
        ? `${regionDetail.name} Aniimo Locations & Route Guide`
        : titles[path] || titles["/"];
    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute(
        "content",
        detail
          ? `Find ${detail.name} location, element, region, forms, evolution notes, ability, and source status in the Aniimo Wiki.`
          : "Aniimo Wiki with database pages, locations, evolution guides, codes, rewards, download info, and beginner tips.",
      );
    }

    const pageFaqs =
      detail ? [
        [`Where can I find ${detail.name}?`, `${detail.name} is currently listed for ${detail.region}. Spawn and route details are marked ${detail.status.toLowerCase()} until verified.`],
        [`How does ${detail.name} evolve?`, detail.evolution],
      ] :
      path === "/aniimo" ? faqs.database :
      path === "/codes" ? faqs.codes :
      path === "/download" ? faqs.download :
      faqs.home;
    upsertJsonLd(pageFaqs);
  }, [path]);

  const aniimoMatch = path.match(/^\/aniimo\/([^/]+)/);
  const regionMatch = path.match(/^\/regions\/([^/]+)/);
  const detail = aniimoMatch ? aniimo.find((item) => item.id === aniimoMatch[1]) : null;
  const regionDetail = regionMatch ? regions.find((item) => item.id === regionMatch[1]) : null;

  return (
    <>
      <header className="topbar">
        <a className="brand" href="/" onClick={(event) => navigate(event, "/")}>
          <Sprout size={24} />
          <span>Aniimo Wiki</span>
        </a>
        <nav>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={(event) => navigate(event, href)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {detail ? (
          <AniimoDetail item={detail} navigate={navigate} />
        ) : regionDetail ? (
          <RegionDetail region={regionDetail} navigate={navigate} />
        ) : path === "/aniimo" ? (
          <DatabasePage
            query={query}
            setQuery={setQuery}
            element={element}
            setElement={setElement}
            region={region}
            setRegion={setRegion}
            elements={elements}
            regionNames={regionNames}
            filteredAniimo={filteredAniimo}
            navigate={navigate}
          />
        ) : path === "/map" ? (
          <MapPage navigate={navigate} />
        ) : path === "/evolution" ? (
          <EvolutionPage />
        ) : path === "/codes" ? (
          <CodesPage />
        ) : path === "/download" ? (
          <DownloadPage />
        ) : path === "/beginner-guide" ? (
          <BeginnerPage navigate={navigate} />
        ) : (
          <HomePage
            query={query}
            setQuery={setQuery}
            element={element}
            setElement={setElement}
            region={region}
            setRegion={setRegion}
            elements={elements}
            regionNames={regionNames}
            filteredAniimo={filteredAniimo}
            navigate={navigate}
          />
        )}
      </main>
    </>
  );
}

function HomePage(props) {
  return (
    <>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Database, map routes, evolution and launch rewards</p>
            <h1>Aniimo Wiki, Database & Map Guide</h1>
            <p>
              A searchable launch-ready reference for Aniimo locations, forms, abilities,
              evolution paths, codes, platform info, and beginner routes.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="/aniimo" onClick={(event) => props.navigate(event, "/aniimo")}>
                <Search size={18} />
                Search Database
              </a>
              <a className="secondary-action" href="/codes" onClick={(event) => props.navigate(event, "/codes")}>
                <Gift size={18} />
                Check Codes
              </a>
            </div>
          </div>
          <div className="hero-scene" aria-hidden="true">
            <div className="terrain">
              <div className="sun" />
              <div className="path" />
              <div className="marker marker-one" />
              <div className="marker marker-two" />
              <div className="marker marker-three" />
            </div>
          </div>
        </section>

        <section className="quick-grid" aria-label="Core sections">
          <QuickCard icon={<BookOpen />} title="Database" text="Index every Aniimo with location, forms, abilities and source status." href="/aniimo" navigate={props.navigate} />
          <QuickCard icon={<Map />} title="Map" text="Build region pages first, then upgrade into point filters and route tools." href="/map" navigate={props.navigate} />
          <QuickCard icon={<Sparkles />} title="Evolution" text="Track base forms, branch forms, special conditions and launch updates." href="/evolution" navigate={props.navigate} />
          <QuickCard icon={<Gift />} title="Codes" text="Keep redeem codes, rewards and expiry status visible with update dates." href="/codes" navigate={props.navigate} />
        </section>

        <DatabasePage compact {...props} />
        <MapPage compact navigate={props.navigate} />
        <EvolutionPage compact />
        <CodesPage compact />
        <DownloadPage compact />
        <BeginnerPage compact navigate={props.navigate} />
        <UpdatesPage compact />
        <StatusGuide />
    </>
  );
}

function DatabasePage({ query, setQuery, element, setElement, region, setRegion, elements, regionNames, filteredAniimo, navigate, compact }) {
  return (
        <section id="database" className="section">
          <SectionTitle icon={<Search />} kicker="P0" title="Aniimo Database" />
          <div className="filters">
            <label className="search-field">
              <Search size={18} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, region, element or ability" />
            </label>
            <Select label="Element" value={element} onChange={setElement} options={elements} />
            <Select label="Region" value={region} onChange={setRegion} options={regionNames} />
          </div>
          <div className="aniimo-grid">
            {filteredAniimo.map((item) => (
              <article className="aniimo-card" key={item.id}>
                <div className="creature-mark">{item.name.slice(0, 1)}</div>
                <div>
                  <div className="card-heading">
                    <h3>{item.name}</h3>
                    <StatusBadge status={item.status} />
                  </div>
                  <p>{item.habitat}</p>
                  <dl>
                    <dt>Element</dt>
                    <dd>{item.element}</dd>
                    <dt>Region</dt>
                    <dd>{item.region}</dd>
                    <dt>Ability</dt>
                    <dd>{item.ability}</dd>
                    <dt>Condition</dt>
                    <dd>{item.condition}</dd>
                  </dl>
                  <a className="text-link" href={`#aniimo-${item.id}`}>
                    View detail template <ChevronRight size={16} />
                  </a>
                  <a className="text-link" href={`/aniimo/${item.id}`} onClick={(event) => navigate(event, `/aniimo/${item.id}`)}>
                    Open SEO page <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          {compact && (
            <a className="section-more" href="/aniimo" onClick={(event) => navigate(event, "/aniimo")}>
              Open full database <ChevronRight size={17} />
            </a>
          )}
          {!compact && <FaqBlock items={faqs.database} />}
        </section>
  );
}

function DetailTemplates() {
  return (
        <section className="section detail-band">
          <SectionTitle icon={<CheckCircle2 />} kicker="Template" title="Aniimo Detail Pages" />
          <div className="detail-list">
            {aniimo.slice(0, 3).map((item) => (
              <article id={`aniimo-${item.id}`} className="detail-row" key={item.id}>
                <div>
                  <h3>{item.name} Location, Evolution, Forms & Abilities</h3>
                  <p>{item.use}</p>
                </div>
                <ul>
                  <li>Location: {item.region}</li>
                  <li>Acquisition: {item.acquisition}</li>
                  <li>Evolution: {item.evolution}</li>
                  <li>Forms: {item.forms.join(", ")}</li>
                </ul>
                <StatusBadge status={item.status} />
              </article>
            ))}
          </div>
        </section>
  );
}

function MapPage({ compact, navigate }) {
  return (
        <section id="map" className="section">
          <SectionTitle icon={<Compass />} kicker="P1" title="Map & Region Guides" />
          <div className="region-grid">
            {regions.map((item) => (
              <article className="region-card" key={item.id}>
                <div className="region-map">
                  <span>{item.name}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.theme}</p>
                <p className="small">Known Aniimo: {item.aniimo.join(", ")}</p>
                <StatusBadge status={item.status} />
                <a className="text-link" href={`/regions/${item.id}`} onClick={(event) => navigate(event, `/regions/${item.id}`)}>
                  Open region page <ChevronRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>
  );
}

function EvolutionPage() {
  return (
        <section id="evolution" className="section split-section">
          <div>
            <SectionTitle icon={<Sparkles />} kicker="P1" title="Evolution & Forms" />
            <p className="section-copy">
              Use one canonical evolution table to power guide pages, detail pages and SEO
              snippets. Unknown launch data stays marked until verified.
            </p>
          </div>
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Aniimo</th>
                  <th>Forms</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {aniimo.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.forms.join(" -> ")}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
  );
}

function CodesPage() {
  return (
        <section id="codes" className="section">
          <SectionTitle icon={<Gift />} kicker="P0" title="Codes & Rewards" />
          <p className="section-copy">
            Track launch codes, pre-registration rewards and expiry status. Items marked as
            watchlist or unconfirmed need source verification before publishing as active.
          </p>
          <div className="code-grid">
            {codes.map((item) => (
              <article className="code-card" key={item.code}>
                <div>
                  <h3>{item.code}</h3>
                  <p>{item.reward}</p>
                </div>
                <div>
                  <StatusBadge status={item.status} />
                  <p className="small">Last updated: {item.updated}</p>
                </div>
              </article>
            ))}
          </div>
          <FaqBlock items={faqs.codes} />
        </section>
  );
}

function DownloadPage() {
  return (
        <section id="download" className="section split-section download-band">
          <div>
            <SectionTitle icon={<Download />} kicker="P0" title="Download & Release Info" />
            <p className="section-copy">
              Centralize official links, platform availability, beta access, pre-registration
              rewards and release date changes.
            </p>
            <FaqBlock items={faqs.download} />
          </div>
          <div className="platform-list">
            {platforms.map((item) => (
              <article key={item.name} className="platform-card">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
                <StatusBadge status={item.status} />
              </article>
            ))}
          </div>
        </section>
  );
}

function BeginnerPage({ navigate }) {
  return (
        <section id="guides" className="section guide-band">
          <SectionTitle icon={<BookOpen />} kicker="P0" title="Beginner Guide" />
          <div className="guide-columns">
            <GuideItem title="How to Play" text="Explain collecting, bonding, exploration and progression in plain language." />
            <GuideItem title="Where to Start" text="Link early regions, starter Aniimo, map routes and reward pages together." />
            <GuideItem title="Data Status" text="Make every uncertain page transparent with source labels and update dates." />
          </div>
        </section>
  );
}

function StatusGuide() {
  return (
        <section className="section status-guide">
          <SectionTitle icon={<CheckCircle2 />} kicker="Trust" title="Data Status System" />
          <div className="status-grid">
            {Object.entries(statuses).map(([label, text]) => (
              <article key={label}>
                <StatusBadge status={label} />
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
  );
}

function UpdatesPage() {
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Freshness" title="Update Log" />
      <div className="update-list">
        {updates.map((item) => (
          <article key={`${item.date}-${item.title}`} className="update-item">
            <time>{item.date}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AniimoDetail({ item, navigate }) {
  return (
    <section className="section page-detail">
      <a className="text-link" href="/aniimo" onClick={(event) => navigate(event, "/aniimo")}>Back to database</a>
      <div className="detail-hero">
        <div className="creature-mark large">{item.name.slice(0, 1)}</div>
        <div>
          <p className="eyebrow">Aniimo detail page</p>
          <h1>{item.name} Location, Evolution, Forms & Abilities</h1>
          <p>{item.use}</p>
          <StatusBadge status={item.status} />
        </div>
      </div>
      <div className="detail-panels">
        <InfoPanel title="Location" rows={[["Region", item.region], ["Habitat", item.habitat], ["Spawn condition", item.condition], ["Acquisition", item.acquisition]]} />
        <InfoPanel title="Evolution" rows={[["Forms", item.forms.join(" -> ")], ["Evolution note", item.evolution]]} />
        <InfoPanel title="Abilities" rows={[["Element", item.element], ["Link ability", item.ability], ["Recommended use", item.use]]} />
        <InfoPanel title="Source Status" rows={[["Status", item.status], ["Meaning", statuses[item.status]], ["Last updated", "2026-08-27"]]} />
      </div>
      <FaqBlock items={[
        [`Where can I find ${item.name}?`, `${item.name} is currently associated with ${item.region}. Check the source status before treating the location as final.`],
        [`What forms does ${item.name} have?`, `${item.name} currently lists these forms: ${item.forms.join(", ")}.`],
        [`What is ${item.name} used for?`, item.use],
      ]} />
    </section>
  );
}

function RegionDetail({ region, navigate }) {
  return (
    <section className="section page-detail">
      <a className="text-link" href="/map" onClick={(event) => navigate(event, "/map")}>Back to map</a>
      <div className="detail-hero">
        <div className="region-map compact-map"><span>{region.name}</span></div>
        <div>
          <p className="eyebrow">Region guide</p>
          <h1>{region.name} Aniimo Locations & Route Guide</h1>
          <p>{region.theme}</p>
          <StatusBadge status={region.status} />
        </div>
      </div>
      <div className="detail-panels">
        <InfoPanel title="Known Aniimo" rows={region.aniimo.map((name) => ["Encounter", name])} />
        <InfoPanel title="Route Notes" rows={[["Exploration", region.theme], ["Data status", statuses[region.status]], ["Last updated", "2026-08-27"]]} />
      </div>
      <FaqBlock items={[
        [`Which Aniimo appear in ${region.name}?`, `Current listed encounters include ${region.aniimo.join(", ")}.`],
        [`Is the ${region.name} route confirmed?`, `This region is marked ${region.status}. Update it after official launch or in-game verification.`],
      ]} />
    </section>
  );
}

function InfoPanel({ title, rows }) {
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

function QuickCard({ icon, title, text, href, navigate }) {
  return (
    <a className="quick-card" href={href} onClick={(event) => navigate(event, href)}>
      {React.cloneElement(icon, { size: 22 })}
      <h2>{title}</h2>
      <p>{text}</p>
    </a>
  );
}

function SectionTitle({ icon, kicker, title }) {
  return (
    <div className="section-title">
      <span>{React.cloneElement(icon, { size: 18 })} {kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="select-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function GuideItem({ title, text }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function FaqBlock({ items }) {
  return (
    <section className="faq-block">
      <h2>FAQ</h2>
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

function upsertJsonLd(items) {
  const id = "faq-json-ld";
  const previous = document.getElementById(id);
  const script = previous || document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  });
  if (!previous) document.head.appendChild(script);
}

createRoot(document.getElementById("root")).render(<App />);

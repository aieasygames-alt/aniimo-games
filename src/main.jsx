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
import {
  aniimo,
  codes,
  editorialGuides,
  faqs,
  gameInfo,
  launchRewards,
  mapGuide,
  mechanics,
  officialLinks,
  platforms,
  regions,
  releaseInfo,
  seoGuides,
  statuses,
  updates,
} from "../data/content.js";
import "./styles.css";

const nav = [
  ["Database", "/aniimo/"],
  ["Map", "/map/"],
  ["Evolution", "/evolution/"],
  ["Codes", "/codes/"],
  ["Rewards", "/rewards/"],
  ["Download", "/download/"],
  ["Guides", "/beginner-guide/"],
  ["Updates", "/updates/"],
  ["Sources", "/sources/"],
];

function StatusBadge({ status }) {
  return <span className={`status status-${status.toLowerCase()}`}>{status}</span>;
}

function findAniimoBySlug(slug) {
  return aniimo.find((item) => item.id === slug || item.aliases?.includes(slug));
}

function route(path) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function aniimoHref(item) {
  return route(`/aniimo/${item.id}`);
}

function regionHref(region) {
  return route(`/regions/${region.id}`);
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [query, setQuery] = useState("");
  const [element, setElement] = useState("All");
  const [region, setRegion] = useState("All");
  const [role, setRole] = useState("All");
  const [stage, setStage] = useState("All");

  const elements = ["All", ...new Set(aniimo.map((item) => item.element))];
  const regionNames = ["All", ...new Set(aniimo.map((item) => item.region))];
  const roles = ["All", ...new Set(aniimo.map((item) => item.role))];
  const stages = ["All", ...new Set(aniimo.map((item) => item.stage))];

  const filteredAniimo = useMemo(() => {
    return aniimo.filter((item) => {
      const text = `${item.name} ${item.element} ${item.region} ${item.ability} ${item.description}`.toLowerCase();
      return (
        text.includes(query.toLowerCase()) &&
        (element === "All" || item.element === element) &&
        (region === "All" || item.region === region) &&
        (role === "All" || item.role === role) &&
        (stage === "All" || item.stage === stage)
      );
    });
  }, [query, element, region, role, stage]);

  function navigate(event, href) {
    if (!href.startsWith("/")) return;
    event.preventDefault();
    const nextPath = route(href);
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
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
      "/aniimo/": "All Aniimo List, Locations & Abilities | Aniimo Wiki",
      "/map/": "Aniimo Map & Region Guide | Spawn Locations",
      "/evolution/": "Aniimo Evolution & Forms Guide",
      "/codes/": "Aniimo Codes & Rewards",
      "/rewards/": "Aniimo Pre-Registration Rewards",
      "/download/": "Aniimo Download, Release Date & Platforms",
      "/release-date/": "Aniimo Release Date",
      "/beginner-guide/": "Aniimo Beginner Guide",
      "/updates/": "Aniimo Updates & Source Log",
      "/sources/": "Aniimo Official Sources",
    };
    const aniimoMatch = path.match(/^\/aniimo\/([^/]+)/);
    const regionMatch = path.match(/^\/regions\/([^/]+)/);
    const detail = aniimoMatch ? findAniimoBySlug(aniimoMatch[1]) : null;
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
          ? `Find ${detail.name} location, element, region, forms, evolution notes, ability, official description, and source status in the Aniimo Wiki.`
          : regionDetail
            ? `${regionDetail.name} route guide with official region art, representative Aniimo, mechanics and verification notes.`
          : `${gameInfo.summary} Track locations, evolution, codes, rewards, downloads and beginner tips.`,
      );
    }
    const canonicalPath = detail
      ? aniimoHref(detail)
      : regionDetail
        ? regionHref(regionDetail)
        : titles[path]
          ? path
          : "/";
    setMeta("link[rel='canonical']", "href", `https://aniimo.games${canonicalPath}`);
    setMeta("meta[property='og:title']", "content", document.title);
    setMeta("meta[property='og:url']", "content", `https://aniimo.games${canonicalPath}`);
    setMeta(
      "meta[property='og:description']",
      "content",
      detail
        ? `${detail.name} location, forms, evolution notes, official description and abilities in the Aniimo Wiki.`
        : regionDetail
          ? `${regionDetail.name} route guide, official artwork and known Aniimo connections.`
        : "Search Aniimo locations, forms, abilities, evolution notes, map routes, codes, download info, and beginner guides.",
    );

    const pageFaqs =
      detail ? [
        [`Where can I find ${detail.name}?`, `${detail.name} is tracked under ${detail.region}. Spawn and route details stay separated from official index facts until verified.`],
        [`How does ${detail.name} evolve?`, detail.evolution],
      ] :
      path === "/aniimo/" ? faqs.database :
      path === "/codes/" ? faqs.codes :
      path === "/download/" ? faqs.download :
      faqs.home;
    upsertJsonLd(buildStructuredData({ path, detail, regionDetail, pageFaqs }));
  }, [path]);

  const aniimoMatch = path.match(/^\/aniimo\/([^/]+)/);
  const regionMatch = path.match(/^\/regions\/([^/]+)/);
  const elementMatch = path.match(/^\/elements\/([^/]+)/);
  const roleMatch = path.match(/^\/roles\/([^/]+)/);
  const detail = aniimoMatch ? findAniimoBySlug(aniimoMatch[1]) : null;
  const regionDetail = regionMatch ? regions.find((item) => item.id === regionMatch[1]) : null;
  const elementPage = elementMatch ? elementMatch[1] : null;
  const rolePage = roleMatch ? roleMatch[1] : null;

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
        ) : elementPage ? (
          <CollectionPage type="element" value={elementPage} navigate={navigate} />
        ) : rolePage ? (
          <CollectionPage type="role" value={rolePage} navigate={navigate} />
        ) : path === "/aniimo/" ? (
          <DatabasePage
            query={query}
            setQuery={setQuery}
            element={element}
            setElement={setElement}
            region={region}
            setRegion={setRegion}
            role={role}
            setRole={setRole}
            stage={stage}
            setStage={setStage}
            elements={elements}
            regionNames={regionNames}
            roles={roles}
            stages={stages}
            filteredAniimo={filteredAniimo}
            navigate={navigate}
          />
        ) : path === "/map/" ? (
          <MapPage navigate={navigate} />
        ) : path === "/evolution/" ? (
          <EvolutionPage />
        ) : path === "/codes/" ? (
          <CodesPage />
        ) : path === "/rewards/" ? (
          <RewardsPage />
        ) : path === "/download/" ? (
          <DownloadPage />
        ) : path === "/release-date/" ? (
          <ReleaseDatePage />
        ) : path === "/beginner-guide/" ? (
          <BeginnerPage navigate={navigate} />
        ) : path === "/updates/" ? (
          <UpdatesPage />
        ) : path === "/sources/" ? (
          <SourcesPage />
        ) : (
          path === "/" ? (
            <HomePage
              query={query}
              setQuery={setQuery}
              element={element}
              setElement={setElement}
              region={region}
              setRegion={setRegion}
              role={role}
              setRole={setRole}
              stage={stage}
              setStage={setStage}
              elements={elements}
              regionNames={regionNames}
              roles={roles}
              stages={stages}
              filteredAniimo={filteredAniimo}
              navigate={navigate}
            />
          ) : (
            <NotFoundPage navigate={navigate} />
          )
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
            <p>{gameInfo.summary}</p>
            <div className="hero-actions">
              <a className="primary-action" href="/aniimo/" onClick={(event) => props.navigate(event, "/aniimo/")}>
                <Search size={18} />
                Search Database
              </a>
              <a className="secondary-action" href="/codes/" onClick={(event) => props.navigate(event, "/codes/")}>
                <Gift size={18} />
                Check Codes
              </a>
            </div>
          </div>
          <div className="hero-scene" aria-hidden="true">
            <img className="hero-image" src={gameInfo.heroImage} alt="" width="960" height="640" fetchPriority="high" />
          </div>
        </section>

        <section className="quick-grid" aria-label="Core sections">
          <QuickCard icon={<BookOpen />} title="Database" text="Index every Aniimo with location, forms, abilities and source status." href="/aniimo/" navigate={props.navigate} />
          <QuickCard icon={<Map />} title="Map" text="Explore regions, representative Aniimo, route notes and official scenery." href="/map/" navigate={props.navigate} />
          <QuickCard icon={<Sparkles />} title="Evolution" text="Track base forms, branch forms, special conditions and launch updates." href="/evolution/" navigate={props.navigate} />
          <QuickCard icon={<Gift />} title="Rewards" text="Track confirmed pre-registration rewards, milestone rewards and launch code status." href="/rewards/" navigate={props.navigate} />
        </section>

        <DatabasePage compact {...props} />
        <MapPage compact navigate={props.navigate} />
        <EvolutionPage compact />
        <CodesPage compact />
        <DownloadPage compact />
        <BeginnerPage compact navigate={props.navigate} />
        <UpdatesPage compact />
        <SourcesPage compact />
        <GuideSummary />
        <StatusGuide />
    </>
  );
}

function DatabasePage({ query, setQuery, element, setElement, region, setRegion, role, setRole, stage, setStage, elements, regionNames, roles, stages, filteredAniimo, navigate, compact }) {
  return (
        <section id="database" className="section">
          <SectionTitle icon={<Search />} kicker="Index" title="Aniimo Database" />
          <p className="section-copy">
            Official Aniimo names, elements, roles and stages are tracked from the public
            Aniimo Wiki. Location details stay source-labeled and ready for launch verification.
          </p>
          <div className="filters">
            <label className="search-field">
              <Search size={18} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, region, element or ability" />
            </label>
            <Select label="Element" value={element} onChange={setElement} options={elements} />
            <Select label="Region" value={region} onChange={setRegion} options={regionNames} />
            <Select label="Role" value={role} onChange={setRole} options={roles} />
            <Select label="Stage" value={stage} onChange={setStage} options={stages} />
          </div>
          <TaxonomyLinks navigate={navigate} />
          <div className="aniimo-grid">
            {filteredAniimo.map((item) => (
              <article className="aniimo-card" key={item.id}>
                <CreatureImage item={item} />
                <div>
                  <div className="card-heading">
                    <h3>{item.name}</h3>
                    <StatusBadge status={item.status} />
                  </div>
                  <p>{item.description}</p>
                  <dl>
                    <dt>Region</dt>
                    <dd>{item.region}</dd>
                    <dt>Element</dt>
                    <dd>{item.element}</dd>
                    <dt>Role</dt>
                    <dd>{item.role}</dd>
                    <dt>Stage</dt>
                    <dd>{item.stage}</dd>
                    <dt>No.</dt>
                    <dd>{item.no}</dd>
                  </dl>
                  <a className="text-link" href={aniimoHref(item)} onClick={(event) => navigate(event, aniimoHref(item))}>
                    View Aniimo guide <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          {compact && (
            <a className="section-more" href="/aniimo/" onClick={(event) => navigate(event, "/aniimo/")}>
              Browse all Aniimo <ChevronRight size={17} />
            </a>
          )}
          {!compact && <FaqBlock items={faqs.database} />}
        </section>
  );
}

function TaxonomyLinks({ navigate }) {
  const elementNames = [...new Set(aniimo.map((item) => item.element))];
  const roleNames = [...new Set(aniimo.map((item) => item.role))];

  return (
    <div className="taxonomy-links">
      {elementNames.map((item) => (
        <a key={item} href={route(`/elements/${item.toLowerCase()}`)} onClick={(event) => navigate(event, route(`/elements/${item.toLowerCase()}`))}>
          {item} Aniimo
        </a>
      ))}
      {roleNames.map((item) => (
        <a key={item} href={route(`/roles/${item.toLowerCase()}`)} onClick={(event) => navigate(event, route(`/roles/${item.toLowerCase()}`))}>
          {item} Aniimo
        </a>
      ))}
    </div>
  );
}

function CollectionPage({ type, value, navigate }) {
  const label = value.toUpperCase() === "DPS" ? "DPS" : value.charAt(0).toUpperCase() + value.slice(1);
  const items = aniimo.filter((item) => item[type] && item[type].toLowerCase() === value);
  const title = `${label} Aniimo ${type === "element" ? "Element" : "Role"} Guide`;

  return (
    <section className="section">
      <SectionTitle icon={<BookOpen />} kicker="Index" title={title} />
      <p className="section-copy">
        Browse official Wiki entries tagged as {label}. Use this index as a landing page
        for element and role searches before detailed location data is verified.
      </p>
      <div className="aniimo-grid">
        {items.map((item) => (
          <article className="aniimo-card" key={item.id}>
            <CreatureImage item={item} />
            <div>
              <div className="card-heading">
                <h3>{item.name}</h3>
                <StatusBadge status={item.status} />
              </div>
              <dl>
                <dt>No.</dt>
                <dd>{item.no}</dd>
                <dt>Element</dt>
                <dd>{item.element}</dd>
                <dt>Role</dt>
                <dd>{item.role}</dd>
                <dt>Stage</dt>
                <dd>{item.stage}</dd>
              </dl>
              <a className="text-link" href={aniimoHref(item)} onClick={(event) => navigate(event, aniimoHref(item))}>
                View Aniimo guide <ChevronRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MapPage({ compact, navigate }) {
  return (
        <section id="map" className="section">
          <SectionTitle icon={<Compass />} kicker="World" title="Map & Region Guides" />
          {!compact && <SeoGuideBlock items={seoGuides.map} />}
          <div className="region-grid">
            {regions.map((item) => (
              <article className="region-card" key={item.id}>
                <RegionImage region={item} />
                <h3>{item.name}</h3>
                <p>{item.theme}</p>
                <p className="small">Known Aniimo: {item.aniimo.join(", ")}</p>
                <p className="small">Mechanics: {item.mechanics.join(", ")}</p>
                <StatusBadge status={item.status} />
                <a className="text-link" href={regionHref(item)} onClick={(event) => navigate(event, regionHref(item))}>
                  View region guide <ChevronRight size={16} />
                </a>
              </article>
            ))}
          </div>
          {!compact && (
            <div className="guide-columns map-notes">
              {mapGuide.map(([title, text]) => (
                <GuideItem key={title} title={title} text={text} />
              ))}
            </div>
          )}
          {!compact && <EditorialBlock title="Map Maintenance Notes" items={editorialGuides.wiki} />}
        </section>
  );
}

function EvolutionPage() {
  return (
        <section id="evolution" className="section split-section">
          <div>
            <SectionTitle icon={<Sparkles />} kicker="Forms" title="Evolution & Forms" />
            <p className="section-copy">
              The official index groups Aniimo by Lumin, Gamma and Nova stages. This table
              turns those stage labels into evolution and form search paths.
            </p>
          </div>
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Aniimo</th>
                  <th>Element</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {aniimo.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.element}</td>
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
          <SectionTitle icon={<Gift />} kicker="Rewards" title="Codes & Rewards" />
          <p className="section-copy">
            No public redeem code is confirmed yet. This page separates actual codes from
            official pre-registration rewards and launch milestone rewards.
          </p>
          <SeoGuideBlock items={seoGuides.codes} />
          <div className="code-grid">
            {codes.map((item) => (
              <article className="code-card" key={item.code}>
                <div>
                  <h3>{item.code}</h3>
                  <p>{item.reward}</p>
                  {item.checklist && (
                    <ul className="inline-list">
                      {item.checklist.map((task) => <li key={task}>{task}</li>)}
                    </ul>
                  )}
                </div>
                <div>
                  <StatusBadge status={item.status} />
                  <p className="small">Last updated: {item.updated}</p>
                </div>
              </article>
            ))}
          </div>
          <RewardGrid />
          <EditorialBlock title="Code Verification Rules" items={editorialGuides.codes} />
          <FaqBlock items={faqs.codes} />
        </section>
  );
}

function RewardsPage() {
  return (
    <section id="rewards" className="section">
      <SectionTitle icon={<Gift />} kicker="Rewards" title="Aniimo Pre-Registration Rewards" />
      <img className="page-banner" src="/images/banners/banner-susuta-hunt.webp" alt="Aniimo Susuta Hunt event" />
      <p className="section-copy">
        Confirmed official rewards include milestone items, a Prismana Aniimo choice for
        Junior Wayfarers, and a mysterious Susuta egg for official pre-registration.
      </p>
      <RewardGrid />
      <FaqBlock items={faqs.codes} />
    </section>
  );
}

function DownloadPage() {
  return (
        <section id="download" className="section split-section download-band">
          <div>
            <SectionTitle icon={<Download />} kicker="Platforms" title="Download & Release Info" />
            <p className="section-copy">
              {releaseInfo.note} Store links and regional availability stay tied to official
              sources rather than download mirrors.
            </p>
            <SeoGuideBlock items={seoGuides.download} compact />
            <div className="date-grid">
              <InfoPanel title="Release Dates" rows={[["PC and consoles", releaseInfo.pcConsole], ["Mobile", releaseInfo.mobile], ["Closed beta", releaseInfo.closedBeta], ["Beta signup deadline", releaseInfo.betaSignupDeadline]]} />
            </div>
            <EditorialBlock title="Download Checklist" items={editorialGuides.download} />
            <FaqBlock items={faqs.download} />
          </div>
          <div className="platform-list">
            {platforms.map((item) => (
              <article key={item.name} className="platform-card">
                <div>
                  <h3>{item.name}</h3>
                  <p className="platform-action">{item.action}</p>
                  <p>{item.note}</p>
                  <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
                    Official source <ChevronRight size={16} />
                  </a>
                </div>
                <StatusBadge status={item.status} />
              </article>
            ))}
          </div>
        </section>
  );
}

function ReleaseDatePage() {
  return (
    <section id="release-date" className="section split-section download-band">
      <div>
        <SectionTitle icon={<CalendarDays />} kicker="Launch" title="Aniimo Release Date" />
        <p className="section-copy">{releaseInfo.note}</p>
        <SeoGuideBlock items={seoGuides.release} compact />
        <InfoPanel title="Official Timeline" rows={[["PC and consoles", releaseInfo.pcConsole], ["Mobile", releaseInfo.mobile], ["Closed beta", releaseInfo.closedBeta], ["Beta signup deadline", releaseInfo.betaSignupDeadline], ["Timezone note", releaseInfo.timezoneNote], ["Source", releaseInfo.source]]} />
        <EditorialBlock title="Release Notes" items={editorialGuides.release} />
      </div>
      <div className="timeline-list">
        {releaseInfo.timeline.map(([date, label]) => (
          <article className="update-item" key={date}>
            <time>{date}</time>
            <div>
              <h3>{label}</h3>
              <p>{date >= "2026-09-16" ? "Future launch milestone tracked from official news." : "Past official milestone."}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BeginnerPage({ navigate }) {
  return (
        <section id="guides" className="section guide-band">
          <SectionTitle icon={<BookOpen />} kicker="Guide" title="Beginner Guide" />
      <div className="guide-columns">
            {mechanics.map((item) => (
              <GuideItem key={item.title} title={item.title} text={item.text} />
            ))}
      </div>
      <EditorialBlock title="Wiki Workflow" items={editorialGuides.wiki} />
        </section>
  );
}

function GuideSummary() {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<BookOpen />} kicker="Wiki" title="Aniimo Guide Coverage" />
      <div className="guide-columns">
        {editorialGuides.wiki.map(([title, text]) => (
          <GuideItem key={title} title={title} text={text} />
        ))}
      </div>
    </section>
  );
}

function StatusGuide() {
  return (
        <section className="section status-guide">
          <SectionTitle icon={<CheckCircle2 />} kicker="Trust" title="Official Data Notes" />
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

function RewardGrid() {
  return (
    <div className="reward-grid">
      {launchRewards.map((item) => (
        <article className="reward-card" key={item.title}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.reward}</p>
          </div>
          <StatusBadge status={item.status} />
        </article>
      ))}
    </div>
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

function SourcesPage() {
  const links = [
    ["Official website", officialLinks.website],
    ["Official main site", officialLinks.main],
    ["Official Wiki", officialLinks.officialWiki],
    ["Google Play", officialLinks.googlePlay],
    ["Privacy policy", officialLinks.privacy],
  ];

  return (
    <section className="section sources-band">
      <SectionTitle icon={<CheckCircle2 />} kicker="Trust" title="Official Sources" />
      <p className="section-copy">
        Aniimo.games prioritizes official sources for launch dates, platform links, public
        Aniimo names, regions, rewards and gameplay mechanics.
      </p>
      <div className="source-list">
        {links.map(([label, href]) => (
          <a className="source-row" key={label} href={href} target="_blank" rel="noreferrer">
            <span>{label}</span>
            <span>{href}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function AniimoDetail({ item, navigate }) {
  const sameElement = aniimo.filter((candidate) => candidate.id !== item.id && candidate.element === item.element).slice(0, 6);
  const sameRegion = aniimo.filter((candidate) => candidate.id !== item.id && candidate.region === item.region).slice(0, 6);
  const sameRole = aniimo.filter((candidate) => candidate.id !== item.id && candidate.role === item.role).slice(0, 6);
  const sameStage = aniimo.filter((candidate) => candidate.id !== item.id && candidate.stage === item.stage).slice(0, 6);

  return (
    <section className="section page-detail">
      <a className="text-link" href="/aniimo/" onClick={(event) => navigate(event, "/aniimo/")}>Back to database</a>
      <div className="detail-hero">
        <CreatureImage item={item} large />
        <div>
          <p className="eyebrow">Aniimo detail page</p>
          <h1>{item.name} Location, Evolution, Forms & Abilities</h1>
          <p>{item.description}</p>
          <StatusBadge status={item.status} />
        </div>
      </div>
      <div className="detail-panels">
        <InfoPanel title="Location" rows={[["Region", item.region], ["Habitat", item.habitat], ["Spawn condition", item.condition], ["Acquisition", item.acquisition]]} />
        <InfoPanel title="Index Data" rows={[["No.", item.no], ["Element", item.element], ["Role", item.role], ["Stage", item.stage]]} />
        <InfoPanel title="Evolution" rows={[["Listed form", item.forms.join(" -> ")], ["Evolution note", item.evolution]]} />
        <InfoPanel title="Abilities" rows={[["Official description", item.ability], ["Recommended use", item.use]]} />
        <InfoPanel title="How to Get" rows={[["Method", item.acquisition], ["Route", item.region], ["Verification", "Exact spawn points should be added after official launch or in-game confirmation."]]} />
        <InfoPanel title="Best Uses" rows={[["Role plan", item.use], ["Team note", `Pair ${item.name} with complementary ${item.element} or ${item.role} Aniimo while team data is verified.`]]} />
        <SourcePanel source={item.source} status={item.status} />
      </div>
      <RelatedAniimo title="Evolution Line" items={aniimo.filter((candidate) => item.forms.includes(candidate.name))} navigate={navigate} />
      <RelatedAniimo title={`More ${item.region} Aniimo`} items={sameRegion} navigate={navigate} />
      <RelatedAniimo title={`More ${item.element} Aniimo`} items={sameElement} navigate={navigate} />
      <RelatedAniimo title={`More ${item.role} Aniimo`} items={sameRole} navigate={navigate} />
      <RelatedAniimo title={`More ${item.stage} Aniimo`} items={sameStage} navigate={navigate} />
      <RelatedRegions currentRegion={item.region} navigate={navigate} />
      <FaqBlock items={[
        [`Where can I find ${item.name}?`, `${item.name} is listed in the official Aniimo Wiki and tracked under ${item.region}. Exact spawn points can be added after launch verification.`],
        [`What forms does ${item.name} have?`, `${item.name} currently lists these forms: ${item.forms.join(", ")}.`],
        [`What role is ${item.name}?`, `${item.name} is currently tagged as ${item.role} and ${item.stage}.`],
      ]} />
    </section>
  );
}

function EditorialBlock({ title, items }) {
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

function SeoGuideBlock({ items, compact = false }) {
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

function SourcePanel({ source, status }) {
  return (
    <article className="info-panel source-panel">
      <h2>Official Source</h2>
      <p>{statuses[status]}</p>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>
        <dt>Last updated</dt>
        <dd>2026-08-28</dd>
      </dl>
      <a className="text-link" href={source} target="_blank" rel="noreferrer">
        Visit source <ChevronRight size={16} />
      </a>
    </article>
  );
}

function RelatedAniimo({ title, items, navigate }) {
  if (!items.length) return null;

  return (
    <section className="related-section">
      <h2>{title}</h2>
      <div className="related-grid">
        {items.map((item) => (
          <a className="related-card" key={item.id} href={aniimoHref(item)} onClick={(event) => navigate(event, aniimoHref(item))}>
            <span className="related-mark">{item.no}</span>
            <strong>{item.name}</strong>
            <span>{item.element} / {item.role}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function RelatedRegions({ currentRegion, navigate }) {
  const items = regions.filter((region) => region.name === currentRegion);
  if (!items.length) return null;

  return (
    <section className="related-section">
      <h2>Related Region</h2>
      <div className="region-grid">
        {items.map((region) => (
          <article className="region-card" key={region.id}>
            <RegionImage region={region} />
            <h3>{region.name}</h3>
            <p>{region.theme}</p>
            <a className="text-link" href={regionHref(region)} onClick={(event) => navigate(event, regionHref(region))}>
              View region guide <ChevronRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function RegionDetail({ region, navigate }) {
  const regionAniimo = aniimo.filter((item) => item.region === region.name);

  return (
    <section className="section page-detail">
      <a className="text-link" href="/map/" onClick={(event) => navigate(event, "/map/")}>Back to map</a>
      <div className="detail-hero">
        <RegionImage region={region} compact />
        <div>
          <p className="eyebrow">Region guide</p>
          <h1>{region.name} Aniimo Locations & Route Guide</h1>
          <p>{region.theme}</p>
          <StatusBadge status={region.status} />
        </div>
      </div>
      <div className="detail-panels">
        <InfoPanel title="Known Aniimo" rows={region.aniimo.map((name) => ["Encounter", name])} />
        <InfoPanel title="Route Notes" rows={[["Exploration", region.theme], ["Mechanics", region.mechanics.join(", ")], ["Data status", statuses[region.status]], ["Last updated", "2026-08-28"]]} />
      </div>
      <RelatedAniimo title={`${region.name} Aniimo`} items={regionAniimo} navigate={navigate} />
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

function CreatureImage({ item, large = false }) {
  return item.image ? (
    <img className={`creature-image ${large ? "large" : ""}`} src={item.image} alt={`${item.name} Aniimo`} width={large ? 148 : 86} height={large ? 148 : 86} loading={large ? "eager" : "lazy"} />
  ) : (
    <div className={`creature-mark ${large ? "large" : ""}`}>{item.name.slice(0, 1)}</div>
  );
}

function RegionImage({ region, compact = false }) {
  return region.image ? (
    <img className={`region-image ${compact ? "compact-map" : ""}`} src={region.image} alt={`${region.name} region`} width={compact ? 260 : 640} height={compact ? 168 : 360} loading="lazy" />
  ) : (
    <div className={`region-map ${compact ? "compact-map" : ""}`}><span>{region.name}</span></div>
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

function buildStructuredData({ path, detail, regionDetail, pageFaqs }) {
  const canonicalPath = detail ? aniimoHref(detail) : regionDetail ? regionHref(regionDetail) : route(path);
  const url = `https://aniimo.games${canonicalPath === "/" ? "/" : canonicalPath}`;
  const breadcrumbs = [
    { name: "Home", item: "https://aniimo.games/" },
    ...(canonicalPath !== "/" ? [{ name: detail?.name || regionDetail?.name || document.title.replace(" | Aniimo Wiki", ""), item: url }] : []),
  ];

  const base = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pageFaqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    },
  ];

  if (path === "/" || path === "/download" || path === "/release-date") {
    base.push({
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: gameInfo.title,
      description: gameInfo.summary,
      genre: gameInfo.genre,
      gamePlatform: platforms.map((platform) => platform.name),
      publisher: gameInfo.publisher,
      url: "https://aniimo.games/",
      image: `https://aniimo.games${gameInfo.ogImage}`,
      datePublished: releaseInfo.pcConsole,
    });
  }

  if (path === "/aniimo") {
    base.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Aniimo database",
      itemListElement: aniimo.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://aniimo.games${aniimoHref(item)}`,
        name: item.name,
      })),
    });
  }

  if (path === "/map") {
    base.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Aniimo region guide",
      itemListElement: regions.map((region, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://aniimo.games${regionHref(region)}`,
        name: region.name,
      })),
    });
  }

  if (detail || regionDetail) {
    base.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: document.title,
      description: detail ? detail.description : regionDetail.theme,
      image: `https://aniimo.games${detail ? detail.image : regionDetail.image}`,
      dateModified: "2026-08-28",
      author: {
        "@type": "Organization",
        name: "Aniimo.games",
      },
      publisher: {
        "@type": "Organization",
        name: "Aniimo.games",
      },
      mainEntityOfPage: url,
    });
  }

  return base;
}

function upsertJsonLd(items) {
  const id = "structured-data-json-ld";
  const previous = document.getElementById(id);
  const script = previous || document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(items);
  if (!previous) document.head.appendChild(script);
}

function setMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attribute, value);
}

function NotFoundPage({ navigate }) {
  return (
    <section className="section page-detail not-found">
      <p className="eyebrow">404</p>
      <h1>Page Not Found</h1>
      <p>
        This Aniimo page is not in the database yet. Search the database or return to the
        launch guide while the index grows.
      </p>
      <div className="hero-actions">
        <a className="primary-action" href="/aniimo/" onClick={(event) => navigate(event, "/aniimo/")}>
          <Search size={18} />
          Open Database
        </a>
        <a className="secondary-action" href="/" onClick={(event) => navigate(event, "/")}>
          <BookOpen size={18} />
          Back Home
        </a>
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);

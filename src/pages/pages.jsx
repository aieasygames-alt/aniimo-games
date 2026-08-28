import React from "react";
import { BookOpen, CalendarDays, CheckCircle2, ChevronRight, Compass, Download, Gift, Map, Search, Sparkles } from "lucide-react";
import { aniimo, codes, editorialGuides, faqs, gameInfo, launchRewards, mapGuide, mechanics, officialLinks, platforms, regions, releaseInfo, seoGuides, statuses, updates } from "../../data/content.js";
import { aniimoPath, regionPath } from "../lib/routes.js";
import { CreatureImage, EditorialBlock, FaqBlock, GuideItem, InfoPanel, QuickCard, RegionImage, RelatedAniimo, RelatedRegions, SectionTitle, Select, SeoGuideBlock, SourcePanel, StatusBadge, TaxonomyLinks } from "../components/ui.jsx";

export function HomePage(props) {
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

export function DatabasePage({ query, setQuery, element, setElement, region, setRegion, role, setRole, stage, setStage, elements, regionNames, roles, stages, filteredAniimo, navigate, compact }) {
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

export function CollectionPage({ type, value, navigate }) {
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

export function MapPage({ compact, navigate }) {
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

export function EvolutionPage() {
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

export function CodesPage() {
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

export function RewardsPage() {
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

export function DownloadPage() {
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

export function ReleaseDatePage() {
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

export function BeginnerPage({ navigate }) {
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

export function GuideSummary() {
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

export function StatusGuide() {
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

export function UpdatesPage() {
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

export function SourcesPage() {
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

export function BestAniimoPage({ navigate }) {
  const picks = [
    ...aniimo.filter((item) => item.status === "Confirmed" && item.role === "DPS").slice(0, 4),
    ...aniimo.filter((item) => item.status === "Confirmed" && item.role === "Support").slice(0, 4),
  ].slice(0, 8);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<Sparkles />} kicker="Guide" title="Best Aniimo to Track Before Launch" />
      <p className="section-copy">
        This pre-launch list focuses on confirmed public entries with useful search intent:
        damage roles, support utility, region coverage and clear official descriptions.
        It is not a final tier list because launch balance, exact abilities and team data
        still need in-game verification.
      </p>
      <div className="aniimo-grid">
        {picks.map((item) => (
          <article className="aniimo-card" key={item.id}>
            <CreatureImage item={item} />
            <div>
              <div className="card-heading">
                <h3>{item.name}</h3>
                <StatusBadge status={item.status} />
              </div>
              <p>{item.use}</p>
              <dl>
                <dt>Region</dt>
                <dd>{item.region}</dd>
                <dt>Element</dt>
                <dd>{item.element}</dd>
                <dt>Role</dt>
                <dd>{item.role}</dd>
              </dl>
              <a className="text-link" href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
                View Aniimo guide <ChevronRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <SeoGuideBlock items={[
        { title: "How this list is chosen", body: "The list prioritizes official entries that already have confirmed roles, elements, descriptions and useful internal links. It should be treated as a watchlist for launch planning, not a final competitive ranking." },
        { title: "What changes after launch", body: "After launch, this page should be updated with tested combat performance, Twine utility, route access, team synergy and early-game availability." },
        { title: "Best next step", body: "Use this page to jump into detail pages, then compare same-role and same-region Aniimo before deciding what to track for launch." },
      ]} />
    </section>
  );
}

export function PlatformPage({ type }) {
  const isMobile = type === "mobile";
  const pagePlatforms = platforms.filter((platform) =>
    isMobile ? ["App Store", "Google Play"].includes(platform.name) : platform.name === "Steam",
  );

  return (
    <section className="section split-section download-band">
      <div>
        <SectionTitle icon={<Download />} kicker="Platforms" title={isMobile ? "Aniimo Mobile Download Guide" : "Aniimo Steam Download Guide"} />
        <p className="section-copy">
          {isMobile
            ? "Aniimo mobile availability is tracked for September 23, 2026 through official iOS and Android storefronts."
            : "Aniimo PC availability is tracked for September 16, 2026, with Steam acting as one of the official storefronts."}
        </p>
        <SeoGuideBlock compact items={[
          { title: isMobile ? "Use official mobile listings" : "Use the official Steam listing", body: isMobile ? "Mobile players should use App Store or Google Play pages when they are visible in their region. Avoid unofficial APK mirrors before launch." : "PC players should wishlist Aniimo through Steam or use the official website to confirm launch availability. Avoid reposted installers." },
          { title: "Release timing", body: isMobile ? `Mobile launch is currently tracked for ${releaseInfo.mobile}. Store visibility can vary by country and local storefront timing.` : `Steam launch is tied to the PC and console window on ${releaseInfo.pcConsole}. Exact hourly unlock timing still needs storefront confirmation.` },
          { title: "Account planning", body: "Use the platform account you expect to play on at launch so wishlist, pre-registration or reward notices stay connected to the right storefront." },
        ]} />
      </div>
      <div className="platform-list">
        {pagePlatforms.map((item) => (
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

export function PreRegistrationRewardsPage() {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<Gift />} kicker="Rewards" title="Aniimo Pre-Registration Rewards Guide" />
      <p className="section-copy">
        This page separates confirmed pre-registration rewards from future redeem codes.
        Use it to track official campaign items, milestone rewards and claim notes before
        the global launch windows arrive.
      </p>
      <RewardGrid />
      <SeoGuideBlock items={[
        { title: "Confirmed reward types", body: "Official reward tracking includes Glimmer, Aniipod Ultra, Companion Promise avatar frame, Sunlit Meadow outfit, a Prismana Aniimo choice and a mysterious Susuta egg." },
        { title: "How to claim", body: "Start from the official website or official storefront pages. Reward delivery can depend on account, region and platform systems after launch." },
        { title: "Code versus reward", body: "A pre-registration reward is not automatically a redeem code. This site keeps rewards and codes separate so search users can avoid misleading code lists." },
      ]} />
    </section>
  );
}

export function AboutPage() {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<CheckCircle2 />} kicker="Trust" title="About Aniimo.games" />
      <p className="section-copy">
        Aniimo.games is an independent guide site built to organize public Aniimo
        information for players. It is not the official Aniimo website. The site focuses
        on searchable guides for Aniimo names, locations, regions, release dates,
        download links, rewards, codes and beginner systems.
      </p>
      <SeoGuideBlock items={[
        { title: "What we cover", body: "We cover public Aniimo Wiki entries, official storefront links, public launch information, rewards, regions, gameplay mechanics and route notes that can be verified after launch." },
        { title: "How we label data", body: "Confirmed data is tied to official or in-game sources. Watchlist and unknown fields are used when an entry exists but exact element, role, region, stage or spawn information still needs verification." },
        { title: "Why this exists", body: "Search users often need one clean place to compare Aniimo entries, official sources and practical guide pages without mixing confirmed facts with unsourced claims." },
      ]} />
    </section>
  );
}

export function EditorialPolicyPage() {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<BookOpen />} kicker="Trust" title="Editorial Policy" />
      <p className="section-copy">
        Aniimo.games prioritizes official public sources, clear verification labels and
        conservative wording. Preview information is useful, but it should not be written
        as final route, spawn or balance data until launch verification is available.
      </p>
      <SeoGuideBlock items={[
        { title: "Source hierarchy", body: "Official Aniimo pages, official Wiki entries, platform storefronts and in-game verification are preferred. Reposted summaries and community screenshots are treated as leads, not final sources." },
        { title: "Update workflow", body: "New official entries are checked with scripts, added to the database, linked into sitemap routes and reviewed for missing images, duplicate meta tags and broken internal links." },
        { title: "Correction standard", body: "When a correction is needed, the page should preserve source status, update the changelog and avoid overstating unverified mechanics." },
      ]} />
    </section>
  );
}

export function ContactPage() {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<CheckCircle2 />} kicker="Trust" title="Contact Aniimo.games" />
      <p className="section-copy">
        For corrections, missing official entries, broken links, image issues or source
        updates, contact the site maintainer through the GitHub repository connected to
        Aniimo.games. Include the page URL, the proposed correction and the official
        source that supports the change.
      </p>
      <SeoGuideBlock items={[
        { title: "Correction requests", body: "Send the affected Aniimo, region or guide URL with the exact field that should change." },
        { title: "Source requests", body: "Official links are preferred. Storefront pages, official Wiki entries and official news posts are the easiest sources to verify." },
        { title: "Launch updates", body: "After launch, route notes, spawn windows and code status should include timestamps and verification context." },
      ]} />
    </section>
  );
}

export function AniimoDetail({ item, navigate }) {
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

export function RegionDetail({ region, navigate }) {
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

export function NotFoundPage({ navigate }) {
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

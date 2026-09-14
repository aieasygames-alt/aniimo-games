import React, { useEffect, useMemo, useState } from "react";
import { BookOpen, CalendarDays, CheckCircle2, ChevronRight, Compass, Download, Gift, Map, Search, Sparkles, Plus, X, Copy, Download as DownloadIcon } from "lucide-react";
import { aniimo, beginnerTopics, choiceTopics, codeRewardTopics, codeVerificationTemplate, codes, conversionTopics, downloadTopics, editorialGuides, faqs, freshnessPages, freshnessWatchlist, gameInfo, glossaryTopics, gscLatestObservations, gscObservationTemplate, launchDayCommandCenter, launchEvidenceQueues, launchPriorityPages, launchRewards, launchStatusEntries, launchTracker, localizedTopics, mapGuide, mechanicDeepDiveTopics, mechanics, mediaDetailTopics, mediaGalleryItems, newsTopics, officialLinks, officialPitchTopics, platformStatusByName, platformUnlockQueue, platforms, refreshPlanningTopics, regions, releaseInfo, searchIntentStatus, searchSuggestionTopics, seoGuides, siteLastUpdated, socialDiscussionResearch, socialIntentTopics, sourceArchiveItems, sourceLastChecked, spawnVerificationQueue, statuses, tierListSnapshots, troubleshootingTopics, updates, updateWorkflowMatrix, verificationTemplates } from "../../data/content.js";
import { aniimoPath, beginnerTopicPath, choiceTopicPath, codeRewardTopicPath, conversionTopicPath, downloadTopicPath, elementPath, freshnessPagePath, glossaryTopicPath, localizedTopicPath, locationTopicPath, mechanicDeepDiveTopicPath, mediaDetailTopicPath, newsTopicPath, officialPitchTopicPath, refreshPlanningTopicPath, regionPath, rolePath, searchSuggestionTopicPath, socialIntentTopicPath, stagePath, staticRoutes, statusPath, troubleshootingTopicPath } from "../lib/routes.js";
import { CreatureImage, EditorialBlock, FaqBlock, GuideItem, InfoPanel, LaunchStatusPanel, QuickCard, RegionImage, RelatedAniimo, RelatedRegions, SectionTitle, Select, SeoGuideBlock, SourcePanel, StatusBadge, TaxonomyLinks } from "../components/ui.jsx";

const priorityAniimoIds = ["celestis", "inferlupa", "glacy", "susuta", "emberpup", "eklue", "skippy", "helgon"];

function priorityAniimoPages() {
  return priorityAniimoIds
    .map((id) => aniimo.find((item) => item.id === id))
    .filter(Boolean);
}

function gscWatchlistPath(query) {
  const value = query.toLowerCase();
  if (value.includes("discord")) return "/topics/aniimo-discord/";
  if (value.includes("reddit")) return "/topics/aniimo-reddit/";
  if (value.includes("celestis")) return "/aniimo/celestis/";
  if (value.includes("inferlupa")) return "/aniimo/inferlupa/";
  if (value.includes("glacy")) return "/aniimo/glacy/";
  if (value.includes("junior")) return "/rewards/junior-wayfarer/";
  if (value.includes("milestone")) return "/rewards/milestones/";
  if (value.includes("server")) return "/troubleshooting/aniimo-server-status/";
  if (value.includes("logo")) return "/media/aniimo-logo/";
  if (value.includes("demo")) return "/topics/aniimo-demo/";
  if (value.includes("developer")) return "/compare/aniimo-developer/";
  if (value.includes("carried items") || value.includes("held items")) return "/topics/aniimo-carried-items/";
  if (value.includes("google play") || value.includes("android")) return "/platforms/android/";
  if (value.includes("mobile")) return "/platforms/mobile/";
  if (value.includes("pre registro")) return "/pt-br/aniimo-pre-registro/";
  if (value.includes("pre register")) return "/launch/aniimo-pre-register-guide/";
  if (value.includes("shiny") || value.includes("forms") || value.includes("rare")) return "/topics/aniimo-shiny/";
  if (value.includes("mmo")) return "/topics/aniimo-mmo/";
  if (value.includes("ai")) return "/compare/aniimo-ai/";
  if (value.includes("wiki") || value.includes("list")) return "/topics/aniimo-wiki-dex/";
  if (value.includes("map")) return "/map/";
  if (value.includes("codes")) return "/codes/";
  return "/site-index/";
}

export function HomePage(props) {
  return (
    <>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Database, map routes, evolution and launch rewards</p>
            <h1>Aniimo Wiki: Release Date, Codes, Map & Database</h1>
            <p>{gameInfo.summary} Get the fastest verified answers here: 89 public Aniimo entries, PC and console on September 16, and mobile on September 23.</p>
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

        <section className="section launch-answer-strip" aria-label="Quick Aniimo answers">
          <div className="answer-card"><strong>89</strong><span>public Aniimo entries</span><a href="/aniimo/" onClick={(event) => props.navigate(event, "/aniimo/")}>Open database <ChevronRight size={15} /></a></div>
          <div className="answer-card"><strong>Sep 16</strong><span>PC and console launch</span><a href="/release-date/" onClick={(event) => props.navigate(event, "/release-date/")}>See timeline <ChevronRight size={15} /></a></div>
          <div className="answer-card"><strong>Sep 23</strong><span>iOS and Android launch</span><a href="/platforms/mobile/" onClick={(event) => props.navigate(event, "/platforms/mobile/")}>Mobile details <ChevronRight size={15} /></a></div>
        </section>

        <section className="quick-grid" aria-label="Core sections">
          <QuickCard icon={<BookOpen />} title="Database" text="Index every Aniimo with location, forms, abilities and source status." href="/aniimo/" navigate={props.navigate} />
          <QuickCard icon={<Map />} title="Map" text="Explore regions, representative Aniimo, route notes and official scenery." href="/map/" navigate={props.navigate} />
          <QuickCard icon={<Sparkles />} title="Evolution" text="Track base forms, branch forms, special conditions and launch updates." href="/evolution/" navigate={props.navigate} />
          <QuickCard icon={<Gift />} title="Rewards" text="Track confirmed pre-registration rewards, milestone rewards, Junior Wayfarer and launch code status." href="/rewards/" navigate={props.navigate} />
          <QuickCard icon={<CalendarDays />} title="Launch Day" text="Check server status, active codes, unlock timing and launch fixes." href="/launch-day/" navigate={props.navigate} />
          <QuickCard icon={<Compass />} title="Search Topics" text="Open guides built around official features, community questions and search demand." href="/site-index/" navigate={props.navigate} />
          <QuickCard icon={<Copy />} title="Compare Aniimo" text="Compare public entries side by side before building a team." href="/compare/aniimo/" navigate={props.navigate} />
          <QuickCard icon={<Plus />} title="Team Builder" text="Build a six-slot team and share the selection." href="/team-builder/" navigate={props.navigate} />
          <QuickCard icon={<CheckCircle2 />} title="Collection Tracker" text="Track wanted, captured and verified entries locally." href="/collection-tracker/" navigate={props.navigate} />
        </section>

        <section className="section sources-band">
          <SectionTitle icon={<Compass />} kicker="Launch Guide" title="Popular Aniimo Questions" />
          <InfoPanel title="What Players Need" rows={[
            ["Aniimo database", "Browse all 89 public entries by name, element, role, region and stage."],
            ["Launch dates", "PC and console launch on Sep 16; iOS and Android follow on Sep 23."],
            ["Community help", "Use the official Discord and source links for launch news and support."],
          ]} />
          <div className="site-index-grid">
            <LinkGroup title="Launch Answers" items={[
              ["Release Date", "/release-date/", "Check PC, console and mobile launch dates."],
              ["Download", "/download/", "Use official Steam, Epic, console and mobile paths."],
              ["Launch Day", "/launch-day/", "Track status, codes, unlock timing and common fixes."],
              ["Codes", "/codes/", "Check active-code verification and reward status."],
            ]} navigate={props.navigate} />
            <LinkGroup title="Risky Search Safety" items={[
              ["APK Safety", "/topics/aniimo-apk/", "Route Android APK searches toward official sources."],
              ["Torrent Safety", "/topics/aniimo-torrent/", "Explain why unofficial installers are unsafe."],
              ["Beta Key Safety", "/topics/aniimo-beta-key/", "Avoid key buying and fake test access."],
              ["Official Website", "/topics/aniimo-official-website/", "Find verified site, Wiki and storefront links."],
            ]} navigate={props.navigate} />
            <LinkGroup title="International Entrypoints" items={localizedTopics.map((item) => [
              item.title,
              localizedTopicPath(item),
              item.description,
            ])} navigate={props.navigate} />
            <LinkGroup title="Popular Aniimo Now" items={priorityAniimoPages().map((item) => [
              item.name,
              aniimoPath(item),
              `${item.element} ${item.role} page with location, evolution and source notes.`,
            ])} navigate={props.navigate} />
          </div>
        </section>

        <DatabasePage compact {...props} />
        <MapPage compact navigate={props.navigate} />
        <EvolutionPage compact />
        <CodesPage compact navigate={props.navigate} />
        <DownloadPage compact navigate={props.navigate} />
        <BeginnerPage compact navigate={props.navigate} />
        <UpdatesPage compact />
        <SourcesPage compact />
        <GuideSummary />
        <StatusGuide />
    </>
  );
}

export function DatabasePage({ query, setQuery, element, setElement, region, setRegion, role, setRole, stage, setStage, elements, regionNames, roles, stages, filteredAniimo, navigate, compact }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const statusFilteredAniimo = statusFilter === "All" ? filteredAniimo : filteredAniimo.filter((item) => item.status === statusFilter);
  const [tracked, setTracked] = useState(() => { try { return JSON.parse(localStorage.getItem("aniimo-tracker") || "{}"); } catch { return {}; } });
  const setTracking = (item, value) => setTracked((current) => { const next = { ...current, [item.id]: value }; localStorage.setItem("aniimo-tracker", JSON.stringify(next)); return next; });
  return (
        <section id="database" className="section">
          <SectionTitle icon={<Search />} kicker="Index" title="Aniimo Database" />
          <p className="section-copy">
            Browse the full Aniimo list with official Wiki numbers, names, elements, roles,
            stages, locations, forms and source status. This page is the Aniimo wiki-style
            creature database for users searching all 89 Aniimo, character names, locations,
            evolutions and guide entries.
          </p>
          <div className="answer-strip database-answer-strip" aria-label="Database quick answers">
            <div><strong>89</strong><span>public entries</span></div>
            <div><strong>Search</strong><span>name, element, role or region</span></div>
            <div><strong>Status</strong><span>confirmed, watchlist or verified</span></div>
          </div>
          <div className="filters">
            <label className="search-field">
              <Search size={18} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, region, element or ability" />
            </label>
            <Select label="Element" value={element} onChange={setElement} options={elements} />
            <Select label="Region" value={region} onChange={setRegion} options={regionNames} />
            <Select label="Role" value={role} onChange={setRole} options={roles} />
            <Select label="Stage" value={stage} onChange={setStage} options={stages} />
            <Select label="Data status" value={statusFilter} onChange={setStatusFilter} options={["All", "Confirmed", "Watchlist", "Verified"]} />
          </div>
          <p className="filter-summary" aria-live="polite">Showing {statusFilteredAniimo.length} of {aniimo.length} Aniimo</p>
          {!compact && <div className="query-shortcuts" aria-label="Popular database searches">
            <span>Popular searches</span>
            {["Celestis", "Inferlupa", "Glacy", "all Aniimo", "Aniimo locations"].map((term) => <button key={term} type="button" onClick={() => setQuery(term === "all Aniimo" ? "" : term)}>{term}</button>)}
          </div>}
          <TaxonomyLinks navigate={navigate} />
          {!compact && <LinkGroup title="Popular Search Paths" items={[["Aniimo Tier List", "/aniimo-tier-list/", "Compare provisional roles and evidence."], ["Aniimo Elements", "/aniimo-elements/", "Browse element-based entries."], ["Aniimo Roles", "/aniimo-roles/", "Find DPS, support and healer roles."], ["Aniimo Discord", "/topics/aniimo-discord/", "Check official community-source guidance."], ["Aniimo AI Use", "/compare/aniimo-ai/", "Review official AI disclosure checks."]]} navigate={navigate} />}
          {!compact && (
            <InfoPanel title="Character Search Shortcuts" rows={[
              ["Best matching queries", "Search all Aniimo by name, Wiki number, element, role, region, ability or form family."],
              ["Useful snippets", "Each detail page exposes location, evolution, forms, abilities, source status and launch-verification notes."],
              ["Verification rule", "Exact spawn points stay pending until official or in-game evidence confirms them."],
            ]} />
          )}
          {!compact && (
            <section className="related-section">
              <h2>Popular Aniimo To Check First</h2>
              <div className="related-grid">
                {[...priorityAniimoPages(), ...["celestis", "inferlupa", "glacy"].map((id) => aniimo.find((item) => item.id === id))].filter((item, index, list) => item && list.findIndex((candidate) => candidate.id === item.id) === index).slice(0, 8).map((item) => (
                  <a className="related-card" key={item.id} href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
                    <span className="related-mark">{item.no}</span>
                    <strong>{item.name}</strong>
                    <span>{item.element} / {item.role} / {item.region}</span>
                  </a>
                ))}
              </div>
            </section>
          )}
          <div className="aniimo-grid">
            {statusFilteredAniimo.map((item) => (
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
                  <a className="text-link" href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
                    View Aniimo guide <ChevronRight size={16} />
                  </a>
                  <div className="card-actions"><a className="text-link" href={`/team-builder/?ids=${item.id}`} onClick={(event) => navigate(event, `/team-builder/?ids=${item.id}`)}><Plus size={15} /> Add to team</a><button type="button" className="mini-action" onClick={() => setTracking(item, tracked[item.id] === "wanted" ? "none" : "wanted")}><CheckCircle2 size={15} /> {tracked[item.id] === "wanted" ? "Wanted" : "Track"}</button></div>
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
  const items = aniimo.filter((item) => item[type] && item[type].toLowerCase() === value.toLowerCase());
  const elements = [...new Set(items.map((item) => item.element))].filter(Boolean);
  const roles = [...new Set(items.map((item) => item.role))].filter(Boolean);
  const stages = [...new Set(items.map((item) => item.stage))].filter(Boolean);
  const regionsInSet = [...new Set(items.map((item) => item.region))].filter(Boolean);
  const typeLabel = {
    element: "Element",
    role: "Role",
    stage: "Stage",
    status: "Data Status",
  }[type];
  const title = `${label} Aniimo ${typeLabel} Guide`;
  const collectionFaq = [
    [`How many ${label} Aniimo are tracked?`, `Aniimo.games currently tracks ${items.length} ${label} entries in this ${typeLabel.toLowerCase()} collection.`],
    [`Is this ${label} Aniimo list final?`, "No. This collection uses current public data and should be refreshed when official Wiki or live-game verification changes entries."],
  ];

  return (
    <section className="section">
      <SectionTitle icon={<BookOpen />} kicker="Index" title={title} />
      <p className="section-copy">
        Browse official Wiki entries tagged as {label}. Use this index as a landing page
        for {typeLabel.toLowerCase()} searches before detailed launch data is verified.
      </p>
      <div className="detail-panels">
        <InfoPanel title="Collection Summary" rows={[
          ["Tracked entries", `${items.length}`],
          ["Elements represented", elements.join(", ")],
          ["Roles represented", roles.join(", ")],
          ["Stages represented", stages.join(", ")],
        ]} />
        <InfoPanel title="Coverage Notes" rows={[
          ["Regions represented", regionsInSet.join(", ")],
          ["Data policy", "Exact spawn, route and balance details stay pending until official or live-game verification."],
          ["Best next link", type === "element" ? "Compare roles and stages inside this element." : "Compare elements, stages and regions inside this collection."],
        ]} />
      </div>
      <TaxonomyLinks navigate={navigate} />
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
              <a className="text-link" href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
                View Aniimo guide <ChevronRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <FaqBlock items={collectionFaq} />
    </section>
  );
}

export function MapPage({ compact, navigate }) {
  const mapParams = new URLSearchParams(window.location.search);
  const [query, setQuery] = useState(mapParams.get("q") || "");
  const [regionFilter, setRegionFilter] = useState(mapParams.get("region") || "All");
  const filteredRegions = regions.filter((item) => {
    const text = `${item.name} ${item.theme} ${item.aniimo.join(" ")} ${item.mechanics.join(" ")}`.toLowerCase();
    return text.includes(query.toLowerCase()) && (regionFilter === "All" || item.name === regionFilter);
  });
  return (
        <section id="map" className="section">
          <SectionTitle icon={<Compass />} kicker="World" title="Map & Region Guides" />
          {!compact && <SeoGuideBlock items={seoGuides.map} />}
          {!compact && (
            <InfoPanel title="Map Size Status" rows={[
              ["Current map-size answer", "No final measured world size is confirmed on Aniimo.games yet."],
              ["Public region count", `${regions.length} regions with official artwork are tracked.`],
              ["Next verification", "Add travel-time, border and route screenshots after launch before publishing exact size claims."],
            ]} />
          )}
          {!compact && <div className="map-toolbar"><label className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search regions, Aniimo or mechanics" /></label><Select label="Region" value={regionFilter} onChange={setRegionFilter} options={["All", ...regions.map((item) => item.name)]} /><button type="button" className="secondary-action" onClick={() => navigator.clipboard?.writeText(`${window.location.origin}/map/?q=${encodeURIComponent(query)}&region=${encodeURIComponent(regionFilter)}`)}><Copy size={16} /> Copy map link</button></div>}
          {!compact && <p className="section-copy map-answer">Looking for the Aniimo map size? The final measured world size is not confirmed yet; this page tracks {regions.length} public regions and adds route evidence after launch verification.</p>}
          <div className="region-grid">
            {filteredRegions.map((item) => (
              <article className="region-card" key={item.id}>
                <RegionImage region={item} />
                <h3>{item.name}</h3>
                <p>{item.theme}</p>
                <p className="small">Known Aniimo: {item.aniimo.join(", ")}</p>
                <p className="small">Mechanics: {item.mechanics.join(", ")}</p>
                <StatusBadge status={item.status} />
                <a className="text-link" href={regionPath(item)} onClick={(event) => navigate(event, regionPath(item))}>
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

export function CodesPage({ navigate }) {
  return (
        <section id="codes" className="section">
          <SectionTitle icon={<Gift />} kicker="Rewards" title="Codes & Rewards" />
          <p className="section-copy">
            No public redeem code is confirmed yet. This page separates actual codes from
            official pre-registration rewards and launch milestone rewards.
          </p>
          <InfoPanel title="Page Status" rows={[
            ["Last reviewed", sourceLastChecked],
            ["Current status", codeVerificationTemplate.currentStatus],
            ["How it is checked", "Official channels or direct in-game verification are required."],
          ]} />
          <LaunchStatusPanel title="Codes And Rewards Status" entries={launchStatusEntries.filter((entry) => ["codes", "pc-console", "mobile"].includes(entry.id))} />
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
          <EvidenceQueue queue={launchEvidenceQueues.codes} />
          <LinkGroup title="Code Search Safety" items={[
            ["Beta Key Safety", "/topics/aniimo-beta-key/", "Avoid key buying, fake access pages and unofficial invite claims."],
            ["Launch Day Codes", "/launch-day/", "Check the launch-day command center before treating a code as active."],
            ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Separate redeem-code issues from login or platform outages."],
            ["Pre-Registration Rewards", "/rewards/pre-registration/", "Compare code searches with confirmed official reward milestones."],
          ]} navigate={navigate} />
          <EditorialBlock title="Code Verification Rules" items={editorialGuides.codes} />
          <FaqBlock items={faqs.codes} />
        </section>
  );
}

export function RewardsPage() {
  return (
    <section id="rewards" className="section">
      <SectionTitle icon={<Gift />} kicker="Rewards" title="Aniimo Pre-Registration Rewards" />
          <img className="page-banner" src="/images/banners/banner-susuta-hunt.webp" alt="Aniimo Susuta Hunt event" width="1600" height="900" loading="lazy" decoding="async" />
      <p className="section-copy">
        Confirmed official rewards include milestone items, a Prismana Aniimo choice for
        Junior Wayfarers, and a mysterious Susuta egg for official pre-registration. Claim
        delivery should be checked on the same account used for registration after launch.
      </p>
      <LaunchStatusPanel title="Reward Delivery Status" entries={launchStatusEntries.filter((entry) => ["codes", "pc-console", "mobile"].includes(entry.id))} />
      <RewardGrid />
      <FaqBlock items={faqs.codes} />
    </section>
  );
}

export function DownloadPage({ navigate }) {
  return (
        <section id="download" className="section split-section download-band">
          <div>
            <SectionTitle icon={<Download />} kicker="Platforms" title="Download & Release Info" />
            <p className="section-copy">
              {releaseInfo.note} Store links and regional availability stay tied to official
              sources rather than download mirrors.
            </p>
            <InfoPanel title="Page Status" rows={[
              ["Last reviewed", sourceLastChecked],
              ["Platform status", "Official storefront links tracked before install availability."],
              ["Safe install path", "Use the official website and platform stores only."],
            ]} />
            <InfoPanel title="Mobile Search Answer" rows={[["Android", "Google Play pre-registration and official listing"], ["iOS", "App Store mobile launch tracking"], ["Date", releaseInfo.mobile], ["Safety", "Use official stores only; avoid APK mirrors"]]} />
            <p className="section-copy download-answer">For Aniimo game download searches, use the official store links below. There is no safe reason to use an APK mirror or torrent.</p>
            <LinkGroup title="High-Intent Download Paths" items={[["Aniimo Mobile Download", "/platforms/mobile/", "Check iOS and Android store availability."], ["Aniimo Steam Download", "/platforms/steam/", "Open the official PC storefront path."], ["Aniimo Android Download", "/platforms/android/", "Check Google Play and APK safety guidance."], ["Aniimo Release Date", "/release-date/", "Compare PC, console and mobile dates."]]} navigate={navigate} />
            <div className="hero-actions section-actions mobile-store-actions">
              <a className="primary-action" href="/platforms/mobile/" onClick={(event) => navigate(event, "/platforms/mobile/")}><Download size={18} /> Open mobile store guide</a>
              <a className="secondary-action" href="/platforms/android/" onClick={(event) => navigate(event, "/platforms/android/")}><Search size={18} /> Android status</a>
            </div>
            <LaunchStatusPanel title="Platform Availability Status" entries={launchStatusEntries.filter((entry) => ["pc-console", "mobile", "server"].includes(entry.id))} />
            <SeoGuideBlock items={seoGuides.download} compact />
            <div className="date-grid">
              <InfoPanel title="Release Dates" rows={[["PC and consoles", releaseInfo.pcConsole], ["Mobile", releaseInfo.mobile], ["Closed beta", releaseInfo.closedBeta], ["Beta signup deadline", releaseInfo.betaSignupDeadline]]} />
            </div>
            <EvidenceQueue queue={launchEvidenceQueues.download} />
            <LinkGroup title="Download Search Safety" items={[
              ["Android Google Play", "/platforms/android/", "Track Google Play pre-registration, Android launch timing and safe APK guidance."],
              ["Mobile App Stores", "/platforms/mobile/", "Check App Store, Google Play and mobile launch-window notes."],
              ["Portuguese Pre-Register", "/pt-br/aniimo-pre-registro/", "Answer Brazil pre-registro reward and storefront searches."],
              ["APK Safety", "/topics/aniimo-apk/", "Use official Android paths instead of APK mirrors."],
              ["Torrent Safety", "/topics/aniimo-torrent/", "Avoid unofficial installers and reposted clients."],
              ["Official Website", "/topics/aniimo-official-website/", "Find verified site, Wiki and storefront links."],
              ["Region Availability", "/troubleshooting/aniimo-region-availability/", "Check account, country and storefront availability."],
            ]} navigate={navigate} />
            <LinkGroup title="Platform Intent" items={[
              ["Steam Deck", "/topics/aniimo-steam-deck/", "Track compatibility questions after PC launch."],
              ["Game Pass", "/topics/aniimo-game-pass/", "Separate Xbox availability from Game Pass catalog claims."],
              ["PS4", "/topics/aniimo-ps4/", "Answer PS4 searches while PlayStation tracking stays PS5-focused."],
              ["Crossplay", "/compare/aniimo-crossplay/", "Track crossplay, cross-save and account-linking questions."],
            ]} navigate={navigate} />
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
                <div>
                  <StatusBadge status={platformStatusByName[item.name]?.status || item.status} />
                  <p className="small">Checked {item.lastChecked}</p>
                </div>
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
        <InfoPanel title="Release Questions" rows={[
          ["when does Aniimo come out", "Answered by the official PC, console and mobile date split."],
          ["Aniimo date de sortie", "French searchers can use the localized release page."],
          ["wann kommt Aniimo raus", "German searchers can use the localized release page."],
          ["Aniimo PS5 release date", "Console date is tracked with platform-specific storefront timing still pending."],
          ["Aniimo Xbox release date", "Xbox date uses the console launch window until storefront timing is verified."],
        ]} />
        <EditorialBlock title="Release Notes" items={editorialGuides.release} />
        <div className="hero-actions section-actions">
          <a className="secondary-action" href="/fr/aniimo-date-de-sortie/" onClick={(event) => navigate(event, "/fr/aniimo-date-de-sortie/")}><Search size={18} /> Date de sortie</a>
          <a className="secondary-action" href="/de/wann-kommt-aniimo/" onClick={(event) => navigate(event, "/de/wann-kommt-aniimo/")}><Search size={18} /> Wann kommt Aniimo</a>
          <a className="secondary-action" href="/pt-br/aniimo-data-de-lancamento/" onClick={(event) => navigate(event, "/pt-br/aniimo-data-de-lancamento/")}><Search size={18} /> Data de lancamento</a>
          <a className="secondary-action" href="/es/aniimo-fecha-de-lanzamiento/" onClick={(event) => navigate(event, "/es/aniimo-fecha-de-lanzamiento/")}><Search size={18} /> Fecha de lanzamiento</a>
        </div>
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
      <FaqBlock items={faqs.snippets} />
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
      <div className="hero-actions section-actions">
        <a className="primary-action" href="/launch-tracker/">
          <CalendarDays size={18} />
          Open Launch Tracker
        </a>
        <a className="secondary-action" href="/site-index/">
          <Compass size={18} />
          Open Site Index
        </a>
      </div>
      <InfoPanel title="Current data snapshot" rows={[["Last source check", sourceLastChecked], ["Public Aniimo tracked", `${aniimo.length} entries`], ["Regions tracked", `${regions.length} regions`], ["Data policy", "Unverified balance, routes and coordinates remain clearly labeled."]]}/>
      <div className="freshness-grid">
        {freshnessPages.map((item) => (
          <article className="freshness-card" key={item.slug}>
            <p>{item.sourceType}</p>
            <h3>{item.title}</h3>
            <span>{item.description}</span>
            <a className="text-link" href={freshnessPagePath(item)}>
              Open tracker <ChevronRight size={16} />
            </a>
          </article>
        ))}
      </div>
      <div className="table-shell freshness-table">
        <table>
          <thead>
            <tr>
              <th>Watchlist</th>
              <th>Check</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {freshnessWatchlist.map(([label, check, action]) => (
              <tr key={label}>
                <td>{label}</td>
                <td>{check}</td>
                <td>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-shell freshness-table">
        <table>
          <thead>
            <tr>
              <th>Update Type</th>
              <th>Pages to Refresh</th>
              <th>Evidence Needed</th>
            </tr>
          </thead>
          <tbody>
            {updateWorkflowMatrix.map(([type, pages, evidence]) => (
              <tr key={type}>
                <td>{type}</td>
                <td>{pages}</td>
                <td>{evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-shell freshness-table">
        <table>
          <thead>
            <tr>
              <th>Social Topic</th>
              <th>Observed Signal</th>
              <th>Next Content</th>
            </tr>
          </thead>
          <tbody>
            {socialDiscussionResearch.map((item) => (
              <tr key={item.topic}>
                <td>{item.topic}</td>
                <td>{item.signals}</td>
                <td>{item.contentOpportunity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

export function FreshnessPage({ topic }) {
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Freshness" title={topic.title} />
          <p className="section-copy">{topic.intro}</p>
      {(topic.slug === "aniimo-logo") && <InfoPanel title="Logo Search Answer" rows={[["Asset", "Use the Aniimo logo preview and source notes on this page."], ["Format", "The production asset is served as WebP for faster loading."], ["Source rule", "Use official or site-prepared brand assets rather than reposted files."]]}/>} 
      {(topic.slug === "aniimo-discord" || topic.slug === "aniimo-reddit") && <InfoPanel title="Community Search Answer" rows={[["Official status", "Use only links verified by Aniimo or Pawprint Studio."], ["What this page provides", "A source-safe path for launch, codes, server and player-report questions."], ["What is not confirmed", "Third-party invites, screenshots and rumors are not official facts."]]}/>} 
      {topic.slug === "aniimo-ai" && <InfoPanel title="AI Search Answer" rows={[["Current answer", "No official source reviewed here confirms that Aniimo is made with generative AI."], ["Evidence rule", "Trailer style, upscaling or visual polish is not proof of AI use."], ["Next check", "Update this answer only when the developer, publisher or platform publishes a direct disclosure."]]}/>} 
      {topic.slug === "aniimo-tier-list" && <InfoPanel title="Tier List Search Answer" rows={[["Current answer", "This is a pre-launch watchlist, not a final competitive ranking."], ["How to compare", "Use role, element, stage and source status until live balance evidence exists."], ["Next update", "Add dated PvE, PvP and early-game testing after launch."]]}/>} 
      <div className="detail-panels">
        <InfoPanel title="Tracking Scope" rows={[["Source type", topic.sourceType], ["Primary source", topic.source], ["Status", "Maintained as a source-aware update page"]]} />
        <InfoPanel title="Related Actions" rows={freshnessWatchlist.slice(0, 3).map(([label, check]) => [label, check])} />
      </div>
      <div className="guide-list">
        {topic.points.map(([title, text]) => (
          <GuideItem key={title} title={title} text={text} />
        ))}
      </div>
      <SeoGuideBlock items={socialDiscussionResearch.slice(0, 4).map((item) => ({
        title: item.topic,
        body: `${item.signals} Next content action: ${item.contentOpportunity} Source policy: ${item.sourcePolicy}`,
      }))} />
      <FaqBlock items={topic.faq} />
      <div className="hero-actions section-actions">
        <a className="primary-action" href="/updates/">
          <CalendarDays size={18} />
          Back to Update Log
        </a>
        <a className="secondary-action" href={topic.source} target="_blank" rel="noreferrer">
          <Search size={18} />
          Check Source
        </a>
      </div>
    </section>
  );
}

export function LaunchTrackerPage() {
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Launch" title="Aniimo Launch Tracker" />
      <p className="section-copy">{launchTracker.summary}</p>
      <div className="detail-panels">
        <InfoPanel title="Launch Readiness" rows={launchTracker.readiness.map(([label, value, status]) => [label, `${value} (${status})`])} />
        <InfoPanel title="Official Timeline" rows={releaseInfo.timeline.map(([date, label]) => [date, label])} />
        <InfoPanel title="Next Checks" rows={launchTracker.nextChecks.map((item, index) => [`Check ${index + 1}`, item])} />
      </div>
      <SeoGuideBlock items={[
        { title: "What is ready", body: "Platform pages, launch dates, official links, rewards and public Aniimo entries are already connected to sitemap routes and source notes." },
        { title: "What is still watchlist", body: "Redeem codes, exact unlock hours, final spawn routes, weather windows and combat values should wait for official posts or live-game verification." },
        { title: "How this page changes", body: "When official sources change, update this tracker first, then refresh detail pages, sitemap metadata and the update log so readers can see what changed." },
      ]} />
      <div className="hero-actions section-actions">
        <a className="primary-action" href="/launch-verification/">
          <CheckCircle2 size={18} />
          Open Verification Checklist
        </a>
      </div>
      <FaqBlock items={[
        ["What does the Aniimo launch tracker monitor?", "It tracks official launch dates, platform links, reward status, code status, source checks and post-launch verification tasks."],
        ["When should launch data be updated?", "Update it when official news, storefront listings, the official Wiki or live-game verification confirms a change."],
      ]} />
    </section>
  );
}

export function LaunchDayPage({ navigate }) {
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Launch Day" title="Aniimo Launch Day Command Center" />
      <p className="section-copy">{launchDayCommandCenter.summary}</p>
      <LaunchStatusPanel entries={launchStatusEntries} />
      <div className="detail-panels">
        <InfoPanel title="Current Launch Status" rows={launchDayCommandCenter.statusRows.map(([label, value, status]) => [label, `${value} (${status})`])} />
        <InfoPanel title="Fast Checks" rows={launchDayCommandCenter.searchIntents.map(([intent, answer]) => [intent, answer])} />
      </div>
      <div className="site-index-grid">
        <LinkGroup title="Launch Day Actions" items={launchDayCommandCenter.quickActions} navigate={navigate} />
        <LinkGroup title="Quick Help for Launch Day" items={[
          ["Active Aniimo Codes", "/codes/active/", "Check active code status and verification notes."],
          ["Server Status", "/troubleshooting/aniimo-server-status/", "Track maintenance, outage and launch availability checks."],
          ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Track login, black screen, stuck loading and platform-specific launch errors."],
          ["Download Unavailable", "/troubleshooting/aniimo-download-not-available/", "Fix missing download buttons and pre-launch store timing issues."],
          ["Region Availability", "/troubleshooting/aniimo-region-availability/", "Track country, account and platform-region availability issues."],
          ["Server & Code Verification", "/launch-verification/", "Record launch evidence before publishing it as confirmed."],
        ]} navigate={navigate} />
        <LinkGroup title="First Session Guides" items={[
          ["First Hour Guide", "/aniimo-first-hour-guide/", "Plan account setup, rewards, catching, Twine and route verification."],
          ["Reroll Guide", "/aniimo-reroll-guide/", "Track whether rerolling exists before publishing account-reset advice."],
          ["Best Settings", "/aniimo-best-settings/", "Prepare graphics, controls, performance and platform setting checks."],
          ["Beginner Mistakes", "/aniimo-beginner-mistakes/", "Avoid unsafe downloads, unverified codes and premature route claims."],
        ]} navigate={navigate} />
        <LinkGroup title="Trust & Purchase Questions" items={[
          ["Does Aniimo Use AI?", "/compare/aniimo-ai/", "Answer AI-made and generative AI questions with official-source boundaries."],
          ["Developer and Publisher", "/compare/aniimo-developer/", "Show entity names, official links and source archive paths."],
          ["Price and Free-to-Play", "/compare/aniimo-price/", "Separate free-to-play status from unverified economy details."],
          ["Is Aniimo Multiplayer?", "/compare/aniimo-multiplayer/", "Track real-time challenges, Egg Heist, co-op and PVP questions."],
        ]} navigate={navigate} />
        <LinkGroup title="More Player Questions" items={[
          ["Crossplay", "/compare/aniimo-crossplay/", "Track crossplay, cross-save and account-linking questions."],
          ["Co-Op", "/compare/aniimo-coop/", "Separate team-mode language from unverified open-world co-op claims."],
          ["PVP", "/compare/aniimo-pvp/", "Explain Egg Heist PVEVP while final competitive rules remain watchlist."],
          ["Beta Key Safety", "/topics/aniimo-beta-key/", "Warn against key buying and keep beta access tied to official sources."],
          ["Steam Deck", "/topics/aniimo-steam-deck/", "Prepare compatibility and controller verification after PC launch."],
          ["Game Pass", "/topics/aniimo-game-pass/", "Separate Xbox availability, free-to-play status and Game Pass catalog claims."],
          ["PS4", "/topics/aniimo-ps4/", "Answer PS4 searches while confirmed PlayStation tracking stays PS5-focused."],
          ["Official Website", "/topics/aniimo-official-website/", "Send users to verified site, Wiki and storefront links."],
          ["Discord", "/topics/aniimo-discord/", "Keep community invite and code claims tied to official verification."],
          ["Reddit", "/topics/aniimo-reddit/", "Use discussion signals without treating rumors as guide facts."],
          ["Wiki and Dex", "/topics/aniimo-wiki-dex/", "Route creature-index searches to database, detail pages and watchlist rules."],
          ["APK Safety", "/topics/aniimo-apk/", "Route APK searches to official Android and Google Play guidance."],
          ["Torrent Safety", "/topics/aniimo-torrent/", "Explain why unofficial downloads are the wrong launch path."],
          ["Gameplay", "/topics/aniimo-gameplay/", "Summarize confirmed gameplay systems and verification boundaries."],
          ["Review Watchlist", "/topics/aniimo-review/", "Prepare review criteria without publishing a premature score."],
          ["Demo Status", "/topics/aniimo-demo/", "Separate demo, playtest and closed beta search intent."],
          ["MMO Question", "/topics/aniimo-mmo/", "Clarify open-world RPG positioning versus MMO assumptions."],
          ["Shiny Forms", "/topics/aniimo-shiny/", "Track rare form and color variant questions as watchlist data."],
          ["Aniilog", "/topics/aniimo-aniilog/", "Hold Aniilog as a terminology watchlist until verified."],
          ["Carried Items", "/topics/aniimo-carried-items/", "Prepare held-item and drop verification fields."],
          ["PAX East", "/topics/aniimo-pax-east/", "Route event searches to verified media and news updates."],
          ["TGS", "/topics/aniimo-tgs/", "Track Tokyo Game Show search intent without unverified show-floor claims."],
        ]} navigate={navigate} />
        <LinkGroup title="French & German Search Entrypoints" items={localizedTopics.map((item) => [
          item.title,
          localizedTopicPath(item),
          item.description,
        ])} navigate={navigate} />
      </div>
      <section className="related-section">
        <h2>First 24 Hours Update Plan</h2>
        <div className="table-shell freshness-table">
          <table>
            <thead>
              <tr>
                <th>Window</th>
                <th>What to Check</th>
              </tr>
            </thead>
            <tbody>
              {launchDayCommandCenter.firstDayChecks.map(([window, task]) => (
                <tr key={window}>
                  <td>{window}</td>
                  <td>{task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <SeoGuideBlock items={[
        { title: "Why this page exists", body: "Launch day searches are fragmented across status, codes, unlock timing, download issues and platform pages. This command center gives users one fast route to the freshest source-aware answers." },
        { title: "What stays unconfirmed", body: "Server incidents, exact unlock hours, active redeem codes and live error fixes stay in watchlist status until official sources, storefront behavior or verified in-game evidence confirms them." },
        { title: "Where updates should flow", body: "When launch data changes, update this page first, then refresh download, release date, codes, troubleshooting, platform pages, update log and IndexNow submission after deployment." },
      ]} />
      <div className="hero-actions section-actions">
        <a className="primary-action" href="/download/" onClick={(event) => navigate(event, "/download/")}>
          <Download size={18} />
          Open Download Links
        </a>
        <a className="secondary-action" href="/codes/" onClick={(event) => navigate(event, "/codes/")}>
          <Gift size={18} />
          Check Codes
        </a>
      </div>
      <FaqBlock items={launchDayCommandCenter.faq} />
    </section>
  );
}

export function LaunchVerificationPage() {
  const [records, setRecords] = useState(() => {
    try { return JSON.parse(localStorage.getItem("aniimo-launch-evidence") || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState({ topic: "Mobile store availability", platform: "", status: "Watchlist", source: "", notes: "" });
  useEffect(() => localStorage.setItem("aniimo-launch-evidence", JSON.stringify(records)), [records]);
  const recordCounts = records.reduce((counts, record) => ({ ...counts, [record.status]: (counts[record.status] || 0) + 1 }), {});
  function addRecord(event) {
    event.preventDefault();
    if (!draft.platform.trim() || !draft.source.trim()) return;
    setRecords((current) => [{ ...draft, id: `${Date.now()}`, verifiedAt: new Date().toISOString() }, ...current]);
    setDraft({ topic: "Mobile store availability", platform: "", status: "Watchlist", source: "", notes: "" });
  }
  function exportRecords() {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "aniimo-launch-evidence.json"; link.click(); URL.revokeObjectURL(url);
  }
  function importRecords(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const incoming = JSON.parse(reader.result);
        if (!Array.isArray(incoming)) throw new Error("Expected an array");
        setRecords((current) => [...incoming.filter((item) => item && item.topic && item.platform && item.source), ...current]);
      } catch { /* Ignore malformed handoff files. */ }
    };
    reader.readAsText(file);
    event.target.value = "";
  }
  return (
    <section className="section sources-band">
      <SectionTitle icon={<CheckCircle2 />} kicker="Workflow" title="Aniimo Launch Verification Checklist" />
      <p className="section-copy">
        This page prepares the fields that should be filled after official launch or
        official source updates. It keeps unverified route, code, unlock and Search
        Console data out of live guide claims until evidence exists.
      </p>
      <div className="detail-panels">
        <InfoPanel title="Spawn Template" rows={[
          ["Required", verificationTemplates.spawnPoint.requiredFields.join(", ")],
          ["Optional", verificationTemplates.spawnPoint.optionalFields.join(", ")],
        ]} />
        <InfoPanel title="Code Template" rows={[
          ["Current status", codeVerificationTemplate.currentStatus],
          ["Fields", codeVerificationTemplate.fieldsToCapture.join(", ")],
        ]} />
        <InfoPanel title="Platform Unlock Template" rows={[
          ["Required", verificationTemplates.platformUnlock.requiredFields.join(", ")],
          ["Optional", verificationTemplates.platformUnlock.optionalFields.join(", ")],
        ]} />
        <InfoPanel title="GSC Template" rows={[
          ["First review", gscObservationTemplate.firstReviewWindow],
          ["Fields", gscObservationTemplate.fieldsToCapture.join(", ")],
        ]} />
        <InfoPanel title="Launch Experience Fields" rows={[
          ["Required", verificationTemplates.launchExperience.requiredFields.join(", ")],
          ["Optional", verificationTemplates.launchExperience.optionalFields.join(", ")],
        ]} />
      </div>
      <section className="related-section evidence-capture">
        <h2>Local Evidence Capture</h2>
        <p className="section-copy">Save timestamped launch observations in this browser. These notes remain unverified until an editor checks the source or reproduces the result.</p>
        <form className="evidence-form" onSubmit={addRecord}>
          <label><span>Topic</span><select value={draft.topic} onChange={(event) => setDraft({ ...draft, topic: event.target.value })}>{["Mobile store availability", "Account and cross-platform flow", "Co-op and PVP rules", "Economy and monetization", "Localization and known issues", "Server status", "Redeem code"].map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span>Platform</span><input value={draft.platform} onChange={(event) => setDraft({ ...draft, platform: event.target.value })} placeholder="Steam, iOS, Android..." required /></label>
          <label><span>Status</span><select value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value })}><option>Watchlist</option><option>Verified</option><option>Rejected</option></select></label>
          <label><span>Source URL</span><input type="url" value={draft.source} onChange={(event) => setDraft({ ...draft, source: event.target.value })} placeholder="https://..." required /></label>
          <label className="evidence-notes"><span>Notes</span><textarea value={draft.notes} onChange={(event) => setDraft({ ...draft, notes: event.target.value })} placeholder="Region, device, reproduction steps, screenshot path..." /></label>
          <button className="primary-action" type="submit"><Plus size={16} /> Add observation</button>
        </form>
        <div className="tool-actions"><button className="secondary-action" type="button" onClick={exportRecords} disabled={!records.length}><DownloadIcon size={16} /> Export JSON</button><label className="secondary-action file-action"><DownloadIcon size={16} /> Import JSON<input type="file" accept="application/json" onChange={importRecords} /></label><button className="secondary-action" type="button" onClick={() => setRecords([])} disabled={!records.length}><X size={16} /> Clear local records</button></div>
        {records.length > 0 && <><div className="evidence-summary"><strong>{records.length}</strong><span>observations</span><span>{recordCounts.Watchlist || 0} pending review</span><span>{recordCounts.Verified || 0} verified</span><span>{recordCounts.Rejected || 0} rejected</span></div><div className="table-shell freshness-table"><table><thead><tr><th>Time</th><th>Topic</th><th>Platform</th><th>Status</th><th>Evidence</th></tr></thead><tbody>{records.map((record) => <tr key={record.id}><td>{new Date(record.verifiedAt).toLocaleString()}</td><td>{record.topic}</td><td>{record.platform}</td><td><StatusBadge status={record.status} /></td><td><a href={record.source} target="_blank" rel="noreferrer">Source</a>{record.notes && <><br />{record.notes}</>}</td></tr>)}</tbody></table></div></>}
      </section>
      <LaunchStatusPanel title="Launch Readiness Snapshot" entries={launchStatusEntries} />
      <section className="related-section">
        <h2>Spawn Verification Queue</h2>
        <div className="verification-grid">
          {spawnVerificationQueue.map((item) => (
            <article className="verification-card" key={item.region}>
              <StatusBadge status={item.status} />
              <h3>{item.region}</h3>
              <p>{item.aniimo}</p>
              <p>{item.task}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="related-section">
        <h2>Platform Unlock Queue</h2>
        <div className="verification-grid">
          {platformUnlockQueue.map((item) => (
            <article className="verification-card" key={item.platform}>
              <StatusBadge status={item.status} />
              <h3>{item.platform}</h3>
              <p>Release date: {item.releaseDate}</p>
              <p>Unlock time: {item.unlockTime}</p>
              <a className="text-link" href={item.source} target="_blank" rel="noreferrer">
                Official source <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
      <FaqBlock items={[
        ["When should spawn data be marked verified?", "Only after official sources or direct in-game checks confirm the route, condition and timing."],
        ["When should a redeem code be published?", "Only after an official channel or in-game redemption flow confirms the code string, reward and restrictions."],
      ]} />
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

export function SiteIndexPage({ navigate }) {
  const corePages = staticRoutes.filter((route) =>
    ["/aniimo/", "/map/", "/evolution/", "/codes/", "/rewards/", "/download/", "/release-date/", "/beginner-guide/", "/launch-day/", "/launch-tracker/", "/launch-verification/", "/best-aniimo/", "/sources/"].includes(route.path),
  );
  const platformPages = staticRoutes.filter((route) => route.path.startsWith("/platforms/"));
  const downloadPages = downloadTopics.map((item) => [item.title, downloadTopicPath(item), item.description]);
  const beginnerPages = beginnerTopics.map((item) => [item.title, beginnerTopicPath(item), item.description]);
  const codeRewardPages = codeRewardTopics.map((item) => [item.title, codeRewardTopicPath(item), item.description]);
  const newsPages = newsTopics.map((item) => [item.title, newsTopicPath(item), item.summary]);
  const freshnessItems = freshnessPages.map((item) => [item.title, freshnessPagePath(item), item.description]);
  const choicePages = choiceTopics.map((item) => [item.title, choiceTopicPath(item), item.description]);
  const officialPitchPages = officialPitchTopics.map((item) => [item.title, officialPitchTopicPath(item), item.description]);
  const socialIntentPages = socialIntentTopics.map((item) => [item.title, socialIntentTopicPath(item), item.description]);
  const searchSuggestionPages = searchSuggestionTopics.map((item) => [item.title, searchSuggestionTopicPath(item), item.description]);
  const glossaryPages = glossaryTopics.map((item) => [item.term, glossaryTopicPath(item), item.definition]);
  const troubleshootingPages = troubleshootingTopics.map((item) => [item.title, troubleshootingTopicPath(item), item.description]);
  const mechanicPages = mechanicDeepDiveTopics.map((item) => [item.title, mechanicDeepDiveTopicPath(item), item.description]);
  const mediaPages = mediaDetailTopics.map((item) => [item.title, mediaDetailTopicPath(item), item.description]);
  const conversionPages = conversionTopics.map((item) => [item.title, conversionTopicPath(item), item.description]);
  const refreshPages = refreshPlanningTopics.map((item) => [item.title, refreshPlanningTopicPath(item), item.description]);
  const localizedPages = localizedTopics.map((item) => [item.title, localizedTopicPath(item), item.description]);
  const launchSearchPages = [
    ["Launch Day", "/launch-day/", "Track server status, codes, unlock timing and launch fixes."],
    ["APK Safety", "/topics/aniimo-apk/", "Route Android APK searches toward official sources."],
    ["Torrent Safety", "/topics/aniimo-torrent/", "Explain why unofficial installers are unsafe."],
    ["Beta Key Safety", "/topics/aniimo-beta-key/", "Avoid key buying and fake test access."],
    ["Official Website", "/topics/aniimo-official-website/", "Find verified site, Wiki and storefront links."],
    ["French Release", "/fr/aniimo-date-de-sortie/", "Answer French release-date searches."],
    ["German Release", "/de/wann-kommt-aniimo/", "Answer German release-date searches."],
  ];
  const portuguesePages = localizedTopics.filter((item) => item.locale === "pt").map((item) => [item.title, localizedTopicPath(item), item.description]);
  const portugueseAniimoPages = ["emberpup", "inferlupa", "glacy", "celestis", "eklue", "skippy", "susuta", "fragrancier", "wisptis", "helgon", "cozite"].map((id) => aniimo.find((item) => item.id === id)).filter(Boolean).map((item) => [item.name, `/pt-br/aniimo/${item.id}/`, `Guia em português sobre ${item.name}, nº ${item.no}, região, função e status da fonte.`]);
  const trustPages = staticRoutes.filter((route) => ["/about/", "/editorial-policy/", "/contact/"].includes(route.path));
  const elementNames = [...new Set(aniimo.map((item) => item.element))];
  const roleNames = [...new Set(aniimo.map((item) => item.role))];
  const stageNames = [...new Set(aniimo.map((item) => item.stage))];
  const statusNames = [...new Set(aniimo.map((item) => item.status))];
  const featuredAniimo = [
    ...priorityAniimoPages(),
    ...aniimo.filter((item) => item.status === "Confirmed" && item.element !== "Unknown"),
  ].filter((item, index, list) => list.findIndex((candidate) => candidate.id === item.id) === index).slice(0, 18);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<Compass />} kicker="Index" title="Aniimo.games Site Index" />
      <p className="section-copy">
        Use this index to move between Aniimo guide hubs, platform download pages,
        region guides, element pages, role pages and official source pages.
      </p>
      <div className="site-index-grid">
          <LinkGroup title="Core Guides" items={corePages.map((item) => [item.label, item.path, item.description])} navigate={navigate} />
          <LinkGroup title="Player Tools" items={[["Aniimo Compare", "/compare/aniimo/", "Compare public Aniimo data side by side."], ["Team Builder", "/team-builder/", "Build and share a six-slot team."], ["Collection Tracker", "/collection-tracker/", "Track wanted, captured and verified entries locally."]]} navigate={navigate} />
        <LinkGroup title="GSC Query Watchlist" items={gscLatestObservations.queryWatchlist.map(([query, action]) => [
          query,
          gscWatchlistPath(query),
          action,
        ])} navigate={navigate} />
        <LinkGroup title="Launch Priority Pages" items={launchPriorityPages.map(([path, label, query, action]) => [label, path, `${query}: ${action}`])} navigate={navigate} />
        <LinkGroup title="Launch Search Shortcuts" items={launchSearchPages} navigate={navigate} />
        <LinkGroup title="Platform Pages" items={platformPages.map((item) => [item.label, item.path, item.description])} navigate={navigate} />
        <LinkGroup title="Download Decisions" items={downloadPages} navigate={navigate} />
        <LinkGroup title="Beginner Questions" items={beginnerPages} navigate={navigate} />
        <LinkGroup title="Codes & Rewards" items={codeRewardPages} navigate={navigate} />
        <LinkGroup title="News & Updates" items={newsPages} navigate={navigate} />
        <LinkGroup title="Freshness Trackers" items={freshnessItems} navigate={navigate} />
        <LinkGroup title="Official Feature Guides" items={officialPitchPages} navigate={navigate} />
        <LinkGroup title="Community Question Guides" items={socialIntentPages} navigate={navigate} />
        <LinkGroup title="Search Topic Guides" items={searchSuggestionPages} navigate={navigate} />
        <LinkGroup title="Glossary" items={glossaryPages} navigate={navigate} />
        <LinkGroup title="Troubleshooting" items={troubleshootingPages} navigate={navigate} />
        <LinkGroup title="Mechanic Deep Dives" items={mechanicPages} navigate={navigate} />
        <LinkGroup title="Media Details" items={mediaPages} navigate={navigate} />
        <LinkGroup title="Launch Conversion Guides" items={conversionPages} navigate={navigate} />
        <LinkGroup title="Growth Refresh Plans" items={refreshPages} navigate={navigate} />
        <LinkGroup title="Localized Search Entrypoints" items={localizedPages} navigate={navigate} />
        <LinkGroup title="Português (Brasil)" items={portuguesePages} navigate={navigate} />
        <LinkGroup title="Pokédex em Português" items={portugueseAniimoPages} navigate={navigate} />
        <LinkGroup title="Region Guides" items={regions.map((item) => [item.name, regionPath(item), item.theme])} navigate={navigate} />
        <LinkGroup title="Location Guides" items={regions.map((item) => [`${item.name} Locations`, locationTopicPath(item), `Track ${item.name} route and spawn verification tasks.`])} navigate={navigate} />
        <LinkGroup title="Element Guides" items={elementNames.map((item) => [`${item} Aniimo`, elementPath(item), `Browse ${item} entries by number, role, stage and source status.`])} navigate={navigate} />
        <LinkGroup title="Role Guides" items={roleNames.map((item) => [`${item} Aniimo`, rolePath(item), `Browse ${item} entries by number, element, stage and source status.`])} navigate={navigate} />
        <LinkGroup title="Stage Guides" items={stageNames.map((item) => [`${item} Aniimo`, stagePath(item), `Browse ${item} entries by number, element, role and region.`])} navigate={navigate} />
        <LinkGroup title="Data Status Guides" items={statusNames.map((item) => [`${item} Aniimo Data`, statusPath(item), `Browse ${item} entries by number, element, role, stage and source status.`])} navigate={navigate} />
        <LinkGroup title="Choice Guides" items={choicePages} navigate={navigate} />
        <LinkGroup title="Trust & Maintenance" items={trustPages.map((item) => [item.label, item.path, item.description])} navigate={navigate} />
      </div>
      <section className="related-section">
        <h2>Featured Aniimo Pages</h2>
        <div className="related-grid">
          {featuredAniimo.map((item) => (
            <a className="related-card" key={item.id} href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
              <span className="related-mark">{item.no}</span>
              <strong>{item.name}</strong>
              <span>{item.element} / {item.role}</span>
            </a>
          ))}
        </div>
      </section>
      <FaqBlock items={[
        ["What is the Aniimo.games site index for?", "It helps readers and crawlers discover guide hubs, platform pages, region pages, element pages, role pages and source pages from one internal-link hub."],
        ["Does every Aniimo detail page appear here?", "The XML sitemap includes every indexable Aniimo page. This visible index highlights important hubs and featured entries while the database page links to all tracked Aniimo."],
      ]} />
    </section>
  );
}

export function GuideHubPage({ navigate }) {
  const beginnerPages = beginnerTopics.map((item) => [item.title, beginnerTopicPath(item), item.description]);
  const officialPages = officialPitchTopics.map((item) => [item.title, officialPitchTopicPath(item), item.description]);
  const mechanicPages = mechanicDeepDiveTopics.map((item) => [item.title, mechanicDeepDiveTopicPath(item), item.description]);
  const glossaryPages = glossaryTopics.map((item) => [item.term, glossaryTopicPath(item), item.definition]);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<BookOpen />} kicker="Guides" title="Aniimo Guides Hub" />
      <p className="section-copy">
        Start here for Aniimo beginner systems, official feature explanations,
        mechanic deep dives and recurring glossary terms.
      </p>
      <div className="site-index-grid">
        <LinkGroup title="Beginner Guides" items={beginnerPages} navigate={navigate} />
        <LinkGroup title="Official Feature Guides" items={officialPages} navigate={navigate} />
        <LinkGroup title="Mechanic Deep Dives" items={mechanicPages} navigate={navigate} />
        <LinkGroup title="Glossary Terms" items={glossaryPages} navigate={navigate} />
      </div>
    </section>
  );
}

export function CompareHubPage({ navigate }) {
  const comparisonPages = socialIntentTopics.map((item) => [item.title, socialIntentTopicPath(item), item.description]);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<Search />} kicker="Compare" title="Aniimo Comparisons" />
      <p className="section-copy">
        These pages answer comparison, platform, price, AI and multiplayer searches
        while clearly separating Aniimo's official systems from broad expectations.
      </p>
      <LinkGroup title="Comparison Guides" items={comparisonPages} navigate={navigate} />
    </section>
  );
}

function ToolShell({ kicker, title, intro, children }) {
  return <section className="section page-detail tool-page"><p className="eyebrow">{kicker}</p><h1>{title}</h1><p className="section-copy">{intro}</p>{children}</section>;
}

function AniimoPicker({ selected, onToggle, limit = 4 }) {
  const [query, setQuery] = useState("");
  const results = aniimo.filter((item) => `${item.name} ${item.element} ${item.role}`.toLowerCase().includes(query.toLowerCase())).slice(0, 18);
  return <div className="tool-picker"><label className="search-field"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Aniimo" /></label><div className="picker-grid">{results.map((item) => { const active = selected.some((entry) => entry.id === item.id); return <button type="button" className={`picker-item ${active ? "active" : ""}`} key={item.id} onClick={() => onToggle(item)} disabled={!active && selected.length >= limit}><CreatureImage item={item} /><span><strong>{item.name}</strong><small>{item.element} · {item.role}</small></span>{active ? <X size={15} /> : <Plus size={15} />}</button>; })}</div></div>;
}

export function AniimoComparePage({ navigate }) {
  const initial = new URLSearchParams(window.location.search).get("ids")?.split(",").map((id) => aniimo.find((item) => item.id === id)).filter(Boolean);
  const [selected, setSelected] = useState(initial?.length ? initial.slice(0, 4) : aniimo.slice(0, 2));
  const toggle = (item) => setSelected((current) => current.some((entry) => entry.id === item.id) ? current.filter((entry) => entry.id !== item.id) : current.length < 4 ? [...current, item] : current);
  return <ToolShell kicker="Aniimo Tool" title="Compare Aniimo" intro="Select up to four Aniimo to compare public index data, evolution, abilities, regions and verification status.">
    <AniimoPicker selected={selected} onToggle={toggle} />
    <div className="tool-actions"><button type="button" className="secondary-action" onClick={() => navigator.clipboard?.writeText(`${window.location.origin}/compare/aniimo/?ids=${selected.map((item) => item.id).join(",")}`)}><Copy size={16} /> Copy comparison link</button><a className="text-link" href="/aniimo/" onClick={(e) => navigate(e, "/aniimo/")}>Browse full database <ChevronRight size={16} /></a></div>
    <div className="comparison-table table-shell"><table><thead><tr><th>Field</th>{selected.map((item) => <th key={item.id}>{item.name}</th>)}</tr></thead><tbody>{[["No.", (item) => item.no], ["Element", (item) => item.element], ["Role", (item) => item.role], ["Stage", (item) => item.stage], ["Region", (item) => item.region], ["Forms", (item) => item.forms.join(" → ")], ["Ability", (item) => item.ability], ["Use", (item) => item.use], ["Status", (item) => item.status]].map(([label, get]) => <tr key={label}><th>{label}</th>{selected.map((item) => <td key={item.id}>{get(item)}</td>)}</tr>)}</tbody></table></div>
  </ToolShell>;
}

export function TeamBuilderPage({ navigate }) {
  const initial = new URLSearchParams(window.location.search).get("ids")?.split(",").map((id) => aniimo.find((item) => item.id === id)).filter(Boolean);
  const [team, setTeam] = useState(initial?.length ? initial.slice(0, 6) : []);
  const [copied, setCopied] = useState(false);
  const toggle = (item) => setTeam((current) => current.some((entry) => entry.id === item.id) ? current.filter((entry) => entry.id !== item.id) : current.length < 6 ? [...current, item] : current);
  const elements = [...new Set(team.map((item) => item.element))]; const roles = [...new Set(team.map((item) => item.role))];
  const copy = () => { navigator.clipboard?.writeText(`${window.location.origin}/team-builder/?ids=${team.map((item) => item.id).join(",")}`); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return <ToolShell kicker="Aniimo Tool" title="Aniimo Team Builder" intro="Build a six-slot team from the public database. Coverage is descriptive, not a final combat ranking, until live balance data is verified.">
    <div className="team-slots">{Array.from({ length: 6 }, (_, index) => { const item = team[index]; return <div className="team-slot" key={item?.id || index}>{item ? <><CreatureImage item={item} /><strong>{item.name}</strong><button type="button" aria-label={`Remove ${item.name}`} onClick={() => toggle(item)}><X size={14} /></button></> : <span>Slot {index + 1}</span>}</div>; })}</div>
    <AniimoPicker selected={team} onToggle={toggle} limit={6} />
    <div className="coverage-grid"><InfoPanel title="Element coverage" rows={elements.length ? elements.map((value) => [value, `${team.filter((item) => item.element === value).length} selected`]) : [["Elements", "Choose Aniimo to see coverage"]]} /><InfoPanel title="Role coverage" rows={roles.length ? roles.map((value) => [value, `${team.filter((item) => item.role === value).length} selected`]) : [["Roles", "Choose Aniimo to see coverage"]]} /></div>
    <div className="tool-actions"><button type="button" className="secondary-action" onClick={copy}><Copy size={16} /> {copied ? "Copied" : "Copy team link"}</button><a className="text-link" href="/compare/aniimo/" onClick={(e) => navigate(e, "/compare/aniimo/")}>Compare selected Aniimo <ChevronRight size={16} /></a></div>
  </ToolShell>;
}

export function CollectionTrackerPage({ navigate }) {
  const [state, setState] = useState(() => { try { return JSON.parse(localStorage.getItem("aniimo-tracker") || "{}"); } catch { return {}; } });
  const [filter, setFilter] = useState("All");
  useEffect(() => localStorage.setItem("aniimo-tracker", JSON.stringify(state)), [state]);
  const counts = Object.values(state).reduce((acc, value) => { acc[value] = (acc[value] || 0) + 1; return acc; }, {});
  const update = (id, value) => setState((current) => { const next = { ...current }; if (value === "none") delete next[id]; else next[id] = value; return next; });
  const exportData = () => { const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = "aniimo-collection.json"; link.click(); URL.revokeObjectURL(url); };
  const importData = (event) => { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const parsed = JSON.parse(reader.result); if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) setState(parsed); } catch { /* Ignore invalid backups. */ } }; reader.readAsText(file); event.target.value = ""; };
  return <ToolShell kicker="Aniimo Tool" title="Aniimo Collection Tracker" intro="Track wanted, captured and verified entries in this browser. No account is required; export a backup before changing devices.">
    <div className="tracker-summary"><strong>{Object.keys(state).length} / {aniimo.length}</strong><span>tracked entries</span><span>Wanted {counts.wanted || 0}</span><span>Captured {counts.captured || 0}</span><span>Verified {counts.verified || 0}</span><div className="progress-track"><span style={{ width: `${Math.min(100, (Object.keys(state).length / aniimo.length) * 100)}%` }} /></div></div>
    <div className="tracker-toolbar"><Select label="Show" value={filter} onChange={setFilter} options={["All", "wanted", "captured", "verified", "none"]} /><button type="button" className="secondary-action" onClick={() => setState({})}>Clear tracker</button></div>
    <div className="tracker-list">{aniimo.filter((item) => filter === "All" || (state[item.id] || "none") === filter).map((item) => <article className="tracker-row" key={item.id}><CreatureImage item={item} /><div><strong>{item.name}</strong><small>{item.element} · {item.region}</small></div><select value={state[item.id] || "none"} onChange={(e) => update(item.id, e.target.value)} aria-label={`Tracking status for ${item.name}`}><option value="none">Not tracked</option><option value="wanted">Wanted</option><option value="captured">Captured</option><option value="verified">Verified</option></select></article>)}</div>
    <div className="tool-actions"><button type="button" className="secondary-action" onClick={exportData}><DownloadIcon size={16} /> Export tracker</button><label className="secondary-action file-action"><DownloadIcon size={16} /> Import backup<input type="file" accept="application/json" onChange={importData} /></label><a className="text-link" href="/aniimo/" onClick={(e) => navigate(e, "/aniimo/")}>Open database <ChevronRight size={16} /></a></div>
  </ToolShell>;
}

export function MechanicsHubPage({ navigate }) {
  const officialMechanicPages = officialPitchTopics
    .filter((item) => item.slug.includes("twine") || item.slug.includes("egg-heist") || item.slug.includes("homeland"))
    .map((item) => [item.title, officialPitchTopicPath(item), item.description]);
  const mechanicPages = mechanicDeepDiveTopics.map((item) => [item.title, mechanicDeepDiveTopicPath(item), item.description]);
  const relatedGlossary = glossaryTopics
    .filter((item) => ["twine", "aniipod", "homeland", "egg-heist", "rv"].includes(item.slug))
    .map((item) => [item.term, glossaryTopicPath(item), item.definition]);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<Sparkles />} kicker="Mechanics" title="Aniimo Mechanics Guides" />
      <p className="section-copy">
        Learn the systems that make Aniimo searchable before launch: catching,
        Twine, Homeland, Egg Heist, Lost Isles and verification rules.
      </p>
      <div className="site-index-grid">
        <LinkGroup title="Official Mechanics" items={officialMechanicPages} navigate={navigate} />
        <LinkGroup title="Deep Dives" items={mechanicPages} navigate={navigate} />
        <LinkGroup title="Related Terms" items={relatedGlossary} navigate={navigate} />
        <LinkGroup title="Core Pages" items={[
          ["Beginner Guide", "/beginner-guide/", "Learn catching, Twine, environment encounters, Homeland and beginner progression."],
          ["Map Guide", "/map/", "Connect mechanics to regions, route notes and post-launch verification."],
          ["Launch Verification", "/launch-verification/", "Track the fields needed after launch for mechanics and routes."],
        ]} navigate={navigate} />
      </div>
    </section>
  );
}

export function LaunchHubPage({ navigate }) {
  const conversionPages = conversionTopics.map((item) => [item.title, conversionTopicPath(item), item.description]);
  const platformPages = staticRoutes.filter((route) => route.path.startsWith("/platforms/")).map((item) => [item.label, item.path, item.description]);
  const rewardPages = codeRewardTopics.map((item) => [item.title, codeRewardTopicPath(item), item.description]);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<CalendarDays />} kicker="Launch" title="Aniimo Launch Hub" />
      <p className="section-copy">
        Track launch dates, platform pages, wishlist and pre-registration actions,
        safe downloads, rewards and code status from one hub.
      </p>
      <div className="site-index-grid">
        <LinkGroup title="Launch Actions" items={conversionPages} navigate={navigate} />
        <LinkGroup title="Platform Pages" items={platformPages} navigate={navigate} />
        <LinkGroup title="Rewards & Codes" items={rewardPages} navigate={navigate} />
        <LinkGroup title="Launch Operations" items={[
          ["Launch Day", "/launch-day/", "Check server status, active codes, unlock timing and launch fixes."],
          ["Release Date", "/release-date/", "Track PC, console and mobile launch windows."],
          ["Launch Tracker", "/launch-tracker/", "Monitor source status, rewards, platforms and verification tasks."],
          ["Discord", "/topics/aniimo-discord/", "Check official community paths for launch notices and code announcements."],
          ["Troubleshooting", "/troubleshooting/", "Fix download, store visibility, pre-registration and region availability issues."],
          ["Server Status", "/troubleshooting/aniimo-server-status/", "Prepare a source-safe status page for launch-day outage searches."],
          ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Prepare a verified issue log for login, black screen and stuck-loading searches."],
        ]} navigate={navigate} />
        <LinkGroup title="Launch Search Risk Control" items={[
          ["APK Safety", "/topics/aniimo-apk/", "Route Android APK searches toward official storefronts."],
          ["Torrent Safety", "/topics/aniimo-torrent/", "Explain why unofficial downloads are the wrong launch path."],
          ["Beta Key Safety", "/topics/aniimo-beta-key/", "Keep access claims tied to official beta sources."],
          ["Official Website", "/topics/aniimo-official-website/", "Send users to verified site, Wiki and storefront links."],
        ]} navigate={navigate} />
        <LinkGroup title="Localized Launch Searches" items={localizedTopics.map((item) => [
          item.title,
          localizedTopicPath(item),
          item.description,
        ])} navigate={navigate} />
      </div>
    </section>
  );
}

export function GrowthHubPage({ navigate }) {
  const refreshPages = refreshPlanningTopics.map((item) => [item.title, refreshPlanningTopicPath(item), item.description]);
  const freshnessItems = freshnessPages.map((item) => [item.title, freshnessPagePath(item), item.description]);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<Compass />} kicker="Growth" title="Aniimo.games Growth Plan" />
      <p className="section-copy">
        This hub keeps future SEO work tied to Search Console evidence, source updates
        and page-refresh discipline instead of creating duplicate thin pages.
      </p>
      <div className="site-index-grid">
        <LinkGroup title="Refresh Planning" items={refreshPages} navigate={navigate} />
        <LinkGroup title="Freshness Trackers" items={freshnessItems} navigate={navigate} />
        <LinkGroup title="Latest GSC Actions" items={gscLatestObservations.actions.map(([label, action]) => [
          label,
          label.includes("Map") ? "/map/" : label.includes("Localized") ? "/launch/" : label.includes("Character") ? "/aniimo/" : "/",
          action,
        ])} navigate={navigate} />
        <LinkGroup title="Maintenance Pages" items={[
          ["Source Archive", "/source-archive/", "Review official source links and checked dates."],
          ["Launch Verification", "/launch-verification/", "Prepare post-launch evidence fields."],
          ["Update Log", "/updates/", "Track shipped content and source changes."],
          ["Site Index", "/site-index/", "Review all major content hubs and internal links."],
        ]} navigate={navigate} />
      </div>
    </section>
  );
}

export function GlossaryPage({ navigate }) {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<BookOpen />} kicker="Terms" title="Aniimo Glossary" />
      <p className="section-copy">
        Learn the official Aniimo terms that appear across database, map, rewards,
        launch and beginner guide pages.
      </p>
      <div className="site-index-grid">
        {glossaryTopics.map((item) => (
          <article className="link-group" key={item.slug}>
            <h2>{item.term}</h2>
            <p>{item.definition}</p>
            <a className="text-link" href={glossaryTopicPath(item)} onClick={(event) => navigate(event, glossaryTopicPath(item))}>
              Open term guide <ChevronRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MediaPage({ navigate }) {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<Map />} kicker="Media" title="Aniimo Images, Screenshots & Media Gallery" />
      <p className="section-copy">
        Browse the compressed visual assets used by Aniimo.games. Images are selected for
        guide context, region discovery, social previews and source-safe SEO pages.
      </p>
      <div className="media-grid">
        {mediaGalleryItems.map((item) => (
          <article className="media-card" key={item.image}>
            <img src={item.image} alt={item.title} width="420" height="236" loading="lazy" decoding="async" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="related-section">
        <h2>Media Detail Guides</h2>
        <div className="site-index-grid">
          {mediaDetailTopics.map((item) => (
            <article className="link-group" key={item.slug}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a className="text-link" href={mediaDetailTopicPath(item)}>
                Open media guide <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
      <LinkGroup title="Brand & Community Searches" items={[
        ["Aniimo Logo", "/media/aniimo-logo/", "Track logo search intent, brand assets and image-source notes."],
        ["Aniimo Trailers", "/media/aniimo-trailers/", "Track official trailers, gameplay footage and platform clips."],
        ["Aniimo Official Website", "/topics/aniimo-official-website/", "Find official site, Wiki and storefront paths."],
        ["Aniimo Reddit", "/topics/aniimo-reddit/", "Use community discussion as research signal, not final proof."],
      ]} navigate={navigate} />
      <LinkGroup title="Event & Reveal Searches" items={[
        ["PAX East Watchlist", "/topics/aniimo-pax-east/", "Track event footage and announcements only when sources verify them."],
        ["TGS Watchlist", "/topics/aniimo-tgs/", "Route Tokyo Game Show intent into source-safe media checks."],
        ["Gameplay", "/topics/aniimo-gameplay/", "Connect footage searches to confirmed gameplay systems."],
        ["Demo Status", "/topics/aniimo-demo/", "Separate demo, playtest and closed beta searches."],
      ]} navigate={navigate} />
      <FaqBlock items={[
        ["Why does Aniimo.games compress media?", "Compressed WebP assets improve page speed while preserving useful screenshots, banners and region context."],
        ["Can media pages include unofficial images?", "Only when rights, source and page purpose are clear. Official or site-prepared assets are preferred."],
      ]} />
    </section>
  );
}

export function TroubleshootingPage({ navigate }) {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<Download />} kicker="Help" title="Aniimo Download & Pre-Registration Troubleshooting" />
      <p className="section-copy">
        Use these pages when a download, wishlist, pre-order, store page or
        pre-registration flow is unavailable on a specific platform or country.
      </p>
      <LaunchStatusPanel title="Live Issue Status" entries={launchStatusEntries.filter((entry) => ["server", "known-issues", "pc-console", "mobile"].includes(entry.id))} />
      <div className="site-index-grid">
        {troubleshootingTopics.map((item) => (
          <article className="link-group" key={item.slug}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a className="text-link" href={troubleshootingTopicPath(item)} onClick={(event) => navigate(event, troubleshootingTopicPath(item))}>
              Open troubleshooting guide <ChevronRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SourceArchivePage() {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<CheckCircle2 />} kicker="Sources" title="Aniimo Source Archive" />
      <p className="section-copy">
        This archive records the official sources used by Aniimo.games and which content
        areas each source supports. It helps future updates stay source-aware.
      </p>
      <div className="source-list">
        {sourceArchiveItems.map((item) => (
          <a className="source-row" key={item.title} href={item.url} target="_blank" rel="noreferrer">
            <span>{item.title}</span>
            <span>{item.scope} Last checked: {item.lastChecked}.</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function TopicGuidePage({ topic, kicker, icon, children, navigate }) {
  const relatedLinks = topicRelatedLinks(topic);
  const evidenceQueue = topicEvidenceQueue(topic);
  const intentStatus = searchIntentStatus[topic.slug];
  const statusEntry = intentStatus ? launchStatusEntries.find((entry) => entry.id === intentStatus.statusId) : null;

  return (
    <section className="section sources-band">
      <SectionTitle icon={icon} kicker={kicker} title={topic.title} />
      {topic.image && <img className="page-banner" src={topic.image} alt={topic.title} width="1600" height="900" loading="lazy" decoding="async" />}
      <p className="section-copy">{topic.intro}</p>
      <InfoPanel title="Page Status" rows={[
        ["Last reviewed", sourceLastChecked],
        ["What is confirmed", "Details remain provisional until official or live-game evidence confirms them."],
        ["Last checked", "This page is reviewed again when official information or live-game evidence changes."],
      ]} />
      {statusEntry && <LaunchStatusPanel title="Answer Status" entries={[statusEntry]} />}
      {intentStatus && <InfoPanel title="What We Are Checking Next" rows={[["Next check", intentStatus.action], ["Page", topic.title]]} />}
      <EditorialBlock title="Key Points" items={topic.points} />
      {evidenceQueue && <EvidenceQueue queue={evidenceQueue} />}
      {children}
      <EditorialBlock title="Next Checks" items={relatedLinks.map(([label, href, text]) => [
        label,
        <a className="text-link" href={href}>{text} <ChevronRight size={16} /></a>,
      ])} />
      <FaqBlock items={topic.faq} />
      <div className="hero-actions section-actions topic-next-actions">
        <a className="primary-action" href="/guides/" onClick={(event) => navigate?.(event, "/guides/")}><BookOpen size={18} /> Browse related guides</a>
        <a className="secondary-action" href={topic.source} target="_blank" rel="noreferrer"><Search size={18} /> Check official source</a>
      </div>
    </section>
  );
}

function topicRelatedLinks(topic) {
  const slug = topic.slug || "";
  const links = [
    ["Launch Day", "/launch-day/", "Open the launch-day command center"],
    ["Official Sources", "/source-archive/", "Check the source archive"],
  ];
  const exactLinks = topicExactRelatedLinks(slug);

  if (exactLinks) {
    links.push(...exactLinks);
    return links;
  }

  if (slug.includes("apk") || slug.includes("torrent") || slug.includes("beta-key")) {
    links.push(
      ["Safe Download", "/download/", "Use official download paths"],
      ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Check launch issue notes"],
    );
  } else if (slug.includes("steam") || slug.includes("game-pass") || slug.includes("ps4") || slug.includes("cross-save") || slug.includes("controller") || slug.includes("system-requirements")) {
    links.push(
      ["Platform Hub", "/download/", "Compare official platform links"],
      ["Release Date", "/release-date/", "Check platform timing"],
    );
  } else if (slug.includes("discord") || slug.includes("reddit") || slug.includes("official-website")) {
    links.push(
      ["Source Archive", "/source-archive/", "Verify official and community links"],
      ["Updates", "/updates/", "Review freshness updates"],
    );
  } else if (slug.includes("trailer") || slug.includes("logo") || slug.includes("pax") || slug.includes("tgs")) {
    links.push(
      ["Media Gallery", "/media/", "Browse media and asset notes"],
      ["News Tracker", "/topics/aniimo-news/", "Check official news freshness"],
    );
  } else if (slug.includes("gameplay") || slug.includes("combat") || slug.includes("solo") || slug.includes("review") || slug.includes("demo") || slug.includes("mmo") || slug.includes("evolution-list") || slug.includes("locations") || slug.includes("shiny") || slug.includes("aniilog") || slug.includes("carried-items")) {
    links.push(
      ["Beginner Guide", "/beginner-guide/", "Start with source-safe beginner notes"],
      ["Mechanics Hub", "/mechanics/", "Review mechanics and verification pages"],
    );
  } else {
    links.push(
      ["Download", "/download/", "Find official platform links"],
      ["Release Date", "/release-date/", "Check launch timing"],
    );
  }

  if (slug === "aniimo-reddit") {
    links.push(
      ["Verified Launch Answer", "/release-date/", "Check confirmed launch timing"],
      ["Official Game Download", "/download/", "Use safe platform download paths"],
      ["Creature Database", "/aniimo/", "Search named creatures and evolutions"],
    );
  }

  return links;
}

function topicExactRelatedLinks(slug) {
  const map = {
    "aniimo-cross-save": [
      ["Crossplay", "/compare/aniimo-crossplay/", "Compare platform matchmaking status"],
      ["Platform Pages", "/download/", "Check official platform availability"],
      ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Track account and platform problems"],
    ],
    "aniimo-controller-support": [
      ["Best Settings", "/aniimo-best-settings/", "Prepare input and camera checks"],
      ["Steam Deck", "/topics/aniimo-steam-deck/", "Check handheld compatibility"],
      ["Platform Pages", "/download/", "Compare platform-specific controls"],
    ],
    "aniimo-system-requirements": [
      ["Download", "/download/", "Find official storefront paths"],
      ["Best Settings", "/aniimo-best-settings/", "Track performance settings after launch"],
      ["Black Screen", "/troubleshooting/aniimo-known-issues/", "Watch launch stability reports"],
    ],
    "aniimo-combat": [
      ["Roles Guide", "/aniimo-roles/", "Compare DPS, Support, Heal and BREAK tags"],
      ["Elements Guide", "/aniimo-elements/", "Browse element collections"],
      ["Twine Abilities", "/mechanics/twine-abilities/", "Track combat and traversal uses"],
    ],
    "aniimo-solo": [
      ["Beginner Guide", "/beginner-guide/", "Start with solo-friendly launch planning"],
      ["Egg Heist", "/guides/aniimo-egg-heist-guide/", "Check team-mode boundaries"],
      ["Multiplayer", "/compare/aniimo-multiplayer/", "Compare online-system status"],
    ],
    "aniimo-evolution-list": [
      ["Evolution Hub", "/evolution/", "Browse form and evolution coverage"],
      ["Stages", "/stages/lumin-stage/", "Start with stage collection pages"],
      ["Database", "/aniimo/", "Search Aniimo by family and stage"],
    ],
    "aniimo-locations": [
      ["Map", "/map/", "Open region and route guides"],
      ["Launch Verification", "/launch-verification/", "Use spawn verification templates"],
      ["Region Availability", "/troubleshooting/aniimo-region-availability/", "Check regional access notes"],
    ],
    "aniimo-vs-temtem": [
      ["Multiplayer", "/compare/aniimo-multiplayer/", "Check online-system claims"],
      ["Co-Op", "/compare/aniimo-coop/", "Separate team play from open-world co-op"],
      ["Gameplay", "/topics/aniimo-gameplay/", "Review confirmed Aniimo systems"],
    ],
    "games-like-aniimo": [
      ["Pokemon-Style Comparison", "/compare/aniimo-vs-pokemon/", "Compare creature-collecting intent"],
      ["Palworld-Style Comparison", "/compare/aniimo-vs-palworld/", "Compare open-world expectations"],
      ["Gameplay", "/topics/aniimo-gameplay/", "Return to confirmed Aniimo features"],
    ],
    "aniimo-codes-not-working": [
      ["Active Codes", "/codes/active/", "Check whether a code is confirmed active"],
      ["How to Redeem", "/codes/how-to-redeem/", "Prepare redeem-flow checks"],
      ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Track launch error reports"],
    ],
  };

  return map[slug];
}

function topicEvidenceQueue(topic) {
  const slug = topic.slug || "";
  if (slug.includes("multiplayer") || slug.includes("coop") || slug.includes("pvp") || slug.includes("ai") || slug.includes("reddit") || slug.includes("discord")) return launchEvidenceQueues.launchExperience;
  if (slug.includes("code") || slug.includes("beta-key")) return launchEvidenceQueues.codes;
  if (slug.includes("apk") || slug.includes("torrent") || slug.includes("download") || slug.includes("steam") || slug.includes("game-pass") || slug.includes("ps4") || slug.includes("cross-save") || slug.includes("controller") || slug.includes("system-requirements")) return launchEvidenceQueues.download;
  if (slug.includes("pax") || slug.includes("tgs") || slug.includes("trailer") || slug.includes("logo")) return launchEvidenceQueues.events;
  if (slug.includes("shiny") || slug.includes("aniilog") || slug.includes("carried-items")) return launchEvidenceQueues.variants;
  if (slug.includes("gameplay") || slug.includes("combat") || slug.includes("solo") || slug.includes("review") || slug.includes("demo") || slug.includes("mmo") || slug.includes("twine") || slug.includes("egg-heist") || slug.includes("lost-isles") || slug.includes("evolution-list") || slug.includes("locations")) return launchEvidenceQueues.gameplay;
  return null;
}

function EvidenceQueue({ queue }) {
  return (
    <section className="related-section">
      <h2>{queue.title}</h2>
      <div className="table-shell freshness-table">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Evidence Needed</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {queue.rows.map(([field, evidence, status]) => (
              <tr key={field}>
                <td>{field}</td>
                <td>{evidence}</td>
                <td>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function BeginnerTopicPage({ topic, navigate }) {
  return (
    <section className="section guide-band">
      <SectionTitle icon={<BookOpen />} kicker="Beginner" title={topic.title} />
      <p className="section-copy">{topic.intro}</p>
      <EditorialBlock title="Guide Notes" items={topic.points} />
      <RelatedAniimo title="Useful Aniimo To Compare" items={aniimo.filter((item) => item.element !== "Unknown").slice(0, 6)} navigate={navigate} />
      <FaqBlock items={topic.faq} />
    </section>
  );
}

export function DownloadTopicPage({ topic }) {
  return (
    <section className="section split-section download-band">
      <div>
        <SectionTitle icon={<Download />} kicker="Download" title={topic.title} />
        <p className="section-copy">{topic.intro}</p>
        <EditorialBlock title="Download Checklist" items={topic.points} />
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

export function CodeRewardTopicPage({ topic }) {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<Gift />} kicker="Codes & Rewards" title={topic.title} />
      <p className="section-copy">{topic.intro}</p>
      <RewardGrid />
      <SeoGuideBlock items={seoGuides.codes} />
      <FaqBlock items={faqs.codes} />
    </section>
  );
}

export function NewsTopicPage({ topic }) {
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="News" title={topic.title} />
      <p className="section-copy">{topic.summary}</p>
      <div className="detail-panels">
        <InfoPanel title="Source" rows={[["Published", topic.date], ["Official source", topic.source], ["Status", "Tracked from public source material"]]} />
        <InfoPanel title="Next Review" rows={[["Release pages", "Refresh if date, platform or unlock wording changes."], ["Rewards", "Refresh if milestone or claim text changes."], ["Codes", "Refresh only when an official redeemable string appears."]]} />
      </div>
      <a className="text-link" href={topic.source} target="_blank" rel="noreferrer">
        Official source <ChevronRight size={16} />
      </a>
    </section>
  );
}

export function LocationTopicPage({ region, navigate }) {
  const regionAniimo = aniimo.filter((item) => item.region === region.name);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<Map />} kicker="Locations" title={`${region.name} Aniimo Location Guide`} />
      <p className="section-copy">
        Track {region.name} encounters, route notes and spawn verification tasks without
        publishing exact coordinates before live-game checks are available.
      </p>
      <RegionImage region={region} />
      <div className="detail-panels">
        <InfoPanel title="Region Focus" rows={[["Theme", region.theme], ["Mechanics", region.mechanics.join(", ")], ["Status", region.status]]} />
        <InfoPanel title="Verification Queue" rows={region.checklist.map((item, index) => [`Check ${index + 1}`, item])} />
      </div>
      <RelatedAniimo title={`${region.name} Aniimo`} items={regionAniimo} navigate={navigate} />
    </section>
  );
}

export function ChoiceTopicPage({ topic, navigate }) {
  const filterMap = {
    "best-fire-aniimo": (item) => item.element === "Fire",
    "best-support-aniimo": (item) => item.role === "Support",
    "best-dps-aniimo": (item) => item.role === "DPS",
    "best-healer-aniimo": (item) => item.role === "Heal",
  };
  const picks = aniimo.filter(filterMap[topic.slug] || ((item) => item.element !== "Unknown" && item.role !== "Watchlist")).slice(0, 9);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<Sparkles />} kicker="Watchlist" title={topic.title} />
      <p className="section-copy">{topic.description} Final rankings should wait for live balance, route access and team testing.</p>
      {topic.slug === "aniimo-tier-list" && <InfoPanel title="Tier List Quick Answer" rows={[["Current status", "Pre-launch watchlist, not a final ranking"], ["How to use", "Compare confirmed role, element, stage and source status"], ["Next update", "Add dated PvE, PvP and early-game evidence after launch"]]} />}
      {topic.slug === "aniimo-tier-list" && (
        <section className="tier-snapshot" aria-label="Tier list evidence">
          <h2>Ranking Evidence</h2>
          <div className="detail-panels">
            {tierListSnapshots.map((snapshot) => (
              <InfoPanel key={snapshot.id} title={snapshot.label} rows={[
                ["Status", snapshot.status],
                ["Updated", snapshot.updated],
                ["Context", snapshot.context],
                ["Evidence", snapshot.evidence],
                ["Next check", snapshot.nextCheck],
              ]} />
            ))}
          </div>
        </section>
      )}
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
              <a className="text-link" href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
                View Aniimo guide <ChevronRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <FaqBlock items={[
        ["Is this a final Aniimo tier list?", "No. This is a pre-launch watchlist until live testing confirms balance, availability and team value."],
        ["How are picks chosen?", "Picks use confirmed public entries, role labels, element labels, evolution lines and source status."],
      ]} />
    </section>
  );
}

function LinkGroup({ title, items, navigate }) {
  return (
    <article className="link-group">
      <h2>{title}</h2>
      <div className="link-list">
        {items.map(([label, href, text]) => (
          <a key={href} href={href} onClick={(event) => navigate(event, href)}>
            <strong>{label}</strong>
            <span>{text}</span>
          </a>
        ))}
      </div>
    </article>
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
        This pre-launch list focuses on confirmed public entries that are useful for planning:
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
  const platformMap = {
    steam: {
      title: "Aniimo Steam Download Guide",
      intro: "Aniimo PC availability is tracked for September 16, 2026, with Steam acting as one of the official storefronts.",
      names: ["Steam"],
      image: "/images/media/aniimo-steam-store.webp",
      notes: [
        { title: "Use the official Steam listing", body: "PC players should wishlist Aniimo through Steam or use the official website to confirm launch availability. Avoid reposted installers." },
        { title: "Release timing", body: `Steam launch is tied to the PC and console window on ${releaseInfo.pcConsole}. Exact hourly unlock timing still needs storefront confirmation.` },
        { title: "Account planning", body: "Use the Steam account you expect to play on at launch so wishlist and launch notices stay connected to the right storefront." },
      ],
    },
    mobile: {
      title: "Aniimo Mobile Download Guide",
      intro: "Aniimo mobile availability is tracked for September 23, 2026 through official iOS and Android storefronts.",
      names: ["App Store", "Google Play"],
      image: "/images/media/aniimo-google-play-store.webp",
      notes: [
        { title: "Use official mobile listings", body: "Mobile players should use App Store or Google Play pages when they are visible in their region. Avoid unofficial APK mirrors before launch." },
        { title: "Release timing", body: `Mobile launch is currently tracked for ${releaseInfo.mobile}. Store visibility can vary by country and local storefront timing.` },
        { title: "Account planning", body: "Use the mobile store account you expect to play on at launch so pre-order or pre-registration notices stay connected to the right storefront." },
      ],
    },
    ps5: {
      title: "Aniimo PS5 Download & Wishlist Guide",
      intro: "Aniimo PlayStation 5 availability is tracked through the official PlayStation listing and the September 16, 2026 console launch window.",
      names: ["PlayStation 5"],
      image: "/images/media/aniimo-playstation-store.webp",
      notes: [
        { title: "Use the PlayStation listing", body: "Console players should use the official PlayStation page or the Aniimo website to track wishlist and launch availability." },
        { title: "Release timing", body: `PS5 launch is tied to the PC and console window on ${releaseInfo.pcConsole}. Exact regional store timing still needs storefront confirmation.` },
        { title: "Before launch", body: "Keep platform-store alerts enabled and avoid any download page that is not connected to PlayStation or the official Aniimo website." },
      ],
    },
    xbox: {
      title: "Aniimo Xbox Download & Wishlist Guide",
      intro: "Aniimo Xbox availability is tracked through the official Xbox listing and the September 16, 2026 console launch window.",
      names: ["Xbox"],
      image: "/images/media/aniimo-xbox-store.webp",
      notes: [
        { title: "Use the Xbox listing", body: "Xbox players should use the official Microsoft store page or the Aniimo website to track wishlist and launch availability." },
        { title: "Release timing", body: `Xbox launch is tied to the PC and console window on ${releaseInfo.pcConsole}. Exact hourly unlock timing still needs storefront confirmation.` },
        { title: "Reward planning", body: "Use the same Xbox account you expect to play on at launch so store notices and launch access stay aligned." },
      ],
    },
    "epic-games": {
      title: "Aniimo Epic Games Store Download Guide",
      intro: "Aniimo Epic Games Store availability is tracked through the official Epic listing and the September 16, 2026 PC launch window.",
      names: ["Epic Games Store"],
      image: "/images/media/aniimo-steam-store.webp",
      notes: [
        { title: "Use the Epic listing", body: "PC players can track Aniimo through the official Epic Games Store page or the official Aniimo website." },
        { title: "Release timing", body: `Epic Games Store launch is tied to the PC and console window on ${releaseInfo.pcConsole}. Exact store unlock timing still needs confirmation.` },
        { title: "Installer safety", body: "Do not use reposted installers or unofficial download buttons before the official store page provides access." },
      ],
    },
    ios: {
      title: "Aniimo iOS Download & App Store Guide",
      intro: "Aniimo iOS availability is tracked through the official App Store listing and the September 23, 2026 mobile launch window.",
      names: ["App Store"],
      image: "/images/media/aniimo-google-play-store.webp",
      notes: [
        { title: "Use the App Store", body: "iPhone and iPad players should use the official App Store listing when it is visible in their region." },
        { title: "Release timing", body: `iOS launch is tracked for ${releaseInfo.mobile}. App Store visibility can vary by country and account region.` },
        { title: "Pre-order notes", body: "If pre-order is available in your region, use the account you expect to play on at launch." },
      ],
    },
    android: {
      title: "Aniimo Android Download & Google Play Guide",
      intro: "Aniimo Android availability is tracked through the official Google Play listing and the September 23, 2026 mobile launch window.",
      names: ["Google Play"],
      image: "/images/media/aniimo-google-play-store.webp",
      notes: [
        { title: "Use Google Play", body: "Android players should use the official Google Play page by Pawprint Studio when it is available in their region." },
        { title: "Release timing", body: `Android launch is tracked for ${releaseInfo.mobile}. Google Play visibility can vary by country and local rollout timing.` },
        { title: "APK safety", body: "Avoid APK mirrors before launch. This site links to official storefronts and does not host installers." },
      ],
    },
  };
  const platformConfig = platformMap[type] || platformMap.steam;
  const pagePlatforms = platforms.filter((storefront) =>
    platformConfig.names.includes(storefront.name),
  );

  return (
    <section className="section split-section download-band">
      <a className="text-link" href="/download/">Back to all download options <ChevronRight size={16} /></a>
      <div>
        <SectionTitle icon={<Download />} kicker="Platforms" title={platformConfig.title} />
        {platformConfig.image && <img className="page-banner" src={platformConfig.image} alt={`${platformConfig.names.join(" and ")} Aniimo store listing`} width="1600" height="900" loading="lazy" decoding="async" />}
        <p className="section-copy">{platformConfig.intro}</p>
        <SeoGuideBlock compact items={platformConfig.notes} />
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
      <InfoPanel title="Editorial Ownership" rows={[
        ["Maintained by", "Aniimo.games Editorial Team"],
        ["First published", "2026-08-27"],
        ["Last reviewed", sourceLastChecked],
        ["Evidence standard", "Official public sources first; community reports remain research leads until verified."],
      ]} />
      <SeoGuideBlock items={[
        { title: "What we cover", body: "We cover public Aniimo Wiki entries, official storefront links, public launch information, rewards, regions, gameplay mechanics and route notes that can be verified after launch." },
        { title: "How we label data", body: "Confirmed data is tied to official or in-game sources. Watchlist and unknown fields are used when an entry exists but exact element, role, region, stage or spawn information still needs verification." },
        { title: "Why this exists", body: "Search users often need one clean place to compare Aniimo entries, official sources and practical guide pages without mixing confirmed facts with unsourced claims." },
      ]} />
      <LinkGroup title="Trust Pages" items={[
        ["Editorial Policy", "/editorial-policy/", "Review how Aniimo.games handles sources, rumors and corrections."],
        ["Source Archive", "/source-archive/", "Check official Aniimo sources, storefronts and last-reviewed notes."],
        ["Contact", "/contact/", "Send corrections with the affected URL and official source."],
        ["Does Aniimo Use AI?", "/compare/aniimo-ai/", "Review AI-related claims through official-source boundaries."],
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
      <LinkGroup title="Policy In Action" items={[
        ["Reddit Discussions", "/topics/aniimo-reddit/", "Treat community posts as research leads, not confirmed facts."],
        ["Discord Server", "/topics/aniimo-discord/", "Verify invite and code claims through official channels."],
        ["Beta Key Safety", "/topics/aniimo-beta-key/", "Avoid gray-market access and fake beta-code pages."],
        ["Launch Verification", "/launch-verification/", "Record route, code, platform and GSC evidence after launch."],
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
      <LinkGroup title="Before Sending A Correction" items={[
        ["Editorial Policy", "/editorial-policy/", "Check source hierarchy and correction standards."],
        ["Source Archive", "/source-archive/", "Find the official source type that supports the change."],
        ["Update Log", "/updates/", "Review recent source and content changes."],
        ["Launch Tracker", "/launch-tracker/", "Check whether the item is already in the verification queue."],
      ]} />
    </section>
  );
}

export function AniimoDetail({ item, navigate, localized = false }) {
  const pt = localized;
  const sameElement = aniimo.filter((candidate) => candidate.id !== item.id && candidate.element === item.element).slice(0, 6);
  const sameRegion = aniimo.filter((candidate) => candidate.id !== item.id && candidate.region === item.region).slice(0, 6);
  const sameRole = aniimo.filter((candidate) => candidate.id !== item.id && candidate.role === item.role).slice(0, 6);
  const sameStage = aniimo.filter((candidate) => candidate.id !== item.id && candidate.stage === item.stage).slice(0, 6);

  return (
    <section className="section page-detail">
      <a className="text-link" href={pt ? "/pt-br/aniimo/" : "/aniimo/"} onClick={(event) => navigate(event, pt ? "/pt-br/aniimo/" : "/aniimo/")}>{pt ? "Voltar para a Pokédex" : "Back to database"}</a>
      <div className="detail-hero">
        <CreatureImage item={item} large />
        <div>
          <p className="eyebrow">{pt ? "Detalhes do Aniimo" : "Aniimo detail page"}</p>
          <h1>{pt ? `${item.name}: localização, evolução, formas e habilidades` : `${item.name} Location, Evolution, Forms & Abilities`}</h1>
          <p>{pt ? `Confira ${item.name}, Aniimo nº ${item.no}, com região, função, estágio, formas e status da fonte oficial.` : item.description}</p>
          <StatusBadge status={item.status} />
        </div>
      </div>
      <div className="tool-actions detail-tool-actions">
        <a className="secondary-action" href={`/compare/aniimo/?ids=${item.id}`} onClick={(event) => navigate(event, `/compare/aniimo/?ids=${item.id}`)}><Copy size={16} /> Compare this Aniimo</a>
        <a className="secondary-action" href={`/team-builder/?ids=${item.id}`} onClick={(event) => navigate(event, `/team-builder/?ids=${item.id}`)}><Plus size={16} /> Add to team</a>
        <a className="secondary-action" href="/collection-tracker/" onClick={(event) => navigate(event, "/collection-tracker/")}><CheckCircle2 size={16} /> Track collection</a>
      </div>
      <div className="detail-panels">
        <InfoPanel title="Location" rows={[["Region", item.region], ["Habitat", item.habitat], ["Spawn condition", item.condition], ["Acquisition", item.acquisition]]} />
        <InfoPanel title="Index Data" rows={[["No.", item.no], ["Element", item.element], ["Role", item.role], ["Stage", item.stage]]} />
        <InfoPanel title="Search Match" rows={[
          ["Query pattern", `${item.name.toLowerCase()} aniimo, ${item.name} location, ${item.name} evolution`],
          ["Snippet focus", `${item.name} no. ${item.no}, ${item.element} element, ${item.role} role, ${item.stage}.`],
          ["Source status", item.status],
        ]} />
        <InfoPanel title="Evolution" rows={[["Listed form", item.forms.join(" -> ")], ["Evolution note", item.evolution], ["Detail plan", item.evolutionDetail]]} />
        <InfoPanel title="Abilities" rows={[["Official description", item.ability], ["Recommended use", item.use], ["Use case", item.abilityUseCase]]} />
        <InfoPanel title="How to Get" rows={[["Method", item.acquisition], ["Route", item.region], ["Verification", "Exact spawn points should be added after official launch or in-game confirmation."]]} />
        <InfoPanel title="Best Uses" rows={[["Role plan", item.use], ["Team note", `Pair ${item.name} with complementary ${item.element} or ${item.role} Aniimo while team data is verified.`]]} />
        <SourcePanel source={item.source} status={item.status} />
      </div>
      <div className="detail-editorial">
        <GuideItem title={`${item.name} location notes`} text={item.locationNote} />
        <GuideItem title="Related route logic" text={item.relatedRegionReason} />
        <GuideItem title="Source note" text={item.sourceNote} />
      </div>
      <RelatedAniimo title={pt ? "Linha de evolução" : "Evolution Line"} items={aniimo.filter((candidate) => item.forms.includes(candidate.name))} navigate={navigate} localized={pt} />
      <RelatedAniimo title={pt ? `Mais Aniimo de ${item.region}` : `More ${item.region} Aniimo`} items={sameRegion} navigate={navigate} localized={pt} />
      <RelatedAniimo title={pt ? `Mais Aniimo de elemento ${item.element}` : `More ${item.element} Aniimo`} items={sameElement} navigate={navigate} localized={pt} />
      <RelatedAniimo title={pt ? `Mais Aniimo de função ${item.role}` : `More ${item.role} Aniimo`} items={sameRole} navigate={navigate} localized={pt} />
      <RelatedAniimo title={pt ? `Mais Aniimo de estágio ${item.stage}` : `More ${item.stage} Aniimo`} items={sameStage} navigate={navigate} localized={pt} />
      <RelatedRegions currentRegion={item.region} navigate={navigate} />
      <FaqBlock items={[
        [`Where can I find ${item.name}?`, `${item.name} is listed in the official Aniimo Wiki and tracked under ${item.region}. Exact spawn points can be added after launch verification.`],
        [`What forms does ${item.name} have?`, `${item.name} currently lists these forms: ${item.forms.join(", ")}.`],
        [`What role is ${item.name}?`, `${item.name} is currently tagged as ${item.role} and ${item.stage}.`],
        ...(item.id === "celestis" ? [["What is Celestis in Aniimo?", "Celestis is Aniimo No. 005, currently listed as a Holy Support Aniimo at Lumin Stage. Its exact live-game location, ability values and evolution requirements remain subject to launch verification."]] : []),
        ...(item.id === "glacy" ? [["Where is Glacy in Aniimo?", "Glacy is currently tracked in Nimbus Fields as an Ice DPS Aniimo at Lumin Stage. This page does not publish a precise spawn point until it is confirmed in the live game or by an official source."]] : []),
        ...(item.id === "inferlupa" ? [["How do I get Inferlupa in Aniimo?", "Inferlupa is Aniimo No. 004, a Fire DPS entry at Nova Stage. Its acquisition route and any evolution requirement should be treated as watchlist data until live-game or official evidence is available."]] : []),
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
        <InfoPanel title="Route Notes" rows={[["Exploration", region.theme], ["Mechanics", region.mechanics.join(", ")], ["Data status", statuses[region.status]], ["Last updated", siteLastUpdated]]} />
        <InfoPanel title="Launch Checklist" rows={region.checklist.map((item, index) => [`Check ${index + 1}`, item])} />
      </div>
      <div className="detail-editorial">
        <GuideItem title={`${region.name} guide plan`} text={region.guideNote} />
        <GuideItem title="Verification priority" text={`After launch, add route screenshots, exact encounter notes and mechanic-specific checks for ${region.mechanics.join(", ")}.`} />
        <GuideItem title="Source note" text={`This page uses official region material first. Community route findings should be added only after they can be checked against the live game.`} />
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

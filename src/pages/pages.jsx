import React, { useEffect, useMemo, useState } from "react";
import { BookOpen, CalendarDays, CheckCircle2, ChevronRight, Compass, Download, Gift, Map, Search, Sparkles, Plus, X, Copy, Download as DownloadIcon } from "lucide-react";
import { aniimo, beginnerTopics, choiceTopics, codeRewardTopics, codeVerificationTemplate, codes, conversionTopics, currentPatch, downloadTopics, editorialGuides, eventSchedule, eventStatus, faqs, freshnessPages, freshnessWatchlist, gameInfo, glossaryTopics, gscLatestObservations, gscObservationTemplate, launchDayCommandCenter, launchEvidenceQueues, launchPriorityPages, launchRewards, launchStatusEntries, launchTracker, liveIssueRegistry, liveSupportStatus, liveUpdate, localizedTopics, mapGuide, mechanicDeepDiveTopics, mechanics, mediaDetailTopics, mediaGalleryItems, newsTopics, officialLinks, officialPitchTopics, platformStatusByName, platformUnlockQueue, platforms, postLaunchEvidence, refreshPlanningTopics, regions, releaseInfo, searchIntentStatus, searchSuggestionTopics, seoGuides, siteLastUpdated, socialDiscussionResearch, socialIntentTopics, sourceArchiveItems, sourceLastChecked, spawnVerificationQueue, statuses, tierListSnapshots, troubleshootingTopics, updates, updateWorkflowMatrix, verificationTemplates } from "../../data/content.js";
import { aniimoPath, beginnerTopicPath, choiceTopicPath, codeRewardTopicPath, conversionTopicPath, downloadTopicPath, elementPath, freshnessPagePath, glossaryTopicPath, localizedTopicPath, locationTopicPath, mechanicDeepDiveTopicPath, mediaDetailTopicPath, newsTopicPath, officialPitchTopicPath, refreshPlanningTopicPath, regionPath, rolePath, searchSuggestionTopicPath, socialIntentTopicPath, stagePath, staticRoutes, statusPath, troubleshootingTopicPath } from "../lib/routes.js";
import { AnswerStatus, CreatureImage, EditorialBlock, FaqBlock, GuideItem, InfoPanel, LaunchStatusPanel, QuickCard, RegionImage, RelatedAniimo, RelatedRegions, SectionTitle, Select, SeoGuideBlock, SourcePanel, StatusBadge, TaxonomyLinks } from "../components/ui.jsx";

const priorityAniimoIds = ["celestis", "inferlupa", "glacy", "susuta", "emberpup", "eklue", "skippy", "helgon"];
const highIntentAniimoIds = new Set(["besauce", "fragrancier", "infergon", "blazen", "tubster", "fentuft", "thornblade", "pawney", "fenmane", "geodeback"]);

function priorityAniimoPages() {
  return priorityAniimoIds
    .map((id) => aniimo.find((item) => item.id === id))
    .filter(Boolean);
}

function creatureSearchAnswer(item) {
  const unverified = [item.element, item.role, item.stage, item.region].filter((value) => value === "Unknown" || value === "Official Wiki").length > 0;
  return [
    ["Official identity", `${item.name} is listed as Aniimo No. ${item.no} in the tracked public Wiki data.`],
    ["Current classification", `${item.element} element, ${item.role} role, ${item.stage} stage, ${item.region} region.`],
    ["Location and evolution", unverified ? "Exact location, evolution and gameplay-use details are still watchlist fields. This page does not infer them from the name or flavor text." : "Use the source-labeled region and form information above; exact routes, conditions and requirements still need official or reproducible in-game verification."],
    ["Last reviewed", sourceLastChecked],
  ];
}

function gscWatchlistPath(query) {
  const value = query.toLowerCase();
  if (value.includes("controller")) return "/topics/aniimo-controller-support/";
  if (value.includes("discord")) return "/topics/aniimo-discord/";
  if (value.includes("reddit")) return "/topics/aniimo-reddit/";
  if (value.includes("blitzwood")) return "/regions/blitzwood/";
  if (value.includes("mistwoods")) return "/regions/mistwoods/";
  if (value.includes("eko location")) return "/aniimo/eko/";
  if (value.includes("geschenkcode")) return "/codes/";
  if (value.includes("reroll")) return "/aniimo-reroll-guide/";
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
  const activeEventCount = liveUpdate.events.filter((event) => eventStatus(event) === "Active").length;
  return (
    <>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Independent live Aniimo guide</p>
            <h1>Server status, downloads, issues and Aniimo answers.</h1>
            <p>{gameInfo.summary} Check a dated support answer, use an official store path, browse known issues, or search the public database without sorting through rumor guides.</p>
            <div className="hero-actions">
              <a className="primary-action" href="/troubleshooting/aniimo-server-status/" onClick={(event) => props.navigate(event, "/troubleshooting/aniimo-server-status/")}>
                <CheckCircle2 size={18} />
                Server status
              </a>
              <a className="secondary-action" href="/download/" onClick={(event) => props.navigate(event, "/download/")}>
                <Download size={18} />
                Choose a platform
              </a>
              <a className="secondary-action" href="/troubleshooting/aniimo-known-issues/" onClick={(event) => props.navigate(event, "/troubleshooting/aniimo-known-issues/")}>
                <BookOpen size={18} />
                Known issues
              </a>
            </div>
          </div>
          <div className="hero-scene" aria-hidden="true">
            <img className="hero-image" src={gameInfo.heroImage} alt="" width="960" height="640" fetchPriority="high" />
          </div>
        </section>

        <section className="section launch-answer-strip" aria-label="Quick Aniimo answers">
          <div className="answer-card"><strong>Checked</strong><span>server status: {liveSupportStatus.lastChecked}</span><a href="/troubleshooting/aniimo-server-status/" onClick={(event) => props.navigate(event, "/troubleshooting/aniimo-server-status/")}>Check status <ChevronRight size={15} /></a></div>
          <div className="answer-card"><strong>Live</strong><span>PC and console platforms</span><a href="/download/" onClick={(event) => props.navigate(event, "/download/")}>Open download guide <ChevronRight size={15} /></a></div>
          <div className="answer-card"><strong>{activeEventCount}</strong><span>Version 1.1 events active now</span><a href="/events/" onClick={(event) => props.navigate(event, "/events/")}>Check events <ChevronRight size={15} /></a></div>
          <div className="answer-card"><strong>{aniimo.length}</strong><span>public Aniimo entries</span><a href="/aniimo/" onClick={(event) => props.navigate(event, "/aniimo/")}>Open database <ChevronRight size={15} /></a></div>
        </section>

        <section className="quick-grid primary-task-grid" aria-label="Start with a task">
          <QuickCard icon={<CheckCircle2 />} title="Check server status" text="See the dated outage, maintenance and platform-status answer first." href="/troubleshooting/aniimo-server-status/" navigate={props.navigate} />
          <QuickCard icon={<Download />} title="Download safely" text="Choose your device, then open the matching official store path." href="/download/" navigate={props.navigate} />
          <QuickCard icon={<BookOpen />} title="Known issues" text="Check login, loading, store and reward guidance before trying community fixes." href="/troubleshooting/aniimo-known-issues/" navigate={props.navigate} />
          <QuickCard icon={<CalendarDays />} title="Current events" text="Review Version 1.1 windows, requirements and official event details." href="/events/" navigate={props.navigate} />
          <QuickCard icon={<Search />} title="Find an Aniimo" text="Search all public entries by name, region, element, role and stage." href="/aniimo/" navigate={props.navigate} />
        </section>

        <section className="section sources-band">
          <SectionTitle icon={<Compass />} kicker="Launch Guide" title="Popular Aniimo Questions" />
          <InfoPanel title="What Players Need" rows={[
            ["Is Aniimo down?", "Start with Server Status for a dated, source-labeled outage or maintenance answer."],
            ["Cannot log in or see the game?", "Use Known Issues to separate account, platform, region, store and client-version problems from a global outage."],
            ["Where can I download Aniimo?", "PC, Steam, Epic, PS5, Xbox, iOS and Android are live; check storefront availability by country and device."],
            ["Looking for an Aniimo?", `Browse all ${aniimo.length} public entries by name, element, role, region and stage.`],
          ]} />
          <div className="site-index-grid">
            <LinkGroup title="Launch Answers" items={[
              ["Server Status", "/troubleshooting/aniimo-server-status/", "Check a dated outage and maintenance answer."],
              ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Resolve login, store, update and reward problems."],
              ["Release Date", "/release-date/", "Check PC, console and mobile launch dates."],
              ["Download", "/download/", "Use official Steam, Epic, console and mobile paths."],
              ["Launch Day", "/launch-day/", "Track status, codes, current updates and common fixes."],
              ["Events", "/events/", "Check official event schedules and unlock requirements."],
              ["Codes", "/codes/", "Check active-code verification and reward status."],
            ]} navigate={props.navigate} />
            <LinkGroup title="Risky Search Safety" items={[
              ["Aniimo Discord", "/topics/aniimo-discord/", "Find the source-safe official community path."],
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
  const [sortBy, setSortBy] = useState("Number");
  const statusFilteredAniimo = (statusFilter === "All" ? filteredAniimo : filteredAniimo.filter((item) => item.status === statusFilter)).slice().sort((a, b) => sortBy === "Name" ? a.name.localeCompare(b.name) : Number(a.no) - Number(b.no));
  const [tracked, setTracked] = useState(() => { try { return JSON.parse(localStorage.getItem("aniimo-tracker") || "{}"); } catch { return {}; } });
  const setTracking = (item, value) => setTracked((current) => { const next = { ...current, [item.id]: value }; localStorage.setItem("aniimo-tracker", JSON.stringify(next)); return next; });
  return (
        <section id="database" className="section">
          <SectionTitle icon={<Search />} kicker="Index" title="Aniimo Database" />
          <p className="section-copy">
            Browse the full Aniimo list with official Wiki numbers, names, elements, roles,
            stages, locations, forms and source status. This page is the Aniimo wiki-style
            creature database for users searching all {aniimo.length} Aniimo, character names, locations,
            evolutions and guide entries.
          </p>
          <div className="answer-strip database-answer-strip" aria-label="Database quick answers">
            <div><strong>{aniimo.length}</strong><span>public entries</span></div>
            <div><strong>Search</strong><span>name, element, role or region</span></div>
            <div><strong>Status</strong><span>confirmed, watchlist or verified</span></div>
          </div>
          {!compact && <InfoPanel title="Aniimo Characters: Quick Answer" rows={[["What this list includes", `All ${aniimo.length} tracked Aniimo characters with number, element, role, region, stage and source status.`], ["Find a character", "Search a name such as Celestis, Eko or Sherro, then open the detail page for location and evolution notes."], ["Location accuracy", "Region associations are listed now; exact spawn points need verified in-game or official evidence."]]} />}
          <details className="filter-drawer" open>
            <summary>Filter the creature list</summary>
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
            <Select label="Sort" value={sortBy} onChange={setSortBy} options={["Number", "Name"]} />
          </div>
          </details>
          <p className="filter-summary" aria-live="polite">Showing {statusFilteredAniimo.length} of {aniimo.length} Aniimo</p>
          {!statusFilteredAniimo.length && <InfoPanel title="No matching creatures" rows={[["Try this", "Clear a filter or search by name, region, element, role or stage."], ["Browse instead", "Open the full creature list or use the popular search shortcuts below."]]} />}
          {!compact && <div className="query-shortcuts" aria-label="Popular database searches">
            <span>Popular searches</span>
            {["Celestis", "Eko", "Sherro", "Geoclaw", "all Aniimo", "Aniimo locations"].map((term) => <button key={term} type="button" onClick={() => setQuery(term === "all Aniimo" ? "" : term)}>{term}</button>)}
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
                  <div className="aniimo-card-status" aria-label={`${item.name} answer status`}>
                    <span><strong>Location</strong>{item.region}</span>
                    <span><strong>Evolution</strong>{item.forms.length > 1 ? "Listed" : "Not listed"}</span>
                    <span><strong>Checked</strong>{sourceLastChecked}</span>
                  </div>
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
          {!compact && <AnswerStatus status="Watchlist" checked={sourceLastChecked} sourceType="Official region material and source review" next="Search a region or creature, then use its guide before relying on a precise route, weather or time condition." />}
          {!compact && <div className="map-toolbar"><label className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search regions, Aniimo or mechanics" /></label><Select label="Region" value={regionFilter} onChange={setRegionFilter} options={["All", ...regions.map((item) => item.name)]} /><button type="button" className="secondary-action" onClick={() => navigator.clipboard?.writeText(`${window.location.origin}/map/?q=${encodeURIComponent(query)}&region=${encodeURIComponent(regionFilter)}`)}><Copy size={16} /> Copy map link</button></div>}
          {!compact && <p className="section-copy map-answer">Looking for the Aniimo map size? The final measured world size is not confirmed yet; this page tracks {regions.length} public regions and adds route evidence after launch verification.</p>}
          {!compact && <InfoPanel title="Map and Location Answer" rows={[["Find a region", "Search the map by region, Aniimo name or mechanic, then open the region guide."], ["Find a creature", "Region pages connect Celestis, Eko, Sherro and other listed Aniimo to current source-labeled location notes."], ["Exact spawns", "Coordinates, weather and time conditions stay unconfirmed until supported by official or reproducible evidence."]]} />}
          {!compact && <LinkGroup title="Map Search Answers" items={[["Map Size", "/map/", "See the current measured-size status and public region count."], ["Aniimo Locations", "/topics/aniimo-locations/", "Find the verification plan for creature spawn routes."], ["Evolution List", "/topics/aniimo-evolution-list/", "Browse creature forms and evolution coverage."]]} navigate={navigate} />}
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
          {!compact && <FaqBlock items={faqs.map} />}
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
            The official Aniimo code list has not been published here yet. This page separates
            official codes from community reports, pre-registration rewards and launch milestones.
          </p>
          <section className="action-priority" aria-label="Code and reward starting points">
            <div>
              <span className="eyebrow">Have a code?</span>
              <h2>Verify it before entering it.</h2>
              <p>Use the current-client redemption flow and keep official code status separate from community lists.</p>
              <a className="primary-action" href="/codes/how-to-redeem/" onClick={(event) => navigate(event, "/codes/how-to-redeem/")}><Gift size={18} /> Redeem a code</a>
            </div>
            <div>
              <span className="eyebrow">Missing a reward?</span>
              <h2>Check account, campaign and mail first.</h2>
              <p>Campaign rewards, milestones and redeem codes can follow different delivery paths.</p>
              <a className="secondary-action" href="/rewards/" onClick={(event) => navigate(event, "/rewards/")}><CheckCircle2 size={18} /> Check reward status</a>
            </div>
          </section>
          <LinkGroup title="What do you need help with?" items={[
            ["I have a code", "/codes/how-to-redeem/", "Check the official code status and redemption evidence before entering it."],
            ["A reward is missing", "/rewards/", "Check account, server, platform and campaign delivery guidance."],
            ["A code does not work", "/codes/aniimo-codes-not-working/", "Check spelling, expiry, platform and region without trusting reposted lists."],
            ["I need current launch help", "/launch-day/", "Check official status before changing accounts or reinstalling."],
          ]} navigate={navigate} />
          <AnswerStatus status="Watchlist" checked={sourceLastChecked} sourceType="Official Aniimo channels and direct in-game verification" next="Use only an official announcement or the in-game redemption flow before entering a code." />
          <InfoPanel title="Page Status" rows={[
            ["Last reviewed", sourceLastChecked],
            ["Current status", codeVerificationTemplate.currentStatus],
            ["How it is checked", "Official channels or direct in-game verification are required."],
          ]} />
          <InfoPanel title="Current Client Guidance" rows={[
            ["Redeem flow", "Open the main menu, then Settings, Account and Gift Code Redemption. Enter the exact code and check in-game mail."],
            ["If it fails", "Check spelling, expiry, account eligibility, platform and region before trying again."],
            ["Reward boundary", "Pre-registration, milestone and event rewards may not use a redeem string."],
          ]} />
          <InfoPanel title="Code Answer" rows={[["Official code status", "No code is marked official here until Aniimo publishes it or a direct in-game redemption test confirms it."], ["Community reports", "Community-reported strings are leads, not confirmed rewards. Do not enter credentials or download files to claim them."], ["If a code fails", "Check exact spelling, expiration, platform and region before trying again."], ["Not a code", "Pre-registration, milestone and launch-event rewards may be delivered without a redeem string."]]} />
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
          <InfoPanel title="Claim Before You Start" rows={[["Account", "Use the same account used for pre-registration or the official platform listing."], ["Reward type", "Campaign rewards and redeem codes are separate; do not expect every reward to have a code."], ["Availability", "Check platform, region and launch status before reporting a missing reward."], ["Evidence", "Keep the announcement, account, platform and timestamp if a claim fails."]]} />
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

export function RewardsPage({ navigate }) {
  return (
    <section id="rewards" className="section">
      <SectionTitle icon={<Gift />} kicker="Rewards" title="Aniimo Rewards & Claim Status" />
          <img className="page-banner" src="/images/banners/banner-susuta-hunt.webp" alt="Aniimo Susuta Hunt event" width="1600" height="900" loading="lazy" decoding="async" />
      <p className="section-copy">
        Confirmed official reward campaigns include milestone items, a Prismana Aniimo choice for
        Junior Wayfarers, and a mysterious Susuta egg for official pre-registration. Claim delivery
        needs to be checked on the same account, server and platform used for the campaign.
      </p>
      <section className="action-priority" aria-label="Reward claim starting points">
        <div>
          <span className="eyebrow">Claiming a campaign reward?</span>
          <h2>Confirm eligibility before waiting for delivery.</h2>
          <p>Use the campaign path, account, server and platform that were used for registration or purchase.</p>
          <a className="primary-action" href="/rewards/junior-wayfarer/" onClick={(event) => navigate(event, "/rewards/junior-wayfarer/")}><Gift size={18} /> Check eligibility</a>
        </div>
        <div>
          <span className="eyebrow">Nothing arrived?</span>
          <h2>Record the account and store context.</h2>
          <p>Check delivery timing and in-game mail before reporting a missing reward or changing accounts.</p>
          <a className="secondary-action" href="/troubleshooting/aniimo-pre-registration-not-working/" onClick={(event) => navigate(event, "/troubleshooting/aniimo-pre-registration-not-working/")}><BookOpen size={18} /> Resolve a missing reward</a>
        </div>
      </section>
      <LinkGroup title="Claim a Reward" items={[
        ["Check campaign eligibility", "/rewards/junior-wayfarer/", "Confirm the official Junior Wayfarer campaign details."],
        ["Check milestone rewards", "/rewards/milestones/", "Review official milestone items separately from codes."],
        ["A reward is missing", "/troubleshooting/aniimo-pre-registration-not-working/", "Check account, region, store and campaign availability."],
        ["Looking for codes?", "/codes/", "Redeem codes are separate from campaign rewards."],
      ]} navigate={navigate} />
      <AnswerStatus status="Confirmed" checked={sourceLastChecked} sourceType="Official Aniimo reward campaigns" next="Confirm your account, server, region and platform before reporting a missing campaign reward." />
      <LaunchStatusPanel title="Reward Delivery Status" entries={launchStatusEntries.filter((entry) => ["codes", "pc-console", "mobile"].includes(entry.id))} />
      <RewardGrid />
      <InfoPanel title="Reward Categories" rows={[["Pre-registration", "Rewards tied to official registration or store actions."], ["Milestones", "Campaign items unlocked by published community thresholds."], ["Launch events", "Free items associated with official global launch events."], ["Redeem codes", "Separate code strings that require an official redemption flow."]]} />
      <InfoPanel title="Claim Checklist" rows={[["1. Account", "Sign in with the account used for registration or platform access."], ["2. Store", "Confirm the official store listing and the correct country/region."], ["3. Timing", "Check the launch status and delivery window before retrying."], ["4. Report", "Record platform, region, time and screenshot if the reward is missing."]]} />
      <FaqBlock items={faqs.codes} />
    </section>
  );
}

export function DownloadPage({ navigate }) {
  const [device, setDevice] = useState("PC");
  const deviceOptions = ["PC", "PS5", "Xbox", "iOS", "Android"];
  const deviceConfig = {
    PC: { stores: ["Steam", "Epic Games Store"], title: "PC is live", note: "Install through Steam or Epic Games Store. Check the official store page for the current client and PC requirements." },
    PS5: { stores: ["PlayStation 5"], title: "PS5 is live", note: "Install through the official PlayStation listing. Your PSN region determines the server assignment." },
    Xbox: { stores: ["Xbox"], title: "Xbox is live", note: "Install through the official Xbox listing and use the current store page for regional access details." },
    iOS: { stores: ["App Store"], title: "iOS is live", note: "Use the official App Store listing. Check your country, account and device before treating a missing install button as an outage." },
    Android: { stores: ["Google Play"], title: "Android is live", note: "Use the official Google Play listing. Check your country, account and device; avoid APK mirrors." },
  };
  const selectedDevice = deviceConfig[device];
  const visiblePlatforms = platforms.filter((item) => selectedDevice.stores.includes(item.name));
  return (
        <section id="download" className="section split-section download-band">
          <div>
            <SectionTitle icon={<Download />} kicker="Platforms" title="Choose Your Official Download" />
            <p className="section-copy">
              Pick your device first. This page shows the official path, current status and the
              next check for that platform.
            </p>
            <AnswerStatus status={device === "iOS" || device === "Android" ? "Confirmed" : "Verified"} checked={sourceLastChecked} sourceType="Official Aniimo launch news and storefronts" next={selectedDevice.note} />
            <InfoPanel title={selectedDevice.title} rows={[["Official path", selectedDevice.stores.join(" or ")], ["Current guidance", selectedDevice.note], ["Account rule", "Use the Aniimo account and server you intend to keep. PC and mobile share data with the same Aniimo account; different servers are independent."]]} />
            <div className="device-picker device-decision-picker" role="group" aria-label="Choose your platform">{deviceOptions.map((item) => <button key={item} type="button" className={device === item ? "active" : ""} onClick={() => setDevice(item)}>{item}</button>)}</div>
            <div className="platform-list platform-decision-list">
              {visiblePlatforms.map((item) => (
                <article key={item.name} className="platform-card">
                  <div>
                    <h3>{item.name}</h3>
                    <p className="platform-action">{item.action}</p>
                    <p>{item.note}</p>
                    <a className="primary-action" href={item.url} target="_blank" rel="noreferrer">Open official {item.name} <ChevronRight size={16} /></a>
                  </div>
                  <div><StatusBadge status={platformStatusByName[item.name]?.status || item.status} /><p className="small">Checked {item.lastChecked}</p></div>
                </article>
              ))}
            </div>
            <details className="download-details">
              <summary>More platform, reward and troubleshooting details</summary>
              <InfoPanel title="Page Status" rows={[["Last reviewed", sourceLastChecked], ["Platform status", "PC, consoles and mobile are live; mobile storefront visibility can vary by country and device."], ["Safe install path", "Use the official website and platform stores only."]]} />
            <InfoPanel title="Mobile Search Answer" rows={[["Android", "Check the official Google Play listing by country and device"], ["iOS", "Check the official App Store listing by country and device"], ["Date", releaseInfo.mobile], ["Safety", "Use official stores only; avoid APK mirrors"]]} />
            <p className="section-copy download-answer">For Aniimo game download searches, use the official store links below. There is no safe reason to use an APK mirror or torrent.</p>
            <div className="answer-strip download-answer-strip" aria-label="Download quick answers">
              <div><strong>PC</strong><span>Steam and Epic paths</span></div>
              <div><strong>Console</strong><span>PS5 and Xbox listings</span></div>
              <div><strong>Mobile</strong><span>App Store and Google Play</span></div>
            </div>
            <div className="device-picker" role="group" aria-label="Choose download device">{["All devices", "PC", "Console", "Mobile"].map((item) => <button key={item} type="button" className={device === item ? "active" : ""} onClick={() => setDevice(item)}>{item}</button>)}</div>
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
              ["Android Google Play", "/platforms/android/", "Check Google Play availability and safe Android installation guidance."],
              ["Mobile App Stores", "/platforms/mobile/", "Check App Store, Google Play and mobile launch-window notes."],
              ["Portuguese Pre-Register", "/pt-br/aniimo-pre-registro/", "Answer Brazil pre-registro reward and storefront searches."],
              ["APK Safety", "/topics/aniimo-apk/", "Use official Android paths instead of APK mirrors."],
              ["Torrent Safety", "/topics/aniimo-torrent/", "Avoid unofficial installers and reposted clients."],
              ["Official Website", "/topics/aniimo-official-website/", "Find verified site, Wiki and storefront links."],
              ["Region Availability", "/troubleshooting/aniimo-region-availability/", "Check account, country and storefront availability."],
              ["Download Not Available", "/troubleshooting/aniimo-download-not-available/", "Troubleshoot missing install buttons or delayed store rollout."],
            ]} navigate={navigate} />
            <LinkGroup title="Platform Intent" items={[
              ["Steam Deck", "/topics/aniimo-steam-deck/", "Track compatibility questions after PC launch."],
              ["Game Pass", "/topics/aniimo-game-pass/", "Separate Xbox availability from Game Pass catalog claims."],
              ["PS4", "/topics/aniimo-ps4/", "Answer PS4 searches while PlayStation tracking stays PS5-focused."],
              ["Crossplay", "/compare/aniimo-crossplay/", "Track crossplay, cross-save and account-linking questions."],
            ]} navigate={navigate} />
            <EditorialBlock title="Download Checklist" items={editorialGuides.download} />
            <FaqBlock items={faqs.download} />
            </details>
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
              <p>{date > "2026-09-20" ? "Upcoming official milestone." : "Past official milestone."}</p>
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
      <InfoPanel title="Your First Session" rows={[
        ["1. Start on an official platform", "PC, consoles and mobile are live. Check the App Store or Google Play availability in your country and on your device before using any workaround."],
        ["2. Choose account and server carefully", "PC and mobile share data with the same Aniimo account; different servers keep independent data."],
        ["3. Keep rewards separate from codes", "Campaign rewards and redeem codes are different. Only use a code published by an official channel or shown in the current client."],
        ["4. Learn before optimizing", "Start with catching, Twine and the database. Routes, builds and tier claims need current evidence."],
      ]} />
      <LinkGroup title="Start Playing" items={[
        ["First Hour Guide", "/aniimo-first-hour-guide/", "Follow a source-aware first-session checklist."],
        ["Catching Basics", "/how-to-catch-aniimo/", "Learn confirmed Aniipod and trap basics."],
        ["What Is Twine?", "/what-is-twine/", "Understand the core transformation-style system."],
        ["Account & Cross-Save", "/topics/aniimo-cross-save/", "Check the same-account and server rules."],
        ["Codes & Rewards", "/codes/", "Check official code status separately from campaign rewards."],
      ]} navigate={navigate} />
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
  const groups = [
    ["Pre-registration", launchRewards.filter((item) => /pre|junior|susuta/i.test(`${item.title} ${item.reward}`))],
    ["Milestones", launchRewards.filter((item) => /milestone|\d+M/i.test(`${item.title} ${item.reward}`))],
    ["Launch events", launchRewards.filter((item) => /launch event/i.test(item.title))],
  ];
  return (
    <div className="reward-groups">
      {groups.map(([label, items]) => <section className="reward-group" key={label}><h2>{label}</h2><div className="reward-grid">{items.map((item) => (
        <article className="reward-card" key={item.title}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.reward}</p>
          </div>
          <StatusBadge status={item.status} />
        </article>))}</div></section>)}
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

export function EventsPage({ navigate }) {
  const eventOrder = { Active: 0, Upcoming: 1, Ended: 2 };
  const orderedEvents = [...liveUpdate.events].sort((left, right) => eventOrder[eventStatus(left)] - eventOrder[eventStatus(right)] || new Date(left.startsAt) - new Date(right.startsAt));
  const activeEvents = orderedEvents.filter((event) => eventStatus(event) === "Active");
  const upcomingEvents = orderedEvents.filter((event) => eventStatus(event) === "Upcoming");
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Official Update" title="Aniimo Events and Version 1.1" />
      <p className="section-copy">{liveUpdate.summary} The table below separates active, upcoming and ended windows from permanent-game availability; all times use UTC+8.</p>
      <AnswerStatus status="Confirmed" checked={sourceLastChecked} sourceType="Official Aniimo September update notice" next="Recheck the official notice after maintenance or before publishing changed event times, eligibility or rewards." />
      <div className="detail-panels">
        <InfoPanel title="Current Update" rows={[["Update", liveUpdate.title], ["Published", liveUpdate.date], ["Time standard", "All event times below are UTC+8"], ["Irisalis journey", "Windchaser's Departure runs through December 10 UTC+8; follow current-client progression for the related Aniipod steps."], ["Mobile", "iOS and Android are live; check official stores by country and device"]]} />
        <InfoPanel title="Latest Resource Update" rows={[["Patch", `${currentPatch.title} (${currentPatch.date})`], ["Player action", currentPatch.summary], ["Eligibility", currentPatch.eligibility]]} />
      </div>
      <div className="event-summary-grid">
        <article>
          <span className="eyebrow">Active now</span>
          <strong>{activeEvents.length}</strong>
          <p>{activeEvents.map((event) => event.name).join(" · ")}</p>
        </article>
        <article>
          <span className="eyebrow">Up next</span>
          <strong>{upcomingEvents.length || "-"}</strong>
          <p>{upcomingEvents.length ? upcomingEvents.map((event) => `${event.name}: ${eventSchedule(event)}`).join(" · ") : "No upcoming event window is currently listed."}</p>
        </article>
      </div>
      <div className="table-shell freshness-table">
        <table>
          <thead><tr><th>Event</th><th>Status</th><th>Schedule</th><th>Requirements</th><th>Official details</th></tr></thead>
          <tbody>{orderedEvents.map((event) => <tr key={event.name}><td>{event.name}</td><td><StatusBadge status={eventStatus(event)} /></td><td>{eventSchedule(event)}</td><td>{event.requirements}</td><td>{event.detail} <a href={event.source} target="_blank" rel="noreferrer">Source</a></td></tr>)}</tbody>
        </table>
      </div>
      <SeoGuideBlock items={[
        { title: "Use official timing", body: "The schedule is recorded in UTC+8 exactly as listed in the official update. Confirm the current notice before treating an event as active or expired in another time zone." },
        { title: "Keep event facts narrow", body: "This page records official dates, entry requirements and publicly stated details. Drop rates, optimal routes, team builds and economy advice need current-client evidence before publication." },
        { title: "What to do if an event is unavailable", body: "Restart after the September 30 resource update, then check your character requirement, server, local storefront version and the official notice before relying on community screenshots or workaround guides." },
      ]} />
      <div className="hero-actions section-actions">
        <a className="primary-action" href={liveUpdate.source} target="_blank" rel="noreferrer"><Search size={18} /> Check official update</a>
        <a className="secondary-action" href={currentPatch.source} target="_blank" rel="noreferrer"><Download size={18} /> Check latest patch</a>
        <a className="secondary-action" href="/launch-day/" onClick={(event) => navigate(event, "/launch-day/")}><CheckCircle2 size={18} /> Open launch support</a>
      </div>
    </section>
  );
}

export function FreshnessPage({ topic }) {
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Freshness" title={topic.title} />
          <p className="section-copy">{topic.intro}</p>
      {(topic.slug === "aniimo-discord" || topic.slug === "aniimo-reddit") && <AnswerStatus status="Watchlist" checked={sourceLastChecked} sourceType="Official Aniimo channels and community research" next="Open an official channel for announcements; treat invites, screenshots and player claims as leads until verified." />}
      {(topic.slug === "aniimo-logo") && <InfoPanel title="Logo Search Answer" rows={[["Asset", "Use the Aniimo logo preview and source notes on this page."], ["Format", "The production asset is served as WebP for faster loading."], ["Source rule", "Use official or site-prepared brand assets rather than reposted files."]]}/>}
      {(topic.slug === "aniimo-discord" || topic.slug === "aniimo-reddit") && <InfoPanel title="Community Search Answer" rows={[["Official status", "Use only links verified by Aniimo or Pawprint Studio."], ["What this page provides", "A source-safe path for launch, codes, server and player-report questions."], ["What is not confirmed", "Third-party invites, screenshots and rumors are not official facts."]]}/>}
      {topic.slug === "aniimo-controller-support" && <InfoPanel title="Controller Support Status" rows={[["Steam PC", "Disable Steam Input in Aniimo's Steam Controller properties, restart, then retest native controller input."], ["Latest patch", "September 30 improved controller progress-bar reward claiming; restart to download current resources."], ["Console", "Xbox and PS5 controls should be treated separately from the Steam Input path."], ["Mobile and Steam Deck", "Bluetooth/mobile and handheld compatibility still need separate verification."]]}/>}
      {topic.slug === "aniimo-server-status" && <InfoPanel title="Current Server Check" rows={[["Aniimo-wide outage", "No active outage is marked confirmed here."], ["Check first", "Official Aniimo news, platform store notices and the launch-day hub."], ["If only you are affected", "Check account, platform, region and known issues before retrying."], ["Evidence standard", "Official notice or repeatable live evidence with platform and time."]]}/>}
      {topic.slug === "aniimo-ai" && <InfoPanel title="AI Search Answer" rows={[["Current answer", "No official source reviewed here confirms that Aniimo is made with generative AI."], ["Evidence rule", "Trailer style, upscaling or visual polish is not proof of AI use."], ["Next check", "Update this answer only when the developer, publisher or platform publishes a direct disclosure."]]}/>}
      {topic.slug === "aniimo-tier-list" && <InfoPanel title="Tier List Search Answer" rows={[["Current answer", "This is a source-labeled watchlist, not a final competitive ranking."], ["How to compare", "Use role, element, stage and source status until live balance evidence exists."], ["Next update", "Add dated PvE, PvP and early-game testing from the current client."]]}/>}
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
        <InfoPanel title="Start Here" rows={[["PC or console", "Use the official Steam, Epic, PS5 or Xbox listing; Aniimo is live on these platforms."], ["Mobile", "Aniimo is live on iOS and Android. Use the same Aniimo account as PC and check the official store by country and device."], ["Cannot log in", "Check Server Status and Known Issues before resetting anything; queues and slower loading can occur at launch."], ["Missing reward or code", "Open Codes & Rewards and confirm account, platform and official status."], ["Looking for a creature", "Search the Database, then use its region guide for current location notes."]]} />
        <InfoPanel title="Evidence And Limits" rows={[["Confirmed by official launch news", "PC and mobile share the same data when you use the same account."], ["Server limit", "Data on different servers is independent; confirm the server before creating a character."], ["Still check in-game", "Friend matchmaking, platform pools and mode-specific crossplay behavior."], ["Official support", "Use the launch notice and PC/console FAQ before trying community fixes."]]} />
      </div>
      <div className="site-index-grid">
        <LinkGroup title="Launch Day Actions" items={launchDayCommandCenter.quickActions} navigate={navigate} />
        <LinkGroup title="Current Update" items={[["Version 1.1 Events", "/events/", "Check active and upcoming windows, eligibility, Irisalis progression and official source links."], ["Latest Client Patch", "/events/", "Restart after the September 30 resource update before reporting a repeatable issue."]]} navigate={navigate} />
        <LinkGroup title="Quick Help for Launch Day" items={[
          ["Active Aniimo Codes", "/codes/active/", "Check active code status and verification notes."],
          ["Server Status", "/troubleshooting/aniimo-server-status/", "Track maintenance, outage and launch availability checks."],
          ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Track login, black screen, stuck loading and platform-specific launch errors."],
          ["Download Unavailable", "/troubleshooting/aniimo-download-not-available/", "Fix missing download buttons, platform rollout and region issues."],
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
        <LinkGroup title="International Setup Help" items={[["Controller Support (Deutsch)", "/de/aniimo-controller-support/", "Check PC, console, mobile and Steam Deck controller status."], ["Suporte a Controle (Brasil)", "/pt-br/aniimo-controle/", "Check PC, console, mobile and Steam Deck controller status."], ["German Codes", "/de/aniimo-codes/", "Check codes, rewards and verification status."], ["Brazil Codes", "/pt-br/aniimo-codigos/", "Check rewards, codes and official-source status."]]} navigate={navigate} />
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
  const [draft, setDraft] = useState({ topic: "Mobile store availability", platform: "", region: "", device: "", account: "", server: "", status: "Watchlist", source: "", notes: "" });
  useEffect(() => localStorage.setItem("aniimo-launch-evidence", JSON.stringify(records)), [records]);
  const recordCounts = records.reduce((counts, record) => ({ ...counts, [record.status]: (counts[record.status] || 0) + 1 }), {});
  function addRecord(event) {
    event.preventDefault();
    if (!draft.platform.trim() || !draft.source.trim()) return;
    setRecords((current) => [{ ...draft, id: `${Date.now()}`, verifiedAt: new Date().toISOString() }, ...current]);
    setDraft({ topic: "Mobile store availability", platform: "", region: "", device: "", account: "", server: "", status: "Watchlist", source: "", notes: "" });
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
          <label><span>Region</span><input value={draft.region} onChange={(event) => setDraft({ ...draft, region: event.target.value })} placeholder="Country or store region" /></label>
          <label><span>Device</span><input value={draft.device} onChange={(event) => setDraft({ ...draft, device: event.target.value })} placeholder="Phone, console or PC" /></label>
          <label><span>Account</span><input value={draft.account} onChange={(event) => setDraft({ ...draft, account: event.target.value })} placeholder="Same account, new account..." /></label>
          <label><span>Server</span><input value={draft.server} onChange={(event) => setDraft({ ...draft, server: event.target.value })} placeholder="Server or auto-assigned" /></label>
          <label><span>Status</span><select value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value })}><option>Watchlist</option><option>Verified</option><option>Rejected</option></select></label>
          <label><span>Source URL</span><input type="url" value={draft.source} onChange={(event) => setDraft({ ...draft, source: event.target.value })} placeholder="https://..." required /></label>
          <label className="evidence-notes"><span>Notes</span><textarea value={draft.notes} onChange={(event) => setDraft({ ...draft, notes: event.target.value })} placeholder="Region, device, reproduction steps, screenshot path..." /></label>
          <button className="primary-action" type="submit"><Plus size={16} /> Add observation</button>
        </form>
        <div className="tool-actions"><button className="secondary-action" type="button" onClick={exportRecords} disabled={!records.length}><DownloadIcon size={16} /> Export JSON</button><label className="secondary-action file-action"><DownloadIcon size={16} /> Import JSON<input type="file" accept="application/json" onChange={importRecords} /></label><button className="secondary-action" type="button" onClick={() => setRecords([])} disabled={!records.length}><X size={16} /> Clear local records</button></div>
        {records.length > 0 && <><div className="evidence-summary"><strong>{records.length}</strong><span>observations</span><span>{recordCounts.Watchlist || 0} pending review</span><span>{recordCounts.Verified || 0} verified</span><span>{recordCounts.Rejected || 0} rejected</span></div><div className="table-shell freshness-table"><table><thead><tr><th>Time</th><th>Topic</th><th>Platform</th><th>Context</th><th>Status</th><th>Evidence</th></tr></thead><tbody>{records.map((record) => <tr key={record.id}><td>{new Date(record.verifiedAt).toLocaleString()}</td><td>{record.topic}</td><td>{record.platform}</td><td>{[record.region, record.device, record.account, record.server].filter(Boolean).join(" · ") || "Not recorded"}</td><td><StatusBadge status={record.status} /></td><td><a href={record.source} target="_blank" rel="noreferrer">Source</a>{record.notes && <><br />{record.notes}</>}</td></tr>)}</tbody></table></div></>}
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
              <p>{item.status === "Verified" ? "Availability: live" : `Scheduled: ${item.releaseDate}`}</p>
              <p>Store check: {item.unlockTime}</p>
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
        Learn the systems players use now: catching, Twine, Homeland, Egg Heist,
        Lost Isles and source-aware verification rules.
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
        Check live PC and console access, mobile store availability, safe downloads,
        reward claim status, code status and current support paths from one hub.
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
          ["Troubleshooting", "/troubleshooting/", "Fix download, store visibility, login, reward and region availability issues."],
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
      <SectionTitle icon={<Download />} kicker="Help" title="Aniimo Download & Store Availability Troubleshooting" />
      <p className="section-copy">
        Use these pages when a download, store page, login, reward claim or region
        availability path is unavailable on a specific platform or country.
      </p>
      <AnswerStatus status="Watchlist" checked={sourceLastChecked} sourceType="Official Aniimo news and storefront status" next="Choose the problem type below, then record platform, country, account, server and time before retrying." />
      <section className="action-priority action-priority-help" aria-label="Troubleshooting starting points">
        <div>
          <span className="eyebrow">Cannot play?</span>
          <h2>Check global status before changing your account.</h2>
          <p>Use the source-labeled server status answer first, then follow the platform-specific path if the issue is local.</p>
          <a className="primary-action" href="/troubleshooting/aniimo-server-status/" onClick={(event) => navigate(event, "/troubleshooting/aniimo-server-status/")}><CheckCircle2 size={18} /> Check server status</a>
        </div>
        <div>
          <span className="eyebrow">Cannot install?</span>
          <h2>Confirm store, device and country.</h2>
          <p>Use official listings rather than APK mirrors or reposted clients when a platform page is unavailable.</p>
          <a className="secondary-action" href="/download/" onClick={(event) => navigate(event, "/download/")}><Download size={18} /> Choose a platform</a>
        </div>
      </section>
      <LinkGroup title="Start With Your Problem" items={[
        ["Cannot log in or load", "/troubleshooting/aniimo-server-status/", "Check official status and known launch issues before resetting anything."],
        ["Store page or install button missing", "/troubleshooting/aniimo-download-not-available/", "Check device, country, storefront account and official listing status."],
        ["Reward or pre-registration issue", "/troubleshooting/aniimo-pre-registration-not-working/", "Check campaign account, region and store details."],
        ["Code does not work", "/codes/aniimo-codes-not-working/", "Check official status, expiry, platform and region."],
      ]} navigate={navigate} />
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
      <div className="source-level" aria-label="Source level"><strong>Source level</strong><span>{topic.sourceType || "Editorial review"}</span><span>Facts and community leads are kept separate.</span></div>
      {statusEntry && <LaunchStatusPanel title="Answer Status" entries={[statusEntry]} />}
      {intentStatus && <InfoPanel title="What We Are Checking Next" rows={[["Next check", intentStatus.action], ["Page", topic.title]]} />}
      {topic.slug === "aniimo-server-status" && <LiveSupportStatus />}
      {topic.slug === "aniimo-known-issues" && <LiveIssueTable />}
      {topic.slug === "aniimo-discord" && <InfoPanel title="Official Community Path" rows={[
        ["Verification", "Use a Discord destination only when it is linked by Aniimo, Pawprint Studio, or another verified official Aniimo channel."],
        ["Last reviewed", sourceLastChecked],
        ["For maintenance", "Use the server-status page and official Aniimo news as the confirmed incident record; Discord posts can provide an additional official announcement path."],
        ["For codes", "Only official announcements or in-game notices can move a code into the confirmed list."],
      ]} />}
      {topic.slug === "aniimo-egg-heist-guide" && <InfoPanel title="Egg Heist: Current Answer" rows={[
        ["Mode", "Official public material describes Egg Heist as a PVEVP mode in the Lost Isles."],
        ["Team guidance", "Official wording describes three-player teams; the September update lists Chaos Mode, requires Tier IV Elite Egg Seeker plus a Chaos Ticket, and recommends team play."],
        ["Current event status", eggHeistEventStatus()],
        ["Reward boundary", "The update lists higher Prismana Aniimo Egg and Prismatic Collectible drop rates, but not exact probabilities or full reward tables."],
        ["Still to verify", "Matchmaking, scoring, party limits, route strategy, and final competitive rules require current official or reproducible in-game evidence."],
      ]} />}
      {topic.slug === "aniimo-pre-registro" && <InfoPanel title="Mobile Availability and Reward Status" rows={[
        ["Disponibilidade atual", "Aniimo esta disponivel no iOS e Android. Abra a loja oficial do seu pais e dispositivo."],
        ["Pre-registro", "Trate o pre-registro como uma campanha anterior. Confirme elegibilidade atual e entrega da recompensa antes de supor que existe um resgate pendente."],
        ["Conta e loja", "Use a mesma conta e configuracao de pais esperadas pela loja oficial; depois confirme a versao atual e o aviso da campanha."],
        ["Precisa de ajuda", "Abra o guia mobile ou a pagina de solucao de problemas de recompensas antes de usar instaladores ou listas de codigos nao oficiais."],
      ]} />}
      {(["is-aniimo-pay-to-win", "aniimo-price", "aniimo-vs-genshin"].includes(topic.slug)) && <InfoPanel title="Economy Fact Status" rows={[["Confirmed", "Aniimo is free to play; Steam and Google Play identify in-app purchases."], ["Player feedback", "Shop density, paid packs and gacha-like expectations are active discussion topics, not a final mechanism verdict."], ["Not established here", "Whether optional purchases create a competitive advantage, progression gate or mode-specific imbalance."], ["Review standard", "Official purchase detail plus repeatable live-game evidence of cost, earnable alternatives and impact."]]} />}
      {(["is-aniimo-pay-to-win", "aniimo-price", "aniimo-vs-genshin"].includes(topic.slug)) && <InfoPanel title={postLaunchEvidence.monetization.title} rows={postLaunchEvidence.monetization.rows} />}
      {(["aniimo-beginner-tips", "aniimo-first-hour-guide", "aniimo-beginner-mistakes"].includes(topic.slug)) && <InfoPanel title="First Week: Evidence-First Priorities" rows={postLaunchEvidence.firstWeek} />}
      {(["aniimo-download-not-available", "aniimo-region-availability", "aniimo-known-issues"].includes(topic.slug)) && <InfoPanel title="Mobile Issue Triage" rows={postLaunchEvidence.mobileTroubleshooting} />}
      <EditorialBlock title="Key Points" items={topic.points} />
      {evidenceQueue && <EvidenceQueue queue={evidenceQueue} />}
      {children}
      <EditorialBlock title="Next Checks" items={relatedLinks.map(([label, href, text]) => [
        label,
        <a className="text-link" href={href}>{text} <ChevronRight size={16} /></a>,
      ])} />
      <FaqBlock items={topic.faq} />
      <FeedbackPanel topic={topic.title} />
      <div className="hero-actions section-actions topic-next-actions">
        <a className="primary-action" href="/guides/" onClick={(event) => navigate?.(event, "/guides/")}><BookOpen size={18} /> Browse related guides</a>
        <a className="secondary-action" href={topic.source} target="_blank" rel="noreferrer"><Search size={18} /> Check official source</a>
      </div>
    </section>
  );
}

function eggHeistEventStatus() {
  const event = liveUpdate.events.find((item) => item.name.includes("Egg Heist"));
  return event ? eventStatus(event) : "Check official update";
}

function LiveSupportStatus() {
  return (
    <>
      <AnswerStatus status={liveSupportStatus.status} checked={liveSupportStatus.lastChecked} sourceType={liveSupportStatus.sourceType} next={liveSupportStatus.nextAction} />
      <InfoPanel title="Current Server Check" rows={[
        ["Current state", liveSupportStatus.state],
        ["Last checked", liveSupportStatus.lastChecked],
        ["Platform scope", liveSupportStatus.platformScope],
        ["What this means", liveSupportStatus.summary],
      ]} />
      <section className="related-section">
        <h2>Confirmed Maintenance History</h2>
        <div className="table-shell freshness-table">
          <table>
            <thead><tr><th>Date</th><th>State</th><th>Scope</th><th>Detail</th><th>Source</th></tr></thead>
            <tbody>{liveSupportStatus.incidentHistory.map((incident) => <tr key={`${incident.date}-${incident.state}`}><td>{incident.date}</td><td>{incident.state}</td><td>{incident.scope}</td><td>{incident.detail}</td><td><a className="text-link" href={incident.source} target="_blank" rel="noreferrer">Official notice</a></td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function LiveIssueTable() {
  return (
    <section className="related-section">
      <h2>Current Issue Index</h2>
      <div className="table-shell freshness-table">
        <table>
          <thead><tr><th>Issue</th><th>Affected scope</th><th>Status</th><th>Safe next step</th><th>Checked</th></tr></thead>
          <tbody>{liveIssueRegistry.map((item) => <tr key={item.issue}><td>{item.issue}</td><td>{item.platforms}</td><td><StatusBadge status={item.status} /></td><td>{item.workaround} <a className="text-link" href={item.source} target="_blank" rel="noreferrer">Source</a></td><td>{item.checked}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}

function FeedbackPanel({ topic }) {
  const [kind, setKind] = useState("Correction");
  const [notes, setNotes] = useState("");
  function exportFeedback() {
    const payload = `Aniimo.games feedback\nPage: ${topic}\nType: ${kind}\nNotes: ${notes}\nURL: ${window.location.href}`;
    navigator.clipboard?.writeText(payload);
  }
  return <section className="feedback-panel"><h2>Report a correction or missing detail</h2><p>Prepare a review note locally; it is not published automatically.</p><div className="feedback-controls"><select value={kind} onChange={(event) => setKind(event.target.value)} aria-label="Feedback type"><option>Correction</option><option>Missing detail</option><option>Broken link</option><option>Source update</option></select><textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="What should be checked? Include a source URL or platform details." aria-label="Feedback notes" /><button type="button" className="secondary-action" onClick={exportFeedback}>Copy report</button></div></section>;
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

  if (slug === "aniimo-server-status") {
    links.push(
      ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Check platform-specific login, store and reward guidance"],
      ["Download", "/download/", "Open the matching official storefront"],
      ["Official Community", "/topics/aniimo-discord/", "Verify official announcements and avoid fake invites"],
    );
    return links;
  }

  if (slug === "aniimo-known-issues") {
    links.push(
      ["Server Status", "/troubleshooting/aniimo-server-status/", "Check whether a confirmed outage or maintenance notice exists"],
      ["Mobile Download", "/platforms/mobile/", "Check country, device and storefront availability"],
      ["Codes and Rewards", "/codes/", "Keep code and reward claim troubleshooting separate"],
    );
    return links;
  }

  if (slug === "aniimo-discord") {
    links.push(
      ["Server Status", "/troubleshooting/aniimo-server-status/", "Read the dated status and maintenance answer"],
      ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Check source-labeled platform guidance"],
      ["Codes", "/codes/", "Confirm codes through official notices or the game client"],
    );
    return links;
  }

  if (slug === "aniimo-egg-heist-guide") {
    links.push(
      ["Events", "/events/", "Check the official event schedule and requirements"],
      ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Check current support guidance before diagnosing access"],
      ["Mechanics", "/mechanics/", "Review confirmed Twine and gameplay terminology"],
    );
    return links;
  }

  if (slug === "aniimo-pre-registro") {
    links.push(
      ["Aniimo Mobile", "/platforms/mobile/", "Verifique iOS, Android, pais e dispositivo"],
      ["Recompensas", "/rewards/", "Confira status e elegibilidade de recompensas oficiais"],
      ["Solucao de problemas", "/troubleshooting/aniimo-pre-registration-not-working/", "Verifique conta, campanha e disponibilidade"],
    );
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
        ["Is this a final Aniimo tier list?", "No. This is a source-labeled watchlist until current testing confirms balance, availability and team value."],
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
      <SectionTitle icon={<Sparkles />} kicker="Guide" title="Best Aniimo Watchlist" />
      <p className="section-copy">
        This source-labeled list focuses on confirmed public entries that are useful for planning:
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
        { title: "How this list is chosen", body: "The list prioritizes official entries that already have confirmed roles, elements, descriptions and useful internal links. It remains a watchlist, not a final competitive ranking." },
        { title: "What still needs evidence", body: "Add dated combat performance, Twine utility, route access, team synergy and early-game availability only after current-client testing." },
        { title: "Best next step", body: "Use this page to jump into detail pages, then compare same-role and same-region Aniimo before deciding what to play or track." },
      ]} />
    </section>
  );
}

export function PlatformPage({ type }) {
  const platformMap = {
    steam: {
      title: "Aniimo Steam Download Guide",
      intro: "Aniimo is live on Steam. Use the official store page for the current client, system requirements and platform-specific update notices.",
      names: ["Steam"],
      image: "/images/media/aniimo-steam-store.webp",
      notes: [
        { title: "Use the official Steam listing", body: "Install Aniimo only from Steam or the official Aniimo website. Avoid reposted launchers, modified clients and download mirrors." },
        { title: "System requirements", body: "Steam lists 40GB available storage, 8GB RAM minimum and 16GB RAM recommended. Recheck the store page before a large update." },
        { title: "Account planning", body: "Use the Aniimo account you plan to continue with on mobile. Official launch news says PC and mobile share data when the same account is used." },
      ],
    },
    mobile: {
      title: "Aniimo Mobile Download Guide",
      intro: "Aniimo mobile is live through official iOS and Android storefronts. Check the store in your country and on your device before relying on a search result or APK listing.",
      names: ["App Store", "Google Play"],
      image: "/images/media/aniimo-google-play-store.webp",
      notes: [
        { title: "Use official mobile listings", body: "Use the App Store or Google Play listing linked here. Do not use APK mirrors, repackaged clients or account-login pages promoted in social posts." },
        { title: "Mobile store check", body: `Mobile launched on ${releaseInfo.mobile}. Check your country, store account, device compatibility and listing publisher before treating a missing button as an outage.` },
        { title: "Continue the right account", body: "Official launch news says PC and mobile share the same data with the same Aniimo account. Confirm the intended account and server before creating another character." },
      ],
    },
    ps5: {
      title: "Aniimo on PS5: Store & Server Guide",
      intro: "Aniimo is live on PlayStation 5. Use the official PlayStation listing and confirm the PSN region before treating a storefront difference as an availability problem.",
      names: ["PlayStation 5"],
      image: "/images/media/aniimo-playstation-store.webp",
      notes: [
        { title: "Use the PlayStation listing", body: "Install from the official PlayStation listing or official Aniimo links. Avoid third-party download pages and account offers." },
        { title: "Server region", body: "Official support guidance says the PS5 server is assigned from the PSN account region. Data on different servers is independent." },
        { title: "Purchased content", body: "Claim a PS5 pre-order pack by first logging in on PS5. Linked items can then be used on other platforms within the same server." },
      ],
    },
    xbox: {
      title: "Aniimo on Xbox: Store & Access Guide",
      intro: "Aniimo is live on Xbox. Use the official Xbox listing for access, account and regional storefront details.",
      names: ["Xbox"],
      image: "/images/media/aniimo-xbox-store.webp",
      notes: [
        { title: "Use the Xbox listing", body: "Install from the official Xbox store or official Aniimo links. Avoid download pages that ask for account details or separate launchers." },
        { title: "Cloud access", body: "Official pre-download guidance links Xbox Cloud Gaming. Streaming availability and playtime depend on the Microsoft account and a stable connection." },
        { title: "Purchased content", body: "Claim an Xbox pre-order pack by first logging in on Xbox. Linked items can then be used on other platforms within the same server." },
      ],
    },
    "epic-games": {
      title: "Aniimo Epic Games Store Download Guide",
      intro: "Aniimo is live through the official Epic Games Store listing. Check that listing for client access and platform notices.",
      names: ["Epic Games Store"],
      image: "/images/media/aniimo-steam-store.webp",
      notes: [
        { title: "Use the Epic listing", body: "Install Aniimo from the official Epic Games Store page or the official Aniimo website." },
        { title: "Current client", body: "Use the store client to obtain updates. Do not substitute old beta files, reposted installers or unofficial patches." },
        { title: "Account planning", body: "Use the Aniimo account you intend to continue with on mobile, and check server selection before creating a second character." },
      ],
    },
    ios: {
      title: "Aniimo iOS Download & App Store Guide",
      intro: "Aniimo iOS is live through the official App Store listing. Country, account and device compatibility can still affect visibility.",
      names: ["App Store"],
      image: "/images/media/aniimo-google-play-store.webp",
      notes: [
        { title: "Use the App Store", body: "Use the official App Store listing when it is visible in your region. Do not install enterprise profiles or unofficial sideloaded clients." },
        { title: "Availability", body: `iOS launched on ${releaseInfo.mobile}. Check your country, App Store account and device compatibility if the install button is missing.` },
        { title: "Account continuation", body: "Sign in with the same Aniimo account used on PC to continue shared data. Confirm the server before creating a new character." },
      ],
    },
    android: {
      title: "Aniimo Android Download & Google Play Guide",
      intro: "Aniimo Android is live through the official Google Play listing. Country, account and device compatibility can still affect visibility.",
      names: ["Google Play"],
      image: "/images/media/aniimo-google-play-store.webp",
      notes: [
        { title: "Use Google Play", body: "Use the official Google Play page by Pawprint Studio when it is available in your region. Confirm the publisher before installing." },
        { title: "Availability", body: `Android launched on ${releaseInfo.mobile}. Check country, Google Play account and device compatibility if availability differs from reports online.` },
        { title: "APK safety", body: "Avoid APK mirrors, modified clients and installers sent through social posts. This site links only to the official storefront." },
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
      <SectionTitle icon={<Gift />} kicker="Rewards" title="Aniimo Pre-Registration Reward Claims" />
      <p className="section-copy">
        This page separates confirmed pre-registration campaign rewards from redeem codes.
        Use it to check official campaign items, milestone rewards and current claim notes
        without treating historical rewards as active codes.
      </p>
      <RewardGrid />
      <SeoGuideBlock items={[
        { title: "Confirmed reward types", body: "Official reward tracking includes Glimmer, Aniipod Ultra, Companion Promise avatar frame, Sunlit Meadow outfit, a Prismana Aniimo choice and a mysterious Susuta egg." },
        { title: "How to claim", body: "Start from the official website or official storefront pages. Reward delivery can depend on the account, server, region and platform used for the campaign." },
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

export function PrivacyPolicyPage() {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<CheckCircle2 />} kicker="Trust" title="Privacy Policy" />
      <p className="section-copy">
        This policy explains how Aniimo.games handles limited visitor information and
        third-party services. Aniimo.games is an independent guide site and is not
        affiliated with Aniimo, Pawprint Studio, Google or Google AdSense.
      </p>
      <InfoPanel title="Policy Details" rows={[
        ["Site", "Aniimo.games"],
        ["Effective date", "2026-09-24"],
        ["Contact", "Use the Contact page to report a privacy concern or request."],
      ]} />
      <SeoGuideBlock items={[
        { title: "Information collected", body: "Aniimo.games does not require an account or collect names, email addresses or payment information through the site. Our hosting provider may process technical information such as IP address, browser type, device information, referring URL and request logs to deliver and secure the site." },
        { title: "Cookies and Google advertising", body: "Aniimo.games uses Google AdSense services. Google and its advertising partners may use cookies or similar technologies to show and measure ads based on visits to this and other sites, subject to applicable law and consent requirements. Google may use advertising cookies to serve personalized ads where permitted." },
        { title: "Your choices", body: "You can control or delete cookies in your browser settings. Where available, you can manage Google ad personalization at Google Ads Settings. Visitors in regions that require consent will be offered the applicable privacy choices before non-essential advertising technologies are used." },
        { title: "External links", body: "Guide pages link to official Aniimo websites, storefronts and other external services. Their privacy practices are governed by their own policies, not this policy." },
        { title: "Data retention and sharing", body: "Aniimo.games does not sell personal information. Technical data retained by hosting, security, analytics or advertising providers is subject to those providers' retention practices and legal obligations." },
        { title: "Updates and contact", body: "This policy may change when site services or legal requirements change. The effective date above will be updated with material revisions. For privacy questions, use the site's Contact page and include the relevant page URL." },
      ]} />
      <LinkGroup title="Related Policies" items={[
        ["Contact", "/contact/", "Reach the site maintainer about privacy questions or correction requests."],
        ["Editorial Policy", "/editorial-policy/", "Review the source and correction standards used by Aniimo.games."],
        ["Google Privacy & Terms", "https://policies.google.com/technologies/ads", "Learn how Google uses information from sites and apps that use its services."],
      ]} />
    </section>
  );
}

export function AniimoDetail({ item, navigate, localized = false }) {
  const pt = localized;
  const itemRegion = regions.find((region) => region.name === item.region);
  const eventAvailability = postLaunchEvidence.eventAniimo[item.id];
  const linkedEvent = eventAvailability ? liveUpdate.events.find((event) => event.name === eventAvailability.eventName) : null;
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
          <p>{pt ? `Confira ${item.name}, Aniimo nº ${item.no}, com região, função, estágio, formas e status da fonte oficial.` : `${item.name} location, evolution, forms and abilities: browse Aniimo No. ${item.no}, ${item.element} element, ${item.role} role, ${item.region} region and current source status.`}</p>
          <StatusBadge status={item.status} />
        </div>
      </div>
      <div className="tool-actions detail-tool-actions">
        {!pt && itemRegion && <a className="primary-action" href={regionPath(itemRegion)} onClick={(event) => navigate(event, regionPath(itemRegion))}><Map size={16} /> Open {item.region} guide</a>}
        <a className="secondary-action" href={`/compare/aniimo/?ids=${item.id}`} onClick={(event) => navigate(event, `/compare/aniimo/?ids=${item.id}`)}><Copy size={16} /> Compare this Aniimo</a>
        <a className="secondary-action" href={`/team-builder/?ids=${item.id}`} onClick={(event) => navigate(event, `/team-builder/?ids=${item.id}`)}><Plus size={16} /> Add to team</a>
        <a className="secondary-action" href="/collection-tracker/" onClick={(event) => navigate(event, "/collection-tracker/")}><CheckCircle2 size={16} /> Track collection</a>
      </div>
      {!pt && <section className="location-answer" aria-label={`${item.name} location answer`}><div><span className="eyebrow">Location answer</span><h2>Where is {item.name}?</h2><p>{item.name} is currently associated with <strong>{item.region}</strong>. This is a source-labeled region answer, not an exact spawn coordinate.</p></div><div className="location-answer-status"><StatusBadge status={item.status} /><span>Exact route, time and conditions need official or reproducible in-game verification.</span></div></section>}
      {!pt && <div className="quick-facts" aria-label={`${item.name} quick facts`}><div><strong>{item.no}</strong><span>Wiki number</span></div><div><strong>{item.element}</strong><span>Element</span></div><div><strong>{item.role}</strong><span>Role</span></div><div><strong>{item.region}</strong><span>Region</span></div></div>}
      {!pt && <section className="player-answer" aria-label={`${item.name} player quick answer`}>
        <div><span className="eyebrow">Player quick answer</span><h2>What can I confirm about {item.name}?</h2></div>
        <dl>
          <div><dt>Where</dt><dd>{item.region}</dd><small>Region association is source-labeled; exact coordinates are not yet confirmed.</small></div>
          <div><dt>How to get</dt><dd>{item.acquisition}</dd><small>Use the region guide before treating a route, time or condition as final.</small></div>
          <div><dt>Evolution</dt><dd>{item.forms.length > 1 ? item.forms.join(" -> ") : "No listed form path"}</dd><small>{item.evolution || "Exact requirements need current evidence."}</small></div>
          <div><dt>Last checked</dt><dd>{sourceLastChecked}</dd><small>Official Wiki and source review.</small></div>
        </dl>
      </section>}
      {!pt && highIntentAniimoIds.has(item.id) && <InfoPanel title={`${item.name}: Search Answer`} rows={creatureSearchAnswer(item)} />}
      <div className="detail-panels">
        {!pt && <AnswerStatus status={item.status} checked={sourceLastChecked} sourceType="Official Wiki and source review" next={`Open the ${item.region} region guide or compare ${item.name}.`} />}
        {!pt && eventAvailability && <InfoPanel title={eventAvailability.title} rows={[["Official event detail", eventAvailability.detail], ["Event status", linkedEvent ? eventStatus(linkedEvent) : "Watchlist"], ["Schedule", linkedEvent ? eventSchedule(linkedEvent) : "Check official update"], ["Source rule", "This is event availability, not a permanent spawn route or exact coordinate."]]} />}
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
        ...(item.id === "celestis" ? [["Where is Celestis in Aniimo?", "Celestis is currently associated with the Forest of Falling Stars. Use the region guide for current source-labeled notes; exact encounter points and conditions need verified evidence."]] : []),
        ...(item.id === "eko" ? [["Where is Eko in Aniimo?", "Eko is currently associated with Blitzwood. This page lists the public region assignment; exact encounter points, timing and conditions should be treated as unverified until supported by official or reproducible in-game evidence."]] : []),
        ...(item.id === "sherro" ? [["Where is Sherro in Aniimo?", "Sherro is currently associated with Echoback Landing. Open the region guide for related creature coverage; do not treat that association as an exact spawn coordinate."]] : []),
        ...(item.id === "geoclaw" ? [["Where is Geoclaw in Aniimo?", "Geoclaw is currently associated with Mistwoods. Exact Alpha Geoclaw encounter points, conditions and route requirements need official or reproducible verification before publication."]] : []),
        ...(item.id === "glacy" ? [["Where is Glacy in Aniimo?", "Glacy is currently tracked in Nimbus Fields as an Ice DPS Aniimo at Lumin Stage. This page does not publish a precise spawn point until it is confirmed in the live game or by an official source."]] : []),
        ...(item.id === "inferlupa" ? [["How do I get Inferlupa in Aniimo?", "Inferlupa is Aniimo No. 004, a Fire DPS entry at Nova Stage. Its acquisition route and any evolution requirement should be treated as watchlist data until live-game or official evidence is available."]] : []),
        ...(eventAvailability ? [[`Is ${item.name} available in an event?`, `${eventAvailability.detail} ${linkedEvent ? `${eventSchedule(linkedEvent)}. Current status: ${eventStatus(linkedEvent)}.` : ""} Confirm the official update and current client before treating this as a permanent location.`]] : []),
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
        <InfoPanel title="Location Answer" rows={[["Current region association", `${region.aniimo.join(", ")} are currently listed for ${region.name}.`], ["What this means", "This is a source-labeled region association, not an exact coordinate or guaranteed encounter condition."], ["Next step", "Open an Aniimo detail page for its role, forms and current location notes."]]} />
        <InfoPanel title="Route Notes" rows={[["Exploration", region.theme], ["Mechanics", region.mechanics.join(", ")], ["Data status", statuses[region.status]], ["Last updated", siteLastUpdated]]} />
        <InfoPanel title="Launch Checklist" rows={region.checklist.map((item, index) => [`Check ${index + 1}`, item])} />
      </div>
      <div className="detail-editorial">
        <GuideItem title={`${region.name} guide plan`} text={region.guideNote} />
        <GuideItem title="Verification priority" text={`After launch, add route screenshots, exact encounter notes and mechanic-specific checks for ${region.mechanics.join(", ")}.`} />
        <GuideItem title="Source note" text={`This page uses official region material first. Community route findings should be added only after they can be checked against the live game.`} />
      </div>
      <div className="hero-actions section-actions">
        {regionAniimo.slice(0, 3).map((item) => <a className="secondary-action" key={item.id} href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}><Search size={16} /> {item.name} details</a>)}
      </div>
      <RelatedAniimo title={`${region.name} Aniimo`} items={regionAniimo} navigate={navigate} />
      <FaqBlock items={[
        [`Which Aniimo appear in ${region.name}?`, `Current listed encounters include ${region.aniimo.join(", ")}.`],
        [`Where are ${region.aniimo[0]} in Aniimo?`, `${region.aniimo[0]} is currently associated with ${region.name}. Exact spawn points and conditions need official or reproducible in-game verification.`],
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

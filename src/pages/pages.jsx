import React, { useEffect, useMemo, useState } from "react";
import { fieldNotesForPath, updateOutlook } from "../../data/content/october-field-notes.js";
import { BookOpen, CalendarDays, CheckCircle2, ChevronRight, Compass, Download, Gift, Map, Search, Sparkles, Plus, X, Copy, Download as DownloadIcon } from "lucide-react";
import { aniimo, beginnerTopics, choiceTopics, codeRewardTopics, codeVerificationTemplate, codes, conversionTopics, currentPatch, downloadTopics, editorialGuides, eventSchedule, eventStatus, faqs, freshnessPages, freshnessWatchlist, gameInfo, glossaryTopics, gscLatestObservations, gscObservationTemplate, launchDayCommandCenter, launchEvidenceQueues, launchPriorityPages, launchRewards, launchStatusEntries, launchTracker, liveIssueRegistry, liveSupportStatus, liveUpdate, localizedTopics, mapGuide, mechanicDeepDiveTopics, mechanics, mediaDetailTopics, mediaGalleryItems, newsTopics, officialLinks, officialPitchTopics, platformStatusByName, platformUnlockQueue, platforms, postLaunchEvidence, refreshPlanningTopics, regions, releaseInfo, searchIntentStatus, searchSuggestionTopics, seoGuides, siteLastUpdated, socialDiscussionResearch, socialIntentTopics, sourceArchiveItems, sourceLastChecked, spawnVerificationQueue, statuses, tierListSnapshots, troubleshootingTopics, updates, updateWorkflowMatrix, verificationTemplates } from "../../data/content.js";
import { aniimoPath, beginnerTopicPath, choiceTopicPath, codeRewardTopicPath, conversionTopicPath, downloadTopicPath, elementPath, freshnessPagePath, glossaryTopicPath, isIndexableAniimo, localizedTopicPath, locationTopicPath, mechanicDeepDiveTopicPath, mediaDetailTopicPath, newsTopicPath, officialPitchTopicPath, refreshPlanningTopicPath, regionPath, rolePath, searchSuggestionTopicPath, socialIntentTopicPath, stagePath, staticRoutes, statusPath, troubleshootingTopicPath } from "../lib/routes.js";
import { AnswerStatus, CreatureImage, EditorialBlock, EvidenceCard, FaqBlock, FreshnessNotice, GuideItem, InfoPanel, LaunchStatusPanel, QuickCard, RegionImage, RelatedAniimo, RelatedRegions, SectionTitle, Select, SeoGuideBlock, SourcePanel, StatusBadge, TaxonomyLinks } from "../components/ui.jsx";

const priorityAniimoIds = ["somniwing", "infergon", "celestis", "inferlupa", "glacy", "susuta", "eklue", "skippy"];
const highIntentAniimoIds = new Set(["besauce", "fragrancier", "infergon", "blazen", "tubster", "fentuft", "thornblade", "pawney", "fenmane", "geodeback"]);

function FieldNotes({ path, outlook = false }) {
  return (outlook ? [updateOutlook] : fieldNotesForPath(path)).map((note) => <section className="field-note" key={note.title} aria-label={note.title}>
    <p className="eyebrow">{note.checked ? `Official source reviewed ${note.checked}` : "Practical checklist · unverified values excluded"}</p>
    <h2>{note.title}</h2>
    <dl>{note.points.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
    <a className="text-link" href={note.source} target="_blank" rel="noreferrer">{note.checked ? "Read the official announcement" : "Official game information"} <ChevronRight size={16} /></a>
  </section>);
}

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
  if (value.includes("switch") || value.includes("nintendo")) return "/compare/is-aniimo-on-switch/";
  if (value.includes("ps4")) return "/topics/aniimo-ps4/";
  if (value.includes("maintenance") || value.includes("downtime") || value.includes("down") || value.includes("network") || value.includes("login") || value.includes("loading") || value.includes("bug") || value.includes("issue") || value.includes("error")) return "/troubleshooting/aniimo-server-status/";
  if (value.includes("somniwing")) return "/aniimo/somniwing/";
  if (value.includes("character") || value.includes("aniimo characters")) return "/aniimo/";
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
            <p className="eyebrow">Independent Aniimo game guide</p>
            <h1>Aniimo map, locations, downloads and 90-creature database answers.</h1>
            <p>{gameInfo.summary} Start with server status, known issues, downloads or platform availability, then search the 90-entry database and source-labeled region guides without sorting through rumor fixes.</p>
            <div className="hero-actions">
              <a className="primary-action" href="/troubleshooting/aniimo-server-status/" onClick={(event) => props.navigate(event, "/troubleshooting/aniimo-server-status/")}>
                <CheckCircle2 size={18} />
                Server status
              </a>
              <a className="secondary-action" href="/download/" onClick={(event) => props.navigate(event, "/download/")}>
                <Download size={18} />
                Choose a platform
              </a>
              <a className="secondary-action" href="/map/" onClick={(event) => props.navigate(event, "/map/")}>
                <Map size={18} />
                Open map guides
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

        <section className="section" aria-label="Live player support shortcuts">
          <SectionTitle icon={<CheckCircle2 />} kicker="Live player support" title="Answer the urgent question first" />
          <div className="quick-grid">
            <QuickCard icon={<CheckCircle2 />} title="Is Aniimo down?" text="See the dated status, maintenance history and what to check when only your account is affected." href="/troubleshooting/aniimo-server-status/" navigate={props.navigate} />
            <QuickCard icon={<BookOpen />} title="Known issue or bug?" text="Match login, loading, update, reward and controller symptoms to a safe next step." href="/troubleshooting/aniimo-known-issues/" navigate={props.navigate} />
            <QuickCard icon={<Download />} title="Where can I play?" text="Compare confirmed PC, console and mobile paths, including the unconfirmed Switch and PS4 questions." href="/download/" navigate={props.navigate} />
            <QuickCard icon={<Search />} title="Find an Aniimo" text="Search the database by name, stage, element, role or region, with watchlist fields clearly marked." href="/aniimo/" navigate={props.navigate} />
          </div>
        </section>

        <section className="section player-entry-grid" aria-label="Aniimo game starting points">
          <article>
            <span className="eyebrow">Find locations</span>
            <h2>Find a creature, then open its region and map.</h2>
            <p>All six tracked regions include official-region context, a community-map entrance and route-planning checks.</p>
            <a className="primary-action" href="/map/" onClick={(event) => props.navigate(event, "/map/")}><Map size={18} /> Browse map guides</a>
          </article>
          <article>
            <span className="eyebrow">Get the game</span>
            <h2>Choose a store before downloading.</h2>
            <p>Use verified Steam, Epic, PlayStation, Xbox, App Store and Google Play paths. Country and device can still affect storefront visibility.</p>
            <a className="secondary-action" href="/download/" onClick={(event) => props.navigate(event, "/download/")}><Download size={18} /> Open official downloads</a>
          </article>
        </section>

        <section className="section player-desk" aria-label="Player field desk">
          <SectionTitle icon={<Compass />} kicker="Player field desk" title="A clear next step, not another rumor feed" />
          <div className="player-desk-grid">
            <article><span className="eyebrow">01 / This week's windows</span><h2>Check before traveling</h2><p>Source-dated activities, weekly opening times and windows that need a client check.</p><a href="/events/">Open event calendar <ChevronRight size={16} /></a></article>
            <article><span className="eyebrow">02 / Something went wrong</span><h2>Find the right fix</h2><p>Separate server maintenance from account, device and client issues.</p><a href="/troubleshooting/aniimo-known-issues/">Troubleshoot an issue <ChevronRight size={16} /></a></article>
            <article><span className="eyebrow">03 / Go deeper</span><h2>Make your next run count</h2><p>Read the official Egg Heist explanation or optimize a useful Homeland.</p><a href="/mechanics/egg-heist-rules/">Egg Heist rules <ChevronRight size={16} /></a><a href="/guides/aniimo-homeland-guide/">Homeland optimizer <ChevronRight size={16} /></a></article>
          </div>
          <FieldNotes path="/" />
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
            ["Looking for an Aniimo?", `Browse all ${aniimo.length} public entries by name, element, role, region and stage. Start with Somniwing or Infergon search answers.`],
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

export function DatabasePage({ query, setQuery, element, setElement, region, setRegion, role, setRole, stage, setStage, statusFilter, setStatusFilter, sortBy, setSortBy, elements, regionNames, roles, stages, filteredAniimo, navigate, compact }) {
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
          {!compact && <EvidenceCard conclusion={`Search ${aniimo.length} tracked Aniimo entries`} status="Verified" source={officialLinks.officialWiki} checked={sourceLastChecked} next="Use the filters or open a character guide; exact spawn points remain source-labeled." />}
          {!compact && <LinkGroup title="Location and Map Shortcuts" items={regions.filter((item) => item.map).map((item) => [item.name, regionPath(item), `Open the ${item.name} guide, community map and route-planning checklist.`])} navigate={navigate} />}
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
          <div className="filter-summary-row"><p className="filter-summary" aria-live="polite">Showing {statusFilteredAniimo.length} of {aniimo.length} Aniimo</p><button type="button" className="mini-action" onClick={() => { setQuery(""); setElement("All"); setRegion("All"); setRole("All"); setStage("All"); setStatusFilter("All"); setSortBy("Number"); }}>Clear filters</button></div>
          {!statusFilteredAniimo.length && <InfoPanel title="No matching creatures" rows={[["Try this", "Clear a filter or search by name, region, element, role or stage."], ["Browse instead", "Open the full creature list or use the popular search shortcuts below."]]} />}
          {!compact && <div className="query-shortcuts" aria-label="Popular database searches">
            <span>Popular searches</span>
            {["Somniwing", "Infergon", "Celestis", "Eko", "all Aniimo", "Aniimo locations"].map((term) => <button key={term} type="button" onClick={() => setQuery(term === "all Aniimo" ? "" : term)}>{term}</button>)}
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
                  {isIndexableAniimo(item) ? (
                    <a className="text-link" href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
                      View Aniimo guide <ChevronRight size={16} />
                    </a>
                  ) : <p className="small">Official name entry: detail guide is pending verification.</p>}
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
              {isIndexableAniimo(item) ? (
                <a className="text-link" href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
                  View Aniimo guide <ChevronRight size={16} />
                </a>
              ) : <p className="small">Official name entry: detail guide is pending verification.</p>}
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
  const mappedRegions = regions.filter((item) => item.map);
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
          {!compact && <FreshnessNotice subject="Map routes" checked={sourceLastChecked} sourceType="official region material and live-client verification policy" message="External map markers are route-planning aids; weather, time and exact spawn details remain unconfirmed until reproduced in the current client." />}
          {!compact && <div className="map-toolbar"><label className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search regions, Aniimo or mechanics" /></label><Select label="Region" value={regionFilter} onChange={setRegionFilter} options={["All", ...regions.map((item) => item.name)]} /><button type="button" className="secondary-action" onClick={() => navigator.clipboard?.writeText(`${window.location.origin}/map/?q=${encodeURIComponent(query)}&region=${encodeURIComponent(regionFilter)}`)}><Copy size={16} /> Copy map link</button></div>}
          {!compact && <p className="section-copy map-answer">Find an Aniimo location by opening one of the {regions.length} regional map tools below. A final measured world size is not confirmed yet, and exact spawn routes stay source-labeled until verified.</p>}
          {!compact && <section className="action-priority" aria-label="High-intent region routes"><div><span className="eyebrow">Most searched routes</span><h2>Start with the region players are already looking for.</h2><p>Choose a target, then open a dedicated route guide before loading a full marker layer.</p></div><div className="hero-actions">{["sea-of-flowers", "forest-of-falling-stars", "blitzwood"].map((id) => { const region = regions.find((item) => item.id === id); return region ? <a className="secondary-action" key={id} href={regionPath(region)} onClick={(event) => navigate(event, regionPath(region))}><Map size={16} /> {region.name}</a> : null; })}</div></section>}
          {!compact && <InfoPanel title="Map and Location Answer" rows={[["Find a region", "Search the map by region, Aniimo name or mechanic, then open the region guide."], ["Find a creature", "Region pages connect Celestis, Eko, Sherro and other listed Aniimo to current source-labeled location notes."], ["Exact spawns", "Coordinates, weather and time conditions stay unconfirmed until supported by official or reproducible evidence."]]} />}
          {!compact && <section className="map-tool-summary" aria-label="Community map availability"><div><span className="eyebrow">Route tools</span><h2>{mappedRegions.length} regions have a usable community map</h2><p>Open these planning tools for markers and route building, then use the live game to verify final encounters.</p></div><div>{mappedRegions.map((item) => <a className="secondary-action" key={item.id} href={item.map.mapUrl} target="_blank" rel="noreferrer"><Map size={16} /> {item.name}</a>)}</div></section>}
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
                {item.map && <p className="map-available"><Map size={15} /> Community map available</p>}
                <a className="text-link" href={regionPath(item)} onClick={(event) => navigate(event, regionPath(item))}>
                  View region guide <ChevronRight size={16} />
                </a>
                {item.map && <a className="text-link" href={item.map.mapUrl} target="_blank" rel="noreferrer">Open community map <ChevronRight size={16} /></a>}
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
          <PlayerActionStatus navigate={navigate} />
          <LinkGroup title="What do you need help with?" items={[
            ["I have a code", "/codes/how-to-redeem/", "Check the official code status and redemption evidence before entering it."],
            ["A reward is missing", "/rewards/", "Check account, server, platform and campaign delivery guidance."],
            ["A code does not work", "/codes/aniimo-codes-not-working/", "Check spelling, expiry, platform and region without trusting reposted lists."],
            ["I need current launch help", "/launch-day/", "Check official status before changing accounts or reinstalling."],
          ]} navigate={navigate} />
          <AnswerStatus status="Watchlist" checked={sourceLastChecked} sourceType="Official Aniimo channels and direct in-game verification" next="Use only an official announcement or the in-game redemption flow before entering a code." />
          <FreshnessNotice subject="Redeem code status" checked={sourceLastChecked} sourceType="official channels and current-client verification" message="No code is published here as active unless its string, reward and restrictions can be verified." />
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
      <PlayerActionStatus navigate={navigate} focus="reward" />
      <LinkGroup title="Claim a Reward" items={[
        ["Check campaign eligibility", "/rewards/junior-wayfarer/", "Confirm the official Junior Wayfarer campaign details."],
        ["Check milestone rewards", "/rewards/milestones/", "Review official milestone items separately from codes."],
        ["A reward is missing", "/troubleshooting/aniimo-pre-registration-not-working/", "Check account, region, store and campaign availability."],
        ["Looking for codes?", "/codes/", "Redeem codes are separate from campaign rewards."],
      ]} navigate={navigate} />
      <EvidenceCard conclusion="Official campaign rewards are tracked separately from redeem codes" status="Confirmed" source={officialLinks.website} checked={sourceLastChecked} next="Confirm your account, server, region and platform before reporting a missing campaign reward." />
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
  const platformAnswers = [
    ["PC", "Available", "Steam and Epic Games Store", "/platforms/steam/"],
    ["PS5", "Available", "Official PlayStation 5 listing", "/platforms/ps5/"],
    ["Xbox", "Available", "Official Xbox listing", "/platforms/xbox/"],
    ["iPhone and iPad", "Available", "Official App Store listing", "/platforms/ios/"],
    ["Android", "Available", "Official Google Play listing", "/platforms/android/"],
    ["Nintendo Switch", "Not confirmed", "No official Switch or Switch 2 listing is tracked", "/compare/is-aniimo-on-switch/"],
    ["PS4", "Not confirmed", "PS5 is tracked; no official PS4 listing is confirmed", "/topics/aniimo-ps4/"],
  ];
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
            <section className="platform-answer-matrix" aria-label="Aniimo platform availability">
              <div>
                <span className="eyebrow">Platform answer</span>
                <h2>Where can you play Aniimo?</h2>
                <p>Use a confirmed storefront when one is listed. Switch and PS4 are not presented as available until an official listing confirms them.</p>
              </div>
              <div className="platform-answer-list">
                {platformAnswers.map(([platform, status, detail, href]) => <a key={platform} href={href} onClick={(event) => href.startsWith("/") && navigate(event, href)}><span><strong>{platform}</strong><small>{detail}</small></span><span className={status === "Available" ? "availability confirmed" : "availability watchlist"}>{status}</span></a>)}
              </div>
            </section>
            <EvidenceCard conclusion={selectedDevice.title} status="Verified" source={officialLinks.website} checked={sourceLastChecked} next={selectedDevice.note} />
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
              ["Nintendo Switch", "/compare/is-aniimo-on-switch/", "Check the explicit Switch and Switch 2 availability status."],
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
        ["1. Update safely first", "After the October 29 Season 1 Part 2 update, restart the client after maintenance and check the official known-issues notice before troubleshooting."],
        ["2. Start on an official platform", "PC, consoles and mobile are live. Check the App Store or Google Play availability in your country and on your device before using any workaround."],
        ["3. Choose account and server carefully", "PC and mobile share data with the same Aniimo account; different servers keep independent data."],
        ["4. Check the new content path", "Check Whisperwake Isles unlock requirements, then review Companion Handbook, Home Season and PvP eligibility in the current client."],
        ["5. Keep rewards separate from codes", "Campaign rewards and redeem codes are different. Only use a code published by an official channel or shown in the current client."],
        ["6. Learn before optimizing", "Start with catching, Twine and the database. Routes, builds and tier claims need current evidence."],
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

function PlayerActionStatus({ navigate, focus = "code" }) {
  const irisalisEvent = liveUpdate.events.find((event) => event.name.includes("Windchaser's Departure"));
  const codeAction = {
    title: "I have a redeem code",
    status: "Watchlist",
    answer: "Enter a string only after the official announcement or the current client confirms it. The current site does not mark a public code as official.",
    href: "/codes/how-to-redeem/",
    action: "Open redemption steps",
  };
  const rewardAction = {
    title: "A campaign reward is missing",
    status: "Confirmed",
    answer: "Check the same account, server, platform and in-game mail used for the campaign before changing accounts or reinstalling.",
    href: "/troubleshooting/aniimo-pre-registration-not-working/",
    action: "Resolve missing reward",
  };
  const actions = focus === "reward" ? [rewardAction, codeAction] : [codeAction, rewardAction];
  return (
    <section className="section compact-section" aria-label="Player reward actions">
      <SectionTitle icon={<CheckCircle2 />} kicker="Do this now" title="Choose the path that matches your situation" />
      <div className="detail-panels">
        {actions.map((item) => <article className="info-panel" key={item.title}><div className="info-panel-heading"><h2>{item.title}</h2><StatusBadge status={item.status} /></div><p>{item.answer}</p><a className="text-link" href={item.href} onClick={(event) => navigate(event, item.href)}>{item.action} <ChevronRight size={16} /></a></article>)}
        {irisalisEvent && <article className="info-panel"><div className="info-panel-heading"><h2>I want to progress Irisalis</h2><StatusBadge status={eventStatus(irisalisEvent)} /></div><p>{irisalisEvent.requirements} {irisalisEvent.detail}</p><a className="text-link" href="/events/" onClick={(event) => navigate(event, "/events/")}>Check event status <ChevronRight size={16} /></a></article>}
      </div>
    </section>
  );
}

export function UpdatesPage() {
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Current Game" title="Aniimo Updates, Events & Player Guides" />
      <p className="section-copy">Check the Season 1 Part 2 update, current activities, mobile update help and the next useful game guide. The site changelog and source-monitoring detail remain below for readers who need them.</p>
      <section className="current-update-callout" aria-label="Current Aniimo update">
        <div>
          <span className="eyebrow">Current update</span>
          <h2>{currentPatch.title}</h2>
          <p>{currentPatch.summary}</p>
          <a className="primary-action" href={currentPatch.source} target="_blank" rel="noreferrer"><CalendarDays size={18} /> Read official patch notes</a>
        </div>
        <dl>
          <div><dt>Updated</dt><dd>{currentPatch.date}</dd></div>
          <div><dt>Start here</dt><dd>Restart the client, then check events or current issues.</dd></div>
          <div><dt>Player impact</dt><dd>Whisperwake Isles, 51 new Aniimo, PvP activities and post-update mobile issues are covered in the current notes.</dd></div>
        </dl>
      </section>
      <div className="site-index-grid player-update-links">
        <LinkGroup title="Play Now" items={[["Current Events", "/events/", "Check active event requirements, time windows and official details."], ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Check current login, loading, reward and platform fixes."], ["Official Download", "/download/", "Open the right official store for your device."], ["Map and Locations", "/map/", "Find a region guide and use a source-labeled route workflow."]]} />
        <LinkGroup title="Track the Game" items={[["Official News", "/updates/official-news/", "Review official announcements and affected guides."], ["Source Archive", "/source-archive/", "See the primary sources used for current claims."], ["Site Changelog", "/updates/site-changelog/", "Review material Aniimo.games updates."], ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Check current login, loading and reward fixes."]]} />
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
  const eventOrder = { Active: 0, "Check in client": 1, Upcoming: 2, "Closed this week": 3, Ended: 4 };
  const orderedEvents = [...liveUpdate.events].sort((left, right) => eventOrder[eventStatus(left)] - eventOrder[eventStatus(right)] || new Date(left.startsAt || left.startDate) - new Date(right.startsAt || right.startDate));
  const activeEvents = orderedEvents.filter((event) => eventStatus(event) === "Active");
  const upcomingEvents = orderedEvents.filter((event) => eventStatus(event) === "Upcoming");
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Official sources" title="Aniimo events: current windows and what to check" />
      <p className="section-copy">Season 1 Part 2 adds Whisperwake Isles, real-time 1v1 Spar and an Egg Heist PvP test. Older timed notices use UTC+8 and date-only activities still require a client check. A listed event is not proof that it is open on every server.</p>
      <FieldNotes path="/events/" />
      <FieldNotes outlook />
      <AnswerStatus status="Confirmed" checked={sourceLastChecked} sourceType="Official Aniimo October update notice" next="Recheck the official notice after maintenance or before publishing changed event times, eligibility or rewards." />
      <FreshnessNotice subject="October event schedule" checked={sourceLastChecked} sourceType="official update and known-issue notices" message="Regional Harvest Gathering times are published separately; date-only activities require a client check." />
      <div className="detail-panels">
        <InfoPanel title="Recorded Current Update" rows={[["Update", liveUpdate.title], ["Published", liveUpdate.date], ["Time standard", "PvP and season windows use the published regional schedule where available; date-only activities require a client check."], ["Mobile", "iOS and Android are live; some iOS updates may require more than 40 GB free during installation"]]} />
        <InfoPanel title="Last Recorded Resource Update" rows={[["Patch", `${currentPatch.title} (${currentPatch.date})`], ["Player action", currentPatch.summary], ["Eligibility", currentPatch.eligibility]]} />
      </div>
      <IrisalisJourneyPanel navigate={navigate} />
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
          <tbody>{orderedEvents.filter((event) => eventStatus(event) !== "Ended").map((event) => <tr key={event.name}><td>{event.name}</td><td><StatusBadge status={eventStatus(event)} /></td><td>{eventSchedule(event)}</td><td>{event.requirements}</td><td>{event.detail} <a href={event.source} target="_blank" rel="noreferrer">Source</a>{event.checked && <small> Reviewed {event.checked}</small>}</td></tr>)}</tbody>
        </table>
      </div>
      <details className="event-archive"><summary>Past event windows ({orderedEvents.filter((event) => eventStatus(event) === "Ended").length})</summary>{orderedEvents.filter((event) => eventStatus(event) === "Ended").map((event) => <article key={event.name}><h3>{event.name}</h3><p>{eventSchedule(event)}</p><p>{event.detail}</p><a href={event.source} target="_blank" rel="noreferrer">Historical official notice</a></article>)}</details>
      <SeoGuideBlock items={[
        { title: "Use official timing", body: "Each activity lists its own time precision. Dates without a source time zone need a client check, not an exact countdown. Recurring activities can be closed between weekly windows." },
        { title: "Keep event facts narrow", body: "This page records official dates, entry requirements and publicly stated details. Drop rates, optimal routes, team builds and economy advice need current-client evidence before publication." },
        { title: "What to do if an event is unavailable", body: "Restart after the Season 1 Part 2 update, then check your character requirement, server, local storefront version and the official notice before relying on community screenshots or workaround guides." },
      ]} />
      <div className="hero-actions section-actions">
        <a className="primary-action" href={liveUpdate.source} target="_blank" rel="noreferrer"><Search size={18} /> Check official update</a>
        <a className="secondary-action" href={currentPatch.source} target="_blank" rel="noreferrer"><Download size={18} /> Check latest update</a>
        <a className="secondary-action" href="/weekly-plan/" onClick={(event) => navigate(event, "/weekly-plan/")}><CalendarDays size={18} /> Open weekly plan</a>
        <a className="secondary-action" href="/launch-day/" onClick={(event) => navigate(event, "/launch-day/")}><CheckCircle2 size={18} /> Open launch support</a>
      </div>
    </section>
  );
}

export function WeeklyPlanPage({ navigate }) {
  const repeatableNames = new Set(["Legendary Journey: Windchaser's Departure", "Holo-Battle Interlink", "Egg Heist Team Mode: Chaos Mode", "Egg Heist PvP Test", "Real-time 1v1 Spar", "Aniimo Go!"]);
  const activeEvents = liveUpdate.events.filter((event) => eventStatus(event) === "Active");
  const repeatableEvents = liveUpdate.events.filter((event) => repeatableNames.has(event.name));
  return (
    <section className="section updates-band">
      <SectionTitle icon={<CalendarDays />} kicker="Current week" title="Plan your next useful Aniimo session" />
      <p className="section-copy">This page turns the current official event schedule into a short planning checklist. It does not invent daily tasks, reward quantities or reset rules that still require current-client verification.</p>
      <FieldNotes path="/weekly-plan/" />
      <AnswerStatus status="Confirmed" checked={sourceLastChecked} sourceType="Official October event notice" next="Check the current client before relying on a requirement, reset timing or availability state." />
      <FreshnessNotice subject="Weekly plan" checked={sourceLastChecked} sourceType="official event notices" message="This is a planning layer over published events, not a claim that unlisted daily caps, resets or rewards are current." />
      <section className="event-summary-grid" aria-label="Weekly activity counts"><article><span className="eyebrow">Active windows</span><strong>{activeEvents.length}</strong><p>Current time-window activities listed by the official update.</p></article><article><span className="eyebrow">Repeatable focus</span><strong>{repeatableEvents.length}</strong><p>Season progression, Holo-Battle, Egg Heist and the new PvP activities are tracked separately from one-off windows.</p></article></section>
      <section className="section compact-section" aria-label="Repeatable activity plan"><SectionTitle icon={<Compass />} kicker="Start here" title="Choose one repeatable goal before opening a map" /><div className="detail-panels">{repeatableEvents.map((event) => <article className="info-panel" key={event.name}><div className="info-panel-heading"><h2>{event.name}</h2><StatusBadge status={eventStatus(event)} /></div><p>{event.detail}</p><dl><div><dt>Requirement</dt><dd>{event.requirements}</dd></div><div><dt>Schedule</dt><dd>{eventSchedule(event)}</dd></div></dl><a className="text-link" href={event.source} target="_blank" rel="noreferrer">Official details <ChevronRight size={16} /></a></article>)}</div></section>
      <section className="section compact-section" aria-label="Current limited time events"><SectionTitle icon={<Sparkles />} kicker="Time-limited" title="Check these windows before they end" /><div className="detail-panels">{activeEvents.filter((event) => !repeatableNames.has(event.name)).map((event) => <article className="info-panel" key={event.name}><div className="info-panel-heading"><h2>{event.name}</h2><StatusBadge status={eventStatus(event)} /></div><p>{event.detail}</p><p className="small"><strong>Requirement:</strong> {event.requirements}</p><p className="small"><strong>Window:</strong> {eventSchedule(event)}</p></article>)}</div></section>
      <InfoPanel title="Before You Finish a Session" rows={[["Update check", "Restart the client after the October 29 season update, then retry a repeatable issue before reporting it."], ["New-region check", "Confirm the Whisperwake Isles story or account requirement in the current client before planning a route."], ["PvP check", "Egg Heist PvP and 1v1 Spar have separate rules; verify opening windows, lineup and eligibility in the mode screen."], ["Progress proof", "Record platform, server, client version and a screenshot when an eligibility or reward state differs from the official notice."], ["Map objective", "For exploration, pick one creature or resource objective and use the matching region guide instead of opening every marker layer."], ["No claimed reset", "Daily and weekly reset hours, caps and reward quantities stay out of this plan unless confirmed in the live client or an official update."]]} />
      <div className="hero-actions section-actions"><a className="primary-action" href="/events/" onClick={(event) => navigate(event, "/events/")}><CalendarDays size={18} /> Full event schedule</a><a className="secondary-action" href="/map/" onClick={(event) => navigate(event, "/map/")}><Map size={18} /> Pick a region route</a><a className="secondary-action" href="/troubleshooting/aniimo-known-issues/" onClick={(event) => navigate(event, "/troubleshooting/aniimo-known-issues/")}><CheckCircle2 size={18} /> Resolve an issue</a></div>
    </section>
  );
}

function IrisalisJourneyPanel({ navigate }) {
  const event = liveUpdate.events.find((item) => item.name.includes("Windchaser's Departure"));
  if (!event) return null;
  return (
    <section className="location-answer" aria-label="Irisalis event progress">
      <div>
        <span className="eyebrow">Irisalis event path</span>
        <h2>Check the current Legendary Journey before planning a route.</h2>
        <p>{event.detail}</p>
      </div>
      <div className="location-answer-status">
        <StatusBadge status={eventStatus(event)} />
        <span>{eventSchedule(event)}</span>
        <span>{event.requirements}</span>
        <a className="text-link" href={event.source} target="_blank" rel="noreferrer">Official event details <ChevronRight size={16} /></a>
      </div>
      <div className="hero-actions section-actions">
        <a className="primary-action" href={event.source} target="_blank" rel="noreferrer"><Sparkles size={18} /> Open official Irisalis event</a>
        <a className="secondary-action" href="/codes/" onClick={(eventClick) => navigate(eventClick, "/codes/")}><Gift size={18} /> Check rewards and codes</a>
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
      {topic.slug === "aniimo-controller-support" && <InfoPanel title="Controller Support Status" rows={[["Steam PC", "Disable Steam Input in Aniimo's Steam Controller properties, restart, then retest native controller input."], ["Latest update", "The November 12 update added mobile control-area adjustment, camera and storage improvements, plus console and Egg Heist fixes; verify the current client before treating a dated fix as unresolved."], ["Console", "Xbox and PS5 controls should be treated separately from the Steam Input path."], ["Mobile and Steam Deck", "Bluetooth/mobile and handheld compatibility still need separate verification."]]}/>}
      {topic.slug === "aniimo-controller-support" && <ControllerTroubleshootingFlow navigate={navigate} />}
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

function ControllerTroubleshootingFlow({ navigate }) {
  return (
    <section className="section compact-section" aria-label="Controller troubleshooting flow">
      <SectionTitle icon={<CheckCircle2 />} kicker="Fix input" title="Follow the path for your platform" />
      <div className="detail-panels">
        <article className="info-panel"><div className="info-panel-heading"><h2>Steam PC: prompts or input do not work</h2><StatusBadge status="Confirmed" /></div><ol className="inline-list"><li>Open Steam Library, select Aniimo, then Manage and Properties.</li><li>Open Controller and set Steam Input to Disable Steam Input.</li><li>Restart Aniimo and retest native controller input.</li></ol><p className="small">This is the official Steam troubleshooting path. Do not assume it applies to console, mobile or Steam Deck.</p></article>
        <article className="info-panel"><div className="info-panel-heading"><h2>Reward progress button does not respond</h2><StatusBadge status="Confirmed" /></div><ol className="inline-list"><li>Restart the client to load the latest resource update.</li><li>Retry the progress-bar reward claim with the current client.</li><li>If it repeats, record platform, controller model, connection type, client version and time.</li></ol><p className="small">The official update history includes controller reward-claiming and Home controller improvements; check the current client before reporting a repeatable issue.</p></article>
        <article className="info-panel"><div className="info-panel-heading"><h2>Console, mobile or Steam Deck</h2><StatusBadge status="Watchlist" /></div><p>Keep these paths separate from Steam PC. Console controls, Bluetooth controller support on mobile, and Steam Deck mappings need platform-specific verification.</p><a className="text-link" href="/troubleshooting/aniimo-known-issues/" onClick={(event) => navigate(event, "/troubleshooting/aniimo-known-issues/")}>Open known issues <ChevronRight size={16} /></a></article>
      </div>
      <div className="hero-actions section-actions"><a className="secondary-action" href="/codes/" onClick={(event) => navigate(event, "/codes/")}><Gift size={16} /> Reward and code help</a><a className="secondary-action" href="/events/" onClick={(event) => navigate(event, "/events/")}><CalendarDays size={16} /> Current event status</a></div>
    </section>
  );
}

export function LaunchTrackerPage({ navigate }) {
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
      <div className="hero-actions section-actions"><a className="primary-action" href="/updates/official-news/" onClick={(event) => navigate(event, "/updates/official-news/")}><CalendarDays size={18} /> Check official news</a></div>
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
        <LinkGroup title="Current Update" items={[["Season 1 Part 2 Events", "/events/", "Check Whisperwake Isles, PvP activities, eligibility and official source links."], ["Latest Client Update", "/events/", "Restart after the October 29 season update before reporting a repeatable issue."]]} navigate={navigate} />
        <LinkGroup title="Quick Help for Launch Day" items={[
          ["Active Aniimo Codes", "/codes/active/", "Check active code status and verification notes."],
          ["Server Status", "/troubleshooting/aniimo-server-status/", "Track maintenance, outage and launch availability checks."],
          ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Track login, black screen, stuck loading and platform-specific launch errors."],
          ["Download Unavailable", "/troubleshooting/aniimo-download-not-available/", "Fix missing download buttons, platform rollout and region issues."],
          ["Region Availability", "/troubleshooting/aniimo-region-availability/", "Track country, account and platform-region availability issues."],
          ["How to Redeem", "/codes/how-to-redeem/", "Follow the current code-redeem steps and official status guidance."],
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
    ["/aniimo/", "/map/", "/evolution/", "/codes/", "/rewards/", "/download/", "/release-date/", "/beginner-guide/", "/launch-day/", "/best-aniimo/", "/sources/"].includes(route.path),
  );
  const platformPages = staticRoutes.filter((route) => route.path.startsWith("/platforms/"));
  const downloadPages = downloadTopics.map((item) => [item.title, downloadTopicPath(item), item.description]);
  const beginnerPages = beginnerTopics.map((item) => [item.title, beginnerTopicPath(item), item.description]);
  const codeRewardPages = codeRewardTopics.map((item) => [item.title, codeRewardTopicPath(item), item.description]);
  const choicePages = choiceTopics.map((item) => [item.title, choiceTopicPath(item), item.description]);
  const officialPitchPages = officialPitchTopics.map((item) => [item.title, officialPitchTopicPath(item), item.description]);
  const socialIntentPages = socialIntentTopics.map((item) => [item.title, socialIntentTopicPath(item), item.description]);
  const searchSuggestionPages = searchSuggestionTopics.map((item) => [item.title, searchSuggestionTopicPath(item), item.description]);
  const glossaryPages = glossaryTopics.map((item) => [item.term, glossaryTopicPath(item), item.definition]);
  const troubleshootingPages = troubleshootingTopics.map((item) => [item.title, troubleshootingTopicPath(item), item.description]);
  const mechanicPages = mechanicDeepDiveTopics.map((item) => [item.title, mechanicDeepDiveTopicPath(item), item.description]);
  const mediaPages = mediaDetailTopics.map((item) => [item.title, mediaDetailTopicPath(item), item.description]);
  const conversionPages = conversionTopics.map((item) => [item.title, conversionTopicPath(item), item.description]);
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
  const portugueseAniimoPages = ["emberpup", "inferlupa", "glacy", "celestis", "eklue", "skippy", "susuta"].map((id) => aniimo.find((item) => item.id === id)).filter(isIndexableAniimo).map((item) => [item.name, `/pt-br/aniimo/${item.id}/`, `Guia em português sobre ${item.name}, nº ${item.no}, região, função e status da fonte.`]);
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
        <LinkGroup title="Launch Priority Pages" items={launchPriorityPages.map(([path, label, query, action]) => [label, path, `${query}: ${action}`])} navigate={navigate} />
        <LinkGroup title="Launch Search Shortcuts" items={launchSearchPages} navigate={navigate} />
        <LinkGroup title="Platform Pages" items={platformPages.map((item) => [item.label, item.path, item.description])} navigate={navigate} />
        <LinkGroup title="Download Decisions" items={downloadPages} navigate={navigate} />
        <LinkGroup title="Beginner Questions" items={beginnerPages} navigate={navigate} />
        <LinkGroup title="Codes & Rewards" items={codeRewardPages} navigate={navigate} />
        <LinkGroup title="News & Updates" items={[["Official News", "/updates/official-news/", "Read dated official announcements and affected guide changes."], ["Platform Changes", "/updates/platform-changes/", "Track store, region and platform availability changes."], ["Site Changelog", "/updates/site-changelog/", "Review material Aniimo.games guide updates."]]} navigate={navigate} />
        <LinkGroup title="Official Feature Guides" items={officialPitchPages} navigate={navigate} />
        <LinkGroup title="Community Question Guides" items={socialIntentPages} navigate={navigate} />
        <LinkGroup title="Search Topic Guides" items={searchSuggestionPages} navigate={navigate} />
        <LinkGroup title="Glossary" items={glossaryPages} navigate={navigate} />
        <LinkGroup title="Troubleshooting" items={troubleshootingPages} navigate={navigate} />
        <LinkGroup title="Mechanic Deep Dives" items={mechanicPages} navigate={navigate} />
        <LinkGroup title="Media Details" items={mediaPages} navigate={navigate} />
        <LinkGroup title="Launch Conversion Guides" items={conversionPages} navigate={navigate} />
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
          ["Map Guide", "/map/", "Connect mechanics to regions and source-labeled route notes."],
          ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Check current platform-specific gameplay and client issues."],
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
          ["Official News", "/updates/official-news/", "Review dated official announcements and affected guides."],
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
          ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Review player-facing platform and client issues."],
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
        guide context, region discovery, social previews and source-safe SEO pages. Site-
        prepared graphics are identified as such; official or storefront imagery remains
        tied to its source context. For image rights questions, email gachiawiki@gmail.com.
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
        ["Can media pages include unofficial images?", "Only when rights, source and page purpose are clear. Official or site-prepared assets are preferred. Third-party media is not republished as a substitute for the original source."],
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
        ["Controller or button prompts", "/topics/aniimo-controller-support/", "Use the official Steam Input path on PC; keep console and mobile checks separate."],
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
      <EvidenceCard conclusion={topic.title} status="Watchlist" source={topic.source} checked={sourceLastChecked} next="Use the related actions below, then check the linked source before acting." />
      <div className="source-level" aria-label="Source level"><strong>Source level</strong><span>{topic.sourceType || "Editorial review"}</span><span>Facts and community leads are kept separate.</span></div>
      {statusEntry && <LaunchStatusPanel title="Answer Status" entries={[statusEntry]} />}
      {intentStatus && <InfoPanel title="What We Are Checking Next" rows={[["Next check", intentStatus.action], ["Page", topic.title]]} />}
      {topic.slug === "aniimo-server-status" && <LiveSupportStatus />}
      {topic.slug === "is-aniimo-on-switch" && <InfoPanel title="Nintendo Switch Status" rows={[["Current answer", "Aniimo.games does not treat Nintendo Switch or Switch 2 as confirmed without an official store listing or platform announcement."], ["Confirmed paths", "Current tracking covers PC, PlayStation 5, Xbox, iOS and Android storefronts."], ["Next check", `Review official Aniimo news and the source archive. Last site review: ${sourceLastChecked}.`], ["Avoid confusion", "A search result, community post or compatibility question is not evidence of a confirmed Switch release."]]}/>}
      {topic.slug === "aniimo-ps4" && <InfoPanel title="PlayStation Availability Status" rows={[["Current answer", "Aniimo.games tracks PlayStation 5 through the official listing; PS4 is not treated as confirmed."], ["What to verify", "Check the official PlayStation listing and Aniimo news for any separate PS4 announcement."], ["Next step", "If you already have access problems, use Server Status and Known Issues instead of assuming the console is unsupported."], ["Last site review", sourceLastChecked]]}/>}
      <FieldNotes path={`/${topic.slug}/`} />
      {topic.slug === "aniimo-known-issues" && <FieldNotes path="/troubleshooting/aniimo-known-issues/" />}
      <FieldNotes path={`/mechanics/${topic.slug}/`} />
      <FieldNotes path={`/guides/${topic.slug}/`} />
      {topic.slug === "aniimo-known-issues" && <LiveIssueTable />}
      {topic.slug === "aniimo-known-issues" && <FeedbackPanel topic="Aniimo Known Issues" />}
      {topic.slug === "aniimo-known-issues" && <InfoPanel title="Season 1 Part 2 iOS Update Issue" rows={[["Official symptom", "Some iOS players may see insufficient-storage errors even with more than 30 GB free."], ["Temporary requirement", "The official notice says more than 40 GB free may be required during the update process; expected installed size is approximately 20 GB."], ["Compensation", "Sparkling Cube ×1, Vein Essence ×5 and Glimmer ×300 are planned for delivery through in-game mail."], ["Safe next step", "Free the required temporary space, use the official store/client, then check the in-game notice. Do not use unofficial installers."], ["Source", <a href={officialLinks.octoberIosStorageNotice} target="_blank" rel="noreferrer">Official X notice</a>]]} />}
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
      <div className="hero-actions section-actions">
        <a className="primary-action" href="/troubleshooting/aniimo-known-issues/">Open known issues <ChevronRight size={16} /></a>
        <a className="secondary-action" href="/download/">Check official downloads <ChevronRight size={16} /></a>
        <a className="secondary-action" href="/topics/aniimo-discord/">Open community source path <ChevronRight size={16} /></a>
      </div>
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
      <p className="section-copy">Use the table as a triage index, not proof that every player report is a confirmed defect. Check the platform, client version, region, exact error and last-checked date before changing account settings or reinstalling.</p>
      <div className="table-shell freshness-table">
        <table>
          <thead><tr><th>Category</th><th>Issue</th><th>Affected scope</th><th>Status</th><th>Safe next step</th><th>Checked</th></tr></thead>
          <tbody>{liveIssueRegistry.map((item) => <tr key={item.issue}><td>{item.category || "General"}</td><td>{item.issue}</td><td>{item.platforms}</td><td><StatusBadge status={item.status} /></td><td>{item.workaround} <a className="text-link" href={item.source} target="_blank" rel="noreferrer">Source</a></td><td>{item.checked}</td></tr>)}</tbody>
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
    "aniimo-download": [
      ["Aniimo Mobile", "/pt-br/aniimo-mobile/", "Verifique Android, iOS, conta e disponibilidade regional"],
      ["Problemas conhecidos", "/troubleshooting/aniimo-known-issues/", "Confira login, atualização, armazenamento e instalação"],
      ["Site oficial", "/pt-br/aniimo-site-oficial/", "Abra os links oficiais e evite instaladores modificados"],
    ],
    "aniimo-codigos": [
      ["Recompensas", "/pt-br/aniimo-recompensas/", "Separe recompensas de campanha de códigos ativos"],
      ["Pré-registro", "/pt-br/aniimo-pre-registro/", "Verifique conta, campanha e entrega de itens"],
      ["Problemas conhecidos", "/troubleshooting/aniimo-known-issues/", "Confira problemas de resgate, login e correio dentro do jogo"],
    ],
    "aniimo-pre-registro": [
      ["Aniimo Mobile", "/pt-br/aniimo-mobile/", "Verifique loja, país, dispositivo e conta"],
      ["Recompensas", "/pt-br/aniimo-recompensas/", "Consulte status de campanha e entrega"],
      ["Códigos", "/pt-br/aniimo-codigos/", "Não confunda recompensa de pré-registro com código ativo"],
    ],
    "aniimo-mobile": [
      ["Download oficial", "/pt-br/aniimo-download/", "Abra as fontes oficiais para Android, iOS e PC"],
      ["Pré-registro e recompensas", "/pt-br/aniimo-pre-registro/", "Confira campanhas antigas e entrega de itens"],
      ["Problemas conhecidos", "/troubleshooting/aniimo-known-issues/", "Resolva login, atualização e instalação"],
    ],
    "aniimo-site-oficial": [
      ["Download oficial", "/pt-br/aniimo-download/", "Escolha uma loja oficial para o seu dispositivo"],
      ["Status do servidor", "/troubleshooting/aniimo-server-status/", "Confira manutenção e problemas de login"],
      ["Códigos e recompensas", "/pt-br/aniimo-codigos/", "Use apenas anúncios e fontes verificadas"],
    ],
    "aniimo-launch-tracker": [
      ["Status do servidor", "/troubleshooting/aniimo-server-status/", "Confira manutenção, disponibilidade e login"],
      ["Download oficial", "/pt-br/aniimo-download/", "Abra a loja oficial adequada ao seu dispositivo"],
      ["Códigos e recompensas", "/pt-br/aniimo-codigos/", "Verifique campanhas, códigos e status de entrega"],
    ],
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
      ["Source Archive", "/source-archive/", "Review sources behind route and creature guidance"],
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
  const startHere = region.map?.startHere || ["Choose one creature, resource or travel objective.", "Use the region filter before opening all map markers.", "Confirm weather, time and encounter state in the live client."];

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
      <section className="section compact-section" aria-label={`${region.name} route starting steps`}><SectionTitle icon={<Compass />} kicker="Start here" title={`Get a useful ${region.name} route in three steps`} />{region.map?.searchIntent && <p className="section-copy">{region.map.searchIntent}</p>}<div className="guide-columns">{startHere.map((step, index) => <GuideItem key={step} title={`Step ${index + 1}`} text={step} />)}</div></section>
      {region.map && <section className="location-map-link" aria-label={`${region.name} map link`}><div><span className="eyebrow">Plan the route</span><h2>Open the {region.name} community map</h2><p>{region.map.mapSummary}</p></div><a className="primary-action" href={region.map.mapUrl} target="_blank" rel="noreferrer"><Map size={18} /> Open map</a><p className="small">External community markers are planning aids. Confirm the encounter in the live game before treating a marker as permanent.</p></section>}
      <div className="hero-actions section-actions"><a className="secondary-action" href={regionPath(region)} onClick={(event) => navigate(event, regionPath(region))}><Compass size={16} /> Open full {region.name} guide</a><a className="secondary-action" href="/codes/" onClick={(event) => navigate(event, "/codes/")}><Gift size={16} /> Check rewards and codes</a><a className="secondary-action" href="/topics/aniimo-controller-support/" onClick={(event) => navigate(event, "/topics/aniimo-controller-support/")}><CheckCircle2 size={16} /> Controller help</a></div>
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
        ["Source Archive", "/source-archive/", "Review the official sources used for routes, codes and platform guidance."],
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
        updates, email <a href="mailto:gachiawiki@gmail.com">gachiawiki@gmail.com</a>.
        Include the page URL, the proposed correction and the official source that
        supports the change. Do not send passwords, payment details or other sensitive
        personal information.
      </p>
      <InfoPanel title="Contact routes" rows={[
        ["Editorial corrections", "gachiawiki@gmail.com — include the affected URL and source."],
        ["Privacy requests", "gachiawiki@gmail.com — include the relevant URL and request type."],
        ["Copyright concerns", "gachiawiki@gmail.com — identify the material and your rights or source."],
      ]} />
      <SeoGuideBlock items={[
        { title: "Correction requests", body: "Send the affected Aniimo, region or guide URL with the exact field that should change." },
        { title: "Source requests", body: "Official links are preferred. Storefront pages, official Wiki entries and official news posts are the easiest sources to verify." },
        { title: "Launch updates", body: "After launch, route notes, spawn windows and code status should include timestamps and verification context." },
      ]} />
      <LinkGroup title="Before Sending A Correction" items={[
        ["Editorial Policy", "/editorial-policy/", "Check source hierarchy and correction standards."],
        ["Source Archive", "/source-archive/", "Find the official source type that supports the change."],
        ["Update Log", "/updates/", "Review recent source and content changes."],
        ["Known Issues", "/troubleshooting/aniimo-known-issues/", "Check whether a current player-facing issue is already documented."],
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
        ["Contact", "gachiawiki@gmail.com or the Contact page for a privacy concern or request."],
      ]} />
      <SeoGuideBlock items={[
        { title: "Information collected", body: "Aniimo.games does not require an account or collect names, email addresses or payment information through the site. Our hosting provider may process technical information such as IP address, browser type, device information, referring URL and request logs to deliver and secure the site." },
        { title: "Cookies and Google advertising", body: "Aniimo.games uses Google AdSense services. Google and its advertising partners may use cookies, web beacons, IP addresses or similar technologies to show, measure and protect advertising based on visits to this and other sites, subject to applicable law and consent requirements. Google may use advertising cookies to serve personalized ads where permitted." },
        { title: "Your choices", body: "Use the Privacy choices link in the site footer to review or change the site's advertising consent setting. You can also control or delete cookies in your browser settings, manage Google ad personalization at Google Ads Settings (https://www.google.com/settings/ads), or review broader advertising choices at aboutads.info (https://aboutads.info/choices/). Where required, advertising technologies are held until you make a choice." },
        { title: "External links", body: "Guide pages link to official Aniimo websites, storefronts and other external services. Their privacy practices are governed by their own policies, not this policy." },
        { title: "Data retention and sharing", body: "Aniimo.games does not sell personal information. Technical data retained by hosting, security, analytics or advertising providers is subject to those providers' retention practices and legal obligations." },
        { title: "Updates and contact", body: "This policy may change when site services or legal requirements change. The effective date above will be updated with material revisions. For privacy questions, email gachiawiki@gmail.com or use the site's Contact page and include the relevant page URL." },
      ]} />
      <LinkGroup title="Related Policies" items={[
        ["Contact", "/contact/", "Reach the site maintainer about privacy questions or correction requests."],
        ["Editorial Policy", "/editorial-policy/", "Review the source and correction standards used by Aniimo.games."],
        ["Google Privacy & Terms", "https://policies.google.com/technologies/ads", "Learn how Google uses information from sites and apps that use its services."],
        ["Google Ads Settings", "https://www.google.com/settings/ads", "Manage Google ad personalization choices."],
        ["AboutAds choices", "https://aboutads.info/choices/", "Review available third-party personalized advertising choices."],
      ]} />
    </section>
  );
}

export function TermsPage() {
  return (
    <section className="section sources-band">
      <SectionTitle icon={<BookOpen />} kicker="Trust" title="Terms of Use" />
      <p className="section-copy">Aniimo.games is an independent, informational guide site. By using it, you agree to use the site lawfully and to verify time-sensitive game information before acting on it.</p>
      <SeoGuideBlock items={[
        { title: "Independent site", body: "Aniimo.games is not affiliated with or endorsed by Aniimo, Pawprint Studio, Google or any platform owner. Names, logos and trademarks belong to their respective owners." },
        { title: "Content and sources", body: "Guides are editorial information based on public sources, storefront checks and clearly labeled verification notes. Information can change, and external sources have their own terms." },
        { title: "Media and copyright", body: "Do not copy, redistribute or commercially reuse site text, edited graphics or compiled datasets without permission. For a rights concern, email gachiawiki@gmail.com with the affected URL and evidence of ownership." },
        { title: "External services", body: "Links to official stores, community maps and other services leave Aniimo.games. Aniimo.games does not control their availability, content, privacy practices or transactions." },
        { title: "Corrections and contact", body: "Send factual corrections, privacy requests or copyright notices to gachiawiki@gmail.com. Include the relevant page URL and enough detail for the request to be reviewed." },
      ]} />
      <LinkGroup title="Related policies" items={[
        ["About", "/about/", "Learn who maintains the site and what it covers."],
        ["Editorial Policy", "/editorial-policy/", "Review source and correction standards."],
        ["Privacy Policy", "/privacy-policy/", "Review cookies, advertising and visitor information."],
        ["Contact", "/contact/", "Send a correction, privacy request or rights concern."],
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
      {!pt && <FieldNotes path={`/aniimo/${item.id}/`} />}
      <div className="tool-actions detail-tool-actions">
        {!pt && itemRegion && <a className="primary-action" href={regionPath(itemRegion)} onClick={(event) => navigate(event, regionPath(itemRegion))}><Map size={16} /> Open {item.region} guide</a>}
        {!pt && itemRegion?.map && <a className="secondary-action" href={`${itemRegion.map.mapUrl}${itemRegion.map.mapUrl.includes("?") ? "&" : "?"}aniimo=${encodeURIComponent(item.id)}`} target="_blank" rel="noreferrer"><Compass size={16} /> Open {item.name} on community map</a>}
        <a className="secondary-action" href={`/compare/aniimo/?ids=${item.id}`} onClick={(event) => navigate(event, `/compare/aniimo/?ids=${item.id}`)}><Copy size={16} /> Compare this Aniimo</a>
        <a className="secondary-action" href={`/team-builder/?ids=${item.id}`} onClick={(event) => navigate(event, `/team-builder/?ids=${item.id}`)}><Plus size={16} /> Add to team</a>
        <a className="secondary-action" href="/collection-tracker/" onClick={(event) => navigate(event, "/collection-tracker/")}><CheckCircle2 size={16} /> Track collection</a>
      </div>
      {!pt && <section className="location-answer" aria-label={`${item.name} location answer`}><div><span className="eyebrow">Location answer</span><h2>Where is {item.name}?</h2><p>{item.name} is currently associated with <strong>{item.region}</strong>. This is a source-labeled region answer, not an exact spawn coordinate.</p></div><div className="location-answer-status"><StatusBadge status={item.status} /><span>Exact route, time and conditions need official or reproducible in-game verification.</span></div></section>}
      {!pt && itemRegion?.map && <section className="creature-map-plan" aria-label={`Find ${item.name}`}><div><span className="eyebrow">Find this Aniimo</span><h2>Plan a {item.name} route in {item.region}</h2><p>{itemRegion.map.mapSummary}</p><a className="primary-action" href={`${itemRegion.map.mapUrl}${itemRegion.map.mapUrl.includes("?") ? "&" : "?"}aniimo=${encodeURIComponent(item.id)}`} target="_blank" rel="noreferrer"><Map size={18} /> Open {item.name} on map</a></div><ol><li>Open the region map and use the Aniimo search or region filter.</li><li>Check the weather and time conditions listed in the live client before traveling.</li><li>Confirm the encounter in-game; community markers can change with game updates.</li></ol></section>}
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
      {pt && <InfoPanel title="Resumo em português" rows={[["Identidade", `${item.name} é o Aniimo nº ${item.no}.`], ["Classificação", `${item.element}, função ${item.role}, estágio ${item.stage}.`], ["Região", `${item.region}. Esta é uma associação de fonte, não uma coordenada exata.`], ["Verificação", `Localização, evolução e requisitos exatos devem ser conferidos com fonte oficial ou evidência reproduzível. Revisado em ${sourceLastChecked}.`]]} />}
      <div className="detail-panels">
        {!pt && <EvidenceCard conclusion={`${item.name} is tracked under ${item.region}`} status={item.status} source={item.source} checked={sourceLastChecked} next={`Open the ${item.region} region guide or compare ${item.name}.`} />}
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
        <FieldNotes path={regionPath(region)} />
        <InfoPanel title="Known Aniimo" rows={region.aniimo.map((name) => ["Encounter", name])} />
        <EvidenceCard conclusion={`${region.name} has ${region.aniimo.length} listed Aniimo associations`} status={region.status} source={region.source} checked={sourceLastChecked} next="Open an Aniimo detail page; exact coordinates and encounter conditions remain unconfirmed." />
        <InfoPanel title="Location Answer" rows={[["Current region association", `${region.aniimo.join(", ")} are currently listed for ${region.name}.`], ["What this means", "This is a source-labeled region association, not an exact coordinate or guaranteed encounter condition."], ["Next step", "Open an Aniimo detail page for its role, forms and current location notes."]]} />
        <InfoPanel title="Route Notes" rows={[["Exploration", region.theme], ["Mechanics", region.mechanics.join(", ")], ["Data status", statuses[region.status]], ["Last updated", siteLastUpdated]]} />
        <InfoPanel title="Launch Checklist" rows={region.checklist.map((item, index) => [`Check ${index + 1}`, item])} />
      </div>
      {region.map && <section className="community-map-callout" aria-label={`${region.name} community map`}>
        <div>
          <p className="eyebrow">Community map</p>
          <h2>Open a usable {region.name} map</h2>
          <p>{region.map.mapSummary}</p>
          <a className="primary-action" href={region.map.mapUrl} target="_blank" rel="noreferrer"><Map size={18} /> Open {region.map.mapProvider}</a>
        </div>
        <ol>
          {region.map.practicalNotes.map((note) => <li key={note}>{note}</li>)}
        </ol>
        <p className="community-map-disclaimer">External community data can change. Aniimo.games does not copy or republish its map tiles or markers; confirm the final encounter in your live game.</p>
      </section>}
      <div className="detail-editorial">
        <GuideItem title={`${region.name} guide plan`} text={region.guideNote} />
        <GuideItem title="Verification priority" text={`After launch, add route screenshots, exact encounter notes and mechanic-specific checks for ${region.mechanics.join(", ")}.`} />
        <GuideItem title="Source note" text={region.map ? `Official region material remains the primary source. The linked ${region.map.mapProvider} is an external planning tool; its specific markers should be confirmed in the live game before being treated as permanent route facts.` : "This page uses official region material first. Community route findings should be added only after they can be checked against the live game."} />
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

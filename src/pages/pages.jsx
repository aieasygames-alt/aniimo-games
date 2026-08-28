import React from "react";
import { BookOpen, CalendarDays, CheckCircle2, ChevronRight, Compass, Download, Gift, Map, Search, Sparkles } from "lucide-react";
import { aniimo, beginnerTopics, choiceTopics, codeRewardTopics, codeVerificationTemplate, codes, downloadTopics, editorialGuides, faqs, gameInfo, glossaryTopics, gscObservationTemplate, launchRewards, launchTracker, mapGuide, mechanicDeepDiveTopics, mechanics, mediaDetailTopics, mediaGalleryItems, newsTopics, officialLinks, officialPitchTopics, platformUnlockQueue, platforms, regions, releaseInfo, searchSuggestionTopics, seoGuides, socialIntentTopics, sourceArchiveItems, spawnVerificationQueue, statuses, troubleshootingTopics, updates, verificationTemplates } from "../../data/content.js";
import { aniimoPath, beginnerTopicPath, choiceTopicPath, codeRewardTopicPath, downloadTopicPath, elementPath, glossaryTopicPath, locationTopicPath, mechanicDeepDiveTopicPath, mediaDetailTopicPath, newsTopicPath, officialPitchTopicPath, regionPath, rolePath, searchSuggestionTopicPath, socialIntentTopicPath, staticRoutes, troubleshootingTopicPath } from "../lib/routes.js";
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
          <QuickCard icon={<CalendarDays />} title="Launch Tracker" text="Follow platform dates, reward status, code status and source checks." href="/launch-tracker/" navigate={props.navigate} />
          <QuickCard icon={<Compass />} title="Search Topics" text="Open guides built around official features, community questions and search demand." href="/site-index/" navigate={props.navigate} />
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
                  <a className="text-link" href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
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
              <a className="text-link" href={aniimoPath(item)} onClick={(event) => navigate(event, aniimoPath(item))}>
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

export function LaunchVerificationPage() {
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
      </div>
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
    ["/aniimo/", "/map/", "/evolution/", "/codes/", "/rewards/", "/download/", "/release-date/", "/beginner-guide/", "/launch-tracker/", "/launch-verification/", "/best-aniimo/", "/sources/"].includes(route.path),
  );
  const platformPages = staticRoutes.filter((route) => route.path.startsWith("/platforms/"));
  const downloadPages = downloadTopics.map((item) => [item.title, downloadTopicPath(item), item.description]);
  const beginnerPages = beginnerTopics.map((item) => [item.title, beginnerTopicPath(item), item.description]);
  const codeRewardPages = codeRewardTopics.map((item) => [item.title, codeRewardTopicPath(item), item.description]);
  const newsPages = newsTopics.map((item) => [item.title, newsTopicPath(item), item.summary]);
  const choicePages = choiceTopics.map((item) => [item.title, choiceTopicPath(item), item.description]);
  const officialPitchPages = officialPitchTopics.map((item) => [item.title, officialPitchTopicPath(item), item.description]);
  const socialIntentPages = socialIntentTopics.map((item) => [item.title, socialIntentTopicPath(item), item.description]);
  const searchSuggestionPages = searchSuggestionTopics.map((item) => [item.title, searchSuggestionTopicPath(item), item.description]);
  const glossaryPages = glossaryTopics.map((item) => [item.term, glossaryTopicPath(item), item.definition]);
  const troubleshootingPages = troubleshootingTopics.map((item) => [item.title, troubleshootingTopicPath(item), item.description]);
  const mechanicPages = mechanicDeepDiveTopics.map((item) => [item.title, mechanicDeepDiveTopicPath(item), item.description]);
  const mediaPages = mediaDetailTopics.map((item) => [item.title, mediaDetailTopicPath(item), item.description]);
  const trustPages = staticRoutes.filter((route) => ["/about/", "/editorial-policy/", "/contact/"].includes(route.path));
  const elementNames = [...new Set(aniimo.map((item) => item.element))];
  const roleNames = [...new Set(aniimo.map((item) => item.role))];
  const featuredAniimo = aniimo.filter((item) => item.status === "Confirmed" && item.element !== "Unknown").slice(0, 18);

  return (
    <section className="section sources-band">
      <SectionTitle icon={<Compass />} kicker="Index" title="Aniimo.games Site Index" />
      <p className="section-copy">
        Use this index to move between Aniimo guide hubs, platform download pages,
        region guides, element pages, role pages and official source pages.
      </p>
      <div className="site-index-grid">
        <LinkGroup title="Core Guides" items={corePages.map((item) => [item.label, item.path, item.description])} navigate={navigate} />
        <LinkGroup title="Platform Pages" items={platformPages.map((item) => [item.label, item.path, item.description])} navigate={navigate} />
        <LinkGroup title="Download Decisions" items={downloadPages} navigate={navigate} />
        <LinkGroup title="Beginner Questions" items={beginnerPages} navigate={navigate} />
        <LinkGroup title="Codes & Rewards" items={codeRewardPages} navigate={navigate} />
        <LinkGroup title="News & Updates" items={newsPages} navigate={navigate} />
        <LinkGroup title="Official Feature Guides" items={officialPitchPages} navigate={navigate} />
        <LinkGroup title="Community Question Guides" items={socialIntentPages} navigate={navigate} />
        <LinkGroup title="Search Topic Guides" items={searchSuggestionPages} navigate={navigate} />
        <LinkGroup title="Glossary" items={glossaryPages} navigate={navigate} />
        <LinkGroup title="Troubleshooting" items={troubleshootingPages} navigate={navigate} />
        <LinkGroup title="Mechanic Deep Dives" items={mechanicPages} navigate={navigate} />
        <LinkGroup title="Media Details" items={mediaPages} navigate={navigate} />
        <LinkGroup title="Region Guides" items={regions.map((item) => [item.name, regionPath(item), item.theme])} navigate={navigate} />
        <LinkGroup title="Location Guides" items={regions.map((item) => [`${item.name} Locations`, locationTopicPath(item), `Track ${item.name} route and spawn verification tasks.`])} navigate={navigate} />
        <LinkGroup title="Element Guides" items={elementNames.map((item) => [`${item} Aniimo`, elementPath(item), `Browse ${item} entries by number, role, stage and source status.`])} navigate={navigate} />
        <LinkGroup title="Role Guides" items={roleNames.map((item) => [`${item} Aniimo`, rolePath(item), `Browse ${item} entries by number, element, stage and source status.`])} navigate={navigate} />
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

export function MediaPage() {
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
            <img src={item.image} alt={item.title} width="420" height="236" loading="lazy" />
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

export function TopicGuidePage({ topic, kicker, icon, children }) {
  return (
    <section className="section sources-band">
      <SectionTitle icon={icon} kicker={kicker} title={topic.title} />
      <p className="section-copy">{topic.intro}</p>
      <EditorialBlock title="Key Points" items={topic.points} />
      {children}
      <FaqBlock items={topic.faq} />
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
  const platformMap = {
    steam: {
      title: "Aniimo Steam Download Guide",
      intro: "Aniimo PC availability is tracked for September 16, 2026, with Steam acting as one of the official storefronts.",
      names: ["Steam"],
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
      <div>
        <SectionTitle icon={<Download />} kicker="Platforms" title={platformConfig.title} />
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

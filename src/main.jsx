import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen, Download, Search } from "lucide-react";
import { aniimo, officialLinks, siteLastUpdated } from "../data/content.js";
import { localeForPath, messagesForPath } from "../data/locales/index.js";
import {
  findAniimoBySlug,
  isIndexableAniimo,
  findRegionBySlug,
  navRoutes,
  normalizePath,
  resolveRoute,
} from "./lib/routes.js";
import { applySeo } from "./seo/runtime.js";
import {
  AniimoDetail,
  AboutPage,
  BeginnerPage,
  BeginnerTopicPage,
  BestAniimoPage,
  ChoiceTopicPage,
  CodeRewardTopicPage,
  CodesPage,
  CollectionPage,
  CompareHubPage,
  ContactPage,
  DatabasePage,
  DownloadPage,
  DownloadTopicPage,
  EditorialPolicyPage,
  EvolutionPage,
  EventsPage,
  WeeklyPlanPage,
  FreshnessPage,
  GuideSummary,
  GlossaryPage,
  GuideHubPage,
  HomePage,
  LaunchDayPage,
  LaunchHubPage,
  LaunchTrackerPage,
  MediaPage,
  LocationTopicPage,
  MapPage,
  MechanicsHubPage,
  NewsTopicPage,
  NotFoundPage,
  PlatformPage,
  PreRegistrationRewardsPage,
  PrivacyPolicyPage,
  TermsPage,
  RegionDetail,
  ReleaseDatePage,
  RewardsPage,
  SiteIndexPage,
  SourcesPage,
  StatusGuide,
  SourceArchivePage,
  TopicGuidePage,
  TroubleshootingPage,
  UpdatesPage,
  AniimoComparePage,
  TeamBuilderPage,
  CollectionTrackerPage,
} from "./pages/pages.jsx";
import { localizedAniimoPath } from "./lib/routes.js";
import "./styles.css";

function App() {
  const [path, setPath] = useState(normalizePath(window.location.pathname));
  const [query, setQuery] = useState(new URLSearchParams(window.location.search).get("q") || "");
  const [element, setElement] = useState("All");
  const [region, setRegion] = useState("All");
  const [role, setRole] = useState("All");
  const [stage, setStage] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Number");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (path === "/aniimo/") {
      setQuery(params.get("q") || "");
      setElement(params.get("element") || "All");
      setRegion(params.get("region") || "All");
      setRole(params.get("role") || "All");
      setStage(params.get("stage") || "All");
      setStatusFilter(params.get("status") || "All");
      setSortBy(params.get("sort") || "Number");
    }
  }, [path]);

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
    const nextPath = normalizePath(href);
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  React.useEffect(() => {
    if (path !== "/aniimo/") return;
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (element !== "All") params.set("element", element);
    if (region !== "All") params.set("region", region);
    if (role !== "All") params.set("role", role);
    if (stage !== "All") params.set("stage", stage);
    if (statusFilter !== "All") params.set("status", statusFilter);
    if (sortBy !== "Number") params.set("sort", sortBy);
    const next = params.toString() ? `/aniimo/?${params}` : "/aniimo/";
    if (window.location.pathname + window.location.search !== next) window.history.replaceState({}, "", next);
  }, [path, query, element, region, role, stage, statusFilter, sortBy]);

  React.useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  React.useEffect(() => {
    applySeo(path);
  }, [path]);

  const routeInfo = resolveRoute(path);
  const portugueseHref = path.startsWith("/pt-br/") ? "/" : (path.startsWith("/aniimo/") && routeInfo.detail ? `/pt-br/aniimo/${routeInfo.detail.id}/` : "/pt-br/aniimo-download/");
  const ui = messagesForPath(path);
  const aniimoMatch = path.match(/^\/aniimo\/([^/]+)\//);
  const regionMatch = path.match(/^\/regions\/([^/]+)\//);
  const detail = aniimoMatch ? findAniimoBySlug(aniimoMatch[1]) : null;
  const regionDetail = regionMatch ? findRegionBySlug(regionMatch[1]) : null;

  const sharedProps = {
    query,
    setQuery,
    element,
    setElement,
    region,
    setRegion,
    role,
    setRole,
    stage,
    setStage,
    statusFilter,
    setStatusFilter,
    sortBy,
    setSortBy,
    elements,
    regionNames,
    roles,
    stages,
    filteredAniimo,
    navigate,
  };

  function showPrivacyChoices(event) {
    event.preventDefault();
    if (typeof window.googlefc?.showRevocationMessage === "function") {
      window.googlefc.showRevocationMessage();
    } else {
      window.location.href = "/privacy-policy/";
    }
  }

  return (
    <>
      <header className="topbar">
        <a className="brand" href="/" onClick={(event) => navigate(event, "/")}>
          <img src="/images/brand/aniimo-logo.webp" alt="Aniimo Wiki" width="180" height="78" />
        </a>
        <nav>
          {navRoutes.map(({ label, path: navPath }) => (
            <a key={label} href={navPath} onClick={(event) => navigate(event, navPath)}>
              {localeForPath(path) === "pt-BR" ? ({ Database: ui.nav.database, Map: ui.nav.map, Guides: ui.nav.guides, Launch: ui.nav.launch, Codes: ui.nav.codes }[label] || label) : label}
            </a>
          ))}
        </nav>
        <a className="language-switch" href={localeForPath(path) === "pt-BR" ? "/" : portugueseHref} onClick={(event) => navigate(event, localeForPath(path) === "pt-BR" ? "/" : portugueseHref)}>{localeForPath(path) === "pt-BR" ? "English" : "Português (Brasil)"}</a>
      </header>

      <main>
        {routeInfo.type === "localized-aniimo" ? (
          <AniimoDetail item={routeInfo.detail} navigate={navigate} localized />
        ) : detail && isIndexableAniimo(detail) ? (
          <AniimoDetail item={detail} navigate={navigate} />
        ) : regionDetail ? (
          <RegionDetail region={regionDetail} navigate={navigate} />
        ) : routeInfo.type === "element" ? (
          <CollectionPage type="element" value={routeInfo.element} navigate={navigate} />
        ) : routeInfo.type === "role" ? (
          <CollectionPage type="role" value={routeInfo.role} navigate={navigate} />
        ) : routeInfo.type === "stage" ? (
          <CollectionPage type="stage" value={routeInfo.stage} navigate={navigate} />
        ) : routeInfo.type === "status" ? (
          <CollectionPage type="status" value={routeInfo.status} navigate={navigate} />
        ) : routeInfo.type === "beginner-topic" ? (
          <BeginnerTopicPage topic={routeInfo.beginnerTopic} navigate={navigate} />
        ) : routeInfo.type === "download-topic" ? (
          <DownloadTopicPage topic={routeInfo.downloadTopic} />
        ) : routeInfo.type === "code-reward-topic" ? (
          <CodeRewardTopicPage topic={routeInfo.codeRewardTopic} />
        ) : routeInfo.type === "news-topic" ? (
          <NewsTopicPage topic={routeInfo.newsTopic} />
        ) : routeInfo.type === "location-topic" ? (
          <LocationTopicPage region={routeInfo.locationRegion} navigate={navigate} />
        ) : routeInfo.type === "choice-topic" ? (
          <ChoiceTopicPage topic={routeInfo.choiceTopic} navigate={navigate} />
        ) : routeInfo.type === "official-pitch-topic" ? (
          <TopicGuidePage topic={routeInfo.officialPitchTopic} kicker="Official Guide" icon={<BookOpen />} navigate={navigate} />
        ) : routeInfo.type === "social-intent-topic" ? (
          <TopicGuidePage topic={routeInfo.socialIntentTopic} kicker="Comparison" icon={<Search />} navigate={navigate} />
        ) : routeInfo.type === "search-suggestion-topic" ? (
          <TopicGuidePage topic={routeInfo.searchSuggestionTopic} kicker="Search Topic" icon={<Search />} navigate={navigate} />
        ) : routeInfo.type === "glossary-topic" ? (
          <TopicGuidePage topic={routeInfo.glossaryTopic} kicker="Glossary" icon={<BookOpen />} navigate={navigate} />
        ) : routeInfo.type === "troubleshooting-topic" ? (
          <TopicGuidePage topic={routeInfo.troubleshootingTopic} kicker="Troubleshooting" icon={<Download />} navigate={navigate} />
        ) : routeInfo.type === "mechanic-deep-dive-topic" ? (
          <TopicGuidePage topic={routeInfo.mechanicDeepDiveTopic} kicker="Mechanics" icon={<BookOpen />} navigate={navigate} />
        ) : routeInfo.type === "media-detail-topic" ? (
          <TopicGuidePage topic={routeInfo.mediaDetailTopic} kicker="Media" icon={<Search />} navigate={navigate} />
        ) : routeInfo.type === "conversion-topic" ? (
          <TopicGuidePage topic={routeInfo.conversionTopic} kicker="Launch" icon={<Download />} navigate={navigate} />
        ) : routeInfo.type === "refresh-planning-topic" ? (
          <TopicGuidePage topic={routeInfo.refreshPlanningTopic} kicker="Growth" icon={<Search />} navigate={navigate} />
        ) : routeInfo.type === "freshness-page" ? (
          <FreshnessPage topic={routeInfo.freshnessPage} />
        ) : routeInfo.type === "localized-topic" ? (
          <TopicGuidePage topic={routeInfo.localizedTopic} kicker={routeInfo.localizedTopic.locale.toUpperCase()} icon={<Search />} navigate={navigate} />
        ) : routeInfo.type === "aniimo-compare" ? (
          <AniimoComparePage navigate={navigate} />
        ) : routeInfo.type === "team-builder" ? (
          <TeamBuilderPage navigate={navigate} />
        ) : routeInfo.type === "collection-tracker" ? (
          <CollectionTrackerPage navigate={navigate} />
        ) : routeInfo.type === "weekly-plan" ? (
          <WeeklyPlanPage navigate={navigate} />
        ) : routeInfo.path === "/aniimo/" ? (
          <DatabasePage {...sharedProps} />
        ) : routeInfo.path === "/map/" ? (
          <MapPage navigate={navigate} />
        ) : routeInfo.path === "/evolution/" ? (
          <EvolutionPage />
        ) : routeInfo.path === "/codes/" ? (
          <CodesPage navigate={navigate} />
        ) : routeInfo.path === "/rewards/" ? (
          <RewardsPage navigate={navigate} />
        ) : routeInfo.path === "/download/" ? (
          <DownloadPage navigate={navigate} />
        ) : routeInfo.path === "/release-date/" ? (
          <ReleaseDatePage />
        ) : routeInfo.path === "/beginner-guide/" ? (
          <BeginnerPage navigate={navigate} />
        ) : routeInfo.path === "/updates/" ? (
          <UpdatesPage />
        ) : routeInfo.path === "/events/" ? (
          <EventsPage navigate={navigate} />
        ) : routeInfo.path === "/launch-day/" ? (
          <LaunchDayPage navigate={navigate} />
        ) : routeInfo.path === "/launch-tracker/" ? (
          <LaunchTrackerPage navigate={navigate} />
        ) : routeInfo.path === "/sources/" ? (
          <SourcesPage />
        ) : routeInfo.path === "/site-index/" ? (
          <SiteIndexPage navigate={navigate} />
        ) : routeInfo.path === "/guides/" ? (
          <GuideHubPage navigate={navigate} />
        ) : routeInfo.path === "/compare/" ? (
          <CompareHubPage navigate={navigate} />
        ) : routeInfo.path === "/mechanics/" ? (
          <MechanicsHubPage navigate={navigate} />
        ) : routeInfo.path === "/launch/" ? (
          <LaunchHubPage navigate={navigate} />
        ) : routeInfo.path === "/glossary/" ? (
          <GlossaryPage navigate={navigate} />
        ) : routeInfo.path === "/media/" ? (
          <MediaPage navigate={navigate} />
        ) : routeInfo.path === "/troubleshooting/" ? (
          <TroubleshootingPage navigate={navigate} />
        ) : routeInfo.path === "/source-archive/" ? (
          <SourceArchivePage />
        ) : routeInfo.path === "/best-aniimo/" ? (
          <BestAniimoPage navigate={navigate} />
        ) : routeInfo.path === "/platforms/steam/" ? (
          <PlatformPage type="steam" />
        ) : routeInfo.path === "/platforms/mobile/" ? (
          <PlatformPage type="mobile" />
        ) : routeInfo.path === "/platforms/ps5/" ? (
          <PlatformPage type="ps5" />
        ) : routeInfo.path === "/platforms/xbox/" ? (
          <PlatformPage type="xbox" />
        ) : routeInfo.path === "/platforms/epic-games/" ? (
          <PlatformPage type="epic-games" />
        ) : routeInfo.path === "/platforms/ios/" ? (
          <PlatformPage type="ios" />
        ) : routeInfo.path === "/platforms/android/" ? (
          <PlatformPage type="android" />
        ) : routeInfo.path === "/rewards/pre-registration/" ? (
          <PreRegistrationRewardsPage />
        ) : routeInfo.path === "/about/" ? (
          <AboutPage />
        ) : routeInfo.path === "/editorial-policy/" ? (
          <EditorialPolicyPage />
        ) : routeInfo.path === "/contact/" ? (
          <ContactPage />
        ) : routeInfo.path === "/privacy-policy/" ? (
          <PrivacyPolicyPage />
        ) : routeInfo.path === "/terms/" ? (
          <TermsPage />
        ) : routeInfo.path === "/" && path === "/" ? (
          <>
            <HomePage {...sharedProps} />
            <GuideSummary />
            <StatusGuide />
          </>
        ) : (
          <NotFoundPage navigate={navigate} />
        )}
      </main>
      <footer className="site-footer">
        <div>
          <strong>Aniimo.games</strong>
          <p>Independent Aniimo wiki and launch guide using official public sources and clearly labeled verification notes.</p>
        </div>
        <nav aria-label="Site information">
          <a href="/about/" onClick={(event) => navigate(event, "/about/")}>About</a>
          <a href="/editorial-policy/" onClick={(event) => navigate(event, "/editorial-policy/")}>Editorial Policy</a>
          <a href="/sources/" onClick={(event) => navigate(event, "/sources/")}>Sources</a>
          <a href="/contact/" onClick={(event) => navigate(event, "/contact/")}>Contact</a>
          <a href="/privacy-policy/" onClick={(event) => navigate(event, "/privacy-policy/")}>Privacy</a>
          <a href="/terms/" onClick={(event) => navigate(event, "/terms/")}>Terms</a>
          <a href="/privacy-policy/" onClick={showPrivacyChoices}>Privacy choices</a>
        </nav>
        <p className="site-footer-meta">Last updated {siteLastUpdated}</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

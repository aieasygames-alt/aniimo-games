import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen, Download, Search } from "lucide-react";
import { aniimo } from "../data/content.js";
import {
  findAniimoBySlug,
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
  FreshnessPage,
  GuideSummary,
  GlossaryPage,
  GrowthHubPage,
  GuideHubPage,
  HomePage,
  LaunchTrackerPage,
  LaunchDayPage,
  LaunchVerificationPage,
  LaunchHubPage,
  MediaPage,
  LocationTopicPage,
  MapPage,
  MechanicsHubPage,
  NewsTopicPage,
  NotFoundPage,
  PlatformPage,
  PreRegistrationRewardsPage,
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
} from "./pages/pages.jsx";
import "./styles.css";

function App() {
  const [path, setPath] = useState(normalizePath(window.location.pathname));
  const [query, setQuery] = useState(new URLSearchParams(window.location.search).get("q") || "");
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
    const nextPath = normalizePath(href);
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  React.useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  React.useEffect(() => {
    applySeo(path);
  }, [path]);

  const routeInfo = resolveRoute(path);
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
    elements,
    regionNames,
    roles,
    stages,
    filteredAniimo,
    navigate,
  };

  return (
    <>
      <header className="topbar">
        <a className="brand" href="/" onClick={(event) => navigate(event, "/")}>
          <img src="/images/brand/aniimo-logo.webp" alt="Aniimo Wiki" width="180" height="78" />
        </a>
        <nav>
          {navRoutes.map(({ label, path }) => (
            <a key={label} href={path} onClick={(event) => navigate(event, path)}>
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
          <TopicGuidePage topic={routeInfo.officialPitchTopic} kicker="Official Guide" icon={<BookOpen />} />
        ) : routeInfo.type === "social-intent-topic" ? (
          <TopicGuidePage topic={routeInfo.socialIntentTopic} kicker="Comparison" icon={<Search />} />
        ) : routeInfo.type === "search-suggestion-topic" ? (
          <TopicGuidePage topic={routeInfo.searchSuggestionTopic} kicker="Search Topic" icon={<Search />} />
        ) : routeInfo.type === "glossary-topic" ? (
          <TopicGuidePage topic={routeInfo.glossaryTopic} kicker="Glossary" icon={<BookOpen />} />
        ) : routeInfo.type === "troubleshooting-topic" ? (
          <TopicGuidePage topic={routeInfo.troubleshootingTopic} kicker="Troubleshooting" icon={<Download />} />
        ) : routeInfo.type === "mechanic-deep-dive-topic" ? (
          <TopicGuidePage topic={routeInfo.mechanicDeepDiveTopic} kicker="Mechanics" icon={<BookOpen />} />
        ) : routeInfo.type === "media-detail-topic" ? (
          <TopicGuidePage topic={routeInfo.mediaDetailTopic} kicker="Media" icon={<Search />} />
        ) : routeInfo.type === "conversion-topic" ? (
          <TopicGuidePage topic={routeInfo.conversionTopic} kicker="Launch" icon={<Download />} />
        ) : routeInfo.type === "refresh-planning-topic" ? (
          <TopicGuidePage topic={routeInfo.refreshPlanningTopic} kicker="Growth" icon={<Search />} />
        ) : routeInfo.type === "freshness-page" ? (
          <FreshnessPage topic={routeInfo.freshnessPage} />
        ) : routeInfo.path === "/aniimo/" ? (
          <DatabasePage {...sharedProps} />
        ) : routeInfo.path === "/map/" ? (
          <MapPage navigate={navigate} />
        ) : routeInfo.path === "/evolution/" ? (
          <EvolutionPage />
        ) : routeInfo.path === "/codes/" ? (
          <CodesPage />
        ) : routeInfo.path === "/rewards/" ? (
          <RewardsPage />
        ) : routeInfo.path === "/download/" ? (
          <DownloadPage />
        ) : routeInfo.path === "/release-date/" ? (
          <ReleaseDatePage />
        ) : routeInfo.path === "/beginner-guide/" ? (
          <BeginnerPage navigate={navigate} />
        ) : routeInfo.path === "/updates/" ? (
          <UpdatesPage />
        ) : routeInfo.path === "/launch-day/" ? (
          <LaunchDayPage navigate={navigate} />
        ) : routeInfo.path === "/launch-tracker/" ? (
          <LaunchTrackerPage />
        ) : routeInfo.path === "/launch-verification/" ? (
          <LaunchVerificationPage />
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
        ) : routeInfo.path === "/growth/" ? (
          <GrowthHubPage navigate={navigate} />
        ) : routeInfo.path === "/glossary/" ? (
          <GlossaryPage navigate={navigate} />
        ) : routeInfo.path === "/media/" ? (
          <MediaPage />
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
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Sprout } from "lucide-react";
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
  BestAniimoPage,
  CodesPage,
  CollectionPage,
  ContactPage,
  DatabasePage,
  DownloadPage,
  EditorialPolicyPage,
  EvolutionPage,
  GuideSummary,
  HomePage,
  LaunchTrackerPage,
  MapPage,
  NotFoundPage,
  PlatformPage,
  PreRegistrationRewardsPage,
  RegionDetail,
  ReleaseDatePage,
  RewardsPage,
  SiteIndexPage,
  SourcesPage,
  StatusGuide,
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
          <Sprout size={24} />
          <span>Aniimo Wiki</span>
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
        ) : routeInfo.path === "/launch-tracker/" ? (
          <LaunchTrackerPage />
        ) : routeInfo.path === "/sources/" ? (
          <SourcesPage />
        ) : routeInfo.path === "/site-index/" ? (
          <SiteIndexPage navigate={navigate} />
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

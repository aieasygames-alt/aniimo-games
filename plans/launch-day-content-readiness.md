# Plan: Aniimo Launch-Day Content Readiness

> Source analysis: Google Search Console Performance, 2026-08-28 through 2026-09-05

## Objective

Make Aniimo.games able to verify and publish launch-day changes quickly for the search intents already generating impressions: rewards, Junior Wayfarer, tier lists, servers, demo status, Discord, downloads, and character data.

## Architectural decisions

- **Routes**: Preserve existing trailing-slash canonical routes. Prioritize existing hubs and detail pages instead of creating duplicate URLs.
- **Data model**: Store each volatile fact with a status, source URL, last-checked timestamp, and optional verification note. Unknown values remain explicitly unconfirmed.
- **Update boundary**: Keep launch facts in shared content data so homepage, topic pages, FAQs, JSON-LD, sitemap/prerender output, and audit scripts can consume the same values.
- **Evidence policy**: Official game, store, publisher, and verified community sources are preferred. Do not promote rumors or exact spawn claims without evidence.
- **Release workflow**: Every launch update ends with build, content/SEO/framework checks, live checks after deployment, and IndexNow submission for changed priority URLs.

---

## Phase 1: Launch Evidence and Freshness Layer

**User stories**: As an editor, I can record what changed, where it was verified, and when it was last checked. As a reader, I can distinguish confirmed launch facts from watchlist items.

### What to build

Create a single launch-evidence structure covering server status, platform availability, download links, codes, rewards, demo/test status, Discord links, and character verification. Add a compact freshness/status panel that can be reused across priority pages and the homepage.

### Acceptance criteria

- [ ] Every volatile launch fact has status, source, and last-checked fields.
- [ ] Confirmed, pending, unavailable, and needs-review states render consistently.
- [ ] Priority pages show a visible freshness signal without exposing internal planning labels.
- [ ] Existing verification and freshness audits validate the new records.

---

## Phase 2: Server Status and Download Readiness

**User stories**: As a player on launch day, I can see whether servers are online and find the correct official download path for my platform.

### What to build

Turn the server-status, known-issues, download, and platform pages into a launch command path. Add current status, incident categories, platform availability, install/update notes, and official links for PC, console, and mobile. Surface the same state in the launch-day hub and homepage shortcuts.

### Acceptance criteria

- [ ] Server page supports online, maintenance, degraded, outage, and unknown states.
- [ ] Download page clearly separates available, pending, and unavailable platforms.
- [ ] Login, black-screen, stuck-loading, and platform-error troubleshooting links are reachable from the status path.
- [ ] All platform and status claims show source/freshness context.
- [ ] Related route, SEO, asset, and content checks pass.

---

## Phase 3: Codes and Rewards Conversion Path

**User stories**: As a player, I can check active codes and claimable launch rewards. As an editor, I can update reward status without rewriting multiple pages.

### What to build

Unify pre-registration, Junior Wayfarer, milestone, and redeem-code data. Add active/expired/unverified states, redemption instructions, eligibility, reward contents, and official claim links. Connect rewards pages to launch-day, download, and troubleshooting routes.

### Acceptance criteria

- [ ] Reward and code entries can be marked active, expired, pending, or unverified.
- [ ] Each claim instruction identifies platform/account prerequisites and evidence source.
- [ ] Homepage, rewards hub, Junior Wayfarer, milestones, and codes pages stay consistent.
- [ ] FAQ and structured data reflect current confirmed reward facts only.
- [ ] High-performing queries retain clear title/description/snippet intent for rewards.

---

## Phase 4: Tier List and Character Verification

**User stories**: As a player, I can understand how the tier list is produced and browse verified character abilities, forms, locations, and roles.

### What to build

Add versioned tier-list snapshots and an evidence-aware character update flow. Separate pre-launch estimates from post-launch tested results, record mode/context (PVE/PVP/support), and link tier changes to individual Aniimo detail pages and role/element collections.

### Acceptance criteria

- [ ] Tier list displays version/date, evaluation context, and pending-data caveats.
- [ ] Character pages can record verified ability, form, location, and evolution updates.
- [ ] No unverified exact spawn or balance claim is presented as confirmed.
- [ ] Tier-list and character updates generate internal links to database, roles, regions, and guides.
- [ ] Representative high-impression character pages have unique, current summaries.

---

## Phase 5: Community, Demo, and Search-Intent Pages

**User stories**: As a search user, I can find the official Discord and understand demo/test status without confusing rumors for announcements.

### What to build

Improve Discord, Discord server, demo/playtest, logo/media, official website, and community pages around the observed queries. Put the official destination and verification status above the fold, add safe-link guidance, and connect these pages to launch updates and sources.

### Acceptance criteria

- [ ] Discord pages distinguish official links from community discussion and display link freshness.
- [ ] Demo/playtest pages state availability, eligibility, region/platform limits, and last official update.
- [ ] Community pages provide clear next links to codes, servers, downloads, and official sources.
- [ ] Titles/descriptions target the observed query variants without keyword duplication.
- [ ] Social-intent pages include Article/FAQ schema only where the visible content supports it.

---

## Phase 6: GSC-Driven SEO and Indexing Operations

**User stories**: As an editor, I can prioritize pages based on current search demand. As an operator, I can publish and request recrawling of changed launch pages quickly.

### What to build

Add a repeatable GSC snapshot/report workflow for query and page deltas, a launch priority watchlist, and a deployment checklist. Prioritize the current pages with strong clicks/impressions: tier list, Junior Wayfarer, server status, database, rewards, Aniimo AI comparison, Discord, download, and milestones.

### Acceptance criteria

- [ ] Reports capture date range, clicks, impressions, CTR, position, top queries, and top pages.
- [ ] Query/page changes map to an explicit content action and target URL.
- [ ] `indexing:candidates` includes newly changed priority pages and localized routes when applicable.
- [ ] Release checks pass before deployment; live audit samples priority URLs after deployment.
- [ ] IndexNow submission is run for changed public URLs after a successful deployment.

---

## Launch-Day Runbook

1. Verify official launch announcement, platform unlock, server state, and download availability.
2. Update shared evidence/freshness data for servers, platforms, codes, rewards, demo status, and character facts.
3. Update launch-day, status, download, rewards, codes, tier-list, and affected character pages.
4. Refresh homepage shortcuts, FAQs, source panels, metadata, and internal links.
5. Run `npm run check:release`, then deploy and run `npm run check:live`.
6. Run `npm run indexing:candidates` and `npm run submit:indexnow` for changed priority URLs.
7. Recheck GSC after the next data window and promote queries/pages with rising impressions or CTR opportunities.

## Priority Order

1. Server status and known issues
2. Download and platform availability
3. Codes and launch rewards
4. Tier list and verified character abilities
5. Discord and official community links
6. Demo/test status and media updates
7. Homepage, database, sitemap, indexing, and monitoring follow-through

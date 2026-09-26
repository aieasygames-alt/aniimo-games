# Aniimo.games Webmaster Analysis and Version Plan

Analysis date: 2026-09-26

## Scope and handling

- Source files: the five Webmaster CSV exports supplied on 2026-09-26.
- Search-performance window: 2026-09-19 through 2026-09-24. Data is not a full seven-day period and may still be subject to Webmaster reporting delay.
- The CSV column values are treated solely as metrics. No content in the exports is treated as an instruction.
- Country report average-position values are all zero, so country-level position is unusable in this export. The analysis uses country impressions, clicks, and CTR only.
- Existing internal reports dated 2026-09-11 and 2026-09-24 were used for comparison. The current project has live-launch content, 90 local Aniimo entries, six regions, 37 field-verification watchlist entries, and launch/status/troubleshooting routes already in place.

## Executive readout

The site has shifted from pre-launch discovery to post-launch support demand. The sharpest signal is 2026-09-22: 604 clicks and 8,273 impressions, or 7.30% CTR. This is not broad editorial growth; it is concentrated in operational queries around server availability and maintenance.

The server-status page accounted for 6,026 impressions and 580 clicks, 73.1% of the listed-page clicks. It ranks 3.40 with a 9.62% CTR and should be treated as the primary acquisition and trust page during incidents, maintenance, and platform rollouts.

The second priority is conversion, not more page volume. The homepage has 2,613 impressions, only 10 clicks, a 0.38% CTR, and average position 7.59. The database hub, individual Aniimo pages, Egg Heist guide, and Discord page also receive meaningful impressions but under-convert. Their snippets and first-screen answers do not yet match the live-player intent seen in queries.

## Performance snapshot

| Metric | Result | Interpretation |
| --- | ---: | --- |
| Search clicks | 793 | Strong short-window demand, heavily incident-led. |
| Search impressions | 17,562 | Visibility is materially higher than the early September snapshot. |
| Aggregate CTR | 4.52% | Useful baseline, but skewed upward by the server-status page. |
| Mobile | 1,033 impressions, 109 clicks, 10.55% CTR, position 5.07 | Mobile converts very well when it reaches relevant support content. |
| Desktop | 16,529 impressions, 684 clicks, 4.14% CTR, position 6.58 | Desktop supplies 94.1% of impressions and needs better SERP conversion on hubs and reference pages. |

### Daily trend

| Date | Impressions | Clicks | CTR | Readout |
| --- | ---: | ---: | ---: | --- |
| Sep 19 | 1,231 | 11 | 0.89% | Low post-launch baseline. |
| Sep 20 | 1,555 | 22 | 1.41% | Discovery demand starting to rise. |
| Sep 21 | 2,143 | 73 | 3.41% | Support demand builds. |
| Sep 22 | 8,273 | 604 | 7.30% | Maintenance/server-status event spike. |
| Sep 23 | 2,486 | 50 | 2.01% | Mobile-launch day had visibility but weaker conversion. |
| Sep 24 | 1,874 | 33 | 1.76% | Demand normalizes after the event. |

## Query demand and actions

### 1. Reliability and maintenance: protect and operationalize

The following cluster is the traffic engine: `aniimo server status` (537 impressions, 84 clicks, position 2.97), `aniimo maintenance` (426, 44, position 2.44), `aniimo server down` (173, 26, position 3.42), `aniimo server maintenance` (152, 18, position 3.11), `aniimo downtime` (77, 18, position 2.58), and language variants including German and French.

The current status page has the right route and strong ranking. Its weakness is operational freshness: a static "no active outage" answer risks becoming misleading when the next event happens. Maintain it as a dated incident page with a visible `Last checked` time, one clear status state, official-source links, platform/region breakdown, and a handoff to known issues for local failures.

### 2. Brand and official-intent leakage: improve the homepage and official paths

`aniimo` has 800 impressions, 2 clicks, 0.25% CTR, and position 8.37. `aniimo website` has 139 impressions and zero clicks; `aniimo official site` has 52 and zero clicks. An independent guide will not always win navigational intent, but the homepage must make its role clear in the title and description: independent live guide, server status, official store links, current issues, and database. The first viewport should offer those four practical paths rather than lead with generic discovery.

### 3. Community intent: make Discord useful and source-safe

`aniimo discord` and `aniimo discord server` produce 542 combined impressions but only 5 clicks, despite positions 5.47 and 3.77. Update the Discord page title and description for the exact query, add a clearly verified official-community destination when available, show the verification date, and provide direct paths to server status, notices, and codes. This will better serve searchers who are actually seeking announcements rather than a generic community explainer.

### 4. Content intent: turn high-impression pages into answers

| Page | Impressions | CTR | Position | Version action |
| --- | ---: | ---: | ---: | --- |
| `/guides/aniimo-egg-heist-guide/` | 1,335 | 1.12% | 6.79 | Add an above-the-fold answer to the mode, player/team requirements, current availability, and a dated evidence label. |
| `/troubleshooting/aniimo-known-issues/` | 1,836 | 3.92% | 5.52 | Convert it from a general support page into an issue table with status, platform, workaround, official source, and last updated date. |
| `/topics/aniimo-discord/` | 804 | 2.61% | 4.76 | Target official Discord, announcements, server status, and scam-safe code guidance. |
| `/aniimo/besauce/` | 457 | 0.66% | 5.38 | Add verified answer blocks for element, location, evolution, and use case; leave unknown fields explicitly watchlist. |
| `/aniimo/fragrancier/` | 419 | 1.91% | 4.31 | Same treatment; this is ranking well enough that richer verified content should lift CTR. |
| `/aniimo/infergon/` | 389 | 2.31% | 4.74 | Prioritize it in the watchlist verification queue and link to related forms when evidence permits. |
| `/aniimo/blazen/`, `/aniimo/tubster/`, `/aniimo/fentuft/`, `/aniimo/thornblade/` | 807 combined | 0.00%-1.04% | 6.09-7.89 | Apply a reusable creature-detail template and verify the fields that answer name searches. |

The primary low-CTR creature terms are not a reason to fabricate gameplay data. They are a prioritization list for official Wiki review and repeatable in-game verification.

## Markets and devices

- United States has the most listed-country demand: 7,856 impressions and 329 clicks (4.19% CTR). Keep English support and store guidance first-class.
- Germany (1,045 impressions, 7.18% CTR), France (702, 7.12%), the United Kingdom (1,165, 6.27%), and Canada (665, 5.86%) already convert well. Expand localized SERP copy only after the English operational pages are current.
- Brazil has 1,241 impressions but just 2.42% CTR. The existing Portuguese pre-registration page draws traffic, but the intent has moved past pre-registration. Replace its prominent launch-era framing with current mobile availability, store links, account flow, and reward-claim status; retain a historical pre-registration section below it.
- Desktop is the scale channel. Preserve dense navigation, quick support links, and tables that scan well at desktop widths.
- Mobile has a 10.55% CTR and position 5.07. Ensure the status, download, known-issues, and official-links controls remain immediately usable without excessive scrolling on small screens.

## Proposed release: V1.3.0 "Live Support and Answer Upgrade"

### Goal

Convert launch traffic into repeatable trust and reduce unnecessary support searches by answering live-service questions with dated, source-labeled content.

### P0: release immediately

1. **Server-status operations**
   - Upgrade `/troubleshooting/aniimo-server-status/` to a structured status surface: current state, last checked timestamp, official source, affected platform/region, maintenance window, and action for players not affected globally.
   - Add incident history rows for confirmed maintenance/outages only. Do not treat player reports as confirmed incidents.
   - Cross-link status to `/troubleshooting/aniimo-known-issues/`, `/download/`, `/launch-day/`, and `/topics/aniimo-discord/`.

2. **Known issues as a live support index**
   - Use a compact issue registry: issue, affected platform, current status, workaround, source, checked time.
   - Prioritize login, "server not ready", stuck loading, update/install failure, store visibility, account linking, and reward/code failures from observed queries.

3. **Homepage intent correction**
   - Rewrite title/description and first viewport for `aniimo`, `aniimo website`, and `aniimo official site` impressions.
   - Lead with `Server Status`, `Download`, `Known Issues`, and `Aniimo Database`, clearly labeled as an independent guide with official outbound links.
   - Add a recent-update timestamp and a compact platform availability row.

4. **Discord query response**
   - Put official-community verification, timestamp, and safe announcement path above explanatory copy.
   - Keep unverified invite links, code posts, and screenshots out of the endorsed path.

### P1: ship in the same cycle after P0 verification

1. **Creature search-answer template**
   - Update Besauce, Fragrancier, Infergon, Blazen, Tubster, Fentuft, Thornblade, Pawney, Fenmane, and Geodeback first.
   - Place the concise answer below the title: official number, verified element/region/form data, what remains unverified, source, and last checked date.
   - Add related-form and related-region links only when source data supports them.

2. **Egg Heist answer upgrade**
   - Refresh the title, meta description, first answer, mode availability, entry requirements, team expectations, and source/evidence boundary.
   - Link directly to current events and known issues instead of making unsupported claims about rewards or competitive rules.

3. **Brazil mobile refresh**
   - Reframe `/pt-br/aniimo-pre-registro/` around current mobile availability, official store visibility, account support, and reward claim status.
   - Create or strengthen Portuguese internal links to Android, iOS, troubleshooting, and current launch information before adding more localized pages.

### P2: following cycle, only with fresh evidence

1. Add a dated update-log and event summary for official September changes, tied to sources.
2. Resolve the highest-demand creature fields from the current 37-entry watchlist through official Wiki review or reproducible in-game evidence.
3. Add German and French localized support snippets/pages only for demand already proven by query data, starting with maintenance/status terminology.
4. Add monitoring fields for query cluster, target URL, CTR, position, updated date, source status, and next review date.

## Acceptance criteria

- Every live status claim has a timestamp, source classification, and a clear distinction between confirmed outage, maintenance, and user-local troubleshooting.
- Status and known-issues pages make status, platform, and next action visible without scrolling on mobile.
- Homepage title, meta description, and first-screen links directly address branded, website, download, and support intent.
- Discord page contains only a verified official path in its primary action area.
- Updated creature pages do not replace watchlist fields with inference or community rumor.
- All modified pages pass the repository checks: `npm run build`, `npm run check:content`, `npm run check:seo`, `npm run check:framework`, `npm run check:assets`, `npm run check:verification`, and `npm run check:live`.

## Measurement plan

Review after 7 and 14 complete days, using comparable GSC or Webmaster windows rather than the short partial export.

| KPI | Current baseline | V1.3 target |
| --- | ---: | ---: |
| Homepage CTR | 0.38% | At least 1.5% initially; 2.5% after a stable month. |
| Discord page CTR | 2.61% | At least 4.0% while holding a top-5 average position. |
| Egg Heist guide CTR | 1.12% | At least 2.5% while holding position 7 or better. |
| Top 10 creature-page CTR | Mostly 0%-2.31% | At least 3.0% where average position is 5 or better. |
| Status-page CTR | 9.62% | Maintain at least 8% while preventing stale-status errors. |
| Brazil CTR | 2.42% | At least 3.5% after the post-registration/mobile refresh. |

Interpret the status-page KPI with care: incident traffic is volatile. Success is trustworthy, time-bounded information and appropriate onward routing, not maximizing outage-related clicks.

## Recommended implementation order

1. V1.3.0 P0 support surfaces and homepage.
2. Verify and release known-issues/status data model and editorial workflow.
3. P1 creature and Egg Heist improvements using only verified evidence.
4. Portuguese mobile refresh.
5. Deploy, run the release checks, submit IndexNow only after indexable URL changes, then start the 7-day measurement window.

# Site Update Plan: Version 1.1 Player Support

Prepared: 2026-10-01

Input: [weekly game intelligence brief](../research/weekly-game-intelligence-2026-10-01.md)

## Objective

Turn the Version 1.1 update, current event windows, and demonstrated player support demand into concise, source-labeled Aniimo.games updates. Reuse existing routes wherever they already satisfy the intent; do not publish community claims as confirmed facts.

## Scope And Sequence

| Release | Goal | Existing route(s) | New route? | Evidence gate |
| --- | --- | --- | --- | --- |
| P0-A | Make the current event cycle immediately understandable. | `/events/`, `/launch-day/`, `/updates/official-news/`, `/updates/` | No | Official Steam Version 1.1 announcement |
| P0-B | Answer controller setup and patch-specific support questions. | `/topics/aniimo-controller-support/`, `/troubleshooting/aniimo-known-issues/` | No | Official Steam FAQ and Sep 30 patch notes |
| P0-C | Answer redemption, reward delivery, and code-status questions safely. | `/codes/`, `/codes/how-to-redeem/`, `/codes/aniimo-codes-not-working/` | No | Official/in-client redemption evidence; third-party sources only for flow discovery |
| P0-D | Connect Irisalis, Prismana event availability, and Egg Heist Chaos Mode. | `/aniimo/irisalis/` if an official entry exists; otherwise `/events/`, `/topics/egg-heist-rules/`, `/topics/egg-heist-rewards/`, region pages | No by default | Official update wording and event schedule |
| P1-A | Reduce account/server and platform-progress confusion. | `/topics/aniimo-cross-save/`, `/launch-day/`, `/troubleshooting/` | No | Official account/server wording plus direct platform checks |
| P1-B | Give new players safe decision support. | `/beginner-guide/`, `/team-builder/`, `/topics/aniimo-roles/`, `/topics/aniimo-tier-list/` | No | Clearly labeled player-test or official evidence |
| P2 | Add exact capture routes, location details and build recommendations. | Existing Aniimo and region detail pages | No by default | Reproducible in-game evidence with platform, version, route and timestamp |

## P0-A: Current Events And Version 1.1

### Update targets

- `data/content/freshness.js`: refresh `liveUpdate` with the September 30 resource update, its restart instruction, compensation eligibility, and the controller/login performance changes.
- `/events/`: show active, ended and upcoming states from `eventStatus`; prioritize the Oct 1 Journey Chronicles start and Oct 5 transition from Melloblum to Waleetle.
- `/launch-day/`: add a prominent “current client” action that says to restart after the September 30 resource update, rather than leaving users on the original launch-only wording.
- `/updates/official-news/`: add Version 1.1 and September 30 patch entries with the official Steam source, affected pages, and an explicit “last checked” date.
- `/updates/`: add one changelog entry that describes the site refresh, not the game patch as if it were authored by Aniimo.games.

### Required event fields

Every visible event row must include:

- UTC+8 start and end time, or “no end time listed” only where the source lacks one.
- Current status calculated at render time.
- Unlock requirement.
- Source link.
- A clear distinction between event availability and a permanent spawn location.

### Internal links

Events -> Egg Heist rules/rewards -> launch verification -> relevant region/Aniimo page.

Do not create a generic “Version 1.1” route unless the existing events and official-news pages cannot carry the content without becoming unreadable.

## P0-B: Controller Support And Known Issues

### Update targets

- `/topics/aniimo-controller-support/`: replace generic pre-launch language with a dated support matrix:
  - Steam/PC: native controller input and the official “disable Steam Input, restart, then retest” path.
  - Console: native support is expected by platform; do not extrapolate PC-specific Steam steps.
  - Mobile and Steam Deck: retain “needs direct verification” unless a primary source confirms behavior.
  - September 30 patch: controller progress-bar reward-claiming improvement.
- `/troubleshooting/aniimo-known-issues/`: add a controller issue row with the safe steps, required bug-report fields, and a link back to the controller page.
- Controller FAQ: add “Why are my button prompts wrong?” and “What should I record before contacting support?”

### Source policy

The Steam FAQ is primary for the Steam Input instruction. Player reports can validate recurring demand but cannot become a universal compatibility claim. Preserve the platform/version/date labels.

## P0-C: Code Redemption And Reward Delivery

### Update targets

- `/codes/how-to-redeem/`: replace the placeholder-only copy with the observed in-client path, but label it as current-client guidance and include `last checked` plus a requirement to verify in the player’s current version.
- `/codes/aniimo-codes-not-working/`: add diagnostic order: code source and exact case -> eligibility/expiry/platform/region -> in-game mail and prerequisite -> client restart -> official support.
- `/codes/`: retain the split between active strings, campaign rewards and expired codes. Do not add community-sourced code strings to the active list.
- `/launch-day/` and `/troubleshooting/aniimo-known-issues/`: link to redemption flow for reward-mail questions rather than suggesting account resets.

### Evidence gate

An active-code row requires either an official source URL or a direct in-game redemption record with timestamp, platform, region, reward and result. A media guide can support navigation-copy review but cannot verify an active code.

## P0-D: Irisalis, Prismana And Egg Heist

### Update targets

- `/events/`: feature the Irisalis journey, event period, eligibility, weekly-limited source wording, and the current event transitions.
- `/topics/egg-heist-rules/` and `/topics/egg-heist-rewards/`: add Chaos Mode date, Tier IV Elite Egg Seeker requirement, Chaos Ticket entry gate, the official higher-drop wording, and strict escape/team recommendation. Do not publish an exact reward table.
- Existing Prismana availability panels: retain the “event availability, not permanent location” boundary for Melloblum and Waleetle.
- Irisalis detail route: create only if the official Wiki provides a stable name/number/description/image record. Until then, link from the event hub rather than invent a database record.

### Acceptance criteria

- No statement implies that Melloblum/Waleetle or Irisalis are permanent open-world spawns.
- No drop percentage, capture rate, optimal capture device, or team build is stated without official or reproducible evidence.
- Region links use the exact event region name from the official source.

## P1-A: Account, Server And Cross-Platform Flow

### Update targets

- `/topics/aniimo-cross-save/`: add a “before you create a character” checklist: selected platform account, intended server, account-link state, and platform-specific purchase/reward claim order.
- `/launch-day/` and `/troubleshooting/`: make the different-server data boundary prominent.
- Add an evidence form to `/launch-verification/` for console-to-PC/mobile account linking, including source, platform, server, client version and result.

### Constraint

Do not claim universal PS5-to-Steam/mobile continuity based on community reports. State only confirmed same-account/same-server paths and route exceptions to support.

## P1-B: Beginner Capture And Team Decisions

### Content shape

Add compact, version-dated sections to the existing beginner and team-builder surfaces:

- Capture decision checklist: rarity/event state, available device, and verification status.
- Team planning: role coverage (BREAK, DPS, support/heal), element coverage, and encounter context.
- Potential/fruit resources: do not make irreversible-spend recommendations without direct testing.
- Alpha/Prismana: define official terminology first; label all strength comparisons as unverified until source-backed.

### Exclusions

No definitive tier list, best-DPS claim, rarity-meta claim, or capture recommendation based only on Reddit replies or creator videos.

## Data And Architecture Changes

- Keep event items in `data/content/freshness.js` as the single schedule source; extend each record with `source`, `requirements`, and optionally `updatedAt` rather than duplicating dates in page components.
- Add a small patch-note data object, referenced by events, controller support, known issues and updates pages.
- Reuse `eventStatus()` and `eventSchedule()` for all event representations.
- Extend existing route-specific panels in `src/pages/pages.jsx`; do not add page-specific ad hoc content blocks where a data object can drive the same UI.
- Update `siteLastUpdated` and source-check date only once all official-source references are verified.

## Quality Gates

1. `npm run check:content`
2. `npm run check:seo`
3. `npm run check:links`
4. `npm run check:verification`
5. `npm run check:release`
6. After Cloudflare deploy: `npm run check:live`, plus a manual check of the event state and controller page title/content.

## Release Order

1. P0-A event/source refresh.
2. P0-B controller and known-issues refresh.
3. P0-C code/reward support refresh.
4. P0-D Irisalis/Prismana/Egg Heist cross-linking.
5. Run all gates and deploy.
6. Re-export GSC after Google has recrawled the refreshed support and event routes.
7. Implement P1 only after source checks or direct verification fill the stated evidence gaps.

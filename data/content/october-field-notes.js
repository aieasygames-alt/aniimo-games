// Item-level dates do not imply that older Wiki data was rechecked.
export const octoberReviewDate = "2026-10-30";
export const inferlupaEventSource = "https://x.com/Aniimo_EN/status/2109675867899035881";
export const eggHeistFeedbackSource = "https://x.com/Aniimo_EN/status/2109841601434669066";
const inferlupaNotes = {
  title: "Prismana Inferlupa: October 12–19", source: inferlupaEventSource, checked: octoberReviewDate,
  points: [
    ["Official event window", "The October 13 post lists October 12–19 without an exact closing hour or time zone. Confirm availability in your server's client before traveling."],
    ["How the event works", "Enter Nimbus Fields, nurture the bloom and trigger a Prismana Flow phenomenon to attract the special Prismana Inferlupa. Exact coordinates, entry level and probabilities are not confirmed here."],
    ["Event location, not a permanent spawn", "Nimbus Fields is the location in this limited-time announcement. It does not replace the separately tracked Mistwoods region association or confirm a permanent spawn."],
  ],
};
const eggHeistNotes = {
  title: "Egg Heist: official feedback, October 13", source: eggHeistFeedbackSource, checked: octoberReviewDate,
  points: [
    ["Current official explanation", "The team says it made no related numerical changes to spawn quantity or chest probabilities. Reports about spawns, disengagement delay and aggro range are being investigated. This is not confirmation of a hidden balance change or a completed fix."],
    ["Why more enemies can appear", "Creatures may spawn at dungeon initialization, as exploration time passes, or after special events. Digging rare eggs or collecting certain objects can awaken creatures; the starting enemies may not be the entire run."],
    ["Rescue: planned, not live", "Easier teammate rescue and recognition or rewards for rescuers are planned. Wait for a release notice before treating them as available."],
    ["Chaos improvements: planned", "More team choices, chip sources, temporary dungeon abilities and optional high-difficulty challenges are planned. New collectible acquisition paths and returns of older collectibles are future plans, not a current reward table."],
  ],
};
const statNotes = {
  title: "Before spending stat materials", source: eggHeistFeedbackSource, checked: octoberReviewDate,
  points: [
    ["Official damage explanation", "Non-DPS roles use a level-based baseline attack correction; BREAK roles involve break value. Below the baseline, extra attack may not visibly improve damage. This is not a universal recommendation to ignore attack."],
    ["Compare like with like", "Before committing scarce materials, compare the same character level, skill, target and buffs. Separate damage, support utility and break contribution instead of treating one damage screenshot as a tier list."],
    ["Version boundary", "The feedback mentions a future calculation improvement using the label ‘1.1’. That label does not establish a release date or prove the change is live; check the next formal patch notice."],
  ],
};
const homelandNotes = {
  title: "Plan a useful Homeland, then decorate", source: "https://www.aniimo.com/main", checked: null,
  points: [
    ["Start with unlocked functions", "Check your current RV, farming and decoration functions before planning a layout. Keep frequently used interactions easy to reach. This is an editorial layout suggestion, not a bonus mechanic."],
    ["Park Buffs: check before crafting", "Read the unlock condition, ingredients, effect and activation state in your client. Verify whether crafting and activation are separate actions. Exact recipes, durations and stacking rules are not verified here."],
    ["Park Buff evidence checklist", "Before publishing a Park Buff claim, record the feature name, unlock condition, ingredients, effect text, activation step, duration, stacking behavior, platform, client version and screenshot. A tour video can show a layout but cannot prove the bonus rules."],
    ["Build around a daily route", "Group the interactions you use and leave a clear walking path. Test it before spending more on decoration. A tour video can inspire a layout but does not prove that every object grants an effect."],
    ["If a bonus is missing", "Recheck requirements and the active-effect indicator. Record your platform, server, client version and screenshot for support; do not repeatedly spend materials based on an unverified guide."],
  ],
};
const knownIssueNotes = {
  title: "Official known issues and fixes: November 12", source: "https://www.aniimo.com/newslist/detail/100298", checked: "2026-11-14",
  points: [
    ["Current issue examples", "The November 12 notice adds an in-match Egg Heist report button, mobile control-area adjustments, camera and storage improvements, and new PS5/Xbox fixes; the linked known-issues page retains older dated items."],
    ["Safe Android workaround", "For the Stars and the Knight Journey freeze, the official notice suggests Performance Mode or disabling Shadows, or using the upper-right skip button."],
    ["Recent fixes", "The official notices record fixes from October 29 through November 12. Treat each item as date-scoped rather than as proof that every current client is unaffected."],
    ["Version boundary", "A listed issue or fix belongs to the official notice date. Check the current client and later notices before treating it as still active."],
  ],
};
export function fieldNotesForPath(path) {
  if (["/", "/events/", "/weekly-plan/", "/aniimo/inferlupa/", "/regions/nimbus-fields/"].includes(path)) return [inferlupaNotes];
  if (["/mechanics/egg-heist-rules/", "/mechanics/egg-heist-rewards/", "/guides/aniimo-egg-heist-guide/"].includes(path)) return [eggHeistNotes, statNotes];
  if (path === "/guides/aniimo-homeland-guide/") return [homelandNotes];
  if (["/troubleshooting/aniimo-known-issues/", "/troubleshooting/", "/launch-day/"].includes(path)) return [knownIssueNotes];
  return [];
}
export const updateOutlook = {
  title: "November 12 update: confirmed features and next checks", source: "https://aniimo.com/newslist/detail/100298", checked: "2026-11-14",
  points: [
    ["Confirmed update", "The November 12 official notice confirms Aniimo Affinity, two Crescent Bay Journey Quests, Aniimo Dash, Prismana Snapshots, Whirlbite reset support and platform/mobile fixes."],
    ["Next verification", "Check Affinity daily and weekly gain limits, event rewards, racing track conditions, in-match report behavior and the current client before publishing detailed guides."],
    ["Do not overstate", "Creator videos and search snippets can suggest strategies or names, but they do not replace the official notice or reproducible in-game evidence."],
  ],
};

import test from "node:test";
import assert from "node:assert/strict";
import { eventStatus, eventSchedule, liveUpdate } from "../data/content/freshness.js";
import { fieldNotesForPath } from "../data/content/october-field-notes.js";

const weekly = liveUpdate.events.find((event) => event.recurrence);
const inferlupa = liveUpdate.events.find((event) => event.name.includes("Inferlupa"));
test("weekly windows respect UTC+8 opening, closing and next cycle", () => {
  for (const [date, expected] of [
    ["2026-10-15T03:59:59+08:00", "Closed this week"],
    ["2026-10-15T04:00:00+08:00", "Active"],
    ["2026-10-19T03:59:59+08:00", "Active"],
    ["2026-10-19T04:00:00+08:00", "Closed this week"],
    ["2026-10-22T04:00:00+08:00", "Active"],
    ["2026-09-24T03:59:59+08:00", "Upcoming"],
  ]) assert.equal(eventStatus(weekly, new Date(date)), expected, date);
});
test("date-only announcement never pretends to have an exact active window", () => {
  assert.equal(eventStatus(inferlupa, new Date("2026-10-15T00:00:00Z")), "Check in client");
  assert.equal(eventStatus(inferlupa, new Date("2026-10-10T00:00:00Z")), "Upcoming");
  assert.equal(eventStatus(inferlupa, new Date("2026-10-21T00:00:00Z")), "Ended");
  assert.match(eventSchedule(inferlupa), /time zone not specified/);
});
test("timed, ongoing and invalid dates have explicit states", () => {
  const timed = { startsAt: "2026-10-10T00:00:00Z", endsAt: "2026-10-11T23:59:59Z" };
  assert.equal(eventStatus(timed, new Date("2026-10-09T00:00:00Z")), "Upcoming");
  assert.equal(eventStatus(timed, new Date("2026-10-11T00:00:00Z")), "Active");
  assert.equal(eventStatus(timed, new Date("2026-10-12T00:00:00Z")), "Ended");
  assert.equal(eventStatus({ startsAt: timed.startsAt }, new Date("2026-10-12T00:00:00Z")), "Active");
  assert.equal(eventStatus({ startsAt: "bad" }), "Check in client");
});
test("linked event pages share the same reviewed source", () => {
  for (const path of ["/events/", "/aniimo/inferlupa/", "/regions/nimbus-fields/"]) {
    assert.equal(fieldNotesForPath(path)[0].source, inferlupa.source);
  }
  assert.equal(fieldNotesForPath("/mechanics/egg-heist-rules/").length, 2);
  assert.equal(fieldNotesForPath("/guides/aniimo-homeland-guide/").length, 1);
  assert.equal(fieldNotesForPath("/guides/aniimo-egg-heist-guide/").length, 2);
});

import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const tasks = [
  { name: "Official source check", command: "npm", args: ["run", "check:official"], level: "warning" },
  { name: "Asset audit", command: "npm", args: ["run", "check:assets"], level: "blocking" },
  { name: "Live production audit", command: "npm", args: ["run", "check:live"], level: "warning" },
];

const results = [];
for (const task of tasks) {
  console.log(`\n== ${task.name} (${task.level}) ==`);
  const result = spawnSync(task.command, task.args, { encoding: "utf8", shell: false });
  process.stdout.write(result.stdout || "");
  process.stderr.write(result.stderr || "");
  results.push({ ...task, passed: result.status === 0, status: result.status ?? 1 });
}

const blockingFailures = results.filter((result) => result.level === "blocking" && !result.passed);
const warnings = results.filter((result) => result.level === "warning" && !result.passed);
const report = `# Aniimo Monitoring Report

Generated: ${new Date().toISOString()}

| Check | Level | Result |
| --- | --- | --- |
${results.map((result) => `| ${result.name} | ${result.level} | ${result.passed ? "Passed" : `Failed (${result.status})`} |`).join("\n")}

## Follow-up

- Blocking failures: ${blockingFailures.length || "None"}
- Warning failures: ${warnings.length || "None"}
- IndexNow is intentionally not run automatically. Submit it only after a successful deployment changes indexable URLs.
`;

writeFileSync("monitoring-report.md", report);
console.log(`\nMonitoring report written: ${blockingFailures.length} blocking failure(s), ${warnings.length} warning failure(s).`);
if (blockingFailures.length) process.exit(1);

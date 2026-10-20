import { spawnSync } from "node:child_process";

const steps = [
  ["Build", ["npm", ["run", "build"]]],
  ["Build artifact audit", ["npm", ["run", "check:build"]]],
  ["Content audit", ["npm", ["run", "check:content"]]],
  ["Content expansion audit", ["npm", ["run", "check:expansion"]]],
  ["SEO audit", ["npm", ["run", "check:seo"]]],
  ["Framework audit", ["npm", ["run", "check:framework"]]],
  ["Internal link audit", ["npm", ["run", "check:links"]]],
  ["Asset audit", ["npm", ["run", "check:assets"]]],
  ["Size audit", ["npm", ["run", "check:size"]]],
  ["Verification audit", ["npm", ["run", "check:verification"]]],
  ["GSC watchlist audit", ["npm", ["run", "check:gsc-watchlist"]]],
  ["Launch readiness audit", ["npm", ["run", "check:launch-readiness"]]],
];

for (const [label, [command, args]] of steps) {
  console.log(`\n== ${label} ==`);
  const result = spawnSync(command, args, { stdio: "inherit", shell: false });
  if (result.status !== 0) {
    console.error(`\nRelease check failed at: ${label}`);
    process.exit(result.status || 1);
  }
}

console.log("\nRelease check passed.");

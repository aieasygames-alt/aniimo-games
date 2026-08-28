import { spawnSync } from "node:child_process";

const steps = [
  ["Build", ["npm", ["run", "build"]]],
  ["Content audit", ["npm", ["run", "check:content"]]],
  ["SEO audit", ["npm", ["run", "check:seo"]]],
  ["Framework audit", ["npm", ["run", "check:framework"]]],
  ["Asset audit", ["npm", ["run", "check:assets"]]],
  ["Verification audit", ["npm", ["run", "check:verification"]]],
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

// lib/cli.js

const DEFAULT_EXCLUDE = ["node_modules", ".next", ".git"];

/**
 * Parses CLI arguments to extract the --exclude option.
 * @returns {string[]} Array of folder names to exclude
 */
export function parseExcludeArg() {
  const args = process.argv.slice(2);
  const excludeArg = args.find((a) => a.startsWith("--exclude="));
  if (!excludeArg) return DEFAULT_EXCLUDE;
  return excludeArg
    .replace("--exclude=", "")
    .split(",")
    .map((e) => e.trim());
}

/**
 * Returns true if --help or -h is present in CLI args.
 */
export function shouldShowHelp() {
  const args = process.argv.slice(2);
  return args.includes("--help") || args.includes("-h");
}

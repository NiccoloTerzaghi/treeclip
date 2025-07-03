// lib/default-exclude.js

/**
 * Folders commonly excluded from tree visualizations in projects of all kinds.
 */
export const DEFAULT_EXCLUDE = [
  // Node & Frontend
  "node_modules",
  "bower_components",
  "dist",
  "build",
  "out",
  "coverage",
  "logs",
  ".parcel-cache",
  ".cache",
  ".next",
  ".nuxt",
  ".output",
  ".yarn",
  ".eslintcache",
  ".prettier*",
  ".sass-cache",

  // Version control & Editor
  ".git",
  ".hg",
  ".svn",
  ".DS_Store",
  ".vscode",
  ".idea",
  ".c9",
  ".history",
  ".expo",
  ".Trash-*",

  // Python
  "venv",
  ".venv",
  "env",
  "ENV",
  ".env",
  "__pycache__",
  ".mypy_cache",
  "pip-wheel-metadata",
  ".pytest_cache",
  ".coverage",
  ".nyc_output",
  "__pypackages__",

  // Java, Rust, C/C++
  "target",
  "bin",
  "obj",
  ".gradle",
  ".classpath",
  ".project",
  ".settings",
  ".metadata",

  // Temp files & swap
  ".tmp",
  "tmp",
];

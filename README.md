<!-- README.md -->
# treeclip
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![npm](https://img.shields.io/npm/v/treeclip-cli)

> 📋 Copy your project directory structure as an ASCII tree directly to your clipboard!

**treeclip** is a simple command-line tool to generate and copy an ASCII representation of your project's folder structure.
You can exclude folders (e.g. `node_modules`) and it works on Windows, macOS, and Linux.

---

## 🚀 Installation

```sh
npm install -g treeclip-cli
```

---

## ⚡ Usage

```sh
treeclip [--exclude=folder1,folder2,...] [--help|-h]
```

### Options

| Option              | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `--exclude=folders` | Comma-separated list of folder names to exclude (overrides `.treeclipignore` and defaults) |
| `--help`, `-h`      | Show help and exit                                                                         |

---

## 🛡️ Exclude list priority

* If you use `--exclude`, only those folders will be excluded (highest priority).
* If no `--exclude` is given but a `.treeclipignore` file exists in the current directory, its non-comment lines (one per line) will be used as the exclude list.
* If neither is present, a default list of common folders (see below) will be excluded automatically.

**Example `.treeclipignore` file:**

```
node_modules
.git
.next
dist
.vscode
```

### Default excluded folders/files

By default, these are always excluded if no `--exclude` or `.treeclipignore` is provided:

```
node_modules, bower_components, dist, build, out, coverage, logs, .parcel-cache, .cache, .next, .nuxt, .output, .yarn, .eslintcache, .prettier*, .sass-cache, .git, .hg, .svn, .DS_Store, .vscode, .idea, .c9, .history, .expo, .Trash-*, venv, .venv, env, ENV, .env, __pycache__, .mypy_cache, pip-wheel-metadata, .pytest_cache, .coverage, .nyc_output, __pypackages__, target, bin, obj, .gradle, .classpath, .project, .settings, .metadata, .tmp, tmp
```

See [`lib/default-exclude.js`](./lib/default-exclude.js) for the full list.

---

## 🌳 Example

```sh
treeclip --exclude=node_modules,.git,.cache
```

This will output (and copy to clipboard) something like:

```
my-project/
├── index.js
├── package.json
├── src/
│   ├── app.js
│   └── utils.js
├── node_modules/(...)
└── .git/(...)
```

---

## ✨ Features

* **Easy to use:** Just run `treeclip` in any directory.
* **Clipboard ready:** Output is automatically copied.
* **Customizable:** Exclude any folders you want from tree expansion (via CLI or `.treeclipignore`).
* **Fast & lightweight:** Zero config needed.

---

## 👤 Author

[Niccolò Terzaghi](https://github.com/NiccoloTerzaghi)

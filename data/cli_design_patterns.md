# CLI Design Patterns for LLM-Fluent CLIs

Synthesized from the help output and 100 example commands of the 10 most LLM-trained CLIs:
[git](md-viewer.html?file=data/git_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [bash](md-viewer.html?file=data/bash_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [curl](md-viewer.html?file=data/curl_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [npm](md-viewer.html?file=data/npm_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [docker](md-viewer.html?file=data/docker_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [pip](md-viewer.html?file=data/pip_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [grep](md-viewer.html?file=data/grep_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [ssh](md-viewer.html?file=data/ssh_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [wget](md-viewer.html?file=data/wget_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [make](md-viewer.html?file=data/make_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns).

The goal: **design a new CLI so that LLMs already "know" how it works** — by matching patterns
that are saturated across pre-2024 training data.

---

## 1. Universal Flags (appear in all or nearly all 10 tools)

These flags are the safest to adopt. LLMs will predict them correctly with near-certainty.

| Flag        | Long form                     | Appears in                                         | Confidence |
| ----------- | ----------------------------- | -------------------------------------------------- | ---------- |
| `-h`        | `--help`                      | git, curl, npm, docker, pip, grep, ssh, wget, make | Highest    |
| `-v`        | `--verbose`                   | curl, pip, wget, ssh, make, bash                   | Very high  |
| `-V`        | `--version`                   | curl, pip, wget, make, npm                         | Very high  |
| `--version` |                               | git, curl, npm, docker, pip, wget, make            | Highest    |
| `-q`        | `--quiet`                     | curl, pip, wget, grep, make                        | High       |
| `-s`        | `--silent`                    | curl, wget, make                                   | High       |
| `-o`        | `--output`                    | curl, wget, make                                   | High       |
| `-f`        | `--file` / `--force`          | curl, make, git, wget                              | High       |
| `-n`        | `--dry-run`                   | curl, make (--just-print), git                     | High       |
| `-r`        | `--recursive`                 | grep, wget, pip (implicitly)                       | High       |
| `-i`        | `--include` / `--ignore-case` | grep, curl                                         | Medium     |
| `-e`        | `--regexp` / `--execute`      | grep, wget                                         | Medium     |
| `-d`        | `--debug`                     | pip, wget, docker                                  | Medium     |
| `-C`        | `--directory`                 | make, curl, git                                    | Medium     |

### Design rule

**Always implement `-h`/`--help`, `-v`/`--verbose`, `--version`, `-q`/`--quiet`, `-o`/`--output`, `-n`/`--dry-run`.**
These are the flags an LLM will guess first, always.

---

## 2. Subcommand Structure

### Pattern A: `<tool> <verb> <noun>` — dominant in high-level tools

Used by: **[git](md-viewer.html?file=data/git_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [docker](md-viewer.html?file=data/docker_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [npm](md-viewer.html?file=data/npm_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [pip](md-viewer.html?file=data/pip_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns)**

```
git commit -m "message"
docker run -d nginx
npm install lodash
pip install requests
```

- Verbs are simple English: `run`, `build`, `push`, `pull`, `install`, `uninstall`, `list`, `show`, `create`, `delete`, `start`, `stop`, `logs`
- Nouns are resource names: `container`, `image`, `network`, `volume`, `package`, `branch`, `tag`

### Pattern B: `<tool> [flags] <target>` — dominant in low-level/Unix tools

Used by: **[curl](md-viewer.html?file=data/curl_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [grep](md-viewer.html?file=data/grep_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [ssh](md-viewer.html?file=data/ssh_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [wget](md-viewer.html?file=data/wget_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns), [make](md-viewer.html?file=data/make_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns)**

```
curl -X POST -H "Content-Type: application/json" https://api.example.com
grep -rn "TODO" ./src
ssh -p 2222 user@hostname
wget -O file.tar.gz https://example.com/
make -j4 build
```

- No subcommands — the primary action is implied by the tool
- Options modify behavior, positional arguments are targets

### Which pattern to choose for a new CLI?

- If your CLI manages **resources** (users, projects, configs, jobs) → use Pattern A (`<tool> <verb> <noun>`)
- If your CLI is a **single-purpose utility** (search, fetch, convert) → use Pattern B (flags + target)
- Most modern CLIs (gh, aws, kubectl, terraform) use Pattern A

### Design rule

**Use `<tool> <verb> <noun>` (Pattern A) if building a multi-resource CLI.**
Verbs to use (highest LLM saturation): `create`, `get`, `list`, `delete`, `update`, `run`, `build`, `push`, `pull`, `start`, `stop`, `logs`, `inspect`, `init`, `install`, `uninstall`, `show`, `set`, `config`.

---

## 3. Help Access Patterns

Two dominant patterns across the 10 tools:

| Pattern                      | Examples                              | LLM confidence |
| ---------------------------- | ------------------------------------- | -------------- |
| `<tool> <subcommand> --help` | docker run --help, pip install --help | Highest        |
| `<tool> help <subcommand>`   | git help commit, npm help install     | High           |
| `<tool> -h`                  | grep -h, make -h                      | High           |
| `<tool> --help`              | curl --help, wget --help              | Highest        |

### Design rule

**Support both `<tool> <subcommand> --help` and `<tool> --help`.**
The docker/npm pattern of `<subcommand> --help` is the most commonly seen in training data.

---

## 4. Output Conventions

These conventions are nearly universal across all 10 tools:

| Convention                        | Adoption | Notes                            |
| --------------------------------- | -------- | -------------------------------- |
| Errors → stderr                   | All 10   | Allows clean piping of stdout    |
| Data/output → stdout              | All 10   | Enables piping to jq, grep, etc. |
| Exit code 0 = success             | All 10   | POSIX standard                   |
| Exit code non-zero = failure      | All 10   | Enables `&&` / `\|\|` chaining   |
| `-q`/`--quiet` suppresses stdout  | 8/10     | Silent for scripting             |
| `-v`/`--verbose` adds detail      | 8/10     | Debugging aid                    |
| `--dry-run`/`-n` previews actions | 6/10     | Safety before destructive ops    |

### Design rule

**Always write errors to stderr, output to stdout. Return exit code 0 on success, non-zero on failure.**
This is the single most universal convention across all 10 tools.

---

## 5. JSON Output Pattern

Four of the 10 tools support structured JSON output, and this pattern is rapidly converging:

| Tool                                                                                                                 | JSON output flag                                                   |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [docker](md-viewer.html?file=data/docker_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns) | `docker inspect` (JSON by default), `docker ps --format json`      |
| [npm](md-viewer.html?file=data/npm_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns)       | `npm list --format=json`, `npm outdated --json`                    |
| [pip](md-viewer.html?file=data/pip_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns)       | `pip list --format=json`, `pip outdated --format=json`             |
| [curl](md-viewer.html?file=data/curl_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns)     | `--write-out` for metadata; body is pass-through                   |
| [git](md-viewer.html?file=data/git_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=design_patterns)       | `--format=json` not native, but `--porcelain` for parseable output |

**Emerging standard:** `--output json` or `--format json`

### Design rule

**Support `--output json` (or `--format json`) for all data-returning subcommands.**
LLMs will attempt to pipe output to `jq` — make this work cleanly.

---

## 6. Verb Vocabulary

The most LLM-saturated action verbs, ranked by frequency across all 10 tools' help output and examples:

| Rank | Verb                       | Tools using it                  |
| ---- | -------------------------- | ------------------------------- |
| 1    | `install`                  | npm, pip, make (install target) |
| 2    | `run`                      | docker, npm, make               |
| 3    | `build`                    | docker, npm, make               |
| 4    | `push`                     | git, docker                     |
| 5    | `pull`                     | git, docker, npm                |
| 6    | `list` / `ls`              | docker, npm, pip                |
| 7    | `show`                     | git, pip, docker (inspect)      |
| 8    | `create`                   | docker, git (branch)            |
| 9    | `delete` / `rm` / `remove` | docker, git, npm                |
| 10   | `update`                   | npm, pip, docker                |
| 11   | `start`                    | npm, docker                     |
| 12   | `stop`                     | docker, npm                     |
| 13   | `logs`                     | docker                          |
| 14   | `init`                     | git, npm, docker                |
| 15   | `config`                   | git, npm, pip, docker           |
| 16   | `login`                    | docker, npm                     |
| 17   | `logout`                   | docker, npm                     |
| 18   | `version`                  | git, docker, npm, pip           |
| 19   | `help`                     | git, npm, pip, make             |
| 20   | `status`                   | git, npm (doctor/audit)         |

### Design rule

**Use verbs from this table. Do not invent new verbs.** LLMs will predict these correctly.
Avoid: `execute` (use `run`), `enumerate` (use `list`), `erase` (use `delete`).

---

## 7. Flag Naming Conventions

### Short flags (-x)

- Single character, preceded by single dash
- Can be combined: `-rf`, `-vvv`, `-aux`
- Used for frequently-typed, well-known flags

### Long flags (--flag-name)

- Lowercase with hyphens (not underscores)
- Preceded by double dash
- Can take a value: `--output=file.json` or `--output file.json`

### Value separator

Both `--flag=value` and `--flag value` are used across the 10 tools (curl uses both). Supporting both is safest.

### Boolean flags

- Positive: `--verbose`, `--force`, `--recursive`
- Negative: `--no-color`, `--no-cache`, `--no-verify`
- Pattern `--no-<flag>` is used by curl, wget, docker, npm

### Design rule

- Short flags for the most common options (`-v`, `-q`, `-o`, `-f`, `-h`)
- Long flags for everything else
- Use `--no-<flag>` to negate boolean flags
- Use hyphens not underscores in long flag names

---

## 8. Positional Argument Conventions

| Tool   | Positional args                          |
| ------ | ---------------------------------------- |
| git    | `git commit <pathspec>`                  |
| grep   | `grep [pattern] [file...]`               |
| curl   | `curl [options] <url>`                   |
| ssh    | `ssh [options] <destination> [command]`  |
| make   | `make [options] [target...]`             |
| docker | `docker run [options] <image> [command]` |

**Pattern:** options come before positional arguments. Multiple positional args are common (files, URLs, targets).

### Design rule

**Put positional arguments after all flags. The most important positional arg comes last (or first if it's a resource name in `<verb> <noun>` commands).**

---

## 9. Configuration Layering

All 10 tools support configuration at multiple layers, in priority order:

1. **Command-line flags** (highest priority) — all 10 tools
2. **Environment variables** — curl (`CURL_CA_BUNDLE`), docker (`DOCKER_HOST`), npm (`NPM_TOKEN`), git (`GIT_DIR`)
3. **Per-project config file** — git (`.git/config`), npm (`.npmrc`), make (`Makefile`)
4. **User config file** — git (`~/.gitconfig`), npm (`~/.npmrc`), pip (`~/.config/pip/pip.conf`), curl (`~/.curlrc`)
5. **System config file** (lowest priority) — ssh (`/etc/ssh/ssh_config`), git (`/etc/gitconfig`)

### Design rule

**Support all three layers: CLI flags > env vars > config file.**
LLMs will expect `MYTOOL_<FLAG>` env vars and a `~/.mytoolrc` or `~/.config/mytool/config` file.

---

## 10. Piping and Composability

The most frequently seen piping patterns in training data:

```bash
# Pipe to jq (JSON output)
docker inspect container | jq '.NetworkSettings.IPAddress'
npm list --json | jq '.dependencies | keys'

# Pipe to grep (filter output)
docker ps | grep "nginx"
git log --oneline | grep "fix:"
pip list | grep "requests"

# Pipe to xargs (act on output)
docker ps -q | xargs docker stop
git diff --name-only | xargs grep "TODO"

# Silent with exit status check
curl -sf https://api.example.com/health && echo "OK"
make -q && echo "Up to date"

# Redirect output to file
git log > commits.txt
npm list > packages.txt
```

### Design rule

**Design for composability from the start:**

- Stdout should be clean, pipeable lines or JSON — never mixed with progress/status
- Use `--quiet` to suppress all non-data output for scripting
- Make exit codes meaningful and documented

---

## 11. Summary: Recommended Conventions for a New LLM-Fluent CLI

| Decision             | Recommended choice                 | Reason                                                |
| -------------------- | ---------------------------------- | ----------------------------------------------------- |
| Subcommand structure | `<tool> <verb> <noun>`             | git/docker/npm pattern — highest LLM training density |
| Help                 | `--help` and `<subcommand> --help` | Universal                                             |
| Version              | `--version`                        | Universal                                             |
| Verbosity            | `-v` / `--verbose`                 | 8/10 tools                                            |
| Silence              | `-q` / `--quiet`                   | 8/10 tools                                            |
| Output file          | `-o` / `--output`                  | curl, wget, make                                      |
| Dry run              | `--dry-run` or `-n`                | make, curl, git                                       |
| Force                | `-f` / `--force`                   | git, docker, npm                                      |
| JSON output          | `--output json`                    | docker, npm, pip pattern                              |
| Config               | `--config <file>`                  | curl, wget pattern                                    |
| Errors               | stderr                             | All 10                                                |
| Exit codes           | 0=success, non-zero=failure        | All 10                                                |
| Flag naming          | `--kebab-case`                     | All 10                                                |
| Flag negation        | `--no-<flag>`                      | curl, wget, docker, npm                               |
| Env vars             | `MYTOOL_<FLAG>`                    | docker, npm, git pattern                              |
| Verb vocabulary      | From Section 6 table               | Highest LLM saturation                                |

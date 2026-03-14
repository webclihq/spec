# Implementation Plan: CLI Checklist & Docs

## Goal

For each of the 10 CLIs in `topclis.md`, verify/install, capture full help output into `<name>_help.md`, and write 100 example commands into `<name>_example.md`. The deeper goal is to identify the design patterns (flags, subcommands, output conventions) that LLMs know most deeply — to inform building a new CLI that "just makes sense" to LLMs without introducing unfamiliar concepts.

---

## Current State

### Already installed (8/10)

| CLI                                                                                                                      | Path                    | Status             |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------------ |
| [git](md-viewer.html?file=data/git_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `/usr/bin/git`          | already downloaded |
| [bash](md-viewer.html?file=data/bash_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `/bin/bash`             | already downloaded |
| [curl](md-viewer.html?file=data/curl_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `/usr/bin/curl`         | already downloaded |
| [npm](md-viewer.html?file=data/npm_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `/opt/homebrew/bin/npm` | already downloaded |
| [docker](md-viewer.html?file=data/docker_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan) | `/usr/local/bin/docker` | already downloaded |
| [grep](md-viewer.html?file=data/grep_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `/usr/bin/grep`         | already downloaded |
| [ssh](md-viewer.html?file=data/ssh_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `/usr/bin/ssh`          | already downloaded |
| [make](md-viewer.html?file=data/make_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `/usr/bin/make`         | already downloaded |

### Need to install (2/10)

| CLI                                                                                                                  | Notes                                                      | Status                       |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------- |
| [pip](md-viewer.html?file=data/pip_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)   | Available as `pip3` at `/usr/bin/pip3` — no install needed | already downloaded (as pip3) |
| [wget](md-viewer.html?file=data/wget_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan) | Not installed — will install via `brew install wget`       | needed to download           |

---

## Per-CLI Checklist

For each CLI, the following steps will be executed:

- [ ] already downloaded / [ ] needed to download
- [ ] downloaded (if needed)
- [ ] reviewed the FULL "help" from the CLI
- [ ] created `<name>_help.md` with a dump of the help output
- [ ] created `<name>_example.md` with 100 example commands

---

## Help Commands

| CLI                                                                                                                      | Help Command                                 |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| [git](md-viewer.html?file=data/git_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `git --help` + `git help -a` for subcommands |
| [bash](md-viewer.html?file=data/bash_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `bash --help` + bash builtin `help` command  |
| [curl](md-viewer.html?file=data/curl_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `curl --help all`                            |
| [npm](md-viewer.html?file=data/npm_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `npm help` + `npm help npm`                  |
| [docker](md-viewer.html?file=data/docker_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan) | `docker --help` + top subcommand help pages  |
| [pip](md-viewer.html?file=data/pip_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `pip3 --help`                                |
| [grep](md-viewer.html?file=data/grep_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `grep --help`                                |
| [ssh](md-viewer.html?file=data/ssh_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `ssh` (stderr capture)                       |
| [wget](md-viewer.html?file=data/wget_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `wget --help`                                |
| [make](md-viewer.html?file=data/make_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `make --help`                                |

---

## Output Files

All files written to the project's `data/` directory (e.g. `$HOME/code/site_webcli/data/`):

| CLI                                                                                                                      | Help file        | Examples file       |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------- | ------------------- |
| [git](md-viewer.html?file=data/git_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `git_help.md`    | `git_example.md`    |
| [bash](md-viewer.html?file=data/bash_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `bash_help.md`   | `bash_example.md`   |
| [curl](md-viewer.html?file=data/curl_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `curl_help.md`   | `curl_example.md`   |
| [npm](md-viewer.html?file=data/npm_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `npm_help.md`    | `npm_example.md`    |
| [docker](md-viewer.html?file=data/docker_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan) | `docker_help.md` | `docker_example.md` |
| [pip](md-viewer.html?file=data/pip_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `pip_help.md`    | `pip_example.md`    |
| [grep](md-viewer.html?file=data/grep_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `grep_help.md`   | `grep_example.md`   |
| [ssh](md-viewer.html?file=data/ssh_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)       | `ssh_help.md`    | `ssh_example.md`    |
| [wget](md-viewer.html?file=data/wget_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `wget_help.md`   | `wget_example.md`   |
| [make](md-viewer.html?file=data/make_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=implementation_plan)     | `make_help.md`   | `make_example.md`   |

Final synthesis: `cli_design_patterns.md`

---

## Notes

- `bash` is a shell runtime, not a standalone command; will capture `bash --help` and the full built-in `help` output covering all shell builtins.
- `ssh` prints help to stderr; captured via `ssh 2>&1 || true`.
- `docker` help is extensive; `docker --help` plus a representative set of subcommand help pages will be captured.
- All example files include 100 numbered, commented commands covering basic to advanced usage patterns.

---

## Deeper Goal: LLM-Fluent CLI Design

The output of this exercise feeds a design decision: **what patterns should a new CLI adopt so that LLMs already "know" how it works?**

Key things to extract from the help files and examples:

- **Universal flag conventions** that appear across all 10 tools (highest LLM confidence):
  - `-h` / `--help`, `--version`, `-v` / `--verbose`, `-q` / `--quiet`
  - `-o` / `--output`, `-f` / `--force`, `-n` / `--dry-run`
- **Subcommand structure**: `<tool> <verb> <noun>` (git/docker/npm style) vs. flat flags (curl/grep style)
- **Output conventions**: errors to stderr, data to stdout, exit code 0 = success
- **JSON output**: `--format json` / `--output json` pattern (docker, npm, curl)
- **Help access**: `<tool> <subcommand> --help` vs. `<tool> help <subcommand>`

A final synthesis (`cli_design_patterns.md`) will summarize which patterns are most LLM-saturated and should be adopted in the new CLI.

---

## Execution Order

1. Save this plan (`implementation_plan.md`) ← you are here
2. Install wget (`brew install wget`)
3. For each CLI (git, bash, curl, npm, docker, pip, grep, ssh, wget, make):
   a. Capture full help output
   b. Write `<name>_help.md`
   c. Write `<name>_example.md` (100 commands)
4. Write `cli_design_patterns.md` synthesis

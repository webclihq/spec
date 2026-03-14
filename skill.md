---
name: webcli
description: Build LLM-fluent CLIs using the WebCLI Spec. Use when designing a CLI, choosing flag names, structuring subcommands, writing help output, or making a CLI that AI agents can use without needing documentation in context.
license: MIT
compatibility: Language-agnostic and framework-agnostic. No runtime dependencies.
metadata:
  author: webcli
  version: "0.1"
---

## Context

WebCLI is an open specification for designing CLIs that LLMs already understand. The core insight: LLMs were trained on millions of examples of git, curl, docker, npm, pip, grep, ssh, wget, make, and bash. Any new CLI that matches those patterns is immediately usable by an LLM without documentation or fine-tuning.

The specification was derived by capturing the full help output and 100 example commands from the 10 most LLM-trained CLIs, synthesizing the common patterns, and ranking them by LLM confidence.

Use this skill when you need to:

- Design a new CLI from scratch
- Choose flag names, short flags, or subcommand verbs
- Structure help output
- Decide between subcommand styles
- Make a CLI that agents can use reliably

---

## Subcommand Structure — Which Pattern to Choose

| Your CLI type                                     | Pattern to use            | Example                      |
| ------------------------------------------------- | ------------------------- | ---------------------------- |
| Manages multiple resources (users, jobs, configs) | `<tool> <verb> <noun>`    | `mytool project create`      |
| Single-purpose utility (search, fetch, convert)   | `<tool> [flags] <target>` | `mytool -o out.json ./input` |

**Pattern A — `<tool> <verb> <noun>`** (git, docker, npm, pip style)

- Use for multi-resource CLIs. This is the dominant pattern in modern CLIs (gh, aws, kubectl, terraform).
- Verbs come before nouns: `mytool job run`, not `mytool run-job`

**Pattern B — `<tool> [flags] <target>`** (curl, grep, ssh, wget style)

- Use for single-purpose utilities. No subcommands — options modify behavior, positional args are targets.

**Decision rule:** If your CLI has more than 2-3 distinct resource types or action types, use Pattern A.

---

## Universal Flags — Always Implement These

Every LLM-fluent CLI must implement these six flags. LLMs will attempt to use them first.

| Short | Long        | Behavior                          |
| ----- | ----------- | --------------------------------- |
| `-h`  | `--help`    | Show help and exit 0              |
|       | `--version` | Show version string and exit 0    |
| `-v`  | `--verbose` | Increase output detail            |
| `-q`  | `--quiet`   | Suppress all non-error output     |
| `-o`  | `--output`  | Write output to a file            |
| `-n`  | `--dry-run` | Preview actions without executing |

Additional high-confidence flags (implement as needed):

| Short | Long              | Behavior                                   |
| ----- | ----------------- | ------------------------------------------ |
| `-f`  | `--force`         | Skip confirmation prompts                  |
| `-r`  | `--recursive`     | Apply to directories recursively           |
| `-s`  | `--silent`        | Alias for `--quiet` (curl/wget convention) |
| `-d`  | `--debug`         | Enable debug-level output                  |
|       | `--no-color`      | Disable ANSI color output                  |
|       | `--config <file>` | Specify config file path                   |

**Also support:** `<tool> <subcommand> --help` AND `<tool> --help`. Both patterns appear in training data.

---

## Output Conventions

| Rule                         | Details                                                       |
| ---------------------------- | ------------------------------------------------------------- |
| Errors → stderr              | Always. Allows clean piping of stdout.                        |
| Data/output → stdout         | Always. Enables piping to jq, grep, xargs.                    |
| Exit code 0 = success        | POSIX standard. Used by all 10 reference CLIs.                |
| Exit code non-zero = failure | Enables `&&` / `\|\|` chaining in scripts.                    |
| Warnings → stderr, exit 0    | Warnings are not failures. Never exit non-zero on a warning.  |
| Color → TTY only             | Never emit ANSI codes when stdout is piped. Check `isatty()`. |
| Progress → stderr            | Progress bars and spinners go to stderr, not stdout.          |

---

## JSON Output

Support `--output json` (preferred) or `--format json` for all data-returning subcommands.

```bash
mytool project list --output json | jq '.[] | .name'
```

LLMs will attempt to pipe your output to `jq`. If your JSON is not valid, the pipe will fail and the agent will retry with frustration. Emit clean, valid JSON with no trailing text or progress mixed in.

**Emerging standard:** `--output json` is preferred over `--format json` (docker, npm, pip convergence).

---

## Verb Vocabulary — Use These, Do Not Invent New Ones

LLMs will predict these correctly. Ranked by training data saturation:

| Rank | Verb            | Avoid these synonyms                                  |
| ---- | --------------- | ----------------------------------------------------- |
| 1    | `install`       | `add`, `setup`, `get` (ambiguous)                     |
| 2    | `run`           | `execute`, `invoke`, `launch`                         |
| 3    | `build`         | `compile`, `assemble`, `make` (conflicts with `make`) |
| 4    | `push`          | `upload`, `publish` (context-specific)                |
| 5    | `pull`          | `download`, `fetch` (context-specific)                |
| 6    | `list` / `ls`   | `enumerate`, `show-all`                               |
| 7    | `show`          | `display`, `print`, `dump`                            |
| 8    | `create`        | `new`, `add`, `make`                                  |
| 9    | `delete` / `rm` | `remove`, `erase`, `destroy`                          |
| 10   | `update`        | `upgrade`, `refresh`, `sync`                          |
| 11   | `start`         | `begin`, `launch`, `open`                             |
| 12   | `stop`          | `halt`, `kill`, `terminate`                           |
| 13   | `logs`          | `log`, `output`, `history`                            |
| 14   | `init`          | `initialize`, `setup`, `bootstrap`                    |
| 15   | `config`        | `configure`, `settings`, `options`                    |
| 16   | `login`         | `auth`, `authenticate`, `signin`                      |
| 17   | `logout`        | `deauth`, `signout`                                   |
| 18   | `version`       | `ver`, `info` (for a `version` subcommand)            |
| 19   | `help`          | (keep as alias for `--help`)                          |
| 20   | `status`        | `health`, `check`, `ping`                             |

---

## Flag Naming Conventions

- Long flags: `--kebab-case` (never `--snake_case` or `--camelCase`)
- Short flags: single lowercase letter; `-v`, `-q`, `-o`, `-f`, `-h` are reserved meanings
- Value syntax: support both `--flag=value` AND `--flag value` (curl uses both)
- Boolean negation: `--no-<flag>` pattern (curl, wget, docker, npm all use this)
- Flag order: options before positional arguments

---

## Configuration Layering

Implement all three layers, in this priority order (highest to lowest):

1. **CLI flags** — `--config`, `--verbose`, etc.
2. **Environment variables** — `MYTOOL_<FLAG>` (e.g. `MYTOOL_TOKEN`, `MYTOOL_VERBOSE=1`)
3. **Config file** — `~/.config/mytool/config` or `~/.mytoolrc`

LLMs will expect `MYTOOL_<FLAG>` environment variables to exist. Name them consistently.

---

## Help Output Format

The most LLM-recognized help format (git/docker/npm style):

```
Usage: mytool [OPTIONS] COMMAND [ARGS]...

One-line description of what the tool does.

Options:
  -v, --verbose    Enable verbose output
  -q, --quiet      Suppress non-error output
      --version    Show version and exit
  -h, --help       Show this message and exit

Commands:
  create    Create a new resource
  list      List resources
  delete    Delete a resource
  run       Execute a job or task

Run 'mytool COMMAND --help' for more information on a command.
```

Key rules:

- Options section before Commands section
- Two-space indent for option/command lines
- Aligned descriptions (space-padded)
- Always end with the `Run 'mytool COMMAND --help'` footer

---

## Gotchas

- **Do not invent short flags** with non-standard meanings. `-p` means "port" in ssh/docker context, `-t` means "tag" in docker context. LLMs will assume these meanings.
- **Do not mix subcommands and positional args** at the same level. `mytool run job1` is fine. `mytool job1 run` is confusing.
- **Do not exit non-zero on warnings.** Exit codes 1–127 mean failure. Warnings go to stderr and exit 0.
- **Do not emit color when not a TTY.** LLMs piping output to files or other tools will get ANSI escape codes in the output if you don't check `isatty()`.
- **Do not use `stderr` for progress and then also for errors.** If you mix them, scripts can't distinguish.
- **Do not use `--output` for both file path and format.** Use `--output-file` / `-o` for file and `--format` for format if you need both.

---

## Agent Boundaries

**An agent CAN:**

- Scaffold a complete CLI following this spec, in any language
- Choose appropriate flags, verbs, and help text
- Write tests that verify exit codes, stdout/stderr separation, and JSON output
- Generate subcommand structure from a list of resource types
- Review an existing CLI and identify where it diverges from the spec

**A human must:**

- Choose the programming language and CLI framework (Click, Cobra, Clap, argparse, etc.)
- Decide the domain-specific resource types and business logic
- Publish and distribute the CLI binary
- Decide whether to implement optional features like shell completion, man pages, or config file formats

---

## Quick Reference

```bash
# Typical LLM-fluent CLI invocation patterns an agent will attempt:
mytool --help
mytool --version
mytool create --help
mytool list --output json | jq '.[] | .name'
mytool run --dry-run --verbose
mytool delete resource-name --force
MYTOOL_TOKEN=abc123 mytool push
mytool --quiet build 2>/dev/null
```

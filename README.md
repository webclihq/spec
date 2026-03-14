# WebCLI Spec

**Open Specification · Draft v0.1**

A specification for building CLIs that LLMs already understand. LLMs have seen the flag conventions, subcommand structures, and output formats of tools like `git`, `curl`, and `docker` billions of times. Build your CLI to match those well-known patterns so LLMs can invoke it correctly from just a name and a task description.

**Live site:** [webcli.com](https://webcli.com)

---

|                |                                                              |
| -------------- | ------------------------------------------------------------ |
| **Version**    | 0.1-draft                                                    |
| **Published**  | March 13, 2026                                               |
| **Author**     | [@chandler212](https://github.com/chandler212)               |
| **Repository** | [github.com/webclihq/spec](https://github.com/webclihq/spec) |
| **License**    | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)    |
| **Status**     | Draft — open for community input                             |

---

## What is WebCLI?

When a developer asks an LLM to write a shell script using `git`, `curl`, or `docker`, the model gets it right: flags, subcommands, output format and all. It doesn't need documentation in the prompt. It already knows.

That's not magic. It's saturation. These tools have appeared billions of times in pre-2024 training data: in READMEs, Stack Overflow answers, blog posts, CI configs, and shell scripts. The patterns are _baked in_.

**WebCLI is a specification** for building new CLIs that match those saturated patterns closely enough that LLMs already "know" how your tool works from day one, without any training, documentation injection, or special prompting.

> **Scope** — WebCLI covers command-line interface _design_: help text format, flag conventions, subcommand structure, exit codes, and output contracts. It does not prescribe implementation language or framework.

## Spec

The full specification lives at [webcli.com](https://webcli.com). It covers:

- §1 Universal Flags
- §2 Subcommand Structure
- §3 Help Access Patterns
- §4 Output Conventions
- §5 JSON Output
- §6 Verb Vocabulary
- §7 Flag Naming Conventions
- §8 Positional Argument Conventions
- §9 Configuration Layering
- §10 Piping & Composability
- §11 Summary: Recommended Conventions

## Repository structure

```
index.html          # The WebCLI spec (main document)
pages/              # Article pages (CLI reviews, rankings, top-10 list)
_partials/          # Shared HTML partials (sidebar, mobile header)
assets/
  css/style.css     # Single stylesheet
  js/site.js        # Theme toggle + sidebar
data/               # Evidence files: help output and 100 examples for each of the 10 canonical CLIs
build.js            # Partial-stamping build script (no npm deps)
llms.txt            # llms.txt for AI agents
```

## Building

No npm install required. The build script stamps shared partials in-place:

```bash
node build.js
```

## Contributing

Issues, corrections, and RFCs are welcome. Open an issue with the `[RFC]` prefix to propose a spec change.

## License

[Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE)

---

_Version 0.1-draft · March 2026 · Authored by [@chandler212](https://github.com/chandler212)_

# WebCLI Spec

**A specification for building CLIs that LLMs already understand.**

Live site: [webcli.com](https://webcli.com)

## What is WebCLI?

When a developer asks an LLM to write a shell script using `git`, `curl`, or `docker`, the model gets it right without any documentation in the prompt. That's because these tools are saturated in LLM pre-training data — billions of examples in READMEs, Stack Overflow answers, CI configs, and shell scripts.

WebCLI is a specification for building new CLIs that match those saturated patterns closely enough that LLMs already "know" how your tool works from day one — no fine-tuning, no prompt engineering, no docs in context.

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

# Top 10 CLIs in LLM Training Data (Pre-2024)

Stack-ranked by estimated presence in LLM training corpora before 2024.
Ranking is based on four proxies: Stack Overflow question volume, GitHub
corpus presence (READMEs, CI configs, shell scripts), developer survey
adoption rates, and general web footprint (tutorials, man pages, blog posts).

---

## 1. git

**~152K Stack Overflow questions. 95%+ developer adoption.**

Git is present in virtually every software project on the internet. Every
GitHub and GitLab repository README references it. Every CI/CD config
invokes it. The Stack Overflow 2023 survey found over 95% of 90,000+
respondents used git, with 75% using it exclusively for version control.
GitHub reported 100 million new repositories created in 2022 alone. No
other CLI tool is embedded this deeply across the breadth of the web corpus.

[Help](md-viewer.html?file=data/git_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/git_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 2. bash

**~156K Stack Overflow questions. Default shell on Linux; macOS default until 2019.**

bash (and its predecessor `sh`) is not just a command; it is the runtime
for the entire command-line world. Every Linux server tutorial, every
deployment script, every cron job example, every "getting started" guide
on the web is written in or references bash. Unix man pages, POSIX
documentation, and decades of scripting guides all accumulate into an
enormous pre-2024 corpus footprint. The Warp 2023 State of the CLI survey
found bash as the second most-used shell at 17% (behind zsh's 69%, itself
bash-compatible), and it remains the default on most Linux server images.

[Help](md-viewer.html?file=data/bash_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/bash_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 3. curl

**~44K Stack Overflow questions. Present in nearly every HTTP/API tutorial ever written.**

curl punches far above its SO question count. It appears in virtually every
REST API documentation page ("try it yourself" examples), every package
installation script (`curl -fsSL ... | bash`), every webhook tutorial, and
every authentication guide. The entire developer-facing API economy of the
2010s and early 2020s ran on curl examples. Its man page is one of the largest
single-tool references in existence. Despite a lower SO count
than some tools below it, its surface area across tutorials, READMEs, and
official documentation is second to none among network tools.

[Help](md-viewer.html?file=data/curl_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/curl_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 4. npm

**~140K Stack Overflow questions. Dominant package manager for the largest language ecosystem.**

JavaScript and TypeScript are the most widely used programming languages
(Stack Overflow surveys, 2015–2023). npm ships with Node.js and is the
entry point for the entire JS ecosystem. Every React, Angular, Vue, and
Node tutorial begins with `npm install`. The npm registry hosts over 2.5
million packages. This volume of tutorials, quickstarts, and documentation
pages makes npm one of the most-referenced CLIs in the pre-2024 web corpus.

[Help](md-viewer.html?file=data/npm_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/npm_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 5. docker

**~155K Stack Overflow questions. #1 "other tool" in Stack Overflow 2023 survey (53% adoption).**

Docker went from niche DevOps tooling to mainstream developer infrastructure
between 2015 and 2023. Its documentation, tutorials, and "getting started"
guides are extensive. Docker Hub, the default image registry, generated an
enormous secondary corpus of Dockerfile examples and `docker run` command
references. The Stack Overflow 2023 survey placed Docker as the single most
adopted non-language tool, ahead of npm and pip for professional developers.

[Help](md-viewer.html?file=data/docker_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/docker_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 6. pip

**~24K Stack Overflow questions. Ships with Python, the #1–3 language for a decade.**

pip's Stack Overflow count understates its corpus presence because Python
questions frequently embed pip commands inline (e.g., `pip install requests`
in code blocks) without tagging pip explicitly. Python has ranked as the
most wanted or most popular language in Stack Overflow surveys for multiple
consecutive years. Nearly every Python tutorial, data science notebook,
machine learning guide, and scientific computing README on the web begins
with a pip install command. Its training-data footprint is disproportionate
to its standalone tag count.

[Help](md-viewer.html?file=data/pip_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/pip_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 7. grep

**POSIX utility. In service since 1974. Saturates Unix tutorials, man pages, and scripting guides.**

grep does not have a dominant SO question count as a standalone tool because
its usage is woven into tens of thousands of bash, awk, and shell-scripting
answers. It appears in man pages, Unix textbooks, every "how to search files"
tutorial, and nearly every shell one-liner ever published. The accumulated
web presence of grep across 50 years of Unix documentation and the entire
Stack Overflow bash tag makes its total corpus presence very large even
without a dedicated tag signature.

[Help](md-viewer.html?file=data/grep_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/grep_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 8. ssh

**~50K Stack Overflow questions. Every server setup and deployment guide references it.**

ssh is the lingua franca of remote server access. Every VPS tutorial ("how
to set up a DigitalOcean droplet"), every GitHub SSH key guide, every
deployment walkthrough, every DevOps onboarding document, and every
"connecting to AWS EC2" article references ssh. Its usage spans development,
sysadmin, and security documentation, giving it broad cross-domain corpus
coverage that a single SO question count does not fully capture.

[Help](md-viewer.html?file=data/ssh_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/ssh_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 9. wget

**Smaller SO count than curl. In service since 1996. Ubiquitous in Linux setup scripts.**

wget predates curl on Linux systems and remains the default download utility
on many Linux distributions. Decades of "install X on Ubuntu/Debian" guides
use `wget` to fetch packages, tarballs, and install scripts. While curl has
overtaken it in API tutorial contexts, wget's long history means it appears
across a wider historical slice of the pre-2024 corpus, particularly in
older Linux guides, academic software installation instructions, and
open-source project setup documentation.

[Help](md-viewer.html?file=data/wget_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/wget_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## 10. make

**Build system since 1976. Present in nearly every "build from source" guide.**

make is the original build automation tool and is included by default on
virtually every Unix-like system. Open-source C and C++ projects, Linux
kernel documentation, and every "build from source" README instruct users
to run `make` or `make install`. Its presence in academic software, systems
programming documentation, and decades of open-source project guides gives
it sustained corpus weight. The Warp 2023 survey found make appearing
consistently in shell history analysis as one of the most-invoked commands
by experienced developers.

[Help](md-viewer.html?file=data/make_help.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md) · [Examples](md-viewer.html?file=data/make_example.md&utm_source=webcli&utm_medium=internal&utm_campaign=topclis_md)

---

## What was considered but ranked outside the top 10

| Tool              | Reason not in top 10                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `sed` / `awk`     | Extremely common but primarily appear as command syntax within bash/grep answers rather than as standalone documented tools          |
| `terraform`       | High documentation volume but too specialized (DevOps/infra) to dominate a general pre-2024 web corpus                               |
| `kubectl`         | Fast-growing pre-2024 but specialized; smaller overall corpus footprint than the top 10                                              |
| `ansible`         | Strong documentation but narrower audience than the top 10                                                                           |
| `vim` / `nano`    | Editors invoked from CLI; their documentation corpus is large, but they are categorized as editors more than CLI tools               |
| `yarn`            | Overlaps significantly with npm; npm documentation dwarfs it                                                                         |
| `brew` (Homebrew) | Warp 2023 named it third most-used CLI tool among its community, but its documentation is macOS-specific, narrowing its corpus share |

---

## Sources

- [Warp State of the CLI 2023](https://www.warp.dev/state-of-the-cli-2023?utm_source=webcli&utm_medium=referral&utm_campaign=top_clis_sources) survey (1,500+ developers)
- [Stack Overflow Developer Survey 2022](https://survey.stackoverflow.co/2022/?utm_source=webcli&utm_medium=referral&utm_campaign=top_clis_sources) and [2023](https://survey.stackoverflow.co/2023/?utm_source=webcli&utm_medium=referral&utm_campaign=top_clis_sources) (~90,000 respondents each)
- [Stack Overflow tag question counts](https://stackoverflow.com/tags?utm_source=webcli&utm_medium=referral&utm_campaign=top_clis_sources) (git ~152K, bash ~156K, docker ~155K, npm ~140K, curl ~44K, ssh ~50K, pip ~24K)
- [GitHub Octoverse 2023](https://github.blog/2023-11-08-the-state-of-open-source-and-ai/?utm_source=webcli&utm_medium=referral&utm_campaign=top_clis_sources) (100M+ new repositories in 2022; 420M+ total by Nov 2023)
- [JetBrains State of Developer Ecosystem 2023](https://www.jetbrains.com/lp/devecosystem-2023/?utm_source=webcli&utm_medium=referral&utm_campaign=top_clis_sources)
- [Git Statistics / gitnux.org market data report](https://gitnux.org/git-statistics/?utm_source=webcli&utm_medium=referral&utm_campaign=top_clis_sources)

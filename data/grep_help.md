# grep help

_CLI commands reviewed: March 13, 2026_

## `grep --help`

```
usage: grep [-abcdDEFGHhIiJLlMmnOopqRSsUVvwXxZz] [-A num] [-B num] [-C[num]]
	[-e pattern] [-f file] [--binary-files=value] [--color=when]
	[--context[=num]] [--directories=action] [--label] [--line-buffered]
	[--null] [pattern] [file ...]
```

### Key flags reference

| Flag                | Long form               | Description                                  |
| ------------------- | ----------------------- | -------------------------------------------- |
| `-E`                | `--extended-regexp`     | Use extended regular expressions (ERE)       |
| `-F`                | `--fixed-strings`       | Treat pattern as literal string, not regex   |
| `-G`                | `--basic-regexp`        | Use basic regular expressions (BRE, default) |
| `-P`                | `--perl-regexp`         | Use Perl-compatible regular expressions      |
| `-i`                | `--ignore-case`         | Case-insensitive matching                    |
| `-v`                | `--invert-match`        | Print lines NOT matching pattern             |
| `-w`                | `--word-regexp`         | Match whole words only                       |
| `-x`                | `--line-regexp`         | Match whole lines only                       |
| `-c`                | `--count`               | Print count of matching lines per file       |
| `-l`                | `--files-with-matches`  | Print only names of files with matches       |
| `-L`                | `--files-without-match` | Print only names of files without matches    |
| `-n`                | `--line-number`         | Print line numbers with output               |
| `-H`                | `--with-filename`       | Print filename with each match               |
| `-h`                | `--no-filename`         | Suppress filename prefix                     |
| `-o`                | `--only-matching`       | Print only the matched part of the line      |
| `-q`                | `--quiet`               | Suppress output; exit status only            |
| `-s`                | `--no-messages`         | Suppress error messages                      |
| `-r`                | `--recursive`           | Recursively search directories               |
| `-R`                |                         | Recursively search, following symlinks       |
| `-A num`            | `--after-context=num`   | Print num lines after match                  |
| `-B num`            | `--before-context=num`  | Print num lines before match                 |
| `-C num`            | `--context=num`         | Print num lines before and after match       |
| `-e pattern`        | `--regexp=pattern`      | Specify pattern (allows multiple)            |
| `-f file`           | `--file=file`           | Read patterns from file                      |
| `-m num`            | `--max-count=num`       | Stop after num matches                       |
| `--color=when`      |                         | Highlight matches (always/never/auto)        |
| `--include=glob`    |                         | Search only files matching glob              |
| `--exclude=glob`    |                         | Skip files matching glob                     |
| `--exclude-dir=dir` |                         | Skip directories matching pattern            |

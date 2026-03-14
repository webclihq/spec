# grep example commands

## 100 grep Example Commands

```bash
# 1. Search for a pattern in a file
grep "error" logfile.txt

# 2. Search case-insensitively
grep -i "error" logfile.txt

# 3. Show line numbers with matches
grep -n "error" logfile.txt

# 4. Search in all files in a directory recursively
grep -r "TODO" ./src

# 5. Recursive search, follow symlinks
grep -R "TODO" ./src

# 6. Search and show only the filename of matching files
grep -l "TODO" ./src/*.js

# 7. Show files that do NOT match
grep -L "TODO" ./src/*.js

# 8. Count matching lines per file
grep -c "error" *.log

# 9. Show only the matched portion (not the full line)
grep -o "http[s]*://[^ ]*" access.log

# 10. Invert match — show non-matching lines
grep -v "DEBUG" app.log

# 11. Search for a whole word (not substring)
grep -w "error" logfile.txt

# 12. Match only if the whole line matches
grep -x "exact line content" file.txt

# 13. Use extended regular expressions
grep -E "error|warning|critical" logfile.txt

# 14. Use fixed string (literal, no regex)
grep -F "file.txt" output.log

# 15. Use Perl-compatible regex (macOS: requires ggrep or ripgrep)
grep -P "\d{3}-\d{4}" contacts.txt

# 16. Show 3 lines of context after match
grep -A 3 "Exception" stacktrace.log

# 17. Show 3 lines of context before match
grep -B 3 "Exception" stacktrace.log

# 18. Show 3 lines before and after match
grep -C 3 "Exception" stacktrace.log

# 19. Suppress error messages (e.g., permission denied)
grep -s "pattern" /var/log/*.log

# 20. Quiet mode — only use exit status
grep -q "error" logfile.txt && echo "Errors found"

# 21. Search multiple patterns using -e
grep -e "error" -e "warning" logfile.txt

# 22. Read patterns from a file
grep -f patterns.txt logfile.txt

# 23. Limit to maximum N matches
grep -m 5 "error" logfile.txt

# 24. Include only files matching a glob
grep -r --include="*.py" "import os" ./src

# 25. Exclude files matching a glob
grep -r --exclude="*.min.js" "console.log" ./src

# 26. Exclude a directory from recursive search
grep -r --exclude-dir=node_modules "TODO" .

# 27. Exclude multiple directories
grep -r --exclude-dir={node_modules,.git,dist} "TODO" .

# 28. Show filename with each result (default for multi-file)
grep -H "pattern" file1.txt file2.txt

# 29. Suppress filename prefix
grep -h "pattern" file1.txt file2.txt

# 30. Colorize matching text
grep --color=always "error" logfile.txt

# 31. Colorize and pipe to less
grep --color=always "error" logfile.txt | less -R

# 32. Search stdin from a pipe
cat logfile.txt | grep "error"

# 33. Search in gzipped file (via process substitution)
grep "error" <(zcat logfile.gz)

# 34. Search inside a tar without extracting
tar xzf archive.tar.gz -O | grep "pattern"

# 35. Search using null-separated output (for xargs -0)
grep -rl --null "TODO" . | xargs -0 sed -i 's/TODO/DONE/g'

# 36. Print only matching part with line number
grep -on "https\?://[^ ]*" urls.txt

# 37. Show binary file matches
grep -a "pattern" binary-file.bin

# 38. Treat all files as binary
grep -U "pattern" file.txt

# 39. Search in environment variables
env | grep PATH

# 40. Filter process list
ps aux | grep nginx

# 41. Filter process list and exclude the grep command itself
ps aux | grep "[n]ginx"

# 42. Find files containing a string
grep -rl "database_url" ./config

# 43. Count total matches across all files
grep -r "TODO" . | wc -l

# 44. Search for lines starting with a pattern
grep "^ERROR" logfile.txt

# 45. Search for lines ending with a pattern
grep "\.js$" file-list.txt

# 46. Search for blank lines
grep "^$" file.txt

# 47. Search for non-blank lines
grep -v "^$" file.txt

# 48. Search for IP address pattern
grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" logfile.txt

# 49. Search for email addresses
grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" file.txt

# 50. Find lines with only digits
grep "^[0-9]*$" file.txt

# 51. Find lines with at least one digit
grep "[0-9]" file.txt

# 52. Search for a UUID pattern
grep -E "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}" ids.txt

# 53. Search for lines containing a tab
grep $'\t' file.txt

# 54. Search for lines with a specific number of words
grep -E "^([^ ]+ ){4}[^ ]+$" file.txt

# 55. Recursive search printing filename and line number
grep -rn "config" ./src --include="*.yaml"

# 56. Find all functions defined in Python files
grep -rn "^def " ./src --include="*.py"

# 57. Find all class definitions
grep -rn "^class " ./src --include="*.py"

# 58. Find console.log statements in JS
grep -rn "console\.log" ./src --include="*.js"

# 59. Find all import statements
grep -rn "^import " ./src --include="*.ts"

# 60. Find hardcoded secrets (simple pattern)
grep -rn "password\s*=" ./src --include="*.py"

# 61. Find all HTTP references in docs
grep -rn "http://" ./docs --include="*.md"

# 62. Search for multiline patterns (using grep with pcregrep)
grep -Pzo "function\s+\w+[^}]*}" file.js

# 63. Find all TODO/FIXME/HACK comments
grep -rn "TODO\|FIXME\|HACK\|XXX" ./src

# 64. Count lines containing a pattern (sum across files)
grep -r "error" . --include="*.log" | wc -l

# 65. Show context with separator line between groups
grep -C 2 --group-separator="---" "error" logfile.txt

# 66. Print unique matching lines
grep "pattern" file.txt | sort | uniq

# 67. Print top matching lines by frequency
grep -o "error [A-Z]*" logfile.txt | sort | uniq -c | sort -rn | head

# 68. Find files over a certain size containing a pattern
find . -size +100k -name "*.log" | xargs grep "error"

# 69. Search only first N lines of a file
head -100 bigfile.txt | grep "pattern"

# 70. Search only last N lines of a file
tail -100 bigfile.txt | grep "pattern"

# 71. Live search of a growing log file
tail -f app.log | grep --line-buffered "ERROR"

# 72. Search git diff output for added lines matching pattern
git diff | grep "^+" | grep "TODO"

# 73. Find duplicate lines
grep -n "" file.txt | sort -t: -k2 | uniq -d -f1

# 74. Search for a literal dot
grep "\." file.txt

# 75. Search for a literal bracket
grep "\[" file.txt

# 76. Extract all quoted strings
grep -o '"[^"]*"' file.txt

# 77. Extract all single-quoted strings
grep -o "'[^']*'" file.txt

# 78. Show only file paths from recursive search
grep -rl "pattern" . | sort

# 79. Search in hidden files too
grep -r "secret" . --include=".*"

# 80. Restrict search to text files
grep -r --binary-files=without-match "pattern" .

# 81. Search for lines with exactly N characters
grep -E "^.{80}$" file.txt

# 82. Search for lines with more than 80 characters
grep -E "^.{81,}" file.txt

# 83. Search for lines with fewer than 5 characters
grep -E "^.{0,4}$" file.txt

# 84. Find all version numbers (semver-like)
grep -Eo "[0-9]+\.[0-9]+\.[0-9]+" package.json

# 85. Show nth match only (using head/tail)
grep -n "error" logfile.txt | head -5 | tail -1

# 86. Search for lines NOT containing any of several patterns
grep -v "debug\|info\|trace" app.log

# 87. List all unique matched values
grep -oh "\bword\b" text.txt | sort -u

# 88. Print surrounding N lines with custom label
grep -n --label=STDIN "pattern" - < file.txt

# 89. Strip leading whitespace from matching lines (using sed)
grep "pattern" file.txt | sed 's/^\s*//'

# 90. Search inside Docker container logs
docker logs my-container 2>&1 | grep "error"

# 91. Search only within column range (using cut)
cut -f2 data.tsv | grep "value"

# 92. Find all lines matching pattern and extract field
grep "status: " config.yaml | cut -d: -f2

# 93. Search using word boundary assertion
grep -w "test" file.txt

# 94. Search for camelCase identifiers
grep -E "\b[a-z]+[A-Z][a-zA-Z]*\b" source.js

# 95. Search for ANSI escape sequences
grep -P "\x1b\[" colored-output.txt

# 96. Find files without a shebang line
grep -rL "^#!" ./scripts

# 97. Search in JSON files for a key
grep -r '"api_key"' . --include="*.json"

# 98. Get lines between two patterns (inclusive)
grep -A 1000 "START" file.txt | grep -B 1000 "END"

# 99. Show grep version
grep --version

# 100. Show help
grep --help
```

# bash example commands

## 100 bash Example Commands

```bash
# 1. Run a script file
bash script.sh

# 2. Run a script with arguments
bash script.sh arg1 arg2

# 3. Run a command string directly
bash -c "echo hello world"

# 4. Run in login shell mode
bash --login

# 5. Run without reading ~/.bashrc
bash --norc

# 6. Run in POSIX mode
bash --posix

# 7. Run in restricted mode
bash --restricted

# 8. Run a script and print each command before executing
bash -x script.sh

# 9. Run a script and exit on first error
bash -e script.sh

# 10. Combine -e and -x for debug+fail-fast
bash -ex script.sh

# 11. Check script syntax without executing
bash -n script.sh

# 12. Print the bash version
bash --version

# 13. Set a variable
NAME="world"

# 14. Use a variable
echo "Hello, $NAME"

# 15. Export a variable to child processes
export DATABASE_URL="postgres://localhost/mydb"

# 16. Unset a variable
unset NAME

# 17. Assign default value if variable is unset
echo "${NAME:-default}"

# 18. Assign and export in one step
export PORT=8080

# 19. Read input from user
read -p "Enter your name: " USER_NAME

# 20. Read input silently (for passwords)
read -s -p "Password: " PASSWORD

# 21. Check if a variable is set
if [ -z "$NAME" ]; then echo "NAME is not set"; fi

# 22. Check if a variable is non-empty
if [ -n "$NAME" ]; then echo "NAME is set to $NAME"; fi

# 23. If-else statement
if [ "$STATUS" -eq 0 ]; then
  echo "Success"
else
  echo "Failure"
fi

# 24. Check if a file exists
if [ -f "/etc/hosts" ]; then echo "File exists"; fi

# 25. Check if a directory exists
if [ -d "/tmp" ]; then echo "Directory exists"; fi

# 26. Check if a command succeeds
if git status; then echo "In a git repo"; fi

# 27. For loop over a list
for item in a b c; do echo "$item"; done

# 28. For loop over a range
for i in {1..10}; do echo "$i"; done

# 29. C-style for loop
for (( i=0; i<5; i++ )); do echo "$i"; done

# 30. While loop
count=0
while [ $count -lt 5 ]; do echo $count; ((count++)); done

# 31. Until loop
until [ "$count" -ge 5 ]; do echo $count; ((count++)); done

# 32. Loop over files in a directory
for f in /tmp/*.log; do echo "$f"; done

# 33. Loop over lines in a file
while IFS= read -r line; do echo "$line"; done < file.txt

# 34. Function definition
greet() { echo "Hello, $1"; }

# 35. Call a function
greet "Alice"

# 36. Function with return value (via exit status)
is_even() { (( $1 % 2 == 0 )); }

# 37. Case statement
case "$1" in
  start) echo "Starting";;
  stop)  echo "Stopping";;
  *)     echo "Unknown command";;
esac

# 38. Pipe output to another command
ls -la | grep ".txt"

# 39. Redirect stdout to a file
echo "log entry" > output.log

# 40. Append stdout to a file
echo "another entry" >> output.log

# 41. Redirect stderr to a file
command 2> error.log

# 42. Redirect both stdout and stderr to a file
command > all.log 2>&1

# 43. Discard output
command > /dev/null

# 44. Discard all output including errors
command > /dev/null 2>&1

# 45. Command substitution
TODAY=$(date +%Y-%m-%d)

# 46. Arithmetic expansion
RESULT=$(( 3 + 4 * 2 ))

# 47. String length
STR="hello"
echo ${#STR}

# 48. Substring extraction
echo ${STR:1:3}

# 49. String replacement
echo ${STR/hello/world}

# 50. Convert to uppercase (bash 4+)
echo ${STR^^}

# 51. Convert to lowercase (bash 4+)
echo ${STR,,}

# 52. Array declaration
FRUITS=("apple" "banana" "cherry")

# 53. Access array element
echo "${FRUITS[1]}"

# 54. All array elements
echo "${FRUITS[@]}"

# 55. Array length
echo "${#FRUITS[@]}"

# 56. Append to array
FRUITS+=("date")

# 57. Associative array (bash 4+)
declare -A COLORS
COLORS["red"]="#ff0000"
COLORS["blue"]="#0000ff"

# 58. Access associative array
echo "${COLORS[red]}"

# 59. Check exit status of last command
echo $?

# 60. Run command only if previous succeeded
mkdir /tmp/test && cd /tmp/test

# 61. Run command only if previous failed
cd /nonexistent || echo "Directory not found"

# 62. Background a command
long_running_command &

# 63. Get PID of last background command
echo $!

# 64. Wait for all background jobs to finish
wait

# 65. List running jobs
jobs

# 66. Bring a background job to foreground
fg %1

# 67. Send a background job to background (if suspended)
bg %1

# 68. Trap signals for cleanup
trap "rm -f /tmp/lockfile; exit" INT TERM EXIT

# 69. Source a file into current shell
source ~/.bashrc

# 70. Dot-source (equivalent to source)
. ~/.profile

# 71. Alias definition
alias ll='ls -la'

# 72. Remove alias
unalias ll

# 73. Print all aliases
alias

# 74. Use printf for formatted output
printf "Name: %s, Age: %d\n" "Alice" 30

# 75. Heredoc
cat <<EOF
This is line 1
This is line 2
EOF

# 76. Herestring
grep "pattern" <<< "some string with pattern inside"

# 77. Process substitution
diff <(ls dir1) <(ls dir2)

# 78. Set strict mode (exit on error, unset variable, pipefail)
set -euo pipefail

# 79. Enable debug tracing
set -x

# 80. Disable debug tracing
set +x

# 81. Check if running as root
if [ "$EUID" -eq 0 ]; then echo "Running as root"; fi

# 82. Get the script's directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 83. Number of arguments passed to script
echo "Arguments: $#"

# 84. All arguments as separate words
echo "$@"

# 85. Shift arguments
shift 2

# 86. Use getopts for option parsing
while getopts "vf:" opt; do
  case $opt in
    v) VERBOSE=1;;
    f) FILE="$OPTARG";;
  esac
done

# 87. Select menu
select CHOICE in "Option A" "Option B" "Quit"; do
  case $CHOICE in
    "Quit") break;;
    *) echo "You chose: $CHOICE";;
  esac
done

# 88. Test arithmetic comparison
(( 5 > 3 )) && echo "5 is greater than 3"

# 89. Test string equality
[[ "$A" == "$B" ]] && echo "Equal"

# 90. Test regex match
[[ "hello123" =~ ^[a-z]+[0-9]+$ ]] && echo "Matched"

# 91. Print all environment variables
env

# 92. Print PATH
echo $PATH

# 93. Add directory to PATH
export PATH="$HOME/.local/bin:$PATH"

# 94. Find and run latest file
ls -t *.log | head -1 | xargs cat

# 95. Time a command
time ls -la

# 96. Confirm before destructive action
read -p "Are you sure? (y/n): " CONFIRM
[[ "$CONFIRM" == "y" ]] && rm -rf /tmp/test

# 97. Use pushd/popd for directory stack
pushd /tmp
popd

# 98. Create a temp file safely
TMPFILE=$(mktemp)
echo "data" > "$TMPFILE"
rm "$TMPFILE"

# 99. Check if a command exists
command -v docker > /dev/null 2>&1 && echo "docker is installed"

# 100. Run subshell without affecting current environment
( cd /tmp && ls )
```

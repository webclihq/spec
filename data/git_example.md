# git example commands

## 100 git Example Commands

```bash
# 1. Initialize a new repository
git init

# 2. Initialize a repository in a specific directory
git init my-project

# 3. Clone a repository
git clone https://github.com/user/repo.git

# 4. Clone into a specific directory
git clone https://github.com/user/repo.git my-folder

# 5. Clone a specific branch
git clone --branch develop https://github.com/user/repo.git

# 6. Clone with shallow history (last 1 commit)
git clone --depth 1 https://github.com/user/repo.git

# 7. Check the status of the working tree
git status

# 8. Show status in short format
git status -s

# 9. Add a specific file to the index
git add README.md

# 10. Add all changes in the current directory
git add .

# 11. Add changes interactively
git add -p

# 12. Commit staged changes with a message
git commit -m "Initial commit"

# 13. Commit all tracked changes without a separate git add
git commit -am "Fix typo in README"

# 14. Amend the last commit message
git commit --amend -m "Corrected commit message"

# 15. Show commit log
git log

# 16. Show log with one line per commit
git log --oneline

# 17. Show log as a graph
git log --oneline --graph --all

# 18. Show log for a specific file
git log -- path/to/file.txt

# 19. Show the last 5 commits
git log -5

# 20. Show diff of unstaged changes
git diff

# 21. Show diff of staged changes
git diff --staged

# 22. Show diff between two commits
git diff abc1234 def5678

# 23. Show diff between two branches
git diff main..feature-branch

# 24. List all branches
git branch

# 25. List all branches including remote-tracking
git branch -a

# 26. Create a new branch
git branch feature/login

# 27. Switch to an existing branch
git switch feature/login

# 28. Create and switch to a new branch
git switch -c feature/signup

# 29. Delete a merged branch
git branch -d feature/login

# 30. Force-delete a branch
git branch -D feature/login

# 31. Rename the current branch
git branch -m new-branch-name

# 32. Merge a branch into the current branch
git merge feature/login

# 33. Merge with a commit message (no fast-forward)
git merge --no-ff feature/login -m "Merge feature/login"

# 34. Abort an in-progress merge
git merge --abort

# 35. Rebase current branch onto main
git rebase main

# 36. Interactive rebase for last 3 commits
git rebase -i HEAD~3

# 37. Abort an in-progress rebase
git rebase --abort

# 38. Continue a rebase after resolving conflicts
git rebase --continue

# 39. Fetch changes from origin
git fetch origin

# 40. Fetch all remotes
git fetch --all

# 41. Pull changes (fetch + merge)
git pull

# 42. Pull and rebase instead of merge
git pull --rebase

# 43. Push current branch to origin
git push origin feature/login

# 44. Push and set upstream tracking
git push -u origin feature/login

# 45. Push all branches
git push --all origin

# 46. Push tags to remote
git push --tags

# 47. Delete a remote branch
git push origin --delete feature/login

# 48. Show remote URLs
git remote -v

# 49. Add a remote
git remote add origin https://github.com/user/repo.git

# 50. Change remote URL
git remote set-url origin https://github.com/user/new-repo.git

# 51. Remove a remote
git remote remove origin

# 52. Show the working tree status of tracked files
git ls-files

# 53. Stash current changes
git stash

# 54. Stash with a descriptive message
git stash push -m "WIP: login form"

# 55. List stashes
git stash list

# 56. Apply the most recent stash
git stash pop

# 57. Apply a specific stash
git stash apply stash@{2}

# 58. Drop a specific stash
git stash drop stash@{0}

# 59. Clear all stashes
git stash clear

# 60. Create a tag
git tag v1.0.0

# 61. Create an annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# 62. List all tags
git tag

# 63. Delete a local tag
git tag -d v1.0.0

# 64. Check out a tag
git checkout v1.0.0

# 65. Reset the index but keep working directory changes
git reset HEAD~1

# 66. Discard all changes and reset to a commit (destructive)
git reset --hard HEAD~1

# 67. Soft reset (keep changes staged)
git reset --soft HEAD~1

# 68. Restore a file to the last committed state
git restore path/to/file.txt

# 69. Restore a file from a specific commit
git restore --source=HEAD~2 path/to/file.txt

# 70. Revert a commit (creates a new reverting commit)
git revert abc1234

# 71. Cherry-pick a commit onto the current branch
git cherry-pick abc1234

# 72. Cherry-pick a range of commits
git cherry-pick abc1234..def5678

# 73. Show what revision and author last modified each line
git blame path/to/file.txt

# 74. Search all tracked files for a pattern
git grep "TODO"

# 75. Search with line numbers
git grep -n "TODO"

# 76. Clean untracked files (dry run first)
git clean -n

# 77. Clean untracked files
git clean -f

# 78. Clean untracked files and directories
git clean -fd

# 79. Show a specific commit
git show abc1234

# 80. Show the tree of a commit
git show abc1234 --stat

# 81. Show git configuration
git config --list

# 82. Set global user name
git config --global user.name "Jane Doe"

# 83. Set global user email
git config --global user.email "jane@example.com"

# 84. Set default branch name for new repos
git config --global init.defaultBranch main

# 85. View the reflog
git reflog

# 86. Recover a lost commit using reflog
git checkout HEAD@{3}

# 87. Move a file and stage the rename
git mv old-name.txt new-name.txt

# 88. Remove a file from the index and working tree
git rm file.txt

# 89. Remove a file from the index only (keep on disk)
git rm --cached file.txt

# 90. Show all objects in the repository
git fsck

# 91. Garbage collect loose objects
git gc

# 92. Show the short hash and subject of the most recent tag
git describe --tags

# 93. Shortlog to summarize commit activity
git shortlog -sn

# 94. Find the commit that introduced a bug (binary search)
git bisect start
git bisect bad
git bisect good v1.0.0

# 95. Show which branch contains a commit
git branch --contains abc1234

# 96. List files changed in a commit
git diff-tree --no-commit-id -r --name-only abc1234

# 97. Apply a patch file
git apply patch.diff

# 98. Format a patch for email submission
git format-patch HEAD~3

# 99. Set up sparse checkout to only include a subdirectory
git sparse-checkout set src/

# 100. Show the Git version
git --version
```

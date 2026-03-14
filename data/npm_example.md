# npm example commands

## 100 npm Example Commands

```bash
# 1. Show npm version
npm --version

# 2. Initialize a new package.json interactively
npm init

# 3. Initialize with defaults (skip prompts)
npm init -y

# 4. Install all dependencies from package.json
npm install

# 5. Install a specific package
npm install lodash

# 6. Install a package and save as dependency (default in npm 5+)
npm install express --save

# 7. Install a package as a dev dependency
npm install jest --save-dev

# 8. Install a package globally
npm install -g typescript

# 9. Install a specific version
npm install react@18.2.0

# 10. Install a version range
npm install "lodash@^4.17.0"

# 11. Install from a GitHub repo
npm install github:user/repo

# 12. Install from a local path
npm install ../my-local-package

# 13. Uninstall a package
npm uninstall lodash

# 14. Uninstall a global package
npm uninstall -g typescript

# 15. Update all packages to latest compatible versions
npm update

# 16. Update a specific package
npm update lodash

# 17. Check for outdated packages
npm outdated

# 18. List installed packages (top-level only)
npm list --depth=0

# 19. List installed packages globally
npm list -g --depth=0

# 20. Show info about a package
npm view express

# 21. Show a specific field from package info
npm view lodash version

# 22. Show all available versions of a package
npm view lodash versions

# 23. Search for packages on the registry
npm search "http client"

# 24. Run the test script
npm test

# 25. Run the start script
npm start

# 26. Run the build script
npm run build

# 27. Run a custom script defined in package.json
npm run lint

# 28. Run a script and pass extra arguments
npm test -- --watch

# 29. List all available scripts in package.json
npm run

# 30. Execute a package binary without installing globally (npx)
npx create-react-app my-app

# 31. Execute a specific version with npx
npx prettier@2.8.0 --write .

# 32. Run a package's binary directly
npm exec -- jest --coverage

# 33. Publish a package to the registry
npm publish

# 34. Publish with a specific tag
npm publish --tag beta

# 35. Bump patch version and create a git tag
npm version patch

# 36. Bump minor version
npm version minor

# 37. Bump major version
npm version major

# 38. Set a specific version
npm version 2.0.0

# 39. Log in to the npm registry
npm login

# 40. Log out
npm logout

# 41. Show the currently logged in user
npm whoami

# 42. Link a local package for development
npm link

# 43. Link a globally linked package into a project
npm link my-local-package

# 44. Unlink a package
npm unlink my-local-package

# 45. Deduplicate the dependency tree
npm dedupe

# 46. Run audit to find security vulnerabilities
npm audit

# 47. Auto-fix audit vulnerabilities
npm audit fix

# 48. Force fix (may update major versions)
npm audit fix --force

# 49. Clean install (removes node_modules and reinstalls)
npm ci

# 50. Generate a package-lock.json without installing
npm install --package-lock-only

# 51. Install without updating package-lock.json
npm install --no-package-lock

# 52. View the npm configuration
npm config list

# 53. Set a config value
npm config set registry https://registry.npmjs.org/

# 54. Set a private registry
npm config set registry https://registry.example.com/

# 55. Get a specific config value
npm config get prefix

# 56. Delete a config value
npm config delete proxy

# 57. Show the global prefix (where global packages are installed)
npm prefix -g

# 58. Show the root directory of node_modules
npm root

# 59. Show global node_modules root
npm root -g

# 60. Open the docs/homepage for a package
npm docs lodash

# 61. Open the issues page for a package
npm bugs express

# 62. Open the repository for a package
npm repo react

# 63. Show dependency explanation (why is a package installed)
npm explain lodash

# 64. Show the fund information for installed packages
npm fund

# 65. Prune packages not listed in package.json
npm prune

# 66. Pack the package into a tarball (dry run publish)
npm pack

# 67. Add a user as owner of a package
npm owner add collaborator my-package

# 68. Remove a user as owner
npm owner rm collaborator my-package

# 69. List owners of a package
npm owner ls my-package

# 70. Manage dist-tags
npm dist-tag add my-package@1.2.3 stable

# 71. List dist-tags for a package
npm dist-tag ls my-package

# 72. Remove a dist-tag
npm dist-tag rm my-package beta

# 73. Show detailed install output
npm install --verbose

# 74. Install with no output
npm install --silent

# 75. Install ignoring scripts
npm install --ignore-scripts

# 76. Install only production dependencies
npm install --omit=dev

# 77. Install only dev dependencies
npm install --only=dev

# 78. Freeze exact versions (no ^ or ~)
npm install --save-exact lodash

# 79. Check the integrity of node_modules vs package-lock
npm install --dry-run

# 80. Query package information using CSS-like selectors
npm query ":root > .dependencies"

# 81. Show SBOM (Software Bill of Materials) for project
npm sbom

# 82. Show the profile of the logged-in user
npm profile get

# 83. Set a profile field
npm profile set fullname "Alice Dev"

# 84. List access settings for a package
npm access list packages @myorg

# 85. Set public access on a scoped package
npm access public @myorg/my-package

# 86. Set restricted access
npm access restricted @myorg/my-package

# 87. Create or reinitialize a scope/org
npm org set myorg alice developer

# 88. Run a command in the context of a workspace
npm run build --workspace=packages/my-lib

# 89. Run a command in all workspaces
npm run test --workspaces

# 90. Install dependencies in all workspaces
npm install --workspaces

# 91. Publish all workspace packages
npm publish --workspaces

# 92. List workspace packages
npm list --workspaces

# 93. Add a token for CI authentication
npm token create

# 94. List auth tokens
npm token list

# 95. Revoke a token
npm token revoke TOKEN_UUID

# 96. Re-build native addons
npm rebuild

# 97. Re-build a specific package
npm rebuild bcrypt

# 98. Show help for a specific command
npm help install

# 99. Run the doctor to check environment
npm doctor

# 100. Show completion script for shell integration
npm completion
```

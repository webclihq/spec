# pip example commands

## 100 pip Example Commands

```bash
# 1. Show pip version
pip3 --version

# 2. Install a package
pip3 install requests

# 3. Install a specific version
pip3 install requests==2.31.0

# 4. Install a minimum version
pip3 install "requests>=2.28.0"

# 5. Install a version range
pip3 install "requests>=2.28.0,<3.0.0"

# 6. Install from a requirements file
pip3 install -r requirements.txt

# 7. Install in editable mode (for development)
pip3 install -e .

# 8. Install from a local directory
pip3 install ./my-package

# 9. Install from a git repository
pip3 install git+https://github.com/user/repo.git

# 10. Install from a git repo at a specific branch
pip3 install git+https://github.com/user/repo.git@develop

# 11. Install from a git repo at a specific tag
pip3 install git+https://github.com/user/repo.git@v1.2.0

# 12. Install from a zip file URL
pip3 install https://example.com/my-package.zip

# 13. Upgrade a package to the latest version
pip3 install --upgrade requests

# 14. Upgrade pip itself
pip3 install --upgrade pip

# 15. Uninstall a package
pip3 uninstall requests

# 16. Uninstall without prompting for confirmation
pip3 uninstall -y requests

# 17. Uninstall all packages in a requirements file
pip3 uninstall -r requirements.txt -y

# 18. List installed packages
pip3 list

# 19. List outdated packages
pip3 list --outdated

# 20. List packages in requirements format
pip3 freeze

# 21. Save installed packages to requirements.txt
pip3 freeze > requirements.txt

# 22. Show info about an installed package
pip3 show requests

# 23. Show verbose info (files, location)
pip3 show -f requests

# 24. Check if installed packages have compatible dependencies
pip3 check

# 25. Search PyPI for packages (deprecated in newer pip versions)
pip3 search "http client"

# 26. Download a package without installing
pip3 download requests

# 27. Download to a specific directory
pip3 download -d ./packages requests

# 28. Download for a specific platform
pip3 download --platform linux_x86_64 --python-version 3.11 requests

# 29. Install into a specific target directory
pip3 install --target ./vendor requests

# 30. Install into the user's local directory
pip3 install --user requests

# 31. Install with no dependencies
pip3 install --no-deps requests

# 32. Install and ignore installed packages (force reinstall)
pip3 install --force-reinstall requests

# 33. Install and ignore version conflicts
pip3 install --ignore-requires-python requests

# 34. Install from an alternate index
pip3 install --index-url https://pypi.example.com/simple/ my-package

# 35. Install with an extra index URL
pip3 install --extra-index-url https://private-pypi.example.com/simple/ my-package

# 36. Install without SSL verification (insecure)
pip3 install --trusted-host pypi.org --trusted-host files.pythonhosted.org requests

# 37. Install via a proxy
pip3 install --proxy http://proxy.example.com:8080 requests

# 38. Install offline from a local directory of wheels
pip3 install --no-index --find-links ./packages requests

# 39. Build a wheel from a package
pip3 wheel requests

# 40. Build a wheel into a directory
pip3 wheel -w ./dist requests

# 41. Build a wheel from the current directory
pip3 wheel .

# 42. Compute the hash of a package archive
pip3 hash dist/my-package-1.0.0.tar.gz

# 43. Compute hash with specific algorithm
pip3 hash --algorithm sha256 dist/my-package-1.0.0.tar.gz

# 44. View pip configuration
pip3 config list

# 45. Set a global config value
pip3 config set global.index-url https://pypi.org/simple/

# 46. Get a config value
pip3 config get global.index-url

# 47. Unset a config value
pip3 config unset global.proxy

# 48. Edit config file directly
pip3 config edit

# 49. Show the config file location
pip3 config debug

# 50. Show cache directory
pip3 cache dir

# 51. List cached wheels
pip3 cache list

# 52. Show info about a cached wheel
pip3 cache info

# 53. Remove a specific cached package
pip3 cache remove requests

# 54. Purge the entire cache
pip3 cache purge

# 55. Show available package versions from index
pip3 index versions requests

# 56. Show latest version of a package from index
pip3 index versions requests | head -1

# 57. Install with verbose output
pip3 install -v requests

# 58. Install quietly
pip3 install -q requests

# 59. Show help for the install command
pip3 help install

# 60. Show help for the list command
pip3 help list

# 61. Install a specific extras group
pip3 install "requests[security]"

# 62. Install multiple extras
pip3 install "my-package[extra1,extra2]"

# 63. Create a virtual environment (via venv, then use pip inside it)
python3 -m venv myenv && source myenv/bin/activate && pip3 install requests

# 64. Install in a virtual environment
python3 -m venv env && ./env/bin/pip install requests

# 65. Export requirements with hashes for reproducible installs
pip3 freeze | pip3 hash /dev/stdin

# 66. Install with hash checking
pip3 install --require-hashes -r requirements-locked.txt

# 67. Install development dependencies
pip3 install -r requirements-dev.txt

# 68. Check if a package is installed
pip3 show requests && echo "requests is installed"

# 69. Show the location of a package
pip3 show requests | grep Location

# 70. Show all files installed by a package
pip3 show -f requests | grep -A1000 "Files:"

# 71. Install with constraint file
pip3 install -c constraints.txt requests

# 72. Install multiple packages at once
pip3 install requests flask sqlalchemy

# 73. Install from stdin
echo "requests==2.31.0" | pip3 install -r /dev/stdin

# 74. Dry-run install (see what would happen)
pip3 install --dry-run requests

# 75. Install with no build isolation
pip3 install --no-build-isolation .

# 76. Install with a specific prefix
pip3 install --prefix /usr/local requests

# 77. Install from a private GitLab repo
pip3 install git+https://oauth2:TOKEN@gitlab.example.com/user/repo.git

# 78. Install pre-release versions
pip3 install --pre requests

# 79. Install with specific Python ABI tag
pip3 install --abi cp311 package-cp311.whl

# 80. Show package requires/dependencies
pip3 show requests | grep Requires

# 81. Show packages that require a given package
pip3 show requests | grep Required-by

# 82. Install from a .whl file
pip3 install ./dist/my_package-1.0.0-py3-none-any.whl

# 83. List packages in JSON format
pip3 list --format=json

# 84. List packages in columns format
pip3 list --format=columns

# 85. Show outdated packages as JSON
pip3 list --outdated --format=json

# 86. Install with retries
pip3 install --retries 5 requests

# 87. Install with timeout
pip3 install --timeout 30 requests

# 88. Enable new feature flag
pip3 install --use-feature=fast-deps requests

# 89. Install with log file
pip3 install --log install.log requests

# 90. Install isolated from environment
pip3 install --isolated requests

# 91. Show debug information for troubleshooting
pip3 debug

# 92. Show completion script for shell integration
pip3 completion --bash

# 93. Check pip integrity
pip3 check

# 94. Download only source distributions
pip3 download --no-binary :all: requests

# 95. Download only binary distributions
pip3 download --only-binary :all: requests

# 96. Install from PEP 517 build backend
pip3 install --use-pep517 .

# 97. Install namespace package
pip3 install "myorg.mypackage"

# 98. List top-level packages only (no dependencies shown separately)
pip3 list | grep -v "^-"

# 99. Reinstall all packages from requirements.txt
pip3 install --force-reinstall -r requirements.txt

# 100. Show pip version and exit
pip3 -V
```

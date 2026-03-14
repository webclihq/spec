# wget example commands

## 100 wget Example Commands

```bash
# 1. Download a file
wget https://example.com/file.tar.gz

# 2. Download and save with a specific filename
wget -O output.tar.gz https://example.com/file.tar.gz

# 3. Download to a specific directory
wget -P /tmp/downloads https://example.com/file.tar.gz

# 4. Download quietly (no output)
wget -q https://example.com/file.tar.gz

# 5. Download verbosely
wget -v https://example.com/file.tar.gz

# 6. Continue a partially downloaded file
wget -c https://example.com/large-file.iso

# 7. Download in the background
wget -b https://example.com/large-file.iso

# 8. Set the number of retries
wget --tries=5 https://example.com/file.tar.gz

# 9. Unlimited retries
wget --tries=0 https://example.com/file.tar.gz

# 10. Set timeout for all operations
wget -T 30 https://example.com/file.tar.gz

# 11. Set connect timeout
wget --connect-timeout=10 https://example.com/file.tar.gz

# 12. Set read timeout
wget --read-timeout=30 https://example.com/file.tar.gz

# 13. Wait N seconds between requests
wget --wait=2 https://example.com/file.txt

# 14. Random wait (0.5 to 1.5 times --wait value)
wget --wait=1 --random-wait https://example.com/file.txt

# 15. Limit download rate
wget --limit-rate=500k https://example.com/large-file.iso

# 16. Download multiple files listed in a text file
wget -i urls.txt

# 17. Download only if the file is newer than local copy
wget -N https://example.com/data.json

# 18. Download and check server response headers
wget -S https://example.com/

# 19. Download without hostname directories
wget -nH https://example.com/path/file.txt

# 20. Download and preserve timestamps
wget --no-use-server-timestamps https://example.com/file.txt

# 21. Download with a custom User-Agent
wget -U "MyBot/1.0" https://example.com/

# 22. Download with a referer
wget --referer="https://example.com" https://example.com/asset.jpg

# 23. Download with custom header
wget --header="Authorization: Bearer TOKEN" https://api.example.com/data

# 24. Download with multiple custom headers
wget --header="Accept: application/json" \
     --header="Authorization: Bearer TOKEN" \
     https://api.example.com/data

# 25. Download using HTTP basic authentication
wget --user=alice --password=secret https://api.example.com/protected

# 26. Download using HTTP auth from .netrc
wget --netrc https://api.example.com/private

# 27. Download using HTTP auth without initial challenge
wget --auth-no-challenge --user=alice --password=secret https://api.example.com/

# 28. Skip SSL certificate verification
wget --no-check-certificate https://self-signed.example.com/file.txt

# 29. Specify CA certificate for verification
wget --ca-certificate=/path/to/ca.pem https://internal.example.com/

# 30. Force HTTPS connections only
wget --https-only https://example.com/

# 31. Use a specific TLS version
wget --secure-protocol=TLSv1_2 https://example.com/

# 32. Download via an HTTP proxy
wget -e "http_proxy=http://proxy.example.com:8080" https://example.com/

# 33. Disable proxy
wget --no-proxy https://example.com/

# 34. Set proxy credentials
wget --proxy-user=proxyuser --proxy-password=proxypass \
     -e http_proxy=http://proxy.example.com:8080 \
     https://example.com/

# 35. Download and save cookies
wget --save-cookies cookies.txt \
     --keep-session-cookies \
     https://example.com/login?user=alice&pass=secret

# 36. Use saved cookies in a download
wget --load-cookies cookies.txt https://example.com/protected/

# 37. Disable cookies entirely
wget --no-cookies https://example.com/

# 38. POST data to a URL
wget --post-data="username=alice&password=secret" https://example.com/login

# 39. POST from a file
wget --post-file=payload.json \
     --header="Content-Type: application/json" \
     https://api.example.com/submit

# 40. Use a custom HTTP method
wget --method=PUT \
     --body-data='{"status":"active"}' \
     --header="Content-Type: application/json" \
     https://api.example.com/resource/1

# 41. Download and adjust HTML link extensions
wget -E https://example.com/page.php

# 42. Save output to a log file
wget -o download.log https://example.com/file.tar.gz

# 43. Append to an existing log file
wget -a download.log https://example.com/file.tar.gz

# 44. Print debug information
wget -d https://example.com/

# 45. Turn off verbose without being quiet
wget -nv https://example.com/file.tar.gz

# 46. Download file and send to stdout
wget -O - https://example.com/script.sh | bash

# 47. Silent install pattern (like curl -fsSL)
wget -qO- https://example.com/install.sh | bash

# 48. Download and extract tar in one step
wget -O - https://example.com/archive.tar.gz | tar xz

# 49. Mirror a website
wget -m https://example.com/

# 50. Mirror with conversion of links for offline browsing
wget -m -k https://example.com/

# 51. Mirror with page requisites (images, CSS, JS)
wget -m -p -k https://example.com/

# 52. Recursive download with depth limit
wget -r -l 2 https://example.com/

# 53. Recursive download staying on same domain
wget -r -H -D example.com https://example.com/

# 54. Recursive download with no parent directory ascent
wget -r -np https://example.com/docs/

# 55. Recursive download accepting only certain extensions
wget -r -A "*.pdf,*.doc" https://example.com/documents/

# 56. Recursive download rejecting certain extensions
wget -r -R "*.jpg,*.png,*.gif" https://example.com/

# 57. Recursive download with domain restriction
wget -r -D example.com,cdn.example.com https://example.com/

# 58. Recursive download excluding a directory
wget -r -X /private https://example.com/

# 59. Download only from allowed directories
wget -r -I /downloads,/releases https://example.com/

# 60. Follow only relative links
wget -r -L https://example.com/

# 61. Use regex to accept URLs
wget -r --accept-regex=".*release.*\.tar\.gz" https://example.com/

# 62. Use regex to reject URLs
wget -r --reject-regex=".*login.*" https://example.com/

# 63. Do not create directories from host/path
wget -nd -r -A "*.pdf" https://example.com/papers/

# 64. Force creation of directories
wget -x https://example.com/path/to/file.txt

# 65. No host directories
wget -nH --cut-dirs=1 https://example.com/pub/file.txt

# 66. Save to a flat directory (combine -nd)
wget -nd -r -l 1 https://example.com/images/

# 67. Download with progress bar shown in quiet mode
wget -q --show-progress https://example.com/large-file.iso

# 68. Download and set specific progress type
wget --progress=bar:force https://example.com/large-file.iso

# 69. Report speed in bits
wget --report-speed=bits https://example.com/large-file.iso

# 70. Set download quota
wget -Q 100m https://example.com/

# 71. Bind to a specific local address
wget --bind-address=192.168.1.10 https://example.com/

# 72. Force IPv4
wget -4 https://example.com/

# 73. Force IPv6
wget -6 https://example.com/

# 74. Disable DNS caching
wget --no-dns-cache https://example.com/

# 75. Set restrict-file-names for Windows compatibility
wget --restrict-file-names=windows https://example.com/file.txt

# 76. Download only if not already present (no-clobber)
wget -nc https://example.com/file.tar.gz

# 77. Save HTTP response headers to file
wget -S --save-headers https://example.com/

# 78. Check if a URL is reachable (spider mode)
wget --spider https://example.com/

# 79. Check links on a page (spider recursively)
wget --spider -r -nd https://example.com/

# 80. Execute a wgetrc-style command inline
wget -e "robots=off" https://example.com/

# 81. Use FTP with credentials
wget ftp://user:pass@ftp.example.com/file.txt

# 82. Passive FTP mode (default is passive)
wget --no-passive-ftp ftp://ftp.example.com/file.txt

# 83. FTP globbing
wget "ftp://ftp.example.com/pub/data-*.tar.gz"

# 84. FTPS (implicit)
wget --ftps-implicit ftps://ftp.example.com/file.txt

# 85. Preserve remote file permissions during FTP download
wget --preserve-permissions ftp://ftp.example.com/script.sh

# 86. Save WARC archive while downloading
wget --warc-file=archive https://example.com/

# 87. WARC with CDX index
wget --warc-file=archive --warc-cdx https://example.com/

# 88. Download without overwriting existing files but still logging
wget --unlink https://example.com/file.txt

# 89. Use a custom config file
wget --config=/path/to/wgetrc https://example.com/

# 90. Ignore global config file
wget --no-config https://example.com/

# 91. Store metadata in extended file attributes
wget --xattr https://example.com/file.tar.gz

# 92. Download and verify pinned public key
wget --pinnedpubkey="sha256//HASH==" https://secure.example.com/

# 93. Download with a specific IRI local encoding
wget --local-encoding=UTF-8 https://example.com/

# 94. Download log file only rejected URLs
wget -r --rejected-log=rejected.txt https://example.com/

# 95. Set start position for resumed download
wget --start-pos=1048576 -O file.iso https://example.com/large.iso

# 96. Use compression (auto-detect)
wget --compression=auto https://api.example.com/data.json

# 97. Recursive download converting only the file part of URLs
wget -r --convert-file-only -k https://example.com/

# 98. Delete files after downloading them (use with --mirror for freshness check)
wget -r --delete-after https://example.com/

# 99. Show wget version
wget --version

# 100. Show wget help
wget --help
```

# curl example commands

## 100 curl Example Commands

```bash
# 1. Simple GET request
curl https://example.com

# 2. GET and save output to a file
curl -o output.html https://example.com

# 3. GET and save with the remote filename
curl -O https://example.com/file.tar.gz

# 4. Follow redirects
curl -L https://example.com

# 5. Show response headers and body
curl -i https://api.example.com/users

# 6. Show only response headers
curl -I https://example.com

# 7. Verbose output (full request/response details)
curl -v https://example.com

# 8. Silent (no progress meter or errors)
curl -s https://example.com

# 9. Silent but show errors
curl -sS https://example.com

# 10. Fail with non-zero exit code on HTTP errors
curl -f https://example.com/nonexistent

# 11. POST with form data
curl -X POST -d "name=Alice&age=30" https://api.example.com/users

# 12. POST with URL-encoded data (using --data)
curl --data "username=alice&password=secret" https://api.example.com/login

# 13. POST JSON data
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","age":30}' \
  https://api.example.com/users

# 14. POST JSON using --json flag (curl 7.82+)
curl --json '{"name":"Alice"}' https://api.example.com/users

# 15. POST with data from a file
curl -X POST -d @payload.json https://api.example.com/users

# 16. PUT request
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"Bob"}' \
  https://api.example.com/users/1

# 17. PATCH request
curl -X PATCH \
  -H "Content-Type: application/json" \
  -d '{"age":31}' \
  https://api.example.com/users/1

# 18. DELETE request
curl -X DELETE https://api.example.com/users/1

# 19. Add a custom header
curl -H "Authorization: Bearer TOKEN123" https://api.example.com/profile

# 20. Add multiple headers
curl -H "Accept: application/json" \
     -H "Authorization: Bearer TOKEN123" \
     https://api.example.com/data

# 21. Basic authentication
curl -u username:password https://api.example.com/private

# 22. Bearer token auth via header
curl -H "Authorization: Bearer eyJhbGci..." https://api.example.com/data

# 23. Send cookies
curl -b "session=abc123" https://example.com/dashboard

# 24. Save cookies to a file
curl -c cookies.txt https://example.com/login

# 25. Load and send cookies from a file
curl -b cookies.txt https://example.com/dashboard

# 26. Set a custom User-Agent
curl -A "MyApp/1.0" https://api.example.com

# 27. Set a Referer header
curl -e "https://google.com" https://example.com

# 28. Set a timeout (max seconds for the entire request)
curl -m 10 https://api.example.com/slow-endpoint

# 29. Set connection timeout
curl --connect-timeout 5 https://api.example.com

# 30. Retry on failure
curl --retry 3 https://api.example.com/flaky

# 31. Retry with delay
curl --retry 3 --retry-delay 2 https://api.example.com/flaky

# 32. Download a file and resume if interrupted
curl -C - -O https://example.com/large-file.zip

# 33. Limit download speed
curl --limit-rate 100K -O https://example.com/large-file.zip

# 34. Download multiple URLs in parallel
curl -Z -O https://example.com/file1.txt -O https://example.com/file2.txt

# 35. Show progress bar instead of progress meter
curl -# -O https://example.com/large-file.zip

# 36. Disable SSL certificate verification (insecure)
curl -k https://self-signed.example.com

# 37. Specify CA certificate
curl --cacert /path/to/ca.pem https://internal.example.com

# 38. Client certificate authentication
curl -E /path/to/client.pem https://api.example.com

# 39. Force TLS 1.2
curl --tlsv1.2 https://api.example.com

# 40. Use a proxy
curl -x http://proxy.example.com:8080 https://api.example.com

# 41. Use SOCKS5 proxy
curl --socks5 localhost:1080 https://api.example.com

# 42. Upload a file via PUT
curl -T local-file.txt https://remote.example.com/upload/file.txt

# 43. Multipart form upload
curl -F "file=@photo.jpg" -F "name=Alice" https://api.example.com/upload

# 44. Write response code to stdout after transfer
curl -o /dev/null -s -w "%{http_code}" https://api.example.com/health

# 45. Write full timing info after transfer
curl -o /dev/null -s -w "time_total: %{time_total}\ntime_connect: %{time_connect}\n" https://api.example.com

# 46. Send a DELETE with a JSON body
curl -X DELETE \
  -H "Content-Type: application/json" \
  -d '{"reason":"test"}' \
  https://api.example.com/resource/1

# 47. Use HTTP/2
curl --http2 https://api.example.com

# 48. Dump headers to a file
curl -D headers.txt https://example.com

# 49. Use a config file
curl -K curl_config.txt

# 50. Use URL globbing to download a range of files
curl -O "https://example.com/file[1-10].txt"

# 51. GraphQL query via POST
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"{ user(id:1){ name email } }"}' \
  https://api.example.com/graphql

# 52. OAuth2 bearer token request
curl -X POST \
  -d "grant_type=client_credentials&client_id=ID&client_secret=SECRET" \
  https://auth.example.com/token

# 53. Paginated API call with query string
curl "https://api.example.com/items?page=2&limit=50"

# 54. URL-encode data in a GET request
curl -G --data-urlencode "q=hello world" https://api.example.com/search

# 55. Get JSON and pretty-print with jq
curl -s https://api.example.com/users | jq .

# 56. Extract a specific field with jq
curl -s https://api.example.com/user/1 | jq '.name'

# 57. POST to Slack webhook
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"text":"Deployment complete!"}' \
  https://hooks.slack.com/services/TOKEN

# 58. Check health of a service (exit 0 if 200)
curl -sf https://api.example.com/health && echo "Healthy"

# 59. Send OPTIONS request (CORS preflight)
curl -X OPTIONS \
  -H "Origin: https://app.example.com" \
  -H "Access-Control-Request-Method: POST" \
  https://api.example.com/resource

# 60. List FTP directory
curl ftp://ftp.example.com/

# 61. Download file via FTP with credentials
curl -u ftpuser:ftppass ftp://ftp.example.com/file.txt -o file.txt

# 62. Upload file via FTP
curl -u ftpuser:ftppass -T localfile.txt ftp://ftp.example.com/upload/

# 63. Resolve a hostname to a specific IP (bypass DNS)
curl --resolve api.example.com:443:192.168.1.100 https://api.example.com

# 64. Use a specific network interface
curl --interface eth0 https://api.example.com

# 65. Force IPv4
curl -4 https://api.example.com

# 66. Force IPv6
curl -6 https://api.example.com

# 67. Send HEAD with custom header and check status
curl -Is -H "Accept: application/json" https://api.example.com/users

# 68. Generate libcurl C code for a command
curl --libcurl code.c -X POST -d '{"x":1}' https://api.example.com

# 69. Trace all data to a file
curl --trace trace.log https://api.example.com

# 70. Write out transfer timing
curl -w "@curl-timing-format.txt" -o /dev/null -s https://api.example.com

# 71. Request compressed response
curl --compressed https://api.example.com/data

# 72. Send a range request (partial download)
curl -r 0-1023 -O https://example.com/large-file.bin

# 73. Use netrc for credentials
curl -n https://api.example.com/private

# 74. Use a UNIX domain socket
curl --unix-socket /var/run/docker.sock http://localhost/info

# 75. POST to create resource and capture Location header
curl -iX POST \
  -H "Content-Type: application/json" \
  -d '{"name":"New Resource"}' \
  https://api.example.com/items

# 76. Make concurrent requests (with xargs)
cat urls.txt | xargs -P 4 -I{} curl -s {} -o /dev/null

# 77. Send custom method (e.g., PATCH)
curl -X PATCH \
  -H "Content-Type: application/merge-patch+json" \
  -d '{"status":"active"}' \
  https://api.example.com/users/1

# 78. Download with remote-name and output directory
curl --output-dir /tmp/downloads -O https://example.com/file.tar.gz

# 79. Check TLS certificate details
curl -vI --no-progress-meter https://example.com 2>&1 | grep -A20 "* Server certificate"

# 80. Send a request with AWS Signature V4
curl --aws-sigv4 "aws:amz:us-east-1:s3" \
  --user "AKID:SECRET" \
  "https://mybucket.s3.amazonaws.com/myfile"

# 81. Stream server-sent events
curl -N -H "Accept: text/event-stream" https://api.example.com/events

# 82. Post JSON array
curl -X POST \
  -H "Content-Type: application/json" \
  -d '[{"id":1},{"id":2}]' \
  https://api.example.com/batch

# 83. Use keep-alive connections (default in HTTP/1.1)
curl --keepalive-time 60 https://api.example.com

# 84. Conditional GET (only download if modified since date)
curl -z "01 Jan 2024 00:00:00" -O https://example.com/data.json

# 85. Download to stdout and pipe
curl -s https://example.com/install.sh | bash

# 86. Silent install script pattern (common idiom)
curl -fsSL https://example.com/install.sh | bash

# 87. Test API with digest authentication
curl --digest -u admin:secret https://api.example.com/protected

# 88. Send multiple requests sequentially using --next
curl https://api.example.com/a --next https://api.example.com/b

# 89. POST multipart with JSON and file
curl -F 'metadata={"name":"doc"};type=application/json' \
     -F 'file=@document.pdf' \
     https://api.example.com/upload

# 90. Get rate limit headers
curl -sI https://api.github.com/rate_limit | grep -i x-ratelimit

# 91. Trace ASCII (no hex output)
curl --trace-ascii trace.txt https://api.example.com

# 92. Create a tunnel via proxy
curl -p -x http://proxy:8080 https://target.example.com

# 93. Use a .netrc file for credentials
curl --netrc-file ~/.netrc https://api.example.com

# 94. Follow redirect and show final URL
curl -Ls -o /dev/null -w "%{url_effective}" https://bit.ly/short-url

# 95. Request only a specific byte range
curl -H "Range: bytes=500-999" https://example.com/file.bin

# 96. Enable HSTS caching
curl --hsts hsts_cache.txt https://example.com

# 97. POST to create webhook and capture response
curl -s -X POST \
  -H "Content-Type: application/json" \
  -d '{"url":"https://myserver.com/hook","events":["push"]}' \
  https://api.example.com/webhooks | jq '.id'

# 98. Use write-out to measure latency
curl -o /dev/null -s -w "DNS: %{time_namelookup}s  Connect: %{time_connect}s  TTFB: %{time_starttransfer}s  Total: %{time_total}s\n" https://api.example.com

# 99. Download file only if it doesn't already exist (no-clobber)
curl --no-clobber -O https://example.com/data.csv

# 100. Check curl version
curl --version
```

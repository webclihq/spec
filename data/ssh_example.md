# ssh example commands

## 100 ssh Example Commands

```bash
# 1. Connect to a remote host
ssh user@hostname

# 2. Connect to a specific port
ssh -p 2222 user@hostname

# 3. Connect using a specific identity file
ssh -i ~/.ssh/my_key.pem user@hostname

# 4. Specify username explicitly with -l
ssh -l alice server.example.com

# 5. Connect with verbose output (useful for debugging)
ssh -v user@hostname

# 6. Extra verbose output
ssh -vvv user@hostname

# 7. Connect and run a single command
ssh user@hostname "ls -la /var/www"

# 8. Run a command and return exit status
ssh user@hostname "systemctl status nginx"

# 9. Run a multi-line command remotely
ssh user@hostname << 'EOF'
  cd /var/www
  git pull
  systemctl reload nginx
EOF

# 10. Connect without host key checking (insecure, use for testing only)
ssh -o StrictHostKeyChecking=no user@hostname

# 11. Connect to a new host and automatically add to known_hosts
ssh -o StrictHostKeyChecking=accept-new user@hostname

# 12. Force IPv4
ssh -4 user@hostname

# 13. Force IPv6
ssh -6 user@hostname

# 14. Local port forwarding (access remote service locally)
ssh -L 8080:localhost:80 user@hostname

# 15. Local port forward with specific bind address
ssh -L 127.0.0.1:8080:internal.server:80 user@gateway

# 16. Remote port forwarding (expose local service to remote)
ssh -R 9090:localhost:3000 user@hostname

# 17. Dynamic SOCKS proxy (port forwarding through SSH)
ssh -D 1080 user@hostname

# 18. Background a forwarding tunnel (no command)
ssh -N -f -L 5432:db.internal:5432 user@bastion

# 19. Keep tunnel alive (send keepalive packets)
ssh -o ServerAliveInterval=60 -N -L 8080:localhost:80 user@hostname

# 20. Jump host / ProxyJump (SSH through a bastion)
ssh -J user@bastion user@internal-server

# 21. Multiple jump hosts
ssh -J user@jump1,user@jump2 user@target

# 22. Use SSH as a netcat-style tunnel (-W)
ssh -W internal.host:22 user@bastion

# 23. Forward SSH agent to remote host
ssh -A user@hostname

# 24. Disable SSH agent forwarding
ssh -a user@hostname

# 25. Enable X11 forwarding (for GUI apps over SSH)
ssh -X user@hostname

# 26. Enable trusted X11 forwarding
ssh -Y user@hostname

# 27. Request a pseudo-terminal
ssh -t user@hostname sudo bash

# 28. Disable pseudo-terminal allocation
ssh -T user@hostname "git fetch"

# 29. Run SSH with a custom config file
ssh -F ~/.ssh/custom_config user@hostname

# 30. Set a config option on the command line
ssh -o ConnectTimeout=5 user@hostname

# 31. Set multiple options
ssh -o ConnectTimeout=5 -o TCPKeepAlive=yes user@hostname

# 32. Use a specific cipher
ssh -c aes256-ctr user@hostname

# 33. Enable compression
ssh -C user@hostname

# 34. Control connection multiplexing — master mode
ssh -M -S /tmp/ssh-control user@hostname

# 35. Reuse existing multiplexed connection
ssh -S /tmp/ssh-control user@hostname "uptime"

# 36. Check status of a multiplexed connection
ssh -O check -S /tmp/ssh-control user@hostname

# 37. Stop a multiplexed connection
ssh -O stop -S /tmp/ssh-control user@hostname

# 38. Generate a new SSH key pair
ssh-keygen -t ed25519 -C "your_email@example.com"

# 39. Generate RSA key pair
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 40. Generate key with a specific filename
ssh-keygen -t ed25519 -f ~/.ssh/deploy_key

# 41. Copy public key to a remote server
ssh-copy-id user@hostname

# 42. Copy a specific key to remote server
ssh-copy-id -i ~/.ssh/deploy_key.pub user@hostname

# 43. Copy key to non-standard port
ssh-copy-id -p 2222 user@hostname

# 44. Manually append public key (without ssh-copy-id)
cat ~/.ssh/id_ed25519.pub | ssh user@hostname "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# 45. Test SSH connection (no command, just check auth)
ssh -T git@github.com

# 46. Test connectivity with timeout
ssh -o ConnectTimeout=3 user@hostname exit

# 47. Scan fingerprint of a host
ssh-keyscan hostname

# 48. Add a host's fingerprint to known_hosts
ssh-keyscan -H hostname >> ~/.ssh/known_hosts

# 49. Remove a host from known_hosts
ssh-keygen -R hostname

# 50. Start an SSH agent
eval "$(ssh-agent -s)"

# 51. Add a key to the SSH agent
ssh-add ~/.ssh/id_ed25519

# 52. Add all default keys to the agent
ssh-add

# 53. List keys loaded in the agent
ssh-add -l

# 54. Remove a key from the agent
ssh-add -d ~/.ssh/id_ed25519

# 55. Remove all keys from the agent
ssh-add -D

# 56. Add key with expiry time (loaded for 1 hour)
ssh-add -t 3600 ~/.ssh/id_ed25519

# 57. SCP: copy a file to a remote server
scp file.txt user@hostname:/remote/path/

# 58. SCP: copy a file from remote to local
scp user@hostname:/remote/path/file.txt ./local/

# 59. SCP: copy recursively (directory)
scp -r ./local-dir user@hostname:/remote/path/

# 60. SCP through a jump host
scp -J user@bastion file.txt user@internal:/path/

# 61. SFTP: interactive file transfer session
sftp user@hostname

# 62. Tunnel database connection to localhost
ssh -N -L 5432:localhost:5432 user@db-server

# 63. Tunnel Redis
ssh -N -L 6379:localhost:6379 user@redis-server

# 64. Tunnel Elasticsearch
ssh -N -L 9200:localhost:9200 user@es-server

# 65. SSH config alias usage (if configured in ~/.ssh/config)
ssh my-server

# 66. SSH with environment variable passed
ssh -o SendEnv=MY_VAR user@hostname

# 67. Use SSH in a shell script safely
ssh -o BatchMode=yes -o ConnectTimeout=5 user@hostname "command"

# 68. Disable password authentication (key only)
ssh -o PasswordAuthentication=no user@hostname

# 69. Print effective config for a host
ssh -G user@hostname

# 70. Run remote command as different user (via sudo)
ssh user@hostname "sudo -u deploy ./run.sh"

# 71. Mount remote filesystem via SSHFS
sshfs user@hostname:/remote/path /local/mountpoint

# 72. Unmount SSHFS
fusermount -u /local/mountpoint

# 73. Run remote script from local file
ssh user@hostname < ./deploy.sh

# 74. Copy output of a local command to remote clipboard
cat file.txt | ssh user@hostname "cat > /remote/file.txt"

# 75. Run command on multiple hosts in parallel
for host in host1 host2 host3; do
  ssh user@$host "uptime" &
done
wait

# 76. SSH with PKCS11 hardware token
ssh -I /usr/lib/opensc-pkcs11.so user@hostname

# 77. Limit authentication methods
ssh -o PreferredAuthentications=publickey user@hostname

# 78. Disable host key checking for a script (CI use)
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null user@hostname

# 79. Log debug output to a file
ssh -E /tmp/ssh-debug.log -v user@hostname

# 80. Use a SOCKS5 proxy for SSH connection
ssh -o "ProxyCommand=nc -X 5 -x proxy.host:1080 %h %p" user@hostname

# 81. Query supported key exchange algorithms
ssh -Q kex

# 82. Query supported ciphers
ssh -Q cipher

# 83. Query supported MAC algorithms
ssh -Q mac

# 84. Query supported host key types
ssh -Q key

# 85. SSH keep-alive every 30 seconds, max 3 retries
ssh -o ServerAliveInterval=30 -o ServerAliveCountMax=3 user@hostname

# 86. SSH with X11 trusted forwarding and compression
ssh -YC user@hostname

# 87. Run GUI app remotely over X11
ssh -X user@hostname firefox

# 88. Persistent SSH session using tmux
ssh user@hostname -t "tmux new-session -A -s main"

# 89. Transfer files over SSH with tar (preserves permissions)
tar czf - ./mydir | ssh user@hostname "tar xzf - -C /remote/"

# 90. Transfer files in reverse (remote to local with tar)
ssh user@hostname "tar czf - /remote/dir" | tar xzf - -C /local/

# 91. Check disk usage on remote
ssh user@hostname "df -h"

# 92. Tail a remote log file
ssh user@hostname "tail -f /var/log/app.log"

# 93. Watch a command on remote host
ssh user@hostname "watch -n 1 'ps aux | head'"

# 94. Run remote command with a timeout
ssh user@hostname "timeout 10 ./long-script.sh"

# 95. Show SSH client version
ssh -V

# 96. Show known_hosts entries
cat ~/.ssh/known_hosts

# 97. Show authorized_keys on remote
ssh user@hostname "cat ~/.ssh/authorized_keys"

# 98. List public key fingerprints in agent
ssh-add -l -E sha256

# 99. Convert PEM private key to OpenSSH format
ssh-keygen -p -m OpenSSH -f ~/.ssh/old_rsa_key

# 100. Display SSH help
ssh --help
```

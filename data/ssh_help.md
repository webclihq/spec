# ssh help

_CLI commands reviewed: March 13, 2026_

## `ssh` (usage printed to stderr)

```
usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface] [-b bind_address]
           [-c cipher_spec] [-D [bind_address:]port] [-E log_file]
           [-e escape_char] [-F configfile] [-I pkcs11] [-i identity_file]
           [-J destination] [-L address] [-l login_name] [-m mac_spec]
           [-O ctl_cmd] [-o option] [-P tag] [-p port] [-R address]
           [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
           destination [command [argument ...]]
       ssh [-Q query_option]
```

### Key flags reference

| Flag                           | Description                                                       |
| ------------------------------ | ----------------------------------------------------------------- |
| `-p port`                      | Connect to port on the remote host                                |
| `-i identity_file`             | Path to private key file for authentication                       |
| `-l login_name`                | Username to log in as on the remote machine                       |
| `-L [bind:]port:host:hostport` | Local port forwarding                                             |
| `-R [bind:]port:host:hostport` | Remote port forwarding                                            |
| `-D [bind_address:]port`       | Dynamic (SOCKS) port forwarding                                   |
| `-N`                           | Do not execute a remote command (useful for forwarding)           |
| `-f`                           | Go to background just before executing the command                |
| `-T`                           | Disable pseudo-terminal allocation                                |
| `-t`                           | Force pseudo-terminal allocation                                  |
| `-v`                           | Verbose mode (repeat for more verbosity: -vv, -vvv)               |
| `-q`                           | Quiet mode — suppress warnings and diagnostic messages            |
| `-4`                           | Force IPv4 only                                                   |
| `-6`                           | Force IPv6 only                                                   |
| `-A`                           | Enable forwarding of the authentication agent connection          |
| `-a`                           | Disable forwarding of the authentication agent connection         |
| `-X`                           | Enable X11 forwarding                                             |
| `-x`                           | Disable X11 forwarding                                            |
| `-C`                           | Request compression of all data                                   |
| `-c cipher_spec`               | Comma-separated list of ciphers in preference order               |
| `-F configfile`                | Alternative per-user configuration file                           |
| `-o option`                    | Override options in ssh_config format                             |
| `-J destination`               | Connect via a jump host (ProxyJump)                               |
| `-W host:port`                 | Forward stdin/stdout to host:port (netcat mode)                   |
| `-M`                           | Master mode for connection sharing                                |
| `-S ctl_path`                  | Path to control socket for connection sharing                     |
| `-O ctl_cmd`                   | Control an active connection multiplexing master process          |
| `-E log_file`                  | Append debug logs to log_file instead of stderr                   |
| `-G`                           | Print configuration after evaluating Host and Match blocks        |
| `-K`                           | Enable GSSAPI-based authentication                                |
| `-k`                           | Disable GSSAPI-based authentication                               |
| `-s`                           | Invoke subsystem on remote system                                 |
| `-g`                           | Allow remote hosts to connect to local forwarded ports            |
| `-n`                           | Redirect stdin from /dev/null                                     |
| `-Y`                           | Enable trusted X11 forwarding                                     |
| `-y`                           | Send log information via syslog                                   |
| `-B bind_interface`            | Bind to address of bind_interface before attempting to connect    |
| `-b bind_address`              | Use bind_address on local machine as source address of connection |
| `-e escape_char`               | Set the escape character (default: ~)                             |
| `-I pkcs11`                    | Specify PKCS#11 shared library for authentication                 |
| `-m mac_spec`                  | Comma-separated list of MAC algorithms                            |
| `-w local_tun[:remote_tun]`    | Tunnel device forwarding                                          |
| `-Q query_option`              | Query parameters for specified version 2 features                 |

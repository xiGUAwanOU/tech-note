# Configure SSH Key for Git
Add a file `~/.ssh/config` with following content:

```text
Host git.server.host.name
    IdentityFile ~/.ssh/id_rsa-jacob
    IdentitiesOnly yes
```

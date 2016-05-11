# Everything About Users in Debian

### Commands

  * Create user: `adduser` (a script using `useradd`), `useradd`;
  * Edit user: `usermod`;
  * Delete user: `userdel`;
  * Change password: `passwd`;
  * Create group: `addgroup`;
  * Edit group: `groupmod`;
  * Delete group: `groupdel`;

### Files:

Fields are seperated by colons (`:`) in following files.

#### `/etc/passwd`

  * username
  * encrypted password (or `x` if shadow passwords are in use)
  * UID
  * default GID
  * real name (also known as the GECOS field)
  * home directory
  * default shell (use `/usr/sbin/nologin` or `/bin/false` to prevent login)

#### `/etc/groups`

  * group name
  * encrypted group password (or `x` if shadow passwords are in use)
  * GID
  * group members' usernames, comma-separated

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

#### `/etc/passwd`

Fields are separated by colons (`:`):
    * username
    * encrypted password (or `x` if shadow passwords are in use)
    * UID
    * default GID
    * real name (also known as the GECOS field)
    * home directory
    * default shell (use `/usr/sbin/nologin` or `/bin/false` to prevent login)

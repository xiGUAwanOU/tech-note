# `ps` Command Examples

### 1. Just List All Processes

  ```console
$ ps -A
$ ps -e
  ```

Parameters `-A` and `-e` are identical

### 2. List All Processes with Extra Information

  ```console
$ ps -ef
  ```

`UID` (user ID), `PID` (process ID), `PPID` (parent process ID), `C` (CPU usage of this process), `STIME` (start time), `TTY` (), `TIME` (cumulated CPU time), `CMD` (command to run the process) will be listed in this case.

### 3. Some Popular Option Sets

Some of the popular option sets could be:

  ```
$ ps -aux
  ```

and:

  ```
$ ps -elf
  ```

They are almost the same.

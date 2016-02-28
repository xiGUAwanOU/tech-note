# Keep Process Running After Logged Out From SSH

If a user logged out from SSH or disconnected, the terminal will get an HUP (hangup) signal and shutdown all the sub processes. If we want to keep it running, we could use `nohup` command to ignore the HUP signal:

  ```console
$ nohup COMMAND [ARG]...
  ```

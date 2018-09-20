# Ubuntu Post Installation
This is probably only for Acer Aspire E5-571G.

Q. Login or logout console keep printing `fifo: sched_error 20`.\
A. This is probably a problem with default graphical care driver. Install the NVidia official one will solve the problem.

Q. Chrome is asking for the password of "default" keyring.\
A. Provide an empty password, otherwise it will prompt every time.

Q. White screen is shown after the lid has been closed and opened.\
A. Edit `/etc/systemd/logind.conf` file, change the line `#HandleLidSwitch=suspend` to `#HandleLidSwitch=hibernate` and run command `sudo systemctl restart systemd-logind.service` to apply the change.

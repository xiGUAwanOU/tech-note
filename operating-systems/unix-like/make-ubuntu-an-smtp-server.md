# Make Ubuntu an SMTP Server

Consider it twice before really do so, because once the configuration is not appropriate, the server could be turned to a massive junk mail sender by hackers.

Use following command to install Postfix:

  ```console
sudo apt-get install mailutils
  ```

Near to the end of the installation, there will be a configuration dialog showing up. Do the configuration following the instructions in it. Do NOT press <Enter> directly after typed something, press <Tab> key until the "OK" button is highlighted, and then press <ENTER>.

Don't forget to restart the computer after configured Postfix.

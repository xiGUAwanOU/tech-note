# Run One Command Using SSH

To run one command using SSH and then close the connection, use `-t` for creating the pseudo-tty:

  ```console
$ ssh [-t] <user>@<host> <command_to_run>
  ```

If there is a prompt asking for saving the SSH key, and we want to answer "yes" automatically:

  ```console
$ ssh -oStrictHostKeyChecking=no [-t] <user>@<host> <command_to_run>
  ```

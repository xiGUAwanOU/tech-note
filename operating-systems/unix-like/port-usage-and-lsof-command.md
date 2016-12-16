# Port Usage and `lsof` Command

To list which process is taking a specific port, we could use the following command:

  ```console
$ lsof -i [tcp|udp]:<portnumber>
  ```

Notice that, `lsof` is actually a tool that lists which file is opened by which process.

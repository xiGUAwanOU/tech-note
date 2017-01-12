# Use Homebrew to Manage Services

Besides a convenient software package manager, Homebrew could also be a good services manager. Just type following commands:

  ```console
$ brew tap homebrew/services
  ```

And then take MongoDB as an example:

  ```console
$ brew services start mongodb
  ```

Change the second parameter to `restart` and `stop` will also work.

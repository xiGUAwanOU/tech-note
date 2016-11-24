# What If I Did Something Wrong?

Git keeps a list of all the local action, so try:

  ```console
$ git reflog
  ```

And then try something like:

  ```console
$ git reset 'HEAD@{17}'
  ```

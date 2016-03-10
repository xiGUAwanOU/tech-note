# Delete Wrong Commits

Use `reset` command to reset `HEAD` to another point:

  ```console
$ git reset --hard HEAD~6
  ```

Here, `HEAD~6` means 6 commits before head.

And push the local content to remote server forcely:

  ```console
$ git push origin master --force
  ```

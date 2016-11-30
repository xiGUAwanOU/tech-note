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

If the repo refuses to accept `--force` push, we could make the reverse as a new commit:

  ```console
$ git revert HEAD~6
  ```

And then push them as usual.

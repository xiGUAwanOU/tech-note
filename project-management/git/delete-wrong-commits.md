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

If the repo refuses to accept `--force` push, we could make the reverse as a new commit (**actually it is usually done like this**, since `--force` push will overwrite the history):

  ```console
$ git revert HEAD
  ```

Notice that, unlike `git reset`, `git revert` will revert a specific commit (revert the changes), but not set the `HEAD` pointer!

And then push them as usual.

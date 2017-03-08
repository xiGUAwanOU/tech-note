# Delete Wrong Commits

Use `reset` command to reset `HEAD` to another point:

  ```console
$ git reset --hard HEAD~6
  ```

Here, `HEAD~6` means 6 commits before head. The option `--hard` means that we want to also change the contents of the local files back to the older version. However, if `--soft` is give, the contents of local files won't be changed.

And push the local content to remote server forcely since we are rewritting the history:

  ```console
$ git push origin master --force
  ```

Usually it is a bad way to forcely push things. So only reset head if the commits are not yet pushed to the remote repository.

We could also make the reverse as a new commit:

  ```console
$ git revert HEAD
  ```

Notice that, unlike `git reset`, `git revert` will revert a specific commit (revert the changes), but not set the `HEAD` pointer!

And then push them as usual.

If there are more commits to be reverted, add a `--no-commit` option will keep all files not committed, after reverted all the commits, we could commit all of the reverts only once.

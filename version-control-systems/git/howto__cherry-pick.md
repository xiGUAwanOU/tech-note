# Cherry Pick

The sub-command `cherry-pick` will try to apply a commit from another branch to the current branch. For example:

```console
$ git cherry-pick b13f38ca046d36db7e5ec19569e4333ae1c65dff
```

The hash code `b13f38` is the commit in another branch. This command will merge only this commit from another branch to the current one.

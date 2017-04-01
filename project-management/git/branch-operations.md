# Branch Operations

### Create a Branch

Use following command to create a new branch and checkout it:

```console
$ git checkout -b <new_branch_name>
```

This is equivalent to:

```console
$ git branch <new_branch_name>
$ git checkout <new_branch_name>
```

### List Branches

To get a list of all branches in the repo, just do this:

```console
$ git branch
```

The current branch is marked by a `*` symbol.

Sometimes you want to get a list of remote branches:

```console
$ git branch -r
```

We may also want to know which version the branch is currently pointing to. If so, try the following command:

```console
$ git log --decorate --graph
```

### Switch Branch

To switch to another branch, use:

```console
$ git checkout <another_branch_name>
```

This also works for the remote branches.

### Push Branch to Remote Server

Replace `master` with the branch name we want to push:

```console
$ git push origin <branch_name>
```

If we want to push all branches together:

```console
$ git push --all
```
### Merge Two Branches

Merge another branch to the `master` branch:

```console
$ git checkout master
$ git merge <another_branch_name>
```

### Delete a Branch

To delete a branch locally and remotely:

```console
$ git branch -d <branch_name>
$ git push origin --delete <branch_name>
```

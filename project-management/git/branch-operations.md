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

### Switch Branch

To switch to another branch, use:

  ```console
$ git checkout <another_branch_name>
  ```

### Push Branch to Remote Server

Replace `master` with the branch name we want to push:

  ```console
$ git push origin <branch_name>
  ```

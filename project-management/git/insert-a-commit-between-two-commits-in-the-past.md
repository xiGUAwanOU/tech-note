# Insert a Commit Between Two Commits in the Past

There are three commits:

  ```text
A ---> B ---> C
  ```

`A` is the newest, and now we want to add a commit `D` between `A` and `B`, to make it like:

  ```text
A ---> D ---> B ---> C
  ```

Just follow the steps below:

  1. `$ git rebase -i <the commit SHA of C>`;
  2. Modify the text file so that the commit B begins with `edit`;
  3. Close the editor, let the rebase process begin;
  4. Make changes to the source code and `git commit`;
  5. `$ git rebase --continue`.

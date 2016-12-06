# More Details about Stash

The basic usage of `git stash` could be:

  ```console
$ git stash

Do some other things here ...

$ git apply
  ```

It is possible to call `git stash` more than one time, it will put the changes to a stack data structure. `git apply` will apply the most recently change on top of the stack.

To list all the changes stored in the stack, use following command:

  ```console
$ git stash list
  ```

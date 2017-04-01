# Run Command in Each Sub-Folder

For example, if we need to print the content of `file.txt` in each sub-folder:

```shell
set -e

for dir in `ls -d */`; do
  (cd "$dir" && cat file.txt);
done
```

The first line `set -e` tells intepreter to exit immediately if any of the sub-commands runs into error.

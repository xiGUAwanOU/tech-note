# Run Command in Each Sub-Folder

  ```shell
set -e

for dir in `ls -d */`; do
  (cd "$dir" && cat file.txt);
done
  ```

The first line `set -e` tells intepreter that exit immediately if any of the command runs into errors.

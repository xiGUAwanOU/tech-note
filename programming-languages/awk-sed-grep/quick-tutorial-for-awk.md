# Quick Tutorial for `awk`

The basic usage of awk is to get the specific column of a line:

  ```awk
awk '{print $1, $4}' filename.txt
  ```

This command will get the 1st and the 4th column of the file `filename.txt`. Use `$0` if we want the whole line.

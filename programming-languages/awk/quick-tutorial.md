# Quick Tutorial

The basic usage of AWK is to get the specific column of a line:

  ```awk
awk '{print $1, $4}' filename.txt
  ```

This command will get the 1st and the 4th column of the file `filename.txt`.

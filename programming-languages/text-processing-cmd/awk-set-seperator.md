# awk: Set Seperator

Simply use the `-F` option:

  ```awk
awk -F ":" '{print $2}' example.txt
  ```

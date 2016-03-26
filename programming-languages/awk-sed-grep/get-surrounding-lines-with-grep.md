# Get Surrounding Lines with `grep`

Use `-B <NUM>` to get `<NUM>` lines before the target line, use `-A <NUM>` to get `<NUM>` lines after the target line, and use `-C <NUM>` to get `<NUM>` lines before and after the target line.

Examples:

  ```console
$ grep -B 5 -A 3 hello README.txt
$ grep -C 7 hello README.txt
  ```

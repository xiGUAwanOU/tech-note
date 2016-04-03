# Sort with the Length of Line

The idea is append line length as the first column, and sort with line length:

  ```awk
awk '{print length, $0}' input.txt > output.tmp
  ```

  ```console
$ sort -k1nr output.tmp | cut -f2- -d' '
  ```

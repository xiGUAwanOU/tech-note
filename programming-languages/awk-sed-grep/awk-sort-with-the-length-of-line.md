# awk: Sort with the Length of Line

The idea is append line length as the first column, and sort with line length:

  ```awk
awk '{print length, $0}' <filename> | sort -k1nr | cut -f2- -d' '
  ```

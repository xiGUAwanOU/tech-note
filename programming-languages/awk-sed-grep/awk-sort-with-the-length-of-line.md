# awk: Sort with the Length of Line

The idea is append line length as the first column, and sort with line length:

  ```console
awk '{print length, $0}' test.txt | sort -k1nr | cut -f2- -d' '
  ```

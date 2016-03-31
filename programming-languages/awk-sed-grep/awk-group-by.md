# awk: Group By

Input:

  ```text
foo 42
bar 12
foo 28
foo 30
bar 56
  ```

Output should be:

  ```text
foo 100
bar 68
  ```

The command should be:

  ```awk
awk 'NR>1{arr[$1]++} END{for (a in arr) print a, arr[a]}'
  ```

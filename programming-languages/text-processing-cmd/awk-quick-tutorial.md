# awk: Quick Tutorial

The basic usage of awk is to get the specific column of a line:

```awk
awk '{print $1, $4}' filename.txt
```

This command will get the 1st and the 4th column of the file `filename.txt`. Use `$0` if we want the whole line.

Using `printf` like it is in C will format the output:

```awk
awk '{printf "%-8s %-8s\n", $1, $4}' filename.txt
```

To apply a filter:

```awk
awk '$1 == 0 && $4 == "FOO" {print $5, $6}' filename.txt
```

# awk: Escape Single Quote in `printf`

To escape a single quote in `printf`, we have to write the commnad like this:

```awk
awk '{printf "'\''%s'\''\n", $0}' example.txt
```

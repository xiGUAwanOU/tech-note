# Select Lines

Just use following command:

```console
$ awk 'NR >= <start_line_number> && NR <= <end_line_number>' /path/to/file
```

Or if we need to start from a specific line till the end of the file:

```console
$ tail --lines=+<start_line_number>
```

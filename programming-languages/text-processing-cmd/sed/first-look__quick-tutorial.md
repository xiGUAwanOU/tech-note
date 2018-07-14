# Quick Tutorial

The basic usage is to replace a string:

```console
$ sed s/<original_string>/<replacing_string>/g filename.txt
```

Replace the content in specific lines:

```console
$ sed <start_line_num>,<end_line_num>s/<original_string>/<replacing_string>/g filename.txt
```

The start line and end line are included.

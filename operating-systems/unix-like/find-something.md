# Find Something

### Find Files by Name

Simply use the following command:

```console
$ find /somewhere/over/the/rainbow -name "filename"
```


### Find String in File

In *nix like system, use `fgrep` or `grep -f` command:

```console
$ fgrep -r "string to search" /path/to/search/folder
```

In Windows, use `findstr` command:

```console
> findstr /s "string to search" P:\ath\to\search\folder
```

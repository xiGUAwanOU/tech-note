keywords linux, macos, find, command, by filename, by name
labels unix, command

# Unix: Find Command

## Find by Name
```console
$ find /search/path -name somefile.txt
```

One can also redirect permission errors to `/dev/null`:
```console
$ find /search/path -name somefile.txt 2> /dev/null
```

## Find by Type
```console
$ find /search/path -type f
```

Some useful type characters:
* `d`: directory 
* `f`: regular file 
* `l`: symbolic link

## Find by Size
File greater than 1G:
```console
$ find /search/path -size +1G
```

File smaller than 1M:
```console
$ find /search/path -sze -1M
```

Some useful units:
* `b`: block (512 bytes)
* `c`: bytes
* `k`: kilobytes (1024 bytes)
* `M`: megabytes (1024 * 1024 bytes)
* `G`: gigabytes (1024 * 1024 * 1024 bytes)

# Working with Tags

### List all tags

```console
$ git tag -n5
```
Command line option `-n5` means only display first 5 lines of message.

### Create a new tag

```console
$ git tag -a <TAG_NAME> -m "<TAG_MESSAGE>"
```

### Push tag to remote

```console
$ git push origin 0.0.1
```

### Checkout tagged version

```console
$ git checkout tags/<TAG_NAME>
```

### Go back to master

```console
$ git checkout master
```

### Remove a tag

```console
$ git tag -d <TAG_NAME>
```

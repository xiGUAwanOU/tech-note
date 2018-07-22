# Working with Tags

List:

```console
$ git tag -n5
```
Command line option `-n5` means only display first 5 lines of message.

Create:

```console
$ git tag -a <TAG_NAME> -m "<TAG_MESSAGE>"
```

Push:

```console
$ git push origin 0.0.1
```

Checkout tagged version:

```console
$ git checkout tags/<TAG_NAME>
```

Go back to master:

```console
$ git checkout master
```

Remove:

```console
$ git tag -d <TAG_NAME>
```

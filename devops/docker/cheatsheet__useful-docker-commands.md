# Useful Docker Commands

## Images
Build a new image:
```console
$ docker build --force-rm --tag <name>:<version> --build-arg <key>=<value> .
```

List all images:
```console
$ docker image ls -a
```

List all image IDs:
```console
$ docker image ls -aq
```

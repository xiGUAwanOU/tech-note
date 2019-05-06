keywords docker, command
labels docker

# Docker: Useful Commands

## Images
Build a new image:
```console
$ docker build --force-rm --tag <tag>:<version> --build-arg <key>=<value> .
```

List all images:
```console
$ docker image ls -a
```

List all image IDs:
```console
$ docker image ls -aq
```

Delete all images:
```console
$ docker image prune
```

## Containers
Run a container:
```console
$ docker run --rm -p 80:80 <tag>:<version>
```

List all containers:
```console
$ docker container ls -a
```

List all container IDs:
```console
$ docker container ls -aq
```

Login to a running container:
```console
$ docker exec -it <container_id> bash
```

Stop a container:
```console
$ docker container stop <container_id>
```

Stop all containers:
```console
$ docker container stop $(docker container ls -aq)
```

Remove a container:
```console
$ docker container rm <container_id>
```

Remove all stopped containers:
```console
$ docker container prune
```

Remove all containers:
```console
$ docker container rm $(docker container ls -aq)
```

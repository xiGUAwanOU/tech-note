# Out of Memory While Running Maven

In short, add this to the environment variable:

```console
export MAVEN_OPTS="-Xmx4096m"
```

Or run maven like this:

```console
$ MAVEN_OPTS="-Xmx4096m"; mvn pakcage
```

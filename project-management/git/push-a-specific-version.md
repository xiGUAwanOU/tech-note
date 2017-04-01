# Push a Specific Version

Sometimes we don't want to push all of the changes to the remote repository. Instead, we just want to push a specific version. To do this, just use the following command:

```console
$ git push <remotename> <commit SHA>:<remotebranchname>
```

For example:

```console
$ git push origin db125ab26a36c4062a7af3e28a1073b56bad6467:master
```

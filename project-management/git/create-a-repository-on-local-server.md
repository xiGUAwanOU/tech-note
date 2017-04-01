# Create a Repository on Local Server

To create a git repo on a local server, firstly we need to create a plain git repo:

```console
$ mkdir repo-name.git
$ cd repo-name.git
$ git init --bare
```

And then, we need to clone the repo from the local server to another machine (or on the local server, but another path):

```console
$ git clone USER_CREATED_REPO@REPO_HOST_NAME:/path/to/repo-name.git
```

A prompt will come out asking the password for `USER_CREATED_REPO`.

And then create a new `master` branch and push something into the repo:

```console
$ git checkout -b master
$ touch README.md
$ git add .
$ git commit -m "Initialize repo with a README.md file."
$ git push origin master:master
```

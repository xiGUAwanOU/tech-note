# Basic Usages of HomeBrew

Install a package:
```console
$ brew install <package_name>
```

Search a package:
```console
$ brew search <package_pattern>
```

Show information about a package:
```console
$ brew info <package_name>
```

Update and upgrade (just like apt):
```console
$ brew update
$ brew upgrade
```

Show the packages, which does not depend on any other packages:
```console
$ brew leaves
```
This is very useful when you want to delete a package and its dependencies.

Uninstall a package:
```console
$ brew uninstall <package_name>
```

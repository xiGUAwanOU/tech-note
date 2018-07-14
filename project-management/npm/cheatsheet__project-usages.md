# Project Usages

## Initialize an NPM Project
```console
$ npm init [<@scope>/]<name>
```

## Add Dependency to the Project
```console
$ npm install [-D] [<@scope>/]<name>[@<version>]
$ npm install [-D] <git repo url>
```

Add `-D` option will save the dependency into the `devDependencies` group.

## Remove Dependency from the Project
```console
$ npm uninstall [-S][-D] [<@scope>/]<pkg>[@<version>]
```

Add `-D` option will remove the dependency from the `devDependencies` group. Add `-S` option will remove the dependency from the `dependencies` group.

## Update Dependencies in the Project
```console
$ npm update [<pkg>...]
```

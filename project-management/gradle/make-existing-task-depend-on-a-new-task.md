# Make Existing Task Depend on a New Task

Just like this:

```gradle
compileJava {
  dependsOn anotherTask
}
```

Here, `compileJava` task is from `java` plugin.

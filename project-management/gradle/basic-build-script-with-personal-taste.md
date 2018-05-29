# Basic Build Script with Personal Taste

Use this template to create a runnable JAR project:

```gradle
apply plugin: "java"

// Only if we need to distribute the package as an executable (like Gradle):
apply plugin: "application"
mainClassName = "net.xiguawanou.application.Main"

// For the compatibility between Linux and Windows:
applicationDefaultJvmArgs = ["-Dfile.encoding=UTF-8"]

// Define the version of application:
version = '1.0.0'

repositories {
  mavenCentral()
}

dependencies {
}
```

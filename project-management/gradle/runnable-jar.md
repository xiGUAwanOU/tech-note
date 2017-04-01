# Runnable JAR

Use this template to create a runnable JAR project:

```gradle
apply plugin: "java"
apply plugin: "eclipse"

// Only if we need to distribute the package as an executable (like Gradle):
apply plugin: "application"
mainClassName = "net.xiguawanou.application.Main"

// For the compatibility between Linux and Windows:
applicationDefaultJvmArgs = ["-Dfile.encoding=UTF-8"]

// Define the version of application:
version = '0.0.1'

repositories {
  mavenCentral()
}

dependencies {
  testCompile "org.testng:testng:6.8.21"
}

test {
  // Enable TestNG support (default is JUnit):
  useTestNG()
}
```

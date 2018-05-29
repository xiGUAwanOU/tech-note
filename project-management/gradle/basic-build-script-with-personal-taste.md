# Basic Build Script with Personal Taste
For Java projects:
```gradle
apply plugin: "java"

// Specify the source and target compatability
compileJava   {
    sourceCompatibility = "$newest_jdk_version"
    targetCompatibility = "$newest_jdk_version"
}

repositories {
    mavenCentral()
}

dependencies {
}
```

For Groovy projects:
```gradle
apply plugin: "groovy"

compileJava   {
    sourceCompatibility = "$newest_jdk_version"
    targetCompatibility = "$newest_jdk_version"
}

repositories {
    mavenCentral()
}

dependencies {
    compile "org.codehaus.groovy:groovy-all:2.4.15"
}
```

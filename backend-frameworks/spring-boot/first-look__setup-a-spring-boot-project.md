# Setup a Spring Boot Project

## 1. Initialize Gradle
Run command:
```console
$ gradle init
```

## 2. Add Project Dependencies
Take the [official documentation](https://spring.io/guides/gs/spring-boot/) as a reference.

Note that:
1. don't add `apply plugin: 'eclipse'` and `apply plugin: 'idea'` if there is no need to have the IDE support;
2. Spring Boot 2.0.1 supports Java 10, and 2.1 supports Java 11, change JDK version accordingly;
3. instead of JUnit, add `testCompile("org.springframework.boot:spring-boot-starter-test:${springBootVersion}")` as a dependency is probably better;
4. if using MongoDB, add the dependency `compile("org.springframework.boot:spring-boot-starter-data-mongodb:${springBootVersion}")`.

An example:
```gradle
buildscript {
    ext {
        springBootVersion = "2.0.5.RELEASE"
        assertjVersion = "3.10.0"
    }
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
    }
}

apply plugin: 'java'
apply plugin: 'org.springframework.boot'
apply plugin: 'io.spring.dependency-management'

bootJar {
    baseName = 'travel-blog-server'
    version =  '0.0.1'
}

repositories {
    mavenCentral()
}

sourceCompatibility = 10
targetCompatibility = 10

dependencies {
    compile("org.springframework.boot:spring-boot-starter-web:${springBootVersion}")
    compile("org.springframework.boot:spring-boot-starter-data-mongodb:${springBootVersion}")
    testCompile("org.springframework.boot:spring-boot-starter-test:${springBootVersion}")
    testCompile("org.assertj:assertj-core:${assertjVersion}")
}
```

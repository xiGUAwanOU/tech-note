# Dropwizard POM File

This could be a basic `pom.xml` file for Dropwizard project, use it as a template or reference of the Dropwizard project:

  ```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>xigua</groupId>
    <artifactId>red-squirrel-research</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

        <dropwizard.version>0.9.2</dropwizard.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>io.dropwizard</groupId>
            <artifactId>dropwizard-core</artifactId>
            <version>${dropwizard.version}</version>
        </dependency>

        <dependency>
            <groupId>com.hubspot.dropwizard</groupId>
            <artifactId>dropwizard-guice</artifactId>
            <version>0.8.4.0</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
  ```

Notice, this template also added dropwizard-guice as the dependency inject library. If we don't want it, remove the dependency.

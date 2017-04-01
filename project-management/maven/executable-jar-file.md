# Executable Jar File

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-jar-plugin</artifactId>
  <version>3.0.2</version>
  <configuration>
    <archive>
      <manifest>
        <addClasspath>true</addClasspath>
        <mainClass>fully.qualified.MainClass</mainClass>
      </manifest>
    </archive>
  </configuration>
</plugin>
```

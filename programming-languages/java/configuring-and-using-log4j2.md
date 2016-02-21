# Confiuring and Using Log4j2

These two dependencies should be added:

  ```xml
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-api</artifactId>
  <version>2.5</version>
</dependency>
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-core</artifactId>
  <version>2.5</version>
</dependency>
  ```

And this one should be placed under the `resources` folder as `log4j2.xml`:

  ```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="warn">
  <Appenders>
    <File name="file" fileName="/tmp/log4j-BAZihanLin.log" append="false">
      <PatternLayout>
        <Pattern>[%d{yyyy-MM-dd HH:mm:ss}][%p] %c{1} - %m%n</Pattern>
      </PatternLayout>
    </File>
  </Appenders>
  <Loggers>
    <Root level="debug">
      <AppenderRef ref="file"/>
    </Root>
  </Loggers>
</Configuration>
  ```

It's not hard to figure out what does it mean.

But how could we know which elements and attributes does an appender have in XML file? Read [this article](http://logging.apache.org/log4j/2.x/manual/appenders.html), if a parameter has a type of `int`, `bool` or `String`, then it could be write directly as an attribute of the appender. Otherwise, it should be an element like `Layout` and `Filter`. `Layout` and `Filter` are interfaces, for different implementations there are different configurations, read [this article](https://logging.apache.org/log4j/2.x/manual/layouts.html) for more information about layouts, and read [this article] (https://logging.apache.org/log4j/2.x/manual/filters.html) for more information about filters.

And finally, in the source code we use the code below to create a logger:

  ```java
private static final Logger logger = LogManager.getLogger(NFArticleParser.class);
  ```

And log something like this:

  ```java
logger.error("Hello world!");
  ```


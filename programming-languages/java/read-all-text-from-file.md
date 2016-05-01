# Read All Text from File

There is a one-line solution:

  ```java
String text = new String(Files.readAllBytes(Paths.get("path/to/file.txt")), StandardCharsets.UTF_8);
  ```

Notice! This only works in Java 1.7 or higher.

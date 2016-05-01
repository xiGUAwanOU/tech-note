# Read All Text from File

There is a one-line solution:

  ```java
String text = new String(Files.readAllBytes(Paths.get("path/to/file.txt")), StandardCharsets.UTF_8);
  ```

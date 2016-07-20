# Join a List of Objects as String

  ```java
List<JustAnotherClass> justObjects = Arrays.asList(...);
String joinedString = justObjects.stream().map(JustAnotherClass::getName).collect(Collectors.joining(", "));
  ```

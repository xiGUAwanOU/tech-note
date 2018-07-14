# Join a List of Objects as String

The code below could be applied on a list of objects.

```java
List<JustAnotherClass> justObjects = Arrays.asList(...);
String joinedString = justObjects.stream().map(JustAnotherClass::getName).collect(Collectors.joining(", "));
```

Notice that, other than this solution, Java 8 also provides `String.join` method and `StringJoiner` class for this purpose.

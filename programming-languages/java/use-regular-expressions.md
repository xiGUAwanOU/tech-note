# Use Regular Expressions

The basic pattern matching:

```java
Pattern pattern = Pattern.compile(patternString);
Matcher matcher = pattern.matcher(matchString);

// Then use matcher do something. For example find() or matches() etc.
```

See [offical API document](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Matcher.html) for more information.

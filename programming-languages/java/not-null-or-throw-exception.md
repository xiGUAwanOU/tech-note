# Not `null` or Throw Exception

Do not use `if (... == null) throw new ...` any more! Use the following code instead:

  ```java
Objects.requireNotNull(...);
  ```

This will throw a `NullPointerException` if the parameter is `null`.

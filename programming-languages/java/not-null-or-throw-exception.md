# Not Null or Throw Exception

Do not use if and throw statement any more! Use the following code instead:

  ```java
Objects.requireNotNull(...);
  ```

This will throw a `NullPointerException` if the parameter is `null`.

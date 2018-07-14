# Equals and Equals

There are four equals in Ruby:

1. `==` is used for comparing two values are equal, something similar to the `equals` method in Java. If we want to override the object value comparison behaviour, we should override the `==` operator.
2. `equal?` method is used for comparing two references are identical, similar to the `==` operator in Java. Never override `equal?` method.
3. `===` is used by `case ... when ...` statement for comparison. So if we want some fancy behaviour in `case ... when ...` statement, we should override `===` operator.
4. `eql?` is something like `hashCode` in Java, which is used by `Hash` type to decide if two keys are the same.

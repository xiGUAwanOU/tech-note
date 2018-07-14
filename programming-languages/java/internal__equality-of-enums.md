# Equality of `enum`s

In Java, we cannot override the `equals` and `hashCode` methods in `enum`, and the `equals` of two enums is actually identical with the `==` operator.

This means, if you do something like define a private field for holding extra information about an enum, then the information will not come into equals comparision, and the `HashMap` and `HashSet` will not work correctly if the extra defined information is distinguishing two enum values.

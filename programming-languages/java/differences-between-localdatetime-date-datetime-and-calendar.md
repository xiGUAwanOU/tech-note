# Differences Between `LocalDateTime`, `Date`, `DateTime` and `Calendar`

`Date` and `Calendar` are traditional classes about date and time in Java. `Date`, according to Java API reference, "represent a specific instant in time"; while `Calendar` "provide methods for converting between a specific instant in time and a set of calendar fields ..., and for manipulating the calendar fields".

`DateTime` is from Joda Project, which is a convenient library to represent and manipulate date and time.

`LocalDateTime` is a new feature since Java 8. It is an implementation of JSR 310, which is very similar to `DateTime` in Joda Project. Besides, there are also two classes `LocalDate` and `LocalTime`, which can represent/manipulate date/time seperately.

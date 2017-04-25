# JAX-RS Path Mapping Order

The JAX-RS provider gathers up the set of deployed URI expressions and sorts them based on the following logic:

1. The primary key of the sort is the number of **literal** characters in the full URI matching pattern. The sort is in descending order.
2. The secondary key of the sort is the number of template expressions embedded within the pattern. This sort is in descending order.
3. The tertiary key of the sort is the number of nondefault template expressions. A default template expression is one that does not define a regular expression.

The text above are extracted from [*RESTful Java with JAX-RS 2.0, 2nd Edition by Bill Burke*](https://www.safaribooksonline.com/library/view/restful-java-with/9781449361433/ch04.html).

Notice that, while using Jersey, if the path is splitted into two part (one part as annotations on classes, the other part as annotations on methods), the order is sorted by the annotations on classes firstly.

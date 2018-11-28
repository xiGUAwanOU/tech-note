# Powerful `&&` and `||`
* Logical AND (`expr1 && expr2`) returns `expr1` if it can be converted to false; otherwise, returns `expr2`.
* Logical OR (`expr1 || expr2`) returns `expr1` if it can be converted to true; otherwise, returns `expr2`.

With these language features, we can deal with falsy values like `''`, `null` or `undefined` in an elegant way.

```javascript
let value = record && record.name || 'John Doe';
```

This is a quite common usage of this feature. There are several situations:
1. `record` is falsy:
  logical AND will be short-circuit evaluated, thus the part before logical OR is the value of `record`, which is still falsy, so the value `'John Doe'` will be taken as the result of the evaluation of this expression;

2. `record` is not falsy, but `record.name` is:
  logical AND expression will be evaluated to the value of `record.name` which is falsy, thus the value `'John Doe'` is the final result out of the same reason as above;

3. `record` is not falsy, and `record.name` also not:
  logical AND expression will be evaluated to the value of `record.name` which is not falsy, thus the logical OR will be short-circuit evaluated. So the whole expression will be evaluated to the value of `record.name`.

# Implement Equals

## TL,DR;

This is a short version of the implementation of the equals method.

```java
return (obj != null && this.getClass() == obj.getClass()) && this.value == ((MyType) obj).value;
```

## Full Explanations

To implement the equals method, following conditions must be meet:

  * Reflexive: For any non-null reference value `x`, `x.equals(x)` must return true.
  * Symmetric: For any non-null reference values `x` and `y`, `x.equals(y)` must return true if and only if `y.equals(x)` returns true.
  * Transitive: For any non-null reference values `x`, `y`, `z`, if `x.equals(y)` returns true and `y.equals(z)` returns true, then `x.equals(z)` must return true.
  * Consistent: For any non-null reference values `x` and `y`, multiple invocations of `x.equals(y)` consistently return true or consistently return false, provided no information used in equals comparisons on the objects is modified.
  * For any non-null reference value `x`, `x.equals(null)` must return false.

Following code is an example:

```java
public boolean equals(Object o) {
	if (this == o) {
		return true;
	}

	if (!(o instanceof MyType)) {
		return false;
	}

	MyType mt = (MyType) o;

	return name.equals(mt.name);
}
```

And don't forget the hash code! A simple recipe from _Effective Java (2nd Edition)_:

  1. Store some constant nonzero value, say, 17, in an `int` variable called `result`.
  2. For each significant field `f` in your object (each field taken into account by the equals method, that is), do the following:
    1. Compute an `int` hash code `c` for the field:
      1. If the field is a `boolean`, compute `(f ? 1 : 0)`.
      2. If the field is a `byte`, `char`, `short`, or `int`, compute `(int) f`.
      3. If the field is a `long`, compute `(int) (f ^ (f >>> 32))`.
      4. If the field is a `float`, compute `Float.floatToIntBits(f)`.
      5. If the field is a `double`, compute `Double.doubleToLongBits(f)`, and then hash the resulting `long` as in step 2.i.c.
      6. If the field is an object reference and this class’s `equals` method compares the field by recursively invoking `equals`, recursively invoke `hashCode` on the field. If a more complex comparison is required, compute a "canonical representation" for this field and invoke `hashCode` on the canonical representation. If the value of the field is `null`, return `0` (or some other constant, but `0` is traditional).
      7. If the field is an array, treat it as if each element were a separate field. That is, compute a hash code for each significant element by applying these rules recursively, and combine these values per step 2.ii. If every element in an array field is significant, you can use one of the Arrays.hashCode methods added in release 1.5.
    2. Combine the hash code `c` computed in step 2.i into `result` as follows: `result = 31 * result + c;`
  3. Return `result`.
  4. When you are finished writing the `hashCode` method, ask yourself whether equal instances have equal hash codes. Write unit tests to verify your intuition! If equal instances have unequal hash codes, figure out why and fix the problem.

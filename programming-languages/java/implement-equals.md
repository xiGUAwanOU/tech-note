# Implement Equals

To implement the euqals method, following conditions must be meet:

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

	if (!(o instanceof FeatureExtractor)) {
		return false;
	}
	MyType mt = (MyType) o;

	return name.equals(mt.name);
}
  ```

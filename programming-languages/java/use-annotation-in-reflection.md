# Use Annotation in Reflection

To define an annotation for methods:

  ```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Feature {
}
  ```

To get those annotated methods:

  ```java
private Set<Method> getMethodsAnnotatedWithFeature(Class<?> type) {
	Set<Method> methods = new HashSet<Method>();

	Class<?> clazz = type;

	while (clazz != Object.class) {
		Method[] allMethods = clazz.getDeclaredMethods();

		for (Method m : allMethods) {
			if (m.getAnnotation(Feature.class) != null) {
				methods.add(m);
			}
		}

		clazz = clazz.getSuperclass();
	}

	return methods;
}
  ```

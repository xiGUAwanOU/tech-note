# Invoke Private Methods

This is a helper method to invoke a private method:

  ```java
public static Object invoke(Class<?> clazz, Object object, String methodName, Class<?>[] paramTypes, Object[] args)
  			throws NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException,
			  InvocationTargetException {
		Method m = clazz.getDeclaredMethod("methodName", paramTypes);
		m.setAccessible(true);
		return m.invoke(object, args);
}
  ```

# Get Resource File

The resource file should be stored into the same package as the class. Then use following code to get the path of the file:

```java
System.out.println(this.getClass().getResource("test-input-01.txt").getPath());
```

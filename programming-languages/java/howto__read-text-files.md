# Read Text Files

## Read all Text in a File
There is a one-line solution:

```java
String text = new String(Files.readAllBytes(Paths.get("path/to/file.txt")), StandardCharsets.UTF_8);
```

## Read File Line by Line
```java
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
String line;
while ((line = br.readLine()) != null) {
    // Do something here...
}
br.close();
```

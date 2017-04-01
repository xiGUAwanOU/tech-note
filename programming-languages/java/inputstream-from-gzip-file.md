# InputStream From GZip File

```java
FileInputStream fis = new FileInputStream(
        getClass().getResource("somefile.gz").getPath());

GZIPInputStream gzis = new GZIPInputStream(fis);
InputStreamReader reader = new InputStreamReader(gzis);
BufferedReader buffin = new BufferedReader(reader);

while ((read = in.readLine()) != null) {
    System.out.println(read);
}
		
buffin.close();
```

In the code above, we read a GZip file called `somefile.gz` from the resources folder, and then print the content in the file line by line.

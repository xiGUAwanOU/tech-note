# Read File Line by Line

Always turn to StackOverflow is definitely a shame and a waste of time:

  ```java
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
String line;
while ((line = br.readLine()) != null) {
    // Do something here...
}
br.close();
  ```


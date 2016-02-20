# Converting Between String and Date

To convert string to date:

  ```java
String string = "2016-02-20 14:36:39";
SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
Date date = df.parse(string);
  ```

To convert date to string:

  ```java
SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String string = df.format(Calendar.getInstance().getTime());
  ```

Notice: `SimpleDateFormat` is NOT thread save.

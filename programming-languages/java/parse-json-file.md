# Parse JSON File

Using org.json library will do the trick. The newest version of org.json is not compatible with OpenJDK 1.7. The latest version being supported by OpenJDK 1.7 is 20140107.

This is an simple example of how to parse the JSON file:

  ```java
JSONObject json = new JSONObject(jsonCodeString);
String value = json.getString("key");
  ```

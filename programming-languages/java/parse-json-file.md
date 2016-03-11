# Parse JSON File

Using `org.json` library will do the trick. The newest version of `org.json` is not compatible with OpenJDK 1.7. The latest version being supported by OpenJDK 1.7 is `20140107`.

This is an simple example of how to parse the JSON file:

  ```java
JSONObject json = new JSONObject(jsonCodeString);
String value1 = json.getString("key1");
String value2 = json.optString("key2");
  ```

The difference between `getString` and `optString` methods is if the key doesn't exist, `getString` method will throw an exception, while `optString` just return an empty string.

# Jackson Deserialize ISO8601

There is no standard support of date/time in JSON, to (de-)serialize a specified format of data/time, define the data model like this:

  ```java
@JsonProperty(Properties.DATE)
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
private Date date;
  ```

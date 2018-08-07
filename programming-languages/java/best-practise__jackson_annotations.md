# Jackson Annotations
Although Jackson library has many magic, it would be good if the annotations can tell us some extra information about the data model.

```java
public class ChoiceResponse extends Response {
    public static class Properties {
        public static final String ID = "id";
        public static final String OPTIONS = "options";
    }

    private final String id;
    private final List<String> options;

    @JsonCreator
    public ChoiceResponse(@JsonProperty(Properties.ID) String id, @JsonProperty(Properties.OPTIONS) List<String> options) {
        super(Types.CHOICE);

        this.id = id;
        this.options = options;
    }

    @JsonProperty(Properties.ID)
    public String getId() {
        return id;
    }

    @JsonProperty(Properties.OPTIONS)
    public List<String> getOptions() {
        return options;
    }
}
```

1. `@JsonCreator` will tell Jackson explicitly which method to use for deserialization.
2. `@JsonProperty` on constructor parameters means this data model will be deserialized (otherwise don't try to deserialized JSON using this class).
3. `@JsonProperty` on getter means this data model will be serialized (otherwise don't try to serialize JSON using this class).

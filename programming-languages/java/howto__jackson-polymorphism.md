# Jackson Polymorphism

Code first:

```java
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.EXISTING_PROPERTY, property = Response.Properties.TYPE)
@JsonSubTypes({ //
        @JsonSubTypes.Type(value = ChoiceResponse.class, name = Response.Types.CHOICE), //
        @JsonSubTypes.Type(value = DialogResponse.class, name = Response.Types.DIALOG) //
})
public class Response {
    public static class Types {
        public static final String CHOICE = "choice";
        public static final String DIALOG = "dialog";
    }

    public static class Properties {
        public static final String TYPE = "type";
    }

    private final String type;

    protected Response(String type) {
        this.type = type;
    }

    @JsonProperty(Properties.TYPE)
    public String getType() {
        return type;
    }

    @SuppressWarnings("unchecked")
    public <T extends Response> T as(Class<T> subType) {
        return subType.cast(this);
    }
}
```

The annotation parameter `include = JsonTypeInfo.As.EXISTING_PROPERTY` must be required, otherwise the type field will be duplicated.

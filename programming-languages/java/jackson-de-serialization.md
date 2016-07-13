# Jackson (De-)serialization

Here are results of some simple experiments:

  1. if there is a default constructor, the JSON string could be parsed without annotations;
  2. the object could be serialized without any annotations;
  3. if the default constructor is hiden by the custom constructors, the JSON string could not be parsed unless all the parameters are explicitly annotated with `@JsonProperty` annotations with their parameters;
  4. however, the parameter list does not need to cover all the JSON properties, other properties will still be parsed automatically according to the convention;
  5. the parameters of `@JsonProperty` annotation on the private field and the constructor should match each other;
  6. `@JsonProperty` annotation is basically used to map the field name in JSON string and the field name in Java class;
  7. [more results are coming ...]

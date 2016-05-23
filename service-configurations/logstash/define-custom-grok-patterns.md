# Define Custom Grok Patterns

A first look of a complete grok pattern could be like this:

  ```text
%{IP:client} %{WORD:method} %{NUMBER:response}
  ```

This will match something like this:

  ```text
127.0.0.1 GET 200
  ```

It is easy to figure out that we should use a small structure like `%{PATTERN:name}` to define a field. `IP`, `WORD` and `NUMBER` are some of the predefined patterns, while `client`, `method` and `response` are names of those fields in a log message. A list of all predefined patterns could be found [here](https://github.com/logstash-plugins/logstash-patterns-core/blob/master/patterns/grok-patterns).

Optionally, we could define the structure like `%{PATTERN:name:type}` to convert the type of the matched pattern from `string` to the specified type.

To apply a pattern, add following lines to the configuration file of Logstash:

  ```text
filter {
  grok {
    match => { "message" => "%{IP:client} %{WORD:method} %{NUMBER:response}" }
  }
}
  ```

Which means, we want to match the original `message` field using the defined pattern ...

We could use regex to in the pattern, this could be something like:

  ```text
^%{IP:client} (?:-|%{USERNAME:username}) (?:-|%{NOTSPACE:password}) %{WORD:method} %{NUMBER:response}
  ```

This will match following lines:

  ```text
127.0.0.1 - - GET 200
127.0.0.1 john nopassword POST 200
  ```

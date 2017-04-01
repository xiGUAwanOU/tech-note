# Multiline Match

According to the offical document, the usage of `multiline` filter is deprecated. Instead, we should use the `multiline codec`. To apply `multiline codec` on the log pipeline, just extend the configuration file below:

```ruby
input {
    stdin {
        codec => multiline {
            pattern => "^!"
            what => "previous"
        }
    }
}
```

This configuration basically means, if a line is begin with a `!`, it should be treated as a part of the previous message. If we need a `codec` for `file` input instead of `stdin`, just put the whole `codec` section into the `file` section:

```ruby
input {
    file {
        path => "/path/to/the/log/file"
        start_position => "beginning"

        codec => multiline {
            pattern => "^!"
            what => "previous"
        }
    }
}
```

After that, we could apply a `grok` filter on it:

```ruby
filter {
    grok {
        match => { "message" => "^%{WORD:level}\s+\[%{TIMESTAMP_ISO8601:timestamp}\] (?<text>(.|\r|\n)*)" }
    }
}
```

Notice the `(?<text>(.|\r|\n)*)` part of the pattern. It matches everything including line breaks, so that everything in the message after the timestamp will be treated as the content of the `text` field.

So if we log something like:

```text
ERROR [2016-05-24 13:18:51,092] line0
! line1
! line2
```

We will get following content in `text` field:

```text
line0
! line1
! line2
```

After that, we could even apply a `mutate` filter to get rid of those "`!`"-s at the beginning of new lines.

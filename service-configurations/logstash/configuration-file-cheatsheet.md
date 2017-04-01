# Configuration File Cheatsheet

The most simple configuration file should be like this:

```ruby
input { stdin {} } output { elasticsearch{} }
```

It just read the log messages from the stdin and write them directly to the stdout.

If we want to log things to the elasticsearch server:

```ruby
output{
    elasticsearch {
        hosts => ["<hostname>:<port>"]
    }
}
```

Notice that we should always add the port number after the hostname part, otherwise it won't work properly.

And if we want to read log messages from a log file:

```ruby
input {
    file {
        path => "/path/to/log/file"
        start_position => "beginning"
    }
}
```

With `start_position => "beginning"`, we don't only read the newest log messages from the file, but also read the original existing messages as the input.

If we want to apply a grok filter:

```ruby
filter {
    grok {
        match => { "message" => "%{COMBINEDAPACHELOG}"}
    }
}
```

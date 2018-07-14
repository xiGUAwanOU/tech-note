# List Files in a Directory

```ruby
IGNORED_ENTRIES = ['.', '..', '.git']

directories = Dir.entries('.').select { |file|
  File.directory? file and !IGNORED_ENTRIES.include? file
}
```

This is an example to filter out all the files and some directories that we don't need.

Additionally, join path with following statement:

```ruby
filename = File.join('/path/to/the/directory', 'the-file-name')
```

The return value `filename` should be a `String` typed value.

# Performance Profiling
Sometimes the CPU usage of the service just go 100% for some unknown reason (the whole service just hangs, without writting any log messages). In this case, the most helpful way to track down problems is probably using performance profiling tools.

# Using `rbtrace`
It watches the process once being activated, and output in real-time using console command.

Simply include it in the `Gemfile`:

```ruby
gem 'rbtrace'
```

To make a process be able to provide profiling information, simply add a single line in the source code of the process:

```ruby
require 'rbtrace'
```

Then start the process, using following commands to output performance profiling information in real-time:

```console
$ rbtrace -p <PID> --firehose    # Output all information
$ rbtrace -p <PID> --slow=<N>    # Output method invocation slower than N milliseconds
$ rbtrace --help                 # Print help documentation for more command line options
```

# Using `ruby-prof`
It watches a ruby source code block and print a detailed profiling information in different formats.

Simply include it in the `Gemfile`:

```ruby
gem 'ruby-prof'
```

In case of profiling Rails application (not before rack), simply add following lines to the `config.ru` file before running the Rails application:

```ruby
use Rack::RubyProf, :path => '/path/to/profiling/reports'
```

Collect detailed profiling information in the `/path/to/profiling/reports` folder.

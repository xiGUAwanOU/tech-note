# Generate Gem Project

In this document, the whole process is recorded to create a basic gem project.

We should create the directory structure of the project:

```console
$ tree
.
├── LICENSE
├── README.md
├── Gemfile
└── lib
    └── hello.rb

1 directory, 4 files
```

`hello.rb` is just the project script, currently empty. The content of `Gemfile` contains the dependency to rspec:

```ruby
source 'https://rubygems.org'

gem 'rspec', '~> 3.0'
```

After that, run following command to install dependencies:

```console
$ bundle install --binstubs
```

This will create a `bin` directory under the project root directory. Run the rspec to create unit test related files:

```console
$ $ bin/rspec --init
  create   .rspec
  create   spec/spec_helper.rb
```

Now a brand new gem project is created. Rename the `hello.rb` to whatever we need, and modify the content in the `.rspec` and `spec/spec_helper.rb` files.

# MongoDB Setup

## Using MongoId
To be honest, personally I don't think MongoId is a good way to go. Like any other ORM libraries, it just wrappered too much.

Use `--skip-active-record` command option to create new rails project:

Use MongoDB as the database technology, put following into `Gemfile`:

```ruby
gem 'mongoid', '~> 7.0.0'
gem 'mongoid-geospatial', '~> 5.0.0'  # Only if geo-data needs to be treated properly
```

Install bundles and generate configuration file:

```console
$ bundle install
$ rails g mongoid:config
```

## Database Cleaner Setup

Add dependency to test group:

```ruby
group(:test) do
  gem 'database_cleaner'
end
```

Add following content to the `rails_helper.rb` file:

```ruby
require 'database_cleaner'

RSpec.configure do |config|
  # ...

  # Config DatabaseCleaner:
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end
end
```

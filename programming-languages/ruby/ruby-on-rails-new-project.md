# Ruby on Rails New Project

## First Few Steps

```bash
# Install Ruby on Rails gem:
gem install rails 

# Create new rails project:
rails new $PROJECT_NAME --api --skip-bundle --skip-test --skip-system-test
```

## Dependencies and Configurations

### Unit Test

Add following dependencies:

```ruby
group(:test) do
  gem('database_cleaner')
  gem('rspec')
  gem('rspec-mocks')
  gem('rspec-rails')
  gem('shoulda-matchers', '~> 3.1')
end
```

Use this command to initialize files needed by rspec:

```console
$ rails g rspec:install
```

Add following content to the `rails_helper.rb` file:

```ruby
# Don't forget to require this at the beginning of the file:
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

### MongoDB

Use this command create new rails project:

```console
$ rails new $PROJECT_NAME --api --skip-bundle --skip-active-record --skip-test --skip-system-test
```

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

### JSON Parse Error Handler

Create middleware `app/middleware/json_parse_error_handler.rb`

```ruby
class JsonParseErrorHandler
  def initialize(app)
    @app = app
  end

  def call(env)
    @app.call(env)
  rescue ActionDispatch::Http::Parameters::ParseError
    return [
      400, { 'Content-Type' => 'application/json' },
      [{ error: 'bad request', message: 'Query JSON cannot be parsed.' }.to_json]
    ]
  end
end
```

Then in `config/application.rb`:

```ruby
require_relative '../lib/middleware/json_parse_error_handler'
config.middleware.insert_before(Rack::Head, JsonParseErrorHandler)
```

### JBuilder

In `Gemfile`:
```ruby
gem('jbuilder', '~> 2.5')
```

In `app/views/hello/message.json.jbuilder`:

```ruby
json.message(@message)
```

In `app/controllers/hello_controller.rb`:

```ruby
class HelloController < ApplicationController
  def show_message
    @message = 'Hello world!!'
    render(:message)
  end
end
```

## Purpose of Different Folders

_Source: [The Ruby on Rails offical "Get Started with Rails" guide](http://guides.rubyonrails.org/getting_started.html)_

* `app/`: Contains the controllers, models, views, helpers, mailers, channels, jobs and assets for your application. You'll focus on this folder for the remainder of this guide.
* `bin/`: Contains the rails script that starts your app and can contain other scripts you use to setup, update, deploy or run your application.
* `config/`: Configure your application's routes, database, and more. This is covered in more detail in Configuring Rails Applications.
* `config.ru`: Rack configuration for Rack based servers used to start the application. For more information about Rack, see the Rack website.
* `db/`: Contains your current database schema, as well as the database migrations.
* `Gemfile`, `Gemfile.lock`: These files allow you to specify what gem dependencies are needed for your Rails application. These files are used by the Bundler gem. For more information about Bundler, see the Bundler website.
* `lib/`: Extended modules for your application.
* `log/`: Application log files.
* `package.json`: This file allows you to specify what npm dependencies are needed for your Rails application. This file is used by Yarn. For more information about Yarn, see the Yarn website.
* `public/`: The only folder seen by the world as-is. Contains static files and compiled assets.
* `Rakefile`: This file locates and loads tasks that can be run from the command line. The task definitions are defined throughout the components of Rails. Rather than changing Rakefile, you should add your own tasks by adding files to the lib/tasks directory of your application.
* `README.md`: This is a brief instruction manual for your application. You should edit this file to tell others what your application does, how to set it up, and so on.
* `test/`: Unit tests, fixtures, and other test apparatus. These are covered in Testing Rails Applications.
* `tmp/`: Temporary files (like cache and pid files).
* `vendor/`: A place for all third-party code. In a typical Rails application this includes vendored gems.
* `.gitignore`: This file tells git which files (or patterns) it should ignore. See GitHub - Ignoring files for more info about ignoring files.
* `.ruby-version`: This file contains the default Ruby version.

# Ruby on Rails New Project

## First Few Steps

```bash
# Install Ruby on Rails gem:
gem install rails

# Create new rails project:
rails new $PROJECT_NAME --api

# Remove currently unnecessary folders:
rm -rf app/channels  # Related to WebSocket
rm -rf app/jobs      # Related to background jobs
rm -rf app/views     # Related to static stuff, no need for a pure RESTFul API
rm -rf app/mailers   # Related to sending Emails

rm -rf db            # Datebase schema
rm -rf vendor        # 3rd-party source codes
```

## Dependencies and Configurations

Use MongoDB as the database technology, put following into `Gemfile`:

```ruby
# Use MongoDB as the database
gem 'mongoid', '~> 7.0.0'
gem 'mongoid-geospatial', '~> 5.0.0'
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

# Create Gem
According to convention, all the source code files should be placed in the `lib` path, a top-level `<gem_name>.gemspec` file is required. E.g.:

```text
.
├── gem_name.gemspec
└── lib
    └── gem_implementation.rb
```

And a minimal Gem specification file looks like this:

```ruby
Gem::Specification.new do |spec|
  spec.name = "joyful"
  spec.summary = "Prototype of several reusable utilities for game development."
  spec.version = "0.0.1"
  spec.files = Dir["lib/**/*.rb"].keep_if{|file| File.file?(file)}
end
```

To install this Gem using bundle, there are multiple solutions:

```ruby
gem "rails", :git => "git://github.com/rails/rails.git"
gem "rails", :github => "rails/rails"
gem "rails", :path => "local/path/to/rails"
```

# Rspec Test Setup

Add following dependencies:

```ruby
group(:test) do
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

Make sure that the content in `.rspec` file is:

```text
--require rails_helper
```

Or we can also include `rails_helper` in `spec_helper`. Don't have strong opinion on this.

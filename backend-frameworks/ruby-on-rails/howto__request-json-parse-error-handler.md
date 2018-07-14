# Request JSON Parse Error Handler

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
      [{ error: 'bad request', message: 'JSON in the request body cannot be parsed.' }.to_json]
    ]
  end
end
```

Then in `config/application.rb`:

```ruby
require_relative '../lib/middleware/json_parse_error_handler'
config.middleware.insert_before(Rack::Head, JsonParseErrorHandler)
```

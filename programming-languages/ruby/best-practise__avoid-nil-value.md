# Avoid nil value

These are examples to test if an object is `nil` and call a method in it if it is not `nil`:

```ruby
do_something if person
do_something if !person.nil?
do_something unless person.nil?
```

If the expected type is a built-in type like `string` or `array`, use `to_s` or `to_a` method will avoid the `nil` value. Because to call these methods with `nil` won't return `nil`:

```console
irb> nil.to_s
---> ""

irb> nil.to_a
---> []

irb> nil.to_i
---> 0

irb> nil.to_f
---> 0.0
```

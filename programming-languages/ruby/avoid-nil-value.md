# Avoid nil value

These are examples to test if an object is `nil` and call a method in it if it is not `nil`:

  ```ruby
person.save if person
person.save if !person.nil?
person.save unless person.nil?
  ```

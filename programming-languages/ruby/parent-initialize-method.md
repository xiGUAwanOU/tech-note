# Parent Initialize Method

Note that, in Ruby, `initialize` method in parent class won't be called unless we write `super` in child class explicitly.

For example:

```ruby
class Parent
  attr_accessor :name

  def initialize
    @name = 'Howard'
  end
end

class Child < Parent
  attr_accessor :grade
  
  def initialize
    @grade = 8
  end
end

youngster = Child.new
puts youngster.name  # Nothing, because name is nil
```

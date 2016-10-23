# True Value in Ruby

Other than `false` and `nil`, everything are true in Ruby.

Notice that, this means, an integer with the value `0` is also `true`, an empty array is also `true`.

If we want to compare a value with `false`, it is better to put the `false` at the left side of `==` symbol. Like this:

  ```ruby
if false == x
  ...
end
  ```

Because the `==` symbol could be overloaded in the class of `x`:

  ```ruby
class Bad
  def == (other)
    true
  end
end

puts false == Bad.new    # false
puts Bad.new == false    # true
  ```

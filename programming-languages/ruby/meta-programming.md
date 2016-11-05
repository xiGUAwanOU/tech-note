# Meta Programming

Some tricks to do the meta programming in Ruby.

## Useful Methods

* Use `methods` method to get a list of all the methods defined in an object:

  ```console
irb(main):001:0> [].methods
=> [:fill, :assoc, :rassoc, :uniq, :uniq!, :compact, :compact!, :flatten, :to_h, :flatten!, ...
  ```
  
  Additionally, use `respond_to?` to check whether a method is defined in an object, use `method_defined?` to check whether it is defined in a class.
* Use `instance_variables` method to get a list of all the defined instance variables in an object:

  ```console
irb(main):001:0> class A
irb(main):002:1>   def initialize
irb(main):003:2>     @foo = 42
irb(main):004:2>   end
irb(main):005:1> end
=> :initialize
irb(main):006:0> A.new.instance_variables
=> [:@foo]
  ```
  
  Similar as it with method, use `instance_variables_defined?` to check whether the instance variables is defined in an object.

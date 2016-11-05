# Inheritance Hierarchy

Ruby has a very interesting inheritance system, because it is using a concept called __singleton class__ to deal with the methods in an object. Singleton class could be fetched using `singleton_class` method.

For example:

  ```console
irb(main):001:0> module A
irb(main):002:1>   def name
irb(main):003:2>     return 'foo'
irb(main):004:2>   end
irb(main):005:1> end
=> :name
irb(main):006:0> class B
irb(main):007:1>   include A
irb(main):008:1> end
=> B
irb(main):009:0> B.superclass
=> Object
irb(main):010:0> B.singleton_class.method_defined? :name
=> true
irb(main):011:0> B.singleton_class.superclass
=> #<Class:Object>
  ```

We could call method `name` from the instances of `B`, not because they are defined in `B`, but `include A` will add an anonymous super class of `B` between `B` and `Object`, like it is shown below:

  ```text
Object
└── A*
    └── B
  ```

Module `A` is written as `A*` because it is actually not `A`, but another anonymous (singleton) class.

This also happens when we are defining method for an object:

  ```console
irb(main):001:0> class A
irb(main):002:1> end
=> nil
irb(main):003:0> a = A.new
=> #<A:0x000000019f22b0>
irb(main):004:0> def a.name
irb(main):005:1>   return 'foo'
irb(main):006:1> end
=> :name
irb(main):007:0> a.singleton_class.superclass
=> A
  ```

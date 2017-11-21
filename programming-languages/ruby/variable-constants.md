# Varialbe Constants

The constants are variable. Especially if the constant is a reference to an array or some object. Only the reference is constant, however the content of the array or object could still be modified without any warnings.

To freeze an array or object will prevent the items in the array or the fields in the object being modified. For example:

```ruby
CONST_ARRAY = ['a', 'b'].freeze
CONST_ARRAY.push['c']    # error!
```

However, the content of the item in the array itself could still be modified:

```ruby
CONST_ARRAY[0] << ' modified'    # OK!
```

To prevent this, freeze each items in the array:

```ruby
CONST_ARRAY = ['a', 'b'].map(&:freeze).freeze
CONST_ARRAY[0] << ' modified'    # error!
```

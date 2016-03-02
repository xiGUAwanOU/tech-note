# Ways to Model 1-to-N Relationships.md

__[Original by William Zola, Lead Technical Support Engineer at MongoDB](http://blog.mongodb.org/post/87200945828/6-rules-of-thumb-for-mongodb-schema-design-part-1)__

This article only covers part 1 of the original article. For more detailed information, read the original article (part 2 and part 3).

## 1-to-Few

Use embedding documents:

  ```text
{
  name: 'Kate Monster',
  ssn: '123-456-7890',
  addresses : [
    { street: '123 Sesame St', city: 'Anytown', cc: 'USA' },
    { street: '123 Avenue Q', city: 'New York', cc: 'USA' }
  ]
}
  ```

## 1-to-Many

Use "child" references.

The "child" document should be like this:

  ```text
{
  _id : ObjectID('AAAA'),
  partno : '123-aff-456',
  name : '#4 grommet',
  qty: 94,
  cost: 0.94,
  price: 3.99
}
  ```

And the "parent" document:

  ```text
{
  name : 'left-handed smoke shifter',
  manufacturer : 'Acme Corp',
  catalog_number: 1234,
  parts : [
    ObjectID('AAAA'),
    ObjectID('F17C'),
    ObjectID('D2AA'),
    ...
  ]
  ...
}
  ```

Notice that in "parent" document, `ObjectID('AAAA')` is the reference to the "child" document listed above.

Querying could be something like this:

  ```console
> product = db.products.findOne({catalog_number: 1234});
> product_parts = db.parts.find({_id: { $in : product.parts }}).toArray();
  ```

Or maybe use `$lookup` aggregation from MongoDB 3.2, see this [link](https://docs.mongodb.org/manual/reference/operator/aggregation/lookup/) for more information.

## 1-to-Squillions

Like SQL, we use "parent" reference in this case.

This is a "parent" document:

  ```text
{
  _id : ObjectID('AAAB'),
  name : 'goofy.example.com',
  ipaddr : '127.66.66.66'
}
  ```

And this is a "child" document:

  ```text
{
  time : ISODate("2014-03-28T09:42:41.382Z"),
  message : 'cpu is on fire!',
  host: ObjectID('AAAB')
}
  ```

Querying could be like this:

  ```console
> host = db.hosts.findOne({ipaddr : '127.66.66.66'});  // assumes unique index
> last_5k_msg = db.logmsg.find({host: host._id}).sort({time : -1}).limit(5000).toArray()
  ```

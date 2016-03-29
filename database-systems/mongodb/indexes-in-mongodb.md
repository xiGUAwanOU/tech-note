# Indexes in MongoDB

Always set indexes early, especially the unique indexes.

### Types of Index

There are following types of index:

  * __single field index__: support queries that match on the specified (single) field;
  * __compound fields index__: according to the creation order, it supports queries that match on compound fields or any prefix of the compound fields set;
  * __text index__: support query operations that perform a text search of string content;
  * __hashed index__: support equality queries, but does not support range queries (create a single field index for the same field will overcome this disadvantage).

### Create an Index

Simply use `db.collection.createIndex()` method:

  ```javascript
db.people.createIndex( { zipcode: 1} );
  ```

The index type could be:

  * 1: ascending ordered index;
  * -1: descending ordered index;
  * "hashed": hashed index;
  * "text": text index.

Use background option for potentially long running index building operations:

  ```javascript
db.people.createIndex( { zipcode: 1}, {background: true} );
  ```

To create a unique index:

  ```javascript
db.collection.createIndex( { a: 1 }, { unique: true } );
  ```

However, MongoDB cannot create a unique index on the specified index field(s) if the collection already contains data that would violate the unique constraint for the index.

If the unique field is optional, then use sparse option to avoid errors while inserting more than one documents without the optional unique field:

  ```javascript
db.collection.createIndex( { a: 1 }, { unique: true, sparse: true } );
  ```

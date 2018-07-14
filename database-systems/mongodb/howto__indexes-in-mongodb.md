# Indexes in MongoDB

Always set indexes early, especially the unique indexes. After the collection already contains data that would violate the unique constraint, it's too late for index creation.

### Types of Index

There are following types of index:

  * __single field index__: support queries that match on the specified (single) field;
  * __compound fields index__: according to the creation order, it supports queries that match on compound fields or any prefix of the compound fields set;
  * __multikey indexes__: create indexes for each sub-documents in an array;
  * __text index__: support query operations that perform a text search of string content;
  * __hashed index__: support equality queries, but does not support range queries (create a single field index for the same field will overcome this disadvantage);
  * and more ...

### Index Creating Constraints

There are several common index creating constraints, try to avoid them:

  1. There can be only one multikey indexes.
  2. Hashed index cannot be applied to multikey indexes.
  3. Hashed index cannot be applied to compound indexes.
  4. The order of the fields listed in a compound index is important. It is not only related to the sort order, but also related to prefix search.

### Create an Index

Simply use `db.collection.createIndex()` method:

```javascript
db.people.createIndex( { zipcode: 1} );
```

The index type could be:

  * `1`: ascending ordered index;
  * `-1`: descending ordered index;
  * `"hashed"`: hashed index;
  * `"text"`: text index.

### Create Index in Background

Use background option for potentially long running index building operations:

```javascript
db.people.createIndex( { zipcode: 1}, {background: true} );
```

### Create a Unique Index

```javascript
db.collection.createIndex( { a: 1 }, { unique: true } );
```

However, MongoDB cannot create a unique index on the specified index field(s) if the collection already contains data that would violate the unique constraint for the index.

If the unique field is optional, then use sparse option to avoid errors while inserting more than one documents without the optional unique field:

```javascript
db.collection.createIndex( { a: 1 }, { unique: true, sparse: true } );
```

### Multikey Index

In MongoDB, we could create an index for each sub-documents in an array. Simply use following call to do that:

```javascript
db.collection.createIndex( { "qualifiers.name": 1 } );
```

Notice that, there can be only one multikey index in a collection.

### List Indexes for Collection

```javascript
db.collection.getIndices()
```

This call will display a list of all the indices that a collection has.

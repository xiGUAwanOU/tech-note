# Shard for Databases and Collections

To enable sharding for a specified database, we should firstly connect to mongos with mongo shell. And then run the following commands:

  ```javascript
sh.enableSharding("<database>")
  ```

To shard a colleciont, run the following commands:

  ```javascript
sh.shardCollection("<database>.<collection>", shard-key-pattern)
  ```

Some example from the MongoDB official website:

  ```javascript
sh.shardCollection("records.people", { "zipcode": 1, "name": 1 } )
sh.shardCollection("people.addresses", { "state": 1, "_id": 1 } )
sh.shardCollection("assets.chairs", { "type": 1, "_id": 1 } )
sh.shardCollection("events.alerts", { "_id": "hashed" } )
  ```

`1` means the field is an indexed key and `"hashed"` means the field is a hashed key. Pattern must either be a single hashed field, or a list of ascending (indexed) fields.

If more than one indexed key is specified, the documents will be distributed by the value of the first key field, if a number of documents have the same value for the first field, then that chunk will be spilittable by the values of the second field, and third, and fourth, and so on.

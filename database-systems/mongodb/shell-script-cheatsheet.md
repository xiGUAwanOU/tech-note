# Shell Script Cheatsheet

### Survival Commands

List all databases:

  ```javascript
show dbs;
  ```

Use a specific database with its name:

  ```javascript
use <db_name>;
  ```

List all collections in currently used database:

  ```javascript
show collections;
  ```

### `find`-Related

List all documents in a specified collection:

  ```javascript
db.<collection_name>.find();
  ```

List first N documents in a specified collection:

  ```javascript
db.<collection_name>.find().limit(N);
  ```

Append a `.pretty()` after the result will format the result:

  ```javascript
db.<collection_name>.find().limit(42).pretty();
  ```

Filter the result:

  ```javascript
db.<collection_name>.find({
    "retrieved_date": {
        $gte: ISODate("2016-01-06T00:00:00Z"),
        $lt: ISODate(2016-01-07T00:00:00Z)
    }
}).limit(3).pretty();
  ```

### `aggregate`-Related

Left outter join:

  ```javascript
db.<collection_name>.aggregate([
    {
        $lookup: {
            from: <collection1_name>,
            localField: <field_name_in_collection>,
            foreignField: <field_name_in_collection1>,
            as: <new_field_name>
        }
    }
])
  ```

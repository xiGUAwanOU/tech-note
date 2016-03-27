# Create Index for Collections

To create a index for collections, do something like this:

  ```javascript
db.<collection_name>.createIndex({<field_name>: <index_type>});
  ```

The index type could be:
  * `1`: ascending ordered index;
  * `-1`: descending ordered index;
  * `"hashed"`: hashed index.

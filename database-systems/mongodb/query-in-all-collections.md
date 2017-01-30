# Query in all Collections

We could use JavaScript in MongoDB shell:

   ```javascript
db.getCollectionNames().forEach(function (collectionName) {
  cursor = db.getCollection(collectionName).find({ /* some_conditions */ });
  if (cursor.hasNext()) {
    printjson(cursor.next());
  }
});
   ```

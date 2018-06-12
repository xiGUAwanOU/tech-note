# Run Query for Each Collection

```javascript
db.getCollectionNames().forEach(function(collectionName) {
  var collection = db.getCollection(collectionName)
  collection.update(...)
  print('done for ' + collectionName)
})
```

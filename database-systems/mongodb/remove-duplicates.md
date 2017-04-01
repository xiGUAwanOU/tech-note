# Remove Duplicates

The idea is to group documents with their duplicate keys, get a list of `_id` of duplicates for each key, and then remove all documents in the list except the first one:

```javascript
db.<collection_name>.aggregate([
    {
        $group: {
            _id: { <duplicated_keys>: "$<duplicated_keys>" },
            dups: { $addToSet: "$_id" },
            count: { $sum: 1 }
        }
    },
    {
        $match: {
            count: { $gt: 1 }
        }
    }
])
.forEach(function(doc) {
    doc.dups.shift();
    db.textAnnotations.remove({ _id: { $in: doc.dups } });
});
```

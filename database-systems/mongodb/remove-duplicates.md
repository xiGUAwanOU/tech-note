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
], { allowDiskUse: true })
.forEach(function(doc) {
    doc.dups.shift();
    db.textAnnotations.remove({ _id: { $in: doc.dups } });
});
  ```

The `allowDiskUse: true` option is used only if the `group` operation is memory consuming.

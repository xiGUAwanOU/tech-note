# Aggregation in Queries

Forgot to note the usage of aggregations in the MongoDB queries. Here I'll only show some examples:

  ```javascript
db.segments.aggregate([
  { $unwind: "$items" },
  { $group: { _id: { gameId: "$gameId", items_property: "$items.property" } } },
  { $project: { _id: 0, gameId: "$_id.gameId", "property": "$_id.items_property" } }
]);
  ```

The `$unwind` command is used to flat a document containing an array to different documents containing one item of the array. The `$group` command is used to group the results according to the conditions defined. The `$project` command is used for filtering specified fields out of the results.

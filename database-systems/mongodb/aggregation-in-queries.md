# Aggregation in Queries

Forgot to note the usage of aggregations in the MongoDB queries. Here I'll only show some examples:

```javascript
db.segments.aggregate([
  { $unwind: "$items" },
  { $group: { _id: { gameId: "$gameId", items_property: "$items.property" } } },
  { $project: { _id: 0, gameId: "$_id.gameId", "property": "$_id.items_property" } }
]);
```

There are 3 commends used in the example:
  1. `$unwind`: flats a document containing an array to different documents containing one item of the array;
  2. `$group`: groups the results according to the conditions defined;
  3. `$project`: filters specified fields out of the results.

Besides the 3 commands mentioned above, there are other useful commands:
  * `$match`: filters the documents to pass only the documents that match the specified condition(s)
  
```javascript
{ $match : { author : "dave" } }
```

  * `$lookup`: left outter join

```javascript
{
  $lookup: {
    from: <collection1_name>,
    localField: <field_name_in_collection>,
    foreignField: <field_name_in_collection1>,
    as: <new_field_name>
  }
}
```

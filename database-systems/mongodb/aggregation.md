# Aggregation

Using collection function `find`, we could search documents in a single collection efficiently. However, if we have more than one collection, or the searching condition is complex, then maybe aggregation is a better choice.

To use aggregation, call collection function `aggregate`:

  ```console
> db.collection.aggregate([{$match: {"name": "John Doe"}}]);
  ```

Which is equivalent to:

  ```console
> db.collection.find({"name": "John Doe"});
  ```

The parameter for `aggregate` function should be a pipeline. MongoDB will execute those pipeline operator one by one in the order which they are provided:

  ```console
> db.collection.aggregate([
  {$match: {"name": "John Doe"}},
  {$group: {_id: null, count: {$sum: 1}}}
]);
  ```

In the example above, the `$match` operator will be executed before `$group`.

There are many pipeline operators, see [official document](https://docs.mongodb.org/manual/reference/operator/aggregation-pipeline/) for detailed introductions. Here we list examples for some frequently used operators:

## `$project`

  ```console
> db.collection.aggregate([{$project: {_id: 0, date: "$first", count: "$count"}}]);
  ```

Which means set `_id` to `0`, set `date` to the value of the field named `first` in the original document (use `"$first"` instead of `"first"`, otherwise `date` will be set to a string), set `count` to the value of the field named `count` in the original document.

## `$matches`

  ```console
> db.collection.aggregate([
  {$match: {
    "name": "John Doe",
    "birthday": {$gte: ISODate("1980-01-01T00:00:00.000Z"); $lt: ISODate("1990-01-01T00:00:00.000Z")},
    "role": {$in: ["manager", "developer"]},
    "projects": {$elemMatch: {"name": "tech-note"}}
  }}
]);
  ```

Which means we want documents with the `name` field should equal to `"John Doe"`, the `birthday` shoule be between two given dates, the `role` field should be one of `"manager"` and `"developer"`, and `projects` is a list in original document, one of its element should has a field `name` and should equal to `tech-note`.

## `$redact`

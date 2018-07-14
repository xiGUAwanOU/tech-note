# Tag Queries

For performance profiling or alert reasons (Email notifications for too many slow mongo queries for example). It would be wonderful if we have a tag on each of the queries.

For example, if a query is tagged with `1SEC`, then it should be very fast, and if it is longer than 1 second, it is considered too slow, and an Email notification will be sent. Similarly, we could have other tags like `5SEC` and even `30SEC` for the long running batch query with aggregation.

To achieve this, we can use `$comment` operator in the mongo queries:

```javascript
db.collection.find({ ... }).comment("5SEC") // Preferred using Mongo Shell
db.collection.find({ $query: { ... }, $comment: "5SEC" })
```

However the problem is, it seems that some Mongo driver wrappers (e.g. MongoJack) do not have this implemented.

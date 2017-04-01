# Group by 10 Minutes

The idea is: get minutes from the `date` field, divide it by 10, and floor the result to an integer. Here only `$group` pipeline command:

```javascript
{
  $group: {
    _id: {
      year: {$year: "$date"},
      dayOfYear: {$dayOfYear: "$date"},
      hour: {$hour: "$date"},
      tenMinutes: {
        $floor: {
          $divide: [{$minute: "$date"}, 10]
        }
      }
    },
    count: {$sum: 1},
    first: {$min: "$retrievedDate"}
  }
}
```

Notice: if there are multiple `_id` fields, each of them will be compared.

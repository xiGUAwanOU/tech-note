# Aggregation and `$lookup`

`$lookup` is used for left outer joining. It follows this structure:

  ```text
{
  $lookup: {
    from: <collection to join>,
    localField: <field from the input documents>,
    foreignField: <field from the documents of the "from" collection>,
    as: <output array field>
  }
}
  ```

Following is an example to do the `$lookup`:

  ```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
])
  ```

But once we wrote `aggregate`, we can't use `find` anymore, because they both return a cursor to the documents. So if we want to do the filtering in aggregation, we could use `$match` operator. `$match` operator accepts a similar format to the parameters of the `find` function. 

Notice, since the operators in `aggregate` is a pipeline, so we should put filters (`$match` operators) as in front as possible, so that the number of "rest" documents to be processed is minimal.

# Remove Element in an Array

Use some command similar to the one goes below:

```javascript
db.some_collection.updateMany({
  "field": "value_matching_the_record"
}, {
  "$pull": {
    "array_elements": {
      "element_field_1": "value_1_matching_the_element",
      "element_field_2": { "$regex": "^value_2_matching_the_element$" }
    }
  }
})
```

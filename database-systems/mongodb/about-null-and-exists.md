# About Null and Exists

Even if a field exists, it could still have `null` value:

  ```javascript
db.records.find( { somefield: null } );
  ```

In this case, both non-existing fields and null-valued fields are treated as `null`.

We could use `$ne:null` to test if a field is available, only the existing, non-null-valued fields fulfills the condition:

  ```javascript
db.records.find( { somefield: { $ne:null } } );
  ```

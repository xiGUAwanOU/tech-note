# About Null and Exists

Even if a field exists, it could still have `null` value. To check if a field is existing and useful, we could check if it is `null`. In this case, both non-existing fields and null-valued fields are treated as `null`. We could also use `$ne:null` to test if a field is available, only the existing, non-null-valued fields fulfills the condition.

# Alternative to `mysqli_stmt::get_result`

Without mysqlnd extension, the function `mysqli_stmt::get_result` won't work. As an alternative we could use something like this:

```php
function getResult($stmt) {
  $result = array();
  
  $stmt->store_result();
  
  for ($i = 0; $i < $stmt->num_rows; $i++) {
    $metadata = $stmt->result_metadata();
    $params = array();
    while($field = $metadata->fetch_field()) {
      $params[] = &$result[$i][$field->name];
    }

    call_user_func_array(array($stmt, 'bind_result'), $params);
    $stmt->fetch();
  }
  
  $stmt->free_result();
  
  return $result;
}
```

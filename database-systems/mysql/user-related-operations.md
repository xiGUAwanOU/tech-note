# User Related Operations

List all the users in MySQL server:

  ```sql
select user, host from mysql.users;
  ```

Add a user:

  ```sql
CREATE USER username@hostname IDENTIFIED BY "newpassword";
  ```

Delete a user (this will also delete all grants for the specified user):

  ```sql
DROP USER username@hostname;
  ```

Grant privileges to user:

  ```sql
GRANT ALL PRIVILEGES ON db_name.* TO username@hostname;
  ```

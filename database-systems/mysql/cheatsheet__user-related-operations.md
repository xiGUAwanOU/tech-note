# User Related Operations

List all the users in MySQL server:

```sql
SELECT user, host FROM mysql.user;
```

List all the global grants in MySQL server:

```sql
SHOW GRANTS FOR username@hostname;
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

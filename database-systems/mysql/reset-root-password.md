# Reset Root Password

Firstly shutdown the MariaDB service:

  ```console
# systemctl stop mariadb.service
  ```

Then starat MariaDB with following command:

  ```console
# mysqld_safe --skip-grant-tables --skip-networking &
  ```

And then login without password:

  ```console
# mysql -u root
  ```

At last use following SQL queries to reset the password:

  ```console
use mysql;
UPDATE user SET password=PASSWORD("newpassword") WHERE user='root';
flush privileges;
exit;
  ```

And restart MariaDB service again. Done!

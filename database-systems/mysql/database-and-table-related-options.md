# Database and Table Related Options

CRUD for tables:

  ```sql
INSERT INTO tbl_name (col_name1, col_name2, ...) VALUES (value1, value2, ...);
SELECT col_name1, col_name2, ... FROM tbl_name WHERE where_condition;
UPDATE tbl_name SET column1=expr1, column2=expr2, ... WHERE where_condition;
DELETE FROM tbl_name WHERE where_conditions;
  ```

An example of creating new table using InnoDB and utf8:

  ```sql
CREATE TABLE IF NOT EXISTS articles (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  date DATETIME NOT NULL,
  latitude DOUBLE,
  longitude DOUBLE,
  content MEDIUMTEXT NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  ```

Notice, since MySQL 5.5, InnoDB is the default data storage engine. There is no need to specify it explicitly. In contrast, if we want to use MyISAM, we have to specify it.

Create and delete databases:

  ```sql
CREATE DATABASE db_name;
DROP DATABASE db_name;
  ```

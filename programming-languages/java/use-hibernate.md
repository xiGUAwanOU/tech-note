# Use Hibernate

Currently need to learning something about ODM (MongoDB) at work. Since I have MySQL installed on Raspberry Pi, so I'll go with MySQL instead of MongoDB. I believe the basic concepts are just the same between ORM(MySQL) and ODM(MongoDB).

The goal of this document is to implement the CRUD with the help of Hibernate.

Firstly, the dependency of Hibernate is:

  ```xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.2.0.Final</version>
</dependency>
  ```

And then, our data model looks like this:

  ```java
@Entity(name = "Messages")
public class Message {
    @Id
    private Long id;
    private String fromName;
    private String toName;
    private Timestamp createTime;
    private String message;
    
    ...
  ```

The setters and getters are omitted.

The corresponding MySQL table should be like this:

  ```sql
create table Messages (
    id integer not null,
    fromName varchar(255),
    toName varchar(255),
    createTime timestamp,
    message varchar(255),
    primary key (id)
) engine=InnoDB default charset=utf8;
  ```

Ok, in the next step we should configure the Hibernate. As it is said in the offical document, the configuration follows the 3 steps below:

  1. build the `StandardServiceRegistry`;
  2. build the `Metadata`;
  3. use those 2 to build the `SessionFactory`.


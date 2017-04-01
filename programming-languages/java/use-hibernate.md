# Use Hibernate

Currently need to learning something about ODM (MongoDB) at work. Since I have MySQL installed on Raspberry Pi, so I'll go with MySQL instead of MongoDB. I believe the basic concepts are just the same between ORM(MySQL) and ODM(MongoDB).

The goal of this document is to implement the creation of record with the help of Hibernate as an example.

Firstly, the dependency of Hibernate and JDBC driver:

```xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.2.0.Final</version>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>6.0.2</version>
</dependency>
```

And then, our data model looks like this:

```java
@Entity(name = "Messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fromName;
    private String toName;
    private Timestamp createTime;
    private String message;

    
    ...
```

Notice:

  1. the setters and getters are omitted;
  2. we need to set the strategy to `GenerationType.IDENTITY` to match the MySQL `auto_increment` definition.

The corresponding MySQL table should be like this:

```sql
create table Messages (
    id integer not null auto_increment,
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

The configurations are like below:

```java
    public void bootstrap() {
        ServiceRegistry serviceRegistry = configureServiceRegistry();
        Metadata metadata = configureMetadata(serviceRegistry);
        sessionFactory = configureSessionFactory(metadata);
    }

    private ServiceRegistry configureServiceRegistry() {
        ServiceRegistry result = new StandardServiceRegistryBuilder()
                .applySetting("hibernate.connection.driver_class", "com.mysql.cj.jdbc.Driver")
                .applySetting("hibernate.connection.url",
                        "jdbc:mysql://rpi.fritz.box/hibernate_learning?serverTimezone=UTC")
                .applySetting("hibernate.connection.username", "hl")
                .applySetting("hibernate.connection.password", "nopassword")
                .build();

        return result;
    }

    private Metadata configureMetadata(ServiceRegistry serviceRegistry) {
        Metadata result = new MetadataSources(serviceRegistry)
                .addAnnotatedClass(Message.class)
                .getMetadataBuilder()
                .build();

        return result;
    }

    private SessionFactory configureSessionFactory(Metadata metadata) {
        SessionFactory result = metadata.getSessionFactoryBuilder()
                .build();

        return result;
    }
```

Here we have explictly specified the mapper class. There is no way to scan mapper classes in a package with Hibernate alone. If we want to do this, use a framework (for example Spring) instead.

Now, the creation of the data should be like this:

```java
    public void create() {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();

        Message m = new Message();
        m.setCreateTime(Timestamp.valueOf(LocalDateTime.now()));
        m.setFromName("A");
        m.setToName("B");
        m.setMessage("Hello world!");
        Long messageId = (Long) session.save(m);

        tx.commit();
        session.close();

        System.out.println("Added message with ID: " + messageId);
    }
```

Finally, don't forget to close the sessionFactory, otherwise the program will not stop:

```java
    public void cleanUp() {
        sessionFactory.close();
    }
```

# Connect with Authentication Using Java Driver

If the MongoDB server has enabled the authorization, we have to connect to it with username and password. The MongDB URI will help us to do this:

  ```java
String urlString = String.format("mongodb://%s:%s@%s:%d", username, password, hostname, port);
MongoClient mongoClient = new MongoClient(new MongoClientURI(urlString));
MongoDatabase db = mongoClient.getDatabase(database);
  ```

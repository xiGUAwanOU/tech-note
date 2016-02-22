# Use MongoDB Client

In maven, the dependencies should be:

  ```xml
<dependency>
	<groupId>org.mongodb</groupId>
	<artifactId>mongo-java-driver</artifactId>
	<version>...</version>
</dependency>
  ```

A simple source code example is here:

  ```java
import java.util.Arrays;
import java.util.List;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoDatabase;

public class Main {
	public static void main(String[] args) {
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		MongoDatabase db = mongoClient.getDatabase("test");

		insert(db);
		update(db);
		search(db);
		delete(db);

		mongoClient.close();
	}

	public static void insert(MongoDatabase db) {
		db.getCollection("restaurant").insertOne(
		        new Document()
		                .append("name", Arrays.asList("John", "Doe"))
		                .append("telephone", "1234567890")
		                .append("address", "42 Hello World St."));
	}

	public static void delete(MongoDatabase db) {
		db.getCollection("restaurant").deleteOne(
		        new Document()
		                .append("name", Arrays.asList("Jane", "Joe")));
	}

	public static void update(MongoDatabase db) {
		db.getCollection("restaurant").updateOne(
		        new Document()
		                .append("name", Arrays.asList("John", "Doe")),
		        new Document()
		                .append("$set",
		                        new Document()
		                                .append("name", Arrays.asList("Jane", "Joe"))));
	}
	
	public static void search(MongoDatabase db) {
		FindIterable<Document> results = db.getCollection("restaurant").find();
		for(Document d : results) {
			@SuppressWarnings("unchecked")
			List<String> name = (List<String>) d.get("name");
			System.out.println(name.get(0) + " " + name.get(1));
			System.out.println(d.getString("address"));
		}
	}
}
  ```

We can find it is very similar to the MongoDB shell, expect that we use `Arrays.asList` instead of `[]` and `new Document` instead of `{}`.

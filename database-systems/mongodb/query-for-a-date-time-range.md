# Query for a Date (Time) Range

On inserting of the record, we should save an `ISODate` typed (in MongoDB shell) or a `Date` typed (in Java) object.

In MongoDB shell, we could use:

  ```console
> db.articles.find( { "publishDate" : { $gte: ISODate("2015-08-07T00:00:00Z"), $lt: ISODate("2015-08-08T00:00:00Z") } } );
  ```

And in Java, we could do this (Joda DateTime library used):

  ```java
Document doc = mdbc.db.getCollection("articles").find(new Document()
		.append("publishDate", new Document()
				.append("$gte", ISODateTimeFormat.dateTimeNoMillis().parseDateTime("2015-08-07T00:00:00Z")
						.withZone(DateTimeZone.UTC).toDate())
				.append("$lt", ISODateTimeFormat.dateTimeNoMillis().parseDateTime("2015-08-08T00:00:00Z")
						.withZone(DateTimeZone.UTC).toDate())));
  ```

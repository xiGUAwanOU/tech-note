# DST Problem

Be careful, there is DST!

In a PHP project, I'm implementing a RESTful interface providing date time information with its timezone offset (GMT+1 or GMT+2). The problem with the database is, I can't store the date time information as `TIMESTAMP` or `DATETIME`, only as `VARCHAR`. So I've just parsed the local date time to strings, and stored it into the database, and then calculated timezone offset according to the current time.

At first, everything are Ok. However, the season changed and there is no DST anymore. If the time is in the past, at that time there __WAS__ DST, then the timezone offset will be wrong for the time in the past.

The lesson learned from this fail is the data stored in the database (if it can not be stored with its specific type, such as `TIMESTAMP` or `DATETIME` in the example) should be standardized. For example, store UTC instead of local date time in database, and convert the UTC time to local time after it is retrieved. It is not limited to date and time, for other data stored in database, like different units (meter, kilometer, mile, etc.), it is also better to store these data in standardized form or as an "absolute" value.

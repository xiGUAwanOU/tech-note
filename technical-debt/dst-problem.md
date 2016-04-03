# DST Problem

Be careful, there is DST!

In a PHP project, I've calculated timezone offset according to the current time. However, if the time is in the past, at that time it was DST, and the current time is not DST, then the timezone offset will be wrong for the time in the past.

The lesson learned from this fail is the data stored in the database should be standardized. For example, store UTC instead of local time in database, and convert the UTC time to local time after it is retrieved. It is not limited to date and time, for other data stored in database, like different units (meter, kilometer, mile, etc.), it is also better to store these data in standardized form or as an "absolute" value.

# Cursor Timeout

_Most content of this article is from: [the official MongoDB document](https://docs.mongodb.org/manual/core/cursors/)_

In the official document, it is said that "by default, the server will automatically close the cursor after 10 minutes of inactivity, or if client has exhausted the cursor".

I guess the "inactive" cursor should be the cursor being referenced by a variable in the application, but has no communication with the server. And if the cursor works with batch, while processing the batch, there is no communication between the client and the server. So if the batch is large enough, makes the processing of the batch longer than 10 minutes. There will be a "cursor timeout error".

To avoid this, one can definitely disable the cursor timeout. However it may not be a good choice, because if there is a network error, the cursor information may stay in the MongoDB server forever.

The better solution could be set a smaller batch size, so that the processing of a batch could be finished in 10 minutes. This fulfills the 10 minutes life time requirement.

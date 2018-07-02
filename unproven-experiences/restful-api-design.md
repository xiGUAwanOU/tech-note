# RESTFul API Design Guide

The relationships between entities is a pain for RESTFul API. With relationships, we have to decide if we want to: either throw away all the mighty database queries, let the client generate 1,000 queries; or provide 1,000 different possible endpoints for the clients need.

I'd say neither of the two are satisfying. By taking the first approach, we will have heavy loaded server. By taking the second one, the design of the endpoints are not independent from the implementation of the clients anymore.

By reading, I tend to go for the second approach; however by writing, I'd like to go for the first approach.

While reading, we will have different GET endpoints for different views in frontend, with different suffix after the entity. E.g. to display an article with its tags, the endpoint will be `GET /articles/with_tags` or `GET /articles/{articleId}/full`. I'm considering this as extracting the parameters (JSON returned by server) from the template (HTML stuff in the client). However actually they still coupe with each other.

While writing, we will update different types of entities one by one. E.g. to update the tag list of an article by adding new tags, client will call `POST /tags`, and `PUT /article` separately. We could even call the tag creation endpoint directly after the tag list loses its focus.

And until now these rules works fine for my simple use cases.

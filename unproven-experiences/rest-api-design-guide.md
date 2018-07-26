# REST API Design Guide

## Updated on 26. Jul. 2018
Have changed my mind. True that probably REST API is not doing well if the data is deeply related. But the question is, why we want to avoid multiple HTTP request at the first place?

Probably out of the reason of response time, we don't want user to wait long time before they get the result. But actually the response time is depends on many facts. The number of HTTP requests is just one of them. If the system itself is not scalable, or it is hard to be scaled separately, even if we can reduce the HTTP request number, but user still need to wait a long time for the single HTTP request, or even time out.

So why not just make more requests, stick to the REST API, stick to the microservices and make the backend separately scalable?

I think I'm one of the devout believers (for) now...

## Updated on 24. Jul. 2018
Have read an interesting article on Medium and then read the [REST API Tutorial](https://restfulapi.net/), which have brought me new understanding about REST API.

But the core problem is still not solved yet. How can we deal with the reationships between entities? The pure REST API way to solve this problem is somehow brutal-force. "Just cache it, I'll provide a TTL, just follow it."

From the discussion between people with different opinions, I can see how different worlds clash each other. But one thing is the same, people want their own world to be simple and clean. E.g., frontend developers want a clean API so that they can query whatever data with whatever relationships in the same way. However backend devlopers want a clean API so that they are all consistent to each other.

It seems that the "frontend server" is the temporary solution, providing whatever frontend needs, and querying whatever data from the backend server in a consistent way. Sounds like a facade? Maybe there should be a "cloud programming language".

But for a single server tiny website, I'll still stick to the original version.

## Original Version on 2. Jul. 2018
The relationships between entities is a pain for REST API. With relationships, we have to decide if we want to: either throw away all the mighty database queries, let the client generate 1,000 queries; or provide 1,000 different possible endpoints for the clients need.

I'd say neither of the two are satisfying. By taking the first approach, we will have heavy loaded server. By taking the second one, the design of the endpoints are not independent from the implementation of the clients anymore.

By reading, I tend to go for the second approach; however by writing, I'd like to go for the first approach.

While reading, we will have different GET endpoints for different views in frontend, with different suffix after the entity. E.g. to display an article with its tags, the endpoint will be `GET /articles/with_tags` or `GET /articles/{articleId}/full`. I'm considering this as extracting the parameters (JSON returned by server) from the template (HTML stuff in the client). However actually they still coupe with each other.

While writing, we will update different types of entities one by one. E.g. to update the tag list of an article by adding new tags, client will call `POST /tags`, and `PUT /article` separately. We could even call the tag creation endpoint directly after the tag list loses its focus.

And until now these rules works fine for my simple use cases.

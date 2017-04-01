# Print HTTP Status Code Using `curl`

The goal is to only print the http status code:

```console
$ curl -s -o /dev/null -w "%{http_code}" http://www.example.org/
```

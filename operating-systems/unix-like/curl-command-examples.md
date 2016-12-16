# `curl` Command Examples

The `curl` command is very useful testing the currently popular RESTful web services. The most basic usage of `curl` is:

  ```console
$ curl <url>
  ```

The response will be print to the `stdout`. If we want the response be written into a local file, use one of the following two alternatives:

  ```console
$ curl -o <filename> <url>
$ curl -O <url>
  ```

With the option `-O`, the last part of the URL path will be treated as the filename.

Following options are related to the web development / testing:

  ```console
$ curl -X <method>
  ```

Specify the querying method, could be one of the `GET`, `POST`, `PUT` or `DELETE`.

  ```console
$ curl -u username:password
  ```

Basic authentication with username and password.

  ```console
$ curl -H 'Content-Type:application/json'
  ```

Specify the request header, the example uses JSON as the content type.

  ```console
$ curl -d '{ "key": "value" }'
  ```

Specify the reqeust data, the example uses a piece of JSON text as the reqeust data.

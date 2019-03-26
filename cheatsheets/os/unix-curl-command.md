keywords curl, http, method, set, send, header, body, file
labels unix, command

# Unix: Curl Command

## 1. Basic Usage
```console
$ curl <url>
```

## 2. Output File
```console
$ curl -o <filename> <url>
$ curl -O <url>
```

With the option `-O`, the last part of the URL path will be treated as the filename.

## 3. Specify HTTP Method
```console
$ curl -X <method> <url>
```

`<method>`: could be `PUT`, `POST`, `GET` and `DELETE`.

## 4. With Credentials
```console
$ curl -u <username>:<password> <url>
```

## 5. Set Headers
```console
$ curl -H <header1> -H <header2> <url>
```

## 6. Set Body (Data)
```console
$ curl -d <data> <url>
```

Specify the reqeust data, the example uses a piece of JSON text as the reqeust data.

## 7. Upload File
WIP.

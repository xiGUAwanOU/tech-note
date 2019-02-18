# Dump Raw HTTP Requests
There is a useful command called `nc`. There is some tiny differences between BSD version and GNU version. Following instructions are for BSD version, since I'm using MacOS mostly.

Listen to port 80 with following command:

```console
$ nc -l 80
```

All the HTTP request sent to 80 will be displayed in the console.

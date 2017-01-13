# Netcat Command

Netcat command is a good tool for network connections. There are several examples to show us how to use netcat.

We could use netcat as a simple chat program:

  ```console
$ nc -l 1234
  ```

This will make netcat listening port 1234. Then we could fire up another netcat instance:

  ```console
$ nc 127.0.0.1 1234
  ```

This will make netcat connect to port 1234 on 127.0.0.1. Now if we type some words in any of the two instances, the typed words will show up in the other side.

Netcat could also be used for testing network connections:

  ```console
$ nc -vz <hostname> <port>
  ```

This will make netcat connect to the specified host and port and send nothing, which is suitable for testing the network connections.

We could use netcat to send the HTTP requests:

  ```console
$ nc -v google.com 80
found 0 associations
found 1 connections:
     1:	flags=82<CONNECTED,PREFERRED>
	outif en0
	src 172.16.5.62 port 51926
	dst 172.217.21.206 port 80
	rank info not available
	TCP aux info available

Connection to google.com port 80 [tcp/http] succeeded!
GET / HTTP/1.1
Host: www.google.com
Connection: close

  ```

Don't miss the last empty line in the end of the input. Although netcat could do this, curl would be a better option for the same task.

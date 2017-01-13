# Netcat Command

Netcat command is a good tool for network connections. There are several examples to show us how to use netcat.

We could make netcat a simple chat program:

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

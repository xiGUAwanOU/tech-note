# UDP Client Implementation

It is simple, very convenient for dirty tests, just write code like this:

```python
import socket


udpIp = '127.0.0.1'
udpPort = 5555

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
while True:
    message = input('Message to send: ')
    sock.sendto(bytes(message, 'utf-8'), (udpIp, udpPort))
    if message == 'exit':
        break
```

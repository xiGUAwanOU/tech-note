# Create SSH Tunnel

The SSH Tunnel can connect a local port to a remote port, so that all the messages sent to the local port could be forwarded to the remote port.

Simply use the following command:

```console
$ ssh -v -C -N -L <local_port>:127.0.0.1:<remote_port> <remote_user_name>@<remote_host_name>
```

# Remote Profiling with VisualVM

No idea why Oracle VisualVM doesn't work in my situation, so used the official VisualVM from: https://visualvm.github.io.

Firstly, let the application run on the remote sever with following command line arguments:

```console
-Dcom.sun.management.jmxremote \
-Dcom.sun.management.jmxremote.port=$JMX_PORT \
-Dcom.sun.management.jmxremote.ssl=false \
-Dcom.sun.management.jmxremote.authenticate=false \
-Djava.net.preferIPv4Stack=true
```

The meaning of the options should be explained by its name.

Create a socket proxy to the remote server:

```console
$ ssh -v -D $PROXY_PORT $REMOTE_HOST_IP
```

Then open the VisualVM, go to the Network Settings. And set the socket proxy to `localhost:$PROXY_PORT`

Connect to the remote server using the IP address or host name from the view point of socket proxy (not from external network), delete the default "jstatd" connection.

Then create a new JMX connection, using `$JMX_PORT` specified while running the remote application.

Wait for the connection established and start profiling.

Note 1.: sometimes VisualVM could be very slow in MacOS while setting the network proxy. In this case, find the preference setting files in `/Users/$USER_NAME/Library/Application Support/VisualVM` folder, and edit it manually.

Note 2.: VisualVM could be affected by all the JVM applications, even those running on the local machine. So if it stucks, check if there is any JVM threads that also stuck on the local machine.

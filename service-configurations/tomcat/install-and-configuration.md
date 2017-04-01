# Install and Configuration

Firstly download Tomcat distro using curl:

```console
curl -O {tomcat-download-url}
```

Unzip it, and edit the `conf/tomcat-user.xml` file add following two lines:

```xml
<role rolename="manager-gui"/>
<user username="admin" password="i-wont-tell-you" roles="manager-gui"/>
```

To allow the remote access, modify the `webapps/manager/META-INF/context.xml` file, change the IP address to `.*`.

Don't forget to restart Tomcat after modifying the configuration files.

Access Tomcat manager GUI using following URL:

```text
http://{host}:{port}/manager/html
```

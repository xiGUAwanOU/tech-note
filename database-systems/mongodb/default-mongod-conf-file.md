# Default `mongod.conf` File

In Linux, MongoDB will copy a default configuration file in `/etc/mongod.conf` on installation. However, in other systems like FreeBSD and Windows, no such default configuration file will be shipped.

The content of a default configuration file should be like this:

  ```yaml
storage:
    dbPath: D:\tools\MongoDB3.2\db
    journal:
        enabled: true

systemLog:
    destination: file
    path: D:\tmp\mongod.log
    logAppend: true

net:
    bindIp: 127.0.0.1
    port: 27017

#security:
#    authorization: enabled
  ```

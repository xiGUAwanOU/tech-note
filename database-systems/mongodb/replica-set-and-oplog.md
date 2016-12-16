# Replica Set and Oplog

About the configuration, the only thing to set is the replica name. We could speicify it using `--replSet "rsName"` option while running the `mongod` program, or we could add the replica set name into the configuration file.

Next, we need to setup the replica set using the primary instance. Just type the following commands:

  ```console
> rs.initiate()
  ```

This will initialize the replica set. Then we need to add instances into the replica set:

  ```console
> rs.add("hostname:port")
  ```

The added instances will be treated as secondaries in the replica set. We could also add an arbiter into the replica set:

  ```console
> rs.addArb("hostname:port")
  ```

Oplog is a log of operations that applied on the primary. The secondaries will copy the oplog from primary and repeat the operations on the primary.

Notice that, the oplog size is very important when adding a new instance after a long run of the replica set. If the data copying time (from primary to newly added secondary) is longer than the oplog time, some of the new operations would not be able to be repeated on the newly added secondary any more, which will cause some problem.

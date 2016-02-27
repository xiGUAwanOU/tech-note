# Deploy a Sharded Cluster

Most of the things are already described on the [offical website of MongoDB](https://docs.mongodb.org/manual/tutorial/deploy-shard-cluster/). But still, it is not enough.

Firstly some words about the `bindIp` field under `net` section in `mongod.conf` file. It is "the IP address that mongos or mongod binds to in order to listen for connections from applications", but not a IP address whitelist. So just comment it out if we want to listen to clients from outside.

## Deploy the Config Server Replica Set

Following the offical tutorial, the first step should be deploying the replica set of config servers. Edit following fields in `mongod.conf` file for each config servers:

  ```text
sharding:
   clusterRole: configsvr
replication:
   replSetName: configReplSet
net:
   port: <port>
storage:
   dbpath: <path>
  ```

By convention, the port of a config server should be `27019`.

And then connect a mongo shell to one of the config servers and run rs.initiate() to initiate the replica set:

  ```text
rs.initiate( {
   _id: "configReplSet",
   configsvr: true,
   members: [
      { _id: 0, host: "<host1>:<port1>" },
      { _id: 1, host: "<host2>:<port2>" },
      { _id: 2, host: "<host3>:<port3>" }
   ]
} )
  ```

The following is my working configuration:

  ```text
rs.initiate( {
  _id: "configReplSet",
  configsvr: true,
  members: [ { _id: 0, host: "172.21.40.186:27019" } ]
} )
  ```

Notice, even there is only one config server in the replica set, and it runs on local machine, we still need it to be a "public address" (an address that is available to other machines in the same network). Because this address is not only used in the replica set of config servers, but will also be transfered through different shards. If it is set to something like `localhost:27019` or `127.0.0.1:27019`, the shards will try to treat themselves as the config server.

## Start the `mongos` Instances

Simply followed the instructions on the official tutorial, we use `sharding.configDB` to specify the config server replica set. So in `mongos.conf` file, add these two lines:

  ```text
sharding:
  configDB: configReplSet/172.21.40.186:27019
  ```

Notice: Here the configDB __MUST__ start with the replica set name! Otherwise, the `mongos` will use the legacy SCCC (Sync Cluster Connection Configuration) protocol instead of CSRS (config server replica set), and will be incompatable with config server replica set. We will get an error in this case like: "Need to swap sharding catalog manager. Config server reports that it is in replica set mode, but we are still using the legacy SCCC protocol for config server communication."

Don't forget to comment those storage settings out, because mongos do not need any storage. And don't forget to change the port of mongos to `27017`. We could use following command to start a mongos service:

  ```console
$ mongos -f /path/to/mongos.conf &
  ```

## Add Shards to the Cluster

Use mongo shell to connect to the mongos service we just started, and add other server on which mongod is running:

  ```text
sh.addShard("172.21.40.187:27017");
sh.addShard("172.21.40.188:27017");
sh.addShard("172.21.40.189:27017");
...
  ```

## Enable Authentication in a Sharded Cluster

Before we add any data into the sharded cluster, we must enable authentication for it.

Firstly we create a key-file:

  ```console
$ openssl rand -base64 741 > /path/to/mongodb.key
$ chmod 600 /path/to/mongodb.key
  ```

Notice, the user and group for this file must be `mongodb`, otherwise it won't work.

Then, we copy this file to each machine on the cluster, and do the settings for each mongod and mongos:

  ```text
security:
  keyFile: /srv/mongodb/keyfile
  ```

At last, we connect to mongos through the [localhost exception](https://docs.mongodb.org/manual/core/security-users/#localhost-exception), and run the following commands:

  ```text
use admin
db.createUser( {
  user: "admin",
  pwd: "nopassword",
  roles: [
    {
      role: "root",
      db: "admin"
    }
  ]
} )
  ```

Now, a MongoDB shard cluster is ready to use. To add databases and collections in MongoDB, read [this article](shard-for-databases-and-collections.md).

# Enable Authentication

Run following command in mongo shell:

  ```javascript
use admin
db.createUser(
  {
    user: "admin",
    pwd: "nopassword",
    roles: [ { role: "root", db: "admin" } ]
  }
)
  ```

And then set `security.authorization` field in `mongod.conf` to `enabled`, and restart `mongod` service.

Use following command with mongo shell to connect to server with authentication:

  ```console
$ mongo -u "admin" -p "nopassword" --authenticationDatabase "admin"
  ```

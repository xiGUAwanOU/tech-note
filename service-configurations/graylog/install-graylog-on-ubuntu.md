# Install Graylog on Ubuntu

Currently I'm using Ubuntu 14.04.4 and installing Graylog 2.0.

Graylog is not easy to install. To install it on Ubuntu, the system should meet following prerequisites:

  * Java (>= 8);
  * MongoDB (>= 2.4);
  * Elasticsearch (>= 2.x);

The installation of prerequisites will not be covered in this article.

After that, run the following commands:

  ```console
$ sudo apt-get install apt-transport-https
$ wget https://packages.graylog2.org/repo/packages/graylog-2.0-repository_latest.deb
$ sudo dpkg -i graylog-2.0-repository_latest.deb
$ sudo apt-get update
$ sudo apt-get install graylog-server
  ```

After installation AND CONFIGURATION, we could use following command to start Graylog:

  ```console
$ sudo start graylog-server
  ```

However, we should firstly do some configurations.

Firstly, we should generate a secret key to secure the stored user passwords:

  ```console
$ sudo apt-get install pwgen
$ pwgen -N 1 -s 96
  ```

Copy and paste the result to the file `/etc/graylog/server/server.conf`, after the line starting with `password_secret =`:

  ```text
# You MUST set a secret to secure/pepper the stored user passwords here. Use at least 64 characters.
# Generate one by using for example: pwgen -N 1 -s 96
password_secret = FKGtAkgFbXAJrLBC90DvWBEn6TG0h0PyZ23qdxlq56uoS81sPvtg1HtdTAGfxJDTBAxafQcrZ1c6cvvIti1TK4UC3iI8lryL
  ```

And then, we should set a root password:

  ```console
$ echo -n newpassword | shasum -a 256
  ```

Copy and paste the result to the file `/etc/graylog/server/server.conf`, after the line starting with `root_password_sha2 =`:

  ```text
# You MUST specify a hash password for the root user (which you only need to initially set up the
# system and in case you lose connectivity to your authentication backend)
# This password cannot be changed using the API or via the web interface. If you need to change it,
# modify it in this file.
# Create one by using for example: echo -n yourpassword | shasum -a 256
# and put the resulting hash value into the following line
root_password_sha2 = 5912d5590ceedd61724ee20d37b515427916c915081bccad29e0c684476014c4
  ```

Notice that there shouldn't be a `-` after the sha2 code.

Next step is to change the Elasticsearch shards number to 1:

  ```text
# How many Elasticsearch shards and replicas should be used per index? Note that this only applies to newly created indices.
elasticsearch_shards = 1
  ```

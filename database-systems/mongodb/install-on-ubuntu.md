# Install on Ubuntu

To install MongoDB on Ubuntu, follow the instructions below:

Firstly import the key:

  ```console
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
  ```

Add repository to list:

  ```console
$ echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
  ```

At last install packages:

  ```console
$ sudo apt-get update
$ sudo apt-get install mongodb-org
  ```

Or if we only want a client:

  ```console
$ sudo apt-get install mongodb-org-shell mongodb-org-tools
  ```

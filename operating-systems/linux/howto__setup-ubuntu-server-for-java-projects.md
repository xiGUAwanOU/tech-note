# Setup Ubuntu Server for Java Projects

```console
# add-apt-repository ppa:linuxuprising/java
# apt update
# apt install oracle-java11-installer
# apt install oracle-java11-set-default

# apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
# echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
# apt update
# apt install -y mongodb-org
# service mongod start

# apt install htop
```

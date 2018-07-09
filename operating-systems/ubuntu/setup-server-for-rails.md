# Setup Server for Rails
Using puma, just want to start from something small.

Bash script before reboot, use `bash -v` to run with verbosity:

```bash
# Setup timezone
timedatectl set-timezone UTC

# Port forwarding from 80 and 443 to 3000:
ufw allow proto tcp to 0.0.0.0/0 port 22
ufw allow proto tcp to 0.0.0.0/0 port 80
ufw allow proto tcp to 0.0.0.0/0 port 443
ufw allow proto tcp to 0.0.0.0/0 port 3000
( \
  echo '*nat'; \
  echo ':PREROUTING ACCEPT [0:0]'; \
  echo '-A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000'; \
  echo '-A PREROUTING -p tcp --dport 443 -j REDIRECT --to-port 3000'; \
  echo 'COMMIT'; \
  cat /etc/ufw/before.rules \
) > /etc/ufw/before.rules.new
mv /etc/ufw/before.rules.new /etc/ufw/before.rules
ufw --force enable

# Install MongoDB (or replace this part with any possible database technologies)
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list
apt-get update
apt-get install -y mongodb-org

# Install RVM
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable
usermod -a -G rvm `whoami`

# Install Certbot
apt-get install software-properties-common
add-apt-repository -y ppa:certbot/certbot
apt-get update
apt-get install -y certbot python3-pyasn1
```

After reboot, don't put this into bash script:

```bash
# Start MongoDB
service mongod start

# Install Ruby
rvm install ruby-2.5.1
rvm --default use ruby-2.5.1

# Prepare for Ruby on Rails
gem install bundler --no-rdoc --no-ri

# Fetch SSL certificate
certbot certonly --standalone --http-01-port 3000 -d captain-bonbon.de -d www.captain-bonbon.de
```

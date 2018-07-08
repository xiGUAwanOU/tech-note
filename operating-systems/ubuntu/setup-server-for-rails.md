# Setup Server for Rails
Using puma, just want to start from something small.

```bash
# Setup timezone
timedatectl set-timezone UTC

# Turn on firewall to prevent access to unconfigured server
# Enable this only if firewall cannot be configured in the cloud provider
# ufw allow 22
# ufw --force enable
# ufw status

# Install MongoDB (or replace this part with any possible database technologies)
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list
apt-get update
apt-get install -y mongodb-org

# Install Ruby
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable
usermod -a -G rvm `whoami`

### WARNING: Re-login here! Otherwise RVM won't work. ###

rvm install ruby-2.5.1
rvm --default use ruby-2.5.1

# Prepare for Ruby on Rails
gem install bundler --no-rdoc --no-ri

```

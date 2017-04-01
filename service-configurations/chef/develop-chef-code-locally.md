# Develop Chef Code Locally

Currently, our iteration is:
  1. write Chef code;
  2. commit it to GitLab;
  3. clean-up and restart the AWS instance;
  4. try the result out;
  5. go back to step 1.
  
This is super time consuming. To break this "write-upload-run-pray" circle, we have to firstly make a local executing environment for chef.

## 1. Prepare the Local Development Environment

To start the development with Chef, we should firstly install **Chef Development Kit**. Besides, **Virtual Box** and **Vagrant** (a tool which could be used to communicate with the virtual machines) are the two external tools we need. Install them firstly.

## 2. Create an Example Cookbook

That's very simple. Firstly create a new cookbook called `motd_ubuntu`:

```console
$ chef generate cookbook /path/to/cookbooks/motd_ubuntu
```

And then create a template for `server-info` file:

```console
$ chef generate template cookbooks/motd_ubuntu server-info
```

With the content below:

```bash
#!/bin/sh

printf "\nhostname:  <%= node['hostname'] %>"
printf "\nfqdn:      <%= node['fqdn'] %>"
printf "\nmemory:    <%= node['memory']['total'] %>"
printf "\ncpu count: <%= node['cpu']['total'] %>\n"
```

And then write the `default.rb` file:

```ruby
template '/etc/update-motd.d/98-server-info' do
  source 'server-info.erb'
  mode '0755'
end
```

## 3. Build the Kitchen

Now comes the main part. We have to build a kitchen for Chef and his cookbooks and recipes. This can be done easily by writing some configurations into `.kitchen.yml` file:

```yml
---
driver:
  name: vagrant

provisioner:
  name: chef_zero

platforms:
  - name: ubuntu-14.04
    driver:
      customize:
        memory: 256

suites:
  - name: default
    run_list:
      - recipe[motd_ubuntu::default]
    attributes:
```

After the configuration is done, run following command to start the instance:

```console
$ kitchen create
```

This will last very very long, since it needs to download the Ubuntu virtual machine mirror from the Internet.

We could run the following command to see the current status of the virtual machines:

```console
$ kitchen list
```

## 4. Do Something in the Kitchen

After we have created the virtual machine, we have to apply our cookbooks on it. To do this, simply run the following command:

```console
$ kitchen converge
```

Done.

## 5. Taste the Food

Once the cookbooks are applied on the virtual machine, we could login to the machine to check the result. Use the following command to login to the virtual machine:

```console
$ kitchen login
```

This calls the SSH client to login to the virtual machine. Then the MOTD will be shown once we have logged in.

## 6. Clean Up After the Meal

To destroy anything after cooking and eating, just call the following command:

```console
$ kitchen destroy
```

After that, if you call `kitchen list`, a `<Not Created>` will be shown at the column `Last Action`.

# Using Templates

It is worth to know that Chef is using Erubis as the template engine. If there is any problem with the template syntax, maybe we could find some help on the [offical user's guide of Erubis](http://www.kuwata-lab.com/erubis/users-guide.html).

Let's start from the MOTD example, firstly we should modify the template file so that it receives a custom variable:

```bash
#!/bin/sh

printf "\nGreetings! There is some custom message for you: <%= @custom_message %>\n"
printf "\nhostname:  <%= node['hostname'] %>"
printf "\nfqdn:      <%= node['fqdn'] %>"
printf "\nmemory:    <%= node['memory']['total'] %>"
printf "\ncpu count: <%= node['cpu']['total'] %>\n"
```

And then we should create a definition of attributes. Just create a file under `attributes/default.rb` with the content:

```ruby
default['the_message'] = "Hello world!"
```

And then modify the `recipes/default.rb` file:

```ruby
template '/etc/update-motd.d/98-server-info' do
  source 'server-info.erb'
  mode '0755'
  variables({
    :custom_message => node[:the_message]
  })
end
```

Here we could see how we apply the value from attribute definition to the template.

Now we could apply the cookbook and see the result.

# Basic Tutorial

Here is a brief tutorial about Chef 12. I've done it with the tutorial provided on the official website.

## 1. Some Basic Concepts

The first recipe could be like this:

  ```ruby
file '/tmp/motd' do
  content 'hello world'
end
  ```

This recipe describes the desired state of the MOTD file (being created, containing the specified text, etc.). Then run the `chef-client` command, the Chef code then will be read to fulfill the desired state.

For example, go with:

  ```console
$ chef-client --local-mode hello.rb
  ```

The desired state will be reached automatically:
* if we run the command for the first time, a file in `/tmp/motd` containing `hello world` will be created;
* if run this command again, nothing will happen, since it is already on the desired state;
* and if we run this command after the MOTD file has been changed manually, everything will go back to the desired state;
* and if we run this command after we have changed the desired state, everything will go to the new desired state.

If we want to clean things up, for example, like delete the file created, just write another recipe:

  ```ruby
file '/tmp/motd' do
  action :delete
end
  ```

And run with the command above, the MOTD file will be deleted automatically.

The summary provided by the official tutorial is very good:
* Resources (for example `file` in the case above is the resource) describe the what, not the how;
* Resources have actions;
* Recipes organize resources.

## 2. A More Complex Example

This recipe updates the `apt-get` repo, installs `apache` automatically, starts it, and creates a webpage for it:

  ```ruby
apt_update 'Update the apt cache daily' do
  frequency 86_400
  action :periodic
end

package 'apache2'

service 'apache2' do
  supports :status => true
  action [:enable, :start]
end

file '/var/www/html/index.html' do
  content '<html>
  <body>
    <h1>hello world</h1>
  </body>
</html>'
end
  ```

## 3. Structure of the Recipes

Create a cookbook to hold recipes:

  ```console
$ chef generate cookbook /path/to/cookbooks/cookbooks_name
  ```

To split up different kind of source codes other than the ruby code, we could use template:

  ```console
$ chef generate template /path/to/cookbooks/cookbooks_name index.html
  ```

Then, write following HTML codes into the `index.html` file:

  ```html
<html>
  <body>
    <h1>hello world</h1>
  </body>
</html>
  ```

Write a `default.rb` into the `recipes` folder:

  ```ruby
package 'apache2'

service 'apache2' do
  action [:enable, :start]
end

template '/var/www/html/index.html' do
  source 'index.html.erb'
end
  ```

Then, run the command to execute a recipe in a cookbook:

  ```console
$ sudo chef-client --local-mode --runlist 'recipe[cookbook_name]'
  ```

This will execute the `default` recipes in the cookbook, which is equivalent to:

  ```console
$ sudo chef-client --local-mode --runlist 'recipe[cookbook_name::default]'
  ```

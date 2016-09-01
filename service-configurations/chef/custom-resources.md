# Custom Resources

The most interesting topic after one has learned how to use Chef could be define a custom resources. Actually it is not hard to create a new resource using Chef.

Notice that this article only works after Chef 12.5, before that, we have to write some definitions instead of resources.

Firstly, create a new cookbook:

  ```console
$ chef generate cookbook /path/to/cookbooks/custom_resource
  ```

Then create a folder called `resources`, and put a file called `file_writer.rb` into it, with its content:

  ```ruby
# Specifies the name of the resource
# Otherwise, the resource could be referenced as <cookbook_name>_<resource_file_name>
resource_name :file_writer

# Specifies the default action
default_action :write 

# Define a property
property :user_name, String, default: 'World'

# Define a routine which checks and does something with the current state
load_current_value do 
  # Do nothing here.
end

# Define an action
action :write do
  file '/tmp/output.txt' do
    content 'Hello, %s!' % user_name
  end
end
  ```

Then write something to the `default.rb`:

  ```ruby
file_writer 'whatever' do
  user_name 'xiGUAwanOU'
end
  ```

Done! Let's run the recipe, use the command:

  ```console
$ chef-client --local-mode --runlist 'recipe[custom_resource]'
  ```

There will be a file `/tmp/output.txt` created with content `Hello, xiGUAwanOU!`

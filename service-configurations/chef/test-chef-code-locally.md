# Test Chef Code Locally

After we have setup the developing environment locally by following the article [Develop Chef Code Locally](develop-chef-code-locally.md), we still haven't avoided the "write-upload-run-pray" circle, we have just shortened it. To avoid the circle, we have to make the verification automatic.

## 1. Write the Varification Code

It is worth to mention that by testing the Chef code, we are using a tool called InSpec, which is relatively new in the Chef world. Here we could find a [reference for InSpec](https://docs.chef.io/inspec_reference.html).

All the test codes are stored in the `test` folder under the cookbook root folder, for example: `/path/to/cookbooks/cookbook_name/test`.

In this article, we just write some code to test the MOTD example on a Ubuntu virtual machine.

To test our recipes, we define a set of specifications, once the recipes match those specifications, the test is passed. The basic format of the specification looks like this:

  ```ruby
describe '<entity>' do
  it { <expection> }
end
  ```

`<entity>` is the object that we want to test, it could be a resource, a file, etc.. `<exception>` is the desired state of the `<entity>`. For example, for the MOTD creation, we need our file existing:

  ```ruby
describe file('/etc/update-motd.d/98-server-info') do
  it { should exist }
end
  ```

For this is the test of our `recipes/default.rb` recipe, accordingly, it should be stored as `/path/to/cookbooks/cookbook_name/test/recipes/default_test.rb`.

## 2. Run the Test

Firstly, we should add something into the `.kitchen.yml` file:

  ```yml
driver:
  name: vagrant

provisioner:
  name: chef_zero

verifier:
  name: inspec

platforms:
  - name: ubuntu-14.04
    driver:
      customize:
        memory: 256

suites:
  - name: default
    run_list:
      - recipe[motd_ubuntu::default]
    verifier:
      inspec_tests:
        - test/recipes
    attributes:
  ```

Notice that the 3 lines starting with `verifier`, it specifies which folder we should look into to find the tests.

To run a test is very simple, just run the following command:

  ```console
$ kitchen verify
  ```

Then there will be information on the console showing whether the verification is passed or not.

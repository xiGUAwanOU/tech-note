# C Extensions

## Basics

To call C functions in ruby, following the steps below:

1. make sure the `ruby.h` exists;
2. create a file called `extconf.rb` containing the contents below:

  ```ruby
require 'mkmf'

extension_name = 'cext'

dir_config(extension_name)
create_makefile(extension_name)
  ```

3. create a C source code file called `cext.c` containing the following contents:

  ```c
#include "ruby.h"

VALUE module_cext = Qnil;

void Init_cext();
VALUE method_the_number(VALUE self);

void Init_cext() {
  module_cext = rb_define_module("Cext");
  rb_define_method(module_cext, "the_number", method_the_number, 0);
}

VALUE method_the_number(VALUE self) {
  int x = 42;
  return INT2NUM(x);
}
  ```

4. run command `$ ruby extconf.rb` to generate the `Makefile`;
5. run command `$ make` to build the extension;
6. use `$ irb` to test the result:

  ```console
irb(main):001:0> require './cext'
=> true
irb(main):002:0> include Cext
=> Object
irb(main):003:0> puts the_number
42
=> nil
  ```

## Types

We could notice that most of the things in ruby world are typed `VALUE`, it is the ruby generic data type. Actually, each `VALUE` typed data has its own underlying type. Which are listed [here](http://ruby-doc.org/core-2.3.1/doc/extension_rdoc.html#label-Data+Types).

In addition, we have to convert ruby types to C types with the methods listed [here](http://ruby-doc.org/core-2.3.1/doc/extension_rdoc.html#label-Convert+VALUE+into+C+Data), and convert C types back to ruby types with the methods listed [here](http://ruby-doc.org/core-2.3.1/doc/extension_rdoc.html#label-Convert+C+Data+into+VALUE).

# C Extensions

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

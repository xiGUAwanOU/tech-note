# Define and Use Namespaces

For example we have following classes:

  * `Class1` is in namespace `ns1`;
  * `Class2` is in namespace `ns2`;
  * `AnotherClass1` is in namespace `n1`, and will be used in `Class1`;

And we have a `Main.php`, where we call `Class1` and `Class2`.

The definition and usage of namespaces should be like this:

Firstly the `Class1.php`:

  ```php
<?php
namespace ns1;

require_once('AnotherClass1.php');

class Class1 {
  public function go() {
    $ac1 = new AnotherClass1();
    return $ac1->go() . PHP_EOL . 'Class1';
  }
}
  ```

Notice that the namespace definition has to be the very first line of the source code. So we have to put the `require_once` methode call after the namespace definition.

And then `Class2.php`:

  ```php
<?php
namespace ns2;

class Class2 {
  public function go() {
    return 'Class2';
  }
}
  ```

And then `AnotherClass1.php`:

  ```php
<?php
namespace ns1;

class AnotherClass1 {
  public function go() {
    return 'AnotherClass1';
  }
}
  ```

At last the `Main.php`:

  ```php
<?php

require_once('Class1.php');
require_once('Class2.php');

use \ns1\Class1;
use \ns2\Class2;

$c1 = new Class1();
$c2 = new Class2();

echo $c1->go() . PHP_EOL;
echo $c2->go() . PHP_EOL;
  ```

Run following command, and the output will be:

  ```console
$ php Main.php
AnotherClass1
Class1
Class2
  ```

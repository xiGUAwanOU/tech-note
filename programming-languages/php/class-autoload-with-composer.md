# Class Autoload with Composer

A problem with [namespaces in PHP](https://github.com/xiGUAwanOU/tech-note/blob/master/programming-languages/php/define-and-use-namespaces.md) in php is, it doesn't like other languages `use` key word do not actually load any other PHP source code files. As a result, we have to manage the requires by ourselves.

The autoloading in [Composer](https://getcomposer.org/doc/01-basic-usage.md#autoloading) has solved this problem. With this feature, we map a base namespace to a specified base path, and other sub-namespaces and classes in the base namespace will be resolved to the relative path to the base path automatically.

For example:

We map base namespace `ns1` to base path `./`:

  * Then the sub-namespace `\ns1\pkg1` will be resolved to relative path `./pkg1`,
  * and the class `\ns1\pkg1\Class1` will be resolved to relative path `./pkg1/Class1.php`,
  * and analogously the class `\ns1\pkg2\AnotherClass2` will be resolved to relative path `./pkg2/AnotherClass2.php`.

And the source codes should be like this:

The `composer.json` file:

  ```json
{
  "autoload" : {
    "psr-4" : {
      "ns1\\" : "./"
    }
  }
}
  ```

After editing the `composer.json` file, we must run following command to dump the autoload information:

  ```console
$ composer dumpautoload
  ```

The `pkg1/Class1.php` file:

  ```php
<?php
namespace ns1\pkg1;

use \ns1\pkg2\AnotherClass2;

class Class1 {
  public function go() {
    $ac2 = new AnotherClass2();
    return $ac2->go() . PHP_EOL . 'Class1';
  }
}
  ```

The `pkg2/AnotherClass2.php` file:

  ```php
<?php
namespace ns1\pkg2;

class AnotherClass2 {
  public function go() {
    return 'AnotherClass2';
  }
}
  ```

The `Main.php` file:

  ```php
<?php
require_once ('vendor/autoload.php');

use \ns1\pkg1\Class1;

$c1 = new Class1();
echo $c1->go();
  ```

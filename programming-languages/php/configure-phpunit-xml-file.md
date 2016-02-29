# Configure PHPUnit XML File

Before doing this, we should check if the PHPUnit is correctly installed. If not, install it with composer. Installation of PHPUnit will not be covered here.

An example of `phpunit.xml` should be like this:

  ```xml
<phpunit>
    <testsuites>
        <testsuite name="Test All">
            <directory>test</directory>
        </testsuite>
    </testsuites>

    <filter>
        <whitelist processUncoveredFilesFromWhitelist="true">
            <directory suffix=".php">src</directory>
        </whitelist>
    </filter>

    <php>
        <var name="DB_DRIVER" value="mysql" />
        <var name="DB_HOST" value="localhost" />
        <var name="DB_PORT" value="3306" />
        <var name="DB_DATABASE" value="test_db" />
        <var name="DB_USERNAME" value="test_user" />
        <var name="DB_PASSWORD" value="nopassword" />
    </php>
</phpunit>
  ```

In element `testsuites` the test code directory is specified. In element `filter` we define a filter for the files for the coverage reports. At last, we defined some PHP constants in element `php`, which is used by database connection. In PHP we can use something like `$GLOBALS['DB_DRIVER']` to get the values of these constants.

Notice! If the test class is in a namespace, then use following code to use PHPUnit from the right namespace:

  ```php
<?php

namespace Foo\Bar;

class DummyTest extends \PHPUnit_Framework_TestCase {
    ...
}
  ```

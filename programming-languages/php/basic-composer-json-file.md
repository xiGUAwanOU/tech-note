# Basic `composer.json` File

A `composer.json` file for publishing a package on [Packagist](https://packagist.org/) should be like this:

  ```json
{
    "name": "monolog/monolog",
    "type": "library",
    "description": "Logging for PHP 5.3",
    "keywords": ["log","logging"],
    "homepage": "https://github.com/Seldaek/monolog",
    "license": "MIT",
    "authors": [
        {
            "name": "Jordi Boggiano",
            "email": "j.boggiano@seld.be",
            "homepage": "http://seld.be",
            "role": "Developer"
        }
    ],
    "require": {
        "php": ">=5.3.0"
    },
    "autoload": {
        "psr-0": {
            "Monolog": "src"
        }
    }
}
  ```

The required fields are `"name"`, `"description"` and `"require"`.

Monolog uses PSR-0 for autoloading. If we want to use PSR-4, write something like this:

  ```json
...
"autoload": {
    "psr-4": {
        "Monolog\\": "src/"
    }
}
...
  ```


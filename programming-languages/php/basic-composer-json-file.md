# Basic `composer.json` File

A `composer.json` file for publishing a package on [Packagist](https://packagist.org/) should be like this:

```json
{
  "name": "seagull/seagull-framework",
  "type": "project",
  "description": "Yet another (reinvented wheels) web application framework.",
  "keywords": ["webapp", "framework"],
  "homepage": "https://github.com/xiGUAwanOU/seagull-framework",
  "license": "BSD-2-Clause",
  "authors": [
    {
      "name": "Zihan LIN",
      "email": "xiguawanou@gmail.com",
      "role": "Developer"
    }
  ],
  "require": {
    "php": "~5.6 || ~7.0",
    "monolog/monolog": "~1"    
  },
  "require-dev": {
    "phpunit/phpunit": "~5"
  },
  "autoload": {
    "psr-4": {
      "Seagull\\": [ "src/", "test/" ]
    }
  }
}
```

The required fields are `"name"`, `"description"` and `"require"`.

Type field could be `library`, `project`, `metapackage` or `composer-plugin`.

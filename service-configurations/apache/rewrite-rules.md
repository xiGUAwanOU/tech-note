# Rewrite Rules

Rewrite rules are essential if we want to enable something like permalinks in WordPress. It simple maps a URL to another form. There is an [offical document](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) about the Apache module `mod_rewrite`, but here we will explain it with examples.

## An Example

This is an example for WordPress permalinks:

  ```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /wordpress/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /wordpress/index.php [L]
</IfModule>
  ```

## RewriteEngine

`RewriteEngine` is used to enable or disable the rewriting engine. Here we wrote `On` to enable it.

## RewriteBase

`RewriteBase`, according to the official document, "specifies the URL prefix to be used for per-directory (htaccess) RewriteRule directives that substitute a relative path." Here we wrote `/wordpress/`, which means only URLs like `http://hostname/wordpress/path/to/something/else/` will be matched with following rules and conditions.

## RewriteRule

`RewriteRule` defines how an URL will be mapped to another. A rule should follow the syntax below:

  ```apache
RewriteRule Pattern Substitution [Flags]
  ```

  * The `Pattern` is a perl compatible regex of the URL (not including host name and prefix defined by `RewriteBase`) to be substituted.
  * The `Substitution` "is the string that replaces the original URL-path that was matched by `Pattern`."
  * The `Flags` define some special actions to be performed.

In the example above... In the first `RewriteRule` we wrote the `Pattern` as `^index\.php$`, which means exactly the string `index.php` (`http://hostname/wordpress/index.php`). And in the `Substitution`, we wrote a dash `-`, which means we pass this `Pattern` through, leave it untouched. The `Flags` `[L]` means this rule should be the last rule if it matches, no further rules will be processed.

In the second `RewriteRule`, we wrote `Pattern` as a single dot `.`, this means any other URLs. We don't need to write `.*` because regular expressions here are substring matches, which only matches part of the URL string. Next, the `Substitution` is `/wordpress/index.php`, which means the __whole URL-path__ (including URL-prefix defined before) is completely replaced by `/wordpress/index.php`. For example, if we have the URL as `http://hostname/wordpress/2016/02/28/the-title-of-the-post/`, the result will be `http://hostname/wordpress/index.php`.

## RewriteCond

`RewriteCond`s define a set of conditions for the following rule. The following rule is then only used if these conditions are met. Many `Server-Variables` can be used in `RewriteCond`. In the example above, we used `REQUEST_FILENAME`, which means "the full local filesystem path to the file or script matching the request". `!` means not, `-d` means it is a directory and `-f` means it is a file.

## Summary

The whole example above defines rewriting rules as:

  0. Define the URL-path prefix as `/wordpress/`;
  1. if the URL-path after prefix is exactly `index.php`, leave it unchanged;
  2. if the local filesystem path matching the request is not a file or a directory, then ...
  3. for any URL-path after prefix, replace the whole URL-path with `/wordpress/index.php`.

However, all the URLs now is mapped to `index.php`, how could WordPress know which post are we querying? The answer is, although the URL has been rewritten, the original URL can still be accessed with `$_SERVER['REQUEST_URI']` in PHP.

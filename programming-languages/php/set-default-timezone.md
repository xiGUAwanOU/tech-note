# Set Default Timezone

If the default timezone is not set, a warning will be shown while running a PHP script:

  ```text
PHP Warning:  date(): It is not safe to rely on the system's timezone settings.
You are *required* to use the date.timezone setting or the date_default_timezone_set() function.
  ```

To modify this, edit the `php.ini` file. In the `[Date]` section, add the following line:

  ```text
[Date]
date.timezone = Europe/Berlin
  ```

Re-run the PHP script, the warning will disappear.

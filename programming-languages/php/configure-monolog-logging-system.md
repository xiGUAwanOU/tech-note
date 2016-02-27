# Configure Monolog Logging System

To use Monolog, firstly we need to add a dependency in `composer.json`. Dependency configurations won't be covered in this article.

The code below is an example of the Monolog configurations:

  ```php
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$dateFormat = "Y-m-d, H:i:s"; // Default date format
$outputFormat = "[%datetime%] %channel%.%level_name%: %message% %context% %extra%\n"; // Default output format
$formatter = new LineFormatter($outputFormat, $dateFormat);

$stream = new StreamHandler('/path/to/logfile.log', Logger::DEBUG);
$stream->setFormatter($formatter);

$logger = new Logger('channel_name');
$logger->pushHandler($stream);

// Start logging with following method calls:
$logger->addInfo('Hello world!');
  ```

First two lines used required class names.

Then we defined the date format and output format. In the example above, default format is used. Modify format strings to get more flexible format.

Then we create a `StreamHandler` object, to write log to the specified file. `Logger::DEBUG` is the logging level. Monolog uses logging levels described in [RFC 5424](http://tools.ietf.org/html/rfc5424):

  * DEBUG (100): Detailed debug information.
  * INFO (200): Interesting events. Examples: User logs in, SQL logs.
  * NOTICE (250): Normal but significant events.
  * WARNING (300): Exceptional occurrences that are not errors. Examples: Use of deprecated APIs, poor use of an API, undesirable things that are not necessarily wrong.
  * ERROR (400): Runtime errors that do not require immediate action but should typically be logged and monitored.
  * CRITICAL (500): Critical conditions. Example: Application component unavailable, unexpected exception.
  * ALERT (550): Action must be taken immediately. Example: Entire website down, database unavailable, etc. This should trigger the SMS alerts and wake you up.
  * EMERGENCY (600): Emergency: system is unusable.

At last, we create a new logger, push the `StreamHandler` object as the logging handler. And finally we log something at INFO level to file.

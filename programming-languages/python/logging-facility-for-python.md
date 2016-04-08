# Logging Facility for Python

There is already a module called `logging` in Python standard library for logging in Python. This article is a start guide of using this `module`.

The primary goal of this article should be:

  * introducing the basic usage of `logging` module in Python;
  * logging messages to different targets (console output or file);
  * use a configuration file to configure the logger (just like in `Log4j`);
  * configure once, use many times.

## Basic Concepts

There are 3 important concepts in `logging` module, they are:

  1. __`Logger`__: the interface for users. Users use Logger to log messages in different levels, if the logging level is higher than the level of the Logger, the message will be produced.
  2. __`Handler`__: the logging message consumer. It reads (or the Loggers call it to read) the messages produced by Loggers. If the message read from the Loggers is higher than the level of the Handler, the message will be written to the target.
  3. __`Formatter`__: defines the format of the messages.


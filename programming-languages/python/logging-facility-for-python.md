# Logging Facility for Python

There is already a module called `logging` in Python standard library for logging in Python. This article is a start guide of using this module.

## 1. Basic Concepts

There are 3 important concepts in `logging` module, they are:

  1. __`Logger`__: the interface for users. Users use Logger to log messages in different levels, if the logging level is higher than the level of the Logger, the message will be produced.
  2. __`Handler`__: the logging message consumer. It reads (or the Loggers call it to read) the messages produced by Loggers. If the message read from the Loggers is higher than the level of the Handler, the message will be written to the target.
  3. __`Formatter`__: defines the format of the messages.

## 2. Configure the Logger

There are 3 ways to configure a logger, namely in-code configurations, configuraion files and dictionary configurations. We will introduce dictionary configurations here. Because the schema of dictionary configurations is well defined in [PEP 391](https://www.python.org/dev/peps/pep-0391/).

Using dictionary configurations still allows us to configure loggers with a file. We could read the configuration from a file (in any format, e.g. JSON or YAML), convert it to a dictionary and then use it.

An example of configuration dictionary:

  ```python
logConf = {
  'version': 1,
  'disable_existing_loggers': True,
  'formatters' : {
    'basicFormatter' : {
      'format' : '[%(asctime)s][%(pathname)s][%(levelname)s]: %(message)s',
      'datefmt' : '%Y-%m-%d %H:%M:%S'
    }
  },
  'handlers' : {
    'fileHandler' : {
      'class' : 'logging.FileHandler',
      'formatter' : 'basicFormatter',
      'filename' : 'example.log'
    }
  },
  'loggers' : {
    'testLogger' : {
      'level' : 'DEBUG'
    },
    'productLogger' : {
      'level' : 'INFO'
    }
  },
  'root' : {
    'handlers' : ['fileHandler']
  }
}
  ```

In [PEP 282](https://www.python.org/dev/peps/pep-0282/) there is a list of format components.

## 3. Use the Logger

To use the configured loggers:

  ```python
logging.config.dictConfig(logConf)
logger = logging.getLogger('testLogger')
logger.debug('Debug message.')
logger.info('Info message.')
logger.warn('Warn message.')
logger.error('Error message.')
logger.critical('Critical message.')
  ```

# List of Built-in Exceptions

Keep it sync-ed with the [official documentation](https://ruby-doc.org/core-2.5.1/Exception.html).

* NoMemoryError
* ScriptError
  * LoadError
  * NotImplementedError
  * SyntaxError
* SecurityError
* SignalException
  * Interrupt
* StandardError – default for rescue
  * ArgumentError
    * UncaughtThrowError
  * EncodingError
  * FiberError
  * IOError
    * EOFError
  * IndexError
    * KeyError
    * StopIteration
  * LocalJumpError
  * NameError
    * NoMethodError
  * RangeError
    * FloatDomainError
  * RegexpError
  * RuntimeError – default for raise
  * SystemCallError
    * Errno::*
  * ThreadError
  * TypeError
  * ZeroDivisionError
* SystemExit
* SystemStackError
* fatal – impossible to rescue

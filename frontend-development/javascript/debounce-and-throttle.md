# Debounce and Throttle

Both technologies are used for preventing doing the time-consuming tasks multiple times in a short time range. However, their mechanisms are not the same.

Throttle will limit the execution of a task to certain times (usually 1) in a short period. In this case, the first execution is fired immediately.

Debounce will wait for a certain time, until the same task is not triggered anymore. In this case, the first execution is fired after waiting for a certain time.

Lodash library provides implementations for both of the technologies. Calling `_.throttle(method, timePeriod)` or `_.debounce(method, timeToWait)` will create throttled or debounced version of methods. Be careful! These methods should only be called once to setup the wrapper of the existing method.

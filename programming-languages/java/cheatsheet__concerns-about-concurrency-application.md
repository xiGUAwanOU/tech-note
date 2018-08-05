# Concerns About Concurrency Application

## Thread Safe Data Structures
* Set:
  * `Collections.synchronizedSet(Set set)`: simply a synchronized wrapper for all methods
  * `Collections.newSetFromMap(Map map)`: one can wrap a `ConcurrentMap` as a set
* List:
  * `Collections.synchronizedList(List list)`: simply a synchronized wrapper for all methods
* Map:
  * `Collections.synchronizedMap(Map map)`: simply a synchronized wrapper for all methods
  * `ConcurrentHashMap`: basically the to-go choice
* Queue:
  * `BlockingQueue`: is able to force consumer or producer waiting for several time
  * `ConcurrentLinkedQueue`: non-blocking version

## Atomic Mutable Types
There are several mutable types which provides several useful atomic operations:
* AtomicBoolean
* AtomicInteger
* AtomicLong

More types listed in the official [JavaDoc](https://docs.oracle.com/javase/10/docs/api/java/util/concurrent/atomic/package-summary.html).

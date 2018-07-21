# Synchronize Between Threads
The module in the standard library `monitor` will help:
```ruby
require "monitor"

class EventQueue < Monitor
  def initialize
    super
    @queue = []
  end

  def push(obj)
    synchronize do
      @queue.push(obj)
    end
  end

  def peek
    synchronize do
      return @queue.first
    end
  end

  def poll
    synchronize do
      return @queue.shift
    end
  end
end
```

Or to break it down:
```ruby
require "monitor"

monitor = Monitor.new
threads = 5.times.map do |i|
  Thread.new do
    monitor.synchronize do
      puts'helloworld'
    end
  end
end
```

From the 2nd example, it is easy to figure out that in the first example, since the monitor object is the object of the class that inherits it, so the scope of the synchronize is at the object-level.

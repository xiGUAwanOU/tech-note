# Create Weak Reference to an Object
Weak reference is useful while building the event system, since the event system needs to keep the reference to the event handler, and should not prevent the event handler to be garbage collected.

To create a weak reference to an object, simply do like this:
```ruby
require "weakref"

event_handler = EventHandler.new
weak_ref_event_handler = WeakRef.new(event_handler)

# Use it as if it is the original object:
weak_ref_event_handler.handle(Event.new(:foo, nil))

# Even equals? returns true:
weak_ref_event_handler.equals?(event_handler)

event_handler = nil
GC.start

# Now event handler is garbage collected, this should return false:
weak_ref_event_handler.weakref_alive?
```

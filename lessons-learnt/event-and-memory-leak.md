# Event and Memory Leak

It is quite usual to implement a event mechanism in a project. However, a naive implementation could cause memory leak if you do it carelessly.

Basically, the event handler objects are usually kept by another object (something like event dispatcher), so that the event handlers could be called on event raised. However, in some of the naive implementation, the event dispatcher has strong references to event handler objects. Thus, the event handler objects can not be garbage collected before the event dispatcher is garbage collected.

The idea to solve this problem is to break the strong references from event dispatcher to event handler objects. In some of the programming languages like Java and C#, they have classes like `WeakReference` which could do the work. The references to event handler objects have to be managed by this kind of classes, so that the references won't stop them to be garbage collected.

However, we still need be very careful even if we have weak references here. Because we usually have strong references to the `WeakReference` objects. Once the weak referred objects are not valid any more, the references to `WeakReference` objects should also be set to `null`.

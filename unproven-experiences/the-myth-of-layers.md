# The Myth of Layers
It is not uncommon to build a layer on top of a complex system, to make it easy to use, and to eliminate unnecessary dependencies. However, the same pattern can also be applied on an interface which is complex but powerful. E.g. people are fond of using ORM instead of SQL directly.

To me it is not a good way to go. Since:
1. __it actually bearly brings any convenience__:
  because the wrapped object is not the internal complexity of the system, but an interface. The interface has already tried to hide the details in the system. By wrapping this interface again, one is not actually reducing the complexity, but the feature set.
2. __it have to be at least as powerful as the underlying interface, which brings the complexity back__:
  the requirements are always beyond ones imagination. Using a reduced feature set, one will hit its limitation sooner or later. In this case, one will starts adding more and more power to the wrapper. Finally, what we get is a wrapper with the same power as the underlying interface, but also with the same complexity.

What I personally feels comfortable is a layer targeting reducing boilerplate code but not do too much magic. E.g. taking the database connectivity as an example. I'm fond of the libraries, where one can write SQL queries directly (probably an abstraction for different SQL dialects), and an automatic result mapper like Jackson, just like JDBI. In this case, the boilerplate are removed, but we are still have the full power of SQL, and also a clear vision of what we are actually doing.

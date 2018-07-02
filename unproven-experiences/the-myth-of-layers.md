# The Myth of Layers
It is not uncommon to build a layer on top of a complex system, to make it easy to use. However, the same pattern can also be applied on an interface which is complex but powerful. E.g. people are fond of using ORM instead of SQL directly.

To me it is not a good way to go. Since:
1. __it actually bearly brings any convenience__:
  because the wrapped object is not the system, but an interface. The interface has already tried to hide the details in the system. By wrapping interface, one is actually reducing the feature set.
2. __it have to be at least as powerful as the underlying interface, which brings the complexity back__:
  the requirements are always beyond ones imagination. Using a reduced feature set, one will hit the limitation sooner or later. In this case, one will starts adding more and more power to the wrapper. Finally, what we get is a wrapper with the same power as the underlying interface, but also with the same complexity.

What I personally feels comfortable is a layer targeting reducing boilerplate code but not do too much magic. E.g. taking ORM as an example. I think the start point of ORM is wrong. I'm fond of the libraries, where one can write his own SQL queries (probably an abstraction for different SQL dialects), and an automatic result mapper like Jackson. In this case, the boilerplate are removed, but we are still have a clear vision of what we are doing.

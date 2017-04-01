# Screen World Positions

It is quite useful to transfer the screen position (2D position shown on screen) to a world position (3D position in game world). Most of the useful methods are located in `Camera` class, since it holds the necessary information to do the transform (several matrices I suppose).

The method signatures are listed below:

```csharp
public Vector3 ScreenToWorldPoint(Vector3 position);
public Ray ScreenPointToRay(Vector3 position);
```

The second one is especially useful for collision detection, which could be used to implement e.g. the mouse click selection function.

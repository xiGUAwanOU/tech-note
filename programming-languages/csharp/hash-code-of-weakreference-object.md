# Hash Code of `WeakReference` Object

Notice that the `GetHashCode()` method call of a `WeakReference` object will NOT be the same even if they are referring the same object. So if there is a need, use the hash code of the referred object instead:

```csharp
class WeakEventHandlerReference<T> where T : IEvent {
    readonly int targetHashCode;
    readonly WeakReference weakReference;
    ...

    public WeakEventHandlerReference(EventHandler<T> eventHandler) {
        targetHashCode = target.GetHashCode();
        weakReference = new WeakReference(target);
        ...
    }

    public override int GetHashCode() {
        int res = 19;
        res = res * 31 + targetHashCode;
        res = res * 31 + eventHandlerMethod.GetHashCode();
        return res;
    }
}
```

Notice that in the implementation of `GetHashCode()` method, the hash code of original object is used instead of calling the `GetHashCode()` method for the `WeakReference` object.

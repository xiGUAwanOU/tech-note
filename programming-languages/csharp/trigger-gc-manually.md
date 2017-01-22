# Trigger GC Manually

To test if the weak reference really works, I have to trigger the garbage collection manually. Found a code snippet online:

  ```csharp
GC.Collect();
GC.WaitForPendingFinalizers();
GC.Collect();
  ```

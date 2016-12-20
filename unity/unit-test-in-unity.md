# Unit Test in Unity

Super strange, they refuse to create a simple and clear text tutorial to explain how to do basic unit test for unity. I hope this document will save an experienced programmer from spending nearly one hour to go through the tutorial video.

## 1. All Unit Tests Should Be Under the `Editor` Folder

According to [this answer](http://answers.unity3d.com/answers/974002/view.html), all the unit tests using the namespace `NUnit` should be placed under a leaf folder called `Editor`. You could have more information from the [Unity official document](https://docs.unity3d.com/Manual/SpecialFolders.html).

## 2. Unit Test Code

Very simple, like this:

  ```csharp
using NUnit.Framework;

class UnitTests
{
    [Test]
    public void JustAnotherTest()
    {
        Assert.AreEqual(42, GetTheNumber());
    }

    int GetTheNumber()
    {
        return 42;
    }
}
  ```
  
## 3. Run Unit Tests.

Open the Unity window from the menu item: `Window -> Editor Tests Runner`, and then click `Run All` button on it. Done!

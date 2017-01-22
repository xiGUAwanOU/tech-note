# Implement `Equals()` and `GetHashCode()` Methods

Following is an example. In the `Equals()` implementation, it is optional to test the condition `if (this == o)`.

  ```csharp
public override bool Equals(object obj) {
    Matcher o = (Matcher)obj;
    if ((object)o == null) {
        return false;
    }

    if (this == o) {
        return true;
    }

    return allOfComponentTypes.SetEquals(o.allOfComponentTypes) && oneOfComponentTypes.SetEquals(o.oneOfComponentTypes);
}

public override int GetHashCode() {
    int res = 19;
    foreach (var item in allOfComponentTypes) {
        res = res * 31 + item.GetHashCode();
    }
    foreach (var item in oneOfComponentTypes) {
        res = res * 31 + item.GetHashCode();
    }
    return res;
}
  ```

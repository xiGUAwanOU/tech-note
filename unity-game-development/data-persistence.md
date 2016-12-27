# Data Persistence

This article contains basically the content in the official video tutorial. The original video tutorial is too long and not good for reference, so I'll record the main point from that video here.

There are 2 possibilities could be used for persist data across scenes and 1 for persist data across the different game run (save & load):

## 1.1 Player Preferences

  ```csharp
PlayerPrefs.SetInt("x", 100);
int x = PlayerPrefs.GetInt("x");
  ```

## 1.2 Singleton

  ```csharp
public static SomeClass instance;

void Awake() {
    if (control == null) {
        DontDestoryOnLoad(gameObject);
        instance = this;
    } else if (control != this) {
        Destory(gameObject);
    }
}
  ```

## 2. (De)Serialise

  ```csharp
[Serializable]
class SomeData {
    public float x;
    public float y;
}

// Save:
BinaryFormatter bf = new BinaryFormatter();
FileStream fs = new File.Open("/path/to/file.dat", FileMode.Open);

SomeData data = new SomeData();
data.x = ...;
data.y = ...;

bf.Serialize(fs, data);
fs.Close();

// Load:
BinaryFormatter bf = new BinaryFormatter();
FileStream fs = new File.Open("/path/to/file.dat");

SomeData data = (SomeData) fs.Deserialize(fs);
fs.Close();

float x = data.x;
float y = data.y;
  ```

# Iterate Through Map

Shorter version in Java 8:

```java
map.forEach((key, value) -> { /* Do something with key and value */ });
```

To iterate through a map, we could use the Iterator:

```java
Iterator<Entry<K, V>> it = map.entrySet().iterator();
while (it.hasNext()) {
	Entry<K, V> pair = (Entry<K, V>) it.next();
	// Do something with pair.getKey() and pair.getValue() ...
}
```

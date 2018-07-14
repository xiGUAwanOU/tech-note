# Is It Thread-Safe?

Keep it alphabetically sorted:

| Class                 | Read / Invoke | Write       |
| --------------------- |---------------| ----------- |
| ArrayList             | Yes           | No          |
| ConcurrentHashMap     | Yes           | Yes         |
| HashMap               | Yes           | No          |
| HashSet               | Yes           | No          |
| LinkedList            | Yes           | No          |
| SimpleDateFormat      | No            | No          |
| SynchronizedMap       | Yes           | Yes         |

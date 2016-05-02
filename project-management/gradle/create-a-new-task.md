# Create a New Task

To create a new task, use following codes:

  ```gradle
task sayHello << {
  println 'hello world'
}
  ```

We could also create a new task from existing task type:

  ```gradle
task sayHello(type: Exec) {
  commandLine 'echo', 'hello', 'world'
}
  ```

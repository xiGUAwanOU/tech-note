# Quick Tutorial

## 1. Hello world!

  ```scala
object HelloWorld {
  def main(args: Array[String]) {
    println("Hello world!")
  }
}
  ```

## 2. Define a Function

  ```scala
def func(i: Int): Int = { 2 * i }
  ```

## 3. Pattern Matching

  ```scala
def fact(i: Int): Int = {
  i match {
    case 1 => 1
    case _ => i * fact(i - 1)
  }
}
  ```

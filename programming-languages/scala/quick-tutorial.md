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

## 4. Unified Types

![Image of Unified Types](https://raw.githubusercontent.com/xiGUAwanOU/tech-note/master/programming-languages/scala/classhierarchy.png)

_Image source: http://ochsenreither.de/talks/simplifying-scala-standalone/images/classhierarchy.png_

## 5. Function as Parameter

  ```scala
def apply(callback: (Int, Int) => Int, i: Int, j: Int): Int = { callback(i, j) }
  ```

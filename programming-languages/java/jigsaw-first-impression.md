# Jigsaw First Impression

The main purpose of Jigsaw is to bring the modularity to the Java world.

To make a modularized project, follow the steps below:

  1. let's make the first module, create following two files:
  
    ```text
  src/xigua.java9.module1/xigua/java9/module1/HelloPrinter.java
  src/xigua.java9.module1/module-info.java
    ```
  
    With the contents:
    
    ```console
  $ cat src/xigua.java9.module1/module-info.java
  module xigua.java9.module1 {
      exports xigua.java9.module1;
  }

  $ cat src/xigua.java9.module1/xigua/java9/HelloPrinter.java
  package xigua.java9.module1;
  public class HelloPrinter {
      public void sayHello() {
          System.out.println("hello world");
      }
  }
    ```
  
  2. and then the next module:
  
    ```text
  src/xigua.java9.module2/xigua/java9/module2/Main.java
  src/xigua.java9.module2/module-info.java
    ```
  
    With the contents:
  
    ```console
  $ cat src/module2/module-info.java
  module xigua.java9.module2 {
      requires module1;
  }
  
  $ cat src/module2/xigua/java9/Main.java
  package xigua.java9.module2;
  import xigua.java9.module1.HelloPrinter;
  public class Main {
      public static void main(String[] args) {
          new HelloPrinter().sayHello();
      }
  }
    ```
  
  3. before compiling, create a directory to hold the compiling results:
  
    ```console
  $ mkdir -p mods/xigua.java9.module1 mods/xigua.java9.module2
    ```
  
  4. then, let's compile the source codes:
  
    ```console
  $ javac -d mods/xigua.java9.module1 \
    src/xigua.java9.module1/module-info.java src/xigua.java9.module1/xigua/java9/module1/HelloPrinter.java
  $ javac --module-path mods -d mods/xigua.java9.module2 \
    src/xigua.java9.module2/module-info.java src/xigua.java9.module2/xigua/java9/module2/Main.java
    ```
  
  5. run the program with following command:
  
    ```console
  $ java --module-path mods -m xigua.module2/xigua.java9.module2.Main
  hello world
    ```

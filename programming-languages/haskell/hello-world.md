# Hello World

A "hello world" program in Haskell is simple:

  ```haskell
main = do
    putStrLn "Hello world!"
  ```

But what if we need to greeting someone, and firstly we should read an input from stdin?

  ```haskell
main = do
    putStrLn "What's your name?"
    name <- getLine
    putStrLn ("Greetings " ++ name ++ "!")
  ```

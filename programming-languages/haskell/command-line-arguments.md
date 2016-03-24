# Command-Line Arguments

The code below is an example of how to get the command-line arguments in Haskell:

  ```haskell
import System.Environment   
import Data.List  
  
main = do  
    args <- getArgs  
    progName <- getProgName  
    putStrLn "The arguments are:"  
    mapM putStrLn args  
    putStrLn "The program name is:"  
    putStrLn progName
  ```

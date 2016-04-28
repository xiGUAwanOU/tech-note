# Static Functions and Variables in C

In the implementation of CPython, there are many functions that are decorated with a `static`. 

According to the answer on stackoverflow:

`static` functions are functions that are only visible to other functions in the same file (more precisely the same translation unit).

To compare with the `static` variables in C:

`static` variables are the variables which will be initialized only once, usually used to implement the "global" variables.

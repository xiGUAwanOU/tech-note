# Static Functions and Variables in C

In the implementation of CPython, there are many functions that are decorated with a `static`. 

According to the answer on [stackoverflow](http://stackoverflow.com/questions/558122/what-is-a-static-function): `static` functions are functions that are only visible to other functions in the same file (more precisely the same translation unit).

To compare with the `static` variables in C: `static` variables will be initialized only once, usually used to implement the "global" variables.

# Multi-Threading with POSIX

The multi-threading is actually implemented by operating systems. I have chosen POSIX as the interface.

The code below is a simple example:

```c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#define NUM_THREADS 5

void * printHello(void * threadID) {
    long tid = (long) threadID;
    printf("Hello! It's me, thread #%ld!\n", tid);
    pthread_exit(NULL);
}

int main(int argc, char * argv[]) {
    pthread_t threads[NUM_THREADS];
    int rc;
    long t;
    for (t = 0; t < NUM_THREADS; t++) {
        printf("In main: creating thread %ld.\n", t);
        rc = pthread_create(&threads[t], NULL, printHello, (void *)t);
        if (rc) {
            printf("ERROR; return code from pthread_create() is %d\n", rc);
            exit(-1);
        }
    }

    pthread_exit(NULL);
}
```

To compile this example use clang in LLVM, just type the following command:

```console
$ clang example.c -o example -pthread
```

The code is no hard to understand. However there are still some details to be clarified.

3 things related to POSIX thread are `pthread_t` structure, `pthread_create` function and `pthread_exit` function:

### `pthread_t`

`pthread_t` represents the thread itself, actually it is a thread ID. Typing `man pthreads` in the console will show us a document introducing the basic concepts of POSIX threads.

### `pthread_create`

`pthread_create` is used to create a new thread, the prototype of the function is:

```c
#include <pthread.h>

int pthread_create(
    pthread_t *thread,
    const pthread_attr_t *attr,
    void *(*start_routine) (void *),
    void *arg);
```

  * `thread`: an output parameter used to hold the ID of the thread created by this function call.
  * `attr`: defines some attributes of the newly created thread.
  * `start_routine`: the entry point of the new thread.
  * `arg`: the arguments to be passed to the entry point of the start routine of the new thread.

The newly created thread will quit if:

  * It calls `pthread_exit`, specifying an exit status value that is available to another thread in the same process that calls `pthread_join`.
  * It returns from `start_routine()`. This is equivalent to calling `pthread_exit` with the value supplied in the `return` statement.
  * It is canceled.
  * Any of the threads in the process calls `exit`, or the `main` thread performs a `return` from main. This causes the termination of all threads in the process.

Don't forget to use `man pthread_create` command to get a more detailed document.

### `pthread_exit`

It is already explained in the `pthread_create` part.

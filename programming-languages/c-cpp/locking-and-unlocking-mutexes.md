# Locking and Unlocking Mutexes

There are 4 things related to mutex:

  * `pthread_mutex_t`: the mutex itself;
  * `pthread_mutex_lock`: wait (block) and lock a mutex;
  * `pthread_mutex_trylock`: try to (non-block) lock a mutex;
  * `pthread_mutex_unlock`: unlock a mutex.

An example:

```c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

int counter = 0;
pthread_mutex_t mutex;

void * producer() {
    for (int i = 0; i < 10; i++) {
        pthread_mutex_lock(&mutex);
        counter++;
        printf("Produced %2d, current counter: %2d\n", i + 1, counter);
        pthread_mutex_unlock(&mutex);
    }
    
    pthread_exit(0);
}

void * consumer() {
    int consumed_number = 0;
    while (consumed_number < 10) {
        pthread_mutex_lock(&mutex);
        if (counter > 0) {
            counter--;
            consumed_number++;
            printf("Consumed %2d, current counter: %2d\n",
                consumed_number, counter);
        }
        pthread_mutex_unlock(&mutex);
    }
    
    pthread_exit(0);
}

int main(int argc, char * argv[]) {
    pthread_t producer_thread;
    pthread_t consumer_thread;
    
    int rc;
    
    rc = pthread_create(&producer_thread, NULL, producer, NULL);
    if (rc) {
        printf("Error! Cannot create producer thread: %d\n", rc);
        exit(-1);
    }
    
    rc = pthread_create(&consumer_thread, NULL, consumer, NULL);
    if (rc) {
        printf("Error! Cannot create consumer thread: %d\n", rc);
        exit(-1);
    }

    pthread_exit(NULL);
}
```

There are a producer and a consumer in this program. Producer adds 1 to the counter for 10 times and consumer minus 1 from the counter for 10 times. The mutex is used to keep the counter from being operated from producer and consumer at the same time, so that there is no consistency problem between the real values and the printed values.

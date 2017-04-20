# CPU Stats Explained

The 3 basic CPU states are:

* Idle: which means it has nothing to do.
* User: CPU is running a user space program.
* System: CPU is servicing interrupts or managing resources.

These three meta states can be further subdivided.

Usually, we see 7 CPU stats using the `top` command on a Linux system:

* `us`: User, see above.
* `sy`: System, see above.
* `id`: Idle, see above.
* `ni`: the niceness value (Linux implementation of the scheduling priority) ranges from -20 (most favorable scheduling) to 19 (least favorable). This value shows how much time the CPU spent running user space processes that have been niced.
* `wa`: waiting time of I/O operations.
* `hi`: hardware interrupts processing time.
* `si`: software interrupts processing time.
* `st`: only related to virtual machines. The value shows how long the virtual CPU has spent waiting for the hypervisor to service anther virtual CPU running on a different virtual machine.

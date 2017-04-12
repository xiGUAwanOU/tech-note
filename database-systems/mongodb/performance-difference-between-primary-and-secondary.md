# Performance Difference Between Primary and Secondary

There is a performance difference between the primary machine and secondary machine in a replica-set. A simple performance test shows that, the primary machine is clearly faster than the secondary one. The reason could be that the secondary is optimized for replicating operations on primary, but not for querying.

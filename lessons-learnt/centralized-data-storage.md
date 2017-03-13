# Centralized Data Storage?

As the system getting more and more complex, some data which is originaly considered "local" will also be depended by other modules or sub-systems. This could quite be destructive for a already well-built software structure.

I don't have any bright idea about how to solve this problem. However, maybe a naive idea could be: introduce a centralized, normalized and flexible data storage module to the whole software system as soon as possible. We don't need to store all the implementation details into the centralized data storage module at very beginning of the story, they could still be kept as local data. But once there is a need, we could move the depended data up to the centralized data storage quickly.

# After Broken Things in Live

TL;DR. RUN AWAY AS FAST AS YOU CAN!

After have broken an important service in the live environment, I've reviewed the whole developing process carefully, and finally summarized several points, that could prevent this kind of problems. So basically the problem is, in the live environment, there are always more possibilities than you expected.

So:
1. don't trust unit tests and integration tests too much, always do some manual tests before it goes to live;
2. always keep an eye on logs and metrics, get familiarized with what kind of metrics and logs do you have, and know when it means there is something going wrong;
3. also write unit tests and integration tests for temporary solutions and hot fixes;
4. do some work to prevent other people doing the wrong thing, e.g. rollback the code causing problem immediately instead of telling them not to deploy it to live;
0. this list will never end...

# Delete Installed Package Manually

Sometimes, the `pip` won't delete installed package. To fix this, we should delete package manually.

In Ubuntu, all packages installed are stored in `/usr/local/lib/python3.4/dist-packages`, we could delete the installed package here and edit `easy-install.pth` file. After that, the package name won't be listed anymore.

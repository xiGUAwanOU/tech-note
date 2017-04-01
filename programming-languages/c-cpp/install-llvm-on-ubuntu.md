# Install LLVM on Ubuntu

To install LLVM on Ubuntu, just following the instructions on LLVM's official website. Add following lines to `/etc/apt/sources.list`:

```text
deb http://llvm.org/apt/trusty/ llvm-toolchain-trusty main
deb-src http://llvm.org/apt/trusty/ llvm-toolchain-trusty main
# 3.7 
deb http://llvm.org/apt/trusty/ llvm-toolchain-trusty-3.7 main
deb-src http://llvm.org/apt/trusty/ llvm-toolchain-trusty-3.7 main
# 3.8 
deb http://llvm.org/apt/trusty/ llvm-toolchain-trusty-3.8 main
deb-src http://llvm.org/apt/trusty/ llvm-toolchain-trusty-3.8 main
```

And then run following commands:

```console
$ wget -O - http://llvm.org/apt/llvm-snapshot.gpg.key | sudo apt-key add -
$ sudo apt-get update
$ sudo apt-get install clang-3.8 lldb-3.8
```

# Debian TODOs After Installation on Virtual Box

This is only my personal TODOs list:

Upgrade the system:

  ```console
# apt-get update
# apt-get upgrade
  ```

Install sudo and do some setup things:

  ```console
# apt-get install sudo
# visudo
  ```

Install basic building tools:

  ```console
$ sudo apt-get install build-essential
  ```

Install linux headers:

  ```console 
$ sudo apt-get install linux-headers-`uname -r`
  ```

Install VirtualBox Extensions and setup the shared folder...

Setup backports: add following line to `/etc/apt/sources.list`

  ```text
deb http://ftp.debian.org/debian jessie-backports main
  ```

And run `apt-get update`.

Install OpenJdk 8:

  ```console
$ sudo apt-get -t jessie-backports install openjdk-8-jdk openjdk-8-jre
  ```

Update alternatives for `java` command:

  ```console
$ sudo update-alternatives --config java
  ```

# Introductions

This document describes the installation and basic usages of `pip`.

## 1. Installation

The default version of Ubuntu is Python 2.7.x, so if install package `python-pip`, a `pip` for Python 2.7.x will be installed.

To avoid this, use the following command instead:

  ```console
$ sudo apt-get install python3-pip
  ```

To test the installation (or run `pip` program), type following command:

  ```console
$ pip3 --version
  ```

## 2. Basic Usages

The survival guide of `pip` should be its help document. To show its help document, type following command:

  ```console
$ pip3 help
  ```

Or if we want to read the help document for a specific `pip` command:

  ```console
$ pip3 help install
  ```

The command above will show the help document of `install` command.

### 2.1. List all installed packages

Use the following command:

  ```console
$ pip3 list
  ```

### 2.2. Install a Package

Simply use the following command:

  ```console
$ pip3 install <package_name>
  ```

Package could be installed from VCS:

  ```console
$ pip install -e git+https://<git_repo_hostname>/<path_to_git_repo>.git#egg=<project_name>
  ```

### 2.3. Remove a Package

Use `uninstall` instead of `install`:

  ```console
$ pip3 uninstall <package_name>
  ```

### 2.4. Show the Details of a Package

  ```console
$ pip3 show <package_name>
  ```

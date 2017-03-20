# Manage Multiple Instances of Python Interpreter

There is a very cool tool called `virtualenv`, which could manage the environment of different python interpreters.

To setup a python environment, just type following command:

```console
$ virtualenv <PATH_TO_ENVIRONMENT_FILES> -p <PATH_TO_PYTHON_INTERPRETER>
```

The `<PAHT_TO_ENVIRONMENT_FILES>` is usually `env`, which will make `virtualenv` create a sub-folder called `env` under the current working path.

Some useful tools like `pip` and `setuptools` are already installed while creating the environment. To activate the environment, just type something like:

```console
$ . ./env/bin/activate
```

To deactivate the environment, just type:

```console
$ deactivate
```

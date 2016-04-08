# Create a Package for `pip`

## 1. File Requirements

There are several files required:

  * `setup.py`: configurations of the project and the command line interface of the packaging related tasks;
  * `setup.cfg`: default options of the `setup.py`;
  * `README.rst`: covers the goal of the project, it is not required to be an `rst` file;
  * `MANIFEST.in`: defines additional files that don't automatically packaged by `python setup.py sdist (or bdist_wheel)`;
  * `<package>`: although it is not required, the most common practice is to include the python modules and packages under a single top-level package that has the same name as your project.

## 2. `setup.py` File

The sample `setup.py` file can be found [here](https://github.com/pypa/sampleproject/blob/master/setup.py). The code bellow is a simplified example:

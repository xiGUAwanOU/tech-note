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

  ```python
from setuptools import setup, find_packages
from codecs import open
from os import path

here = path.abspath(path.dirname(__file__))

# Get the long description from the README file
with open(path.join(here, 'README.rst'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='example',
    version='0.0.1',
    description='A dummy Python project.',
    long_description=long_description,
    url='http://example.host.net/path/to/project',
    author='xiGUAwanOU',
    author_email='xiguawanou@gmail.com',
    license='BSD 2',

    # See https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        'Topic :: Software Development :: Build Tools',
        'Programming Language :: Python :: 3 :: Only',
        'License :: OSI Approved :: BSD License',
        'Intended Audience :: Developers',
        'Environment :: Console',
        'Development Status :: 2 - Pre-Alpha'
    ],
    
    keywords='build dependency task',
    packages=find_packages(exclude=['docs', 'test*']),
    entry_points={
        'console_scripts': [
            'example=example:main',
        ],
    }
)
  ```


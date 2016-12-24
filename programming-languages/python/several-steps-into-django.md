# Several Steps into Django

## Install

Just use the `pip` tool:

  ```console
$ pip install Django
  ```

And check the version number like this:

  ```console
$ python -m django --version
  ```

## Create a New Project

One commnad:

  ```console
$ django-admin startproject CoolProjectName
  ```

After this, take a look into the source codes that `django-admin` has just created and run following command:

  ```console
$ python manage.py runserver
  ```

This will start a test server locally. Use the URL shown in the stdout of this command, django will tell you that the local test server is running.

## Add Some Content into the Project

A project is a collection of apps in Django, and an app can also exist in different projects, which means project is modularized by apps.

To create an app for a project, go to the directory containing `manage.py` and type following command:

  ```console
$ python manage.py startapp cool_app_name
  ```


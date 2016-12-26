# Several Steps into Django

## 1. Install

Just use the `pip` tool:

  ```console
$ pip install Django
  ```

And check the version number like this:

  ```console
$ python -m django --version
  ```

## 2. Create a New Project

One commnad:

  ```console
$ django-admin startproject CoolProjectName
  ```

After this, take a look into the source codes that `django-admin` has just created and run following command:

  ```console
$ python manage.py runserver
  ```

This will start a test server locally. Use the URL shown in the stdout of this command, django will tell you that the local test server is running.

## 3. Add Some Content into the Project

A project is a collection of apps in Django, and an app can also exist in different projects, which means project is modularized by apps.

To create an app for a project, go to the directory containing `manage.py` and type following command:

  ```console
$ python manage.py startapp hello_world
  ```

And then, we try to add some view into the application. Edit the `views.py` file in application level:

  ```python
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world.")
  ```

Now we already have a view returning the `Hello, world.` text. Now we are going to add an entry for the view (URL).

Firstly, create and edit the `urls.py` in application level (not site level!):

  ```python
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
  ```

This means, if we don't have anything in the URL path, then will call the `index` method defined in the `views` module. Currently I have no idea about the 3rd parameter.

And the last step is to add our URLs in the application level to the site level. Edit the `urls.py` file in site level:

  ```python
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^hello_world/', include('hello_world.urls')),
    url(r'^admin/', admin.site.urls),
]
  ```

## 4. Run the Server to See the Changes

Run django test server with following script:

  ```console
$ python manage.py runserver
  ```

Go to URL `http://localhost:8000/hello_world/` there will be the text `Hello, world.` shown on the screen.

## 5. Apply a Template

Now we could see that we are returning the `HttpResponse` directly. If we want it to be the HTML code, we'd better use the templating of Django.

To apply a template, we have to firstly properly add our application to the site. So in the `settings.py` file in the site level, we edit like this:

  ```python
...

INSTALLED_APPS = [
    'hello_world.apps.HelloWorldConfig',
    'django.contrib.admin',
    'django.contrib.auth',

...
  ```

This will add our `hello_world` application into the site (the name `hello_world.apps.HelloWorldConfig` comes from the method name in the `apps.py` file in the application level).

Now, we create the file `templates/hello_world/index.html` in the application folder, and then edit it:

  ```html
<html>
<head>
    <title>Hello</title>
</head>

<body>
<h1>{{ custom_title }}</h1>
<p>{{ custom_string }}</p>
</body>
</html>
  ```

Then, we rewrite the `views.py` file to fill the variables in template:

  ```python
from django.shortcuts import render


def index(request):
    context = {
        'custom_title': 'Hello, world',
        'custom_string': 'This is rendered from template.'
    }

    return render(request, 'hello_world/index.html', context)
  ```

Now, run the server, and see the results.

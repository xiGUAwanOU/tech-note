# Create a Doxyfile

To create a `Doxyfile` for a project, goto the root directory of the project, and then run:

  ```console
$ doxygen -g
  ```

The Doxygen will generate a default `Doxyfile` in the working directory.

Open the `Doxyfile` and edit the value of following variabless (not all required, just frequently edited variables):

  * `PROJECT_NAME`: set to the correct project name;
  * `PROJECT_BRIEF`: write an introduction of the project;
  * `PROJECT_LOGO`: the name explains itself;
  * `OUTPUT_DIRECTORY`: usually `"doc"`, we don't like our project root get flooded by something like `html` or `latex`;
  * `OUTPUT_LANGUAGE`: sometimes `Chinese` (only for me);
  * `HIDE_UNDOC_MEMBERS`: set it to `YES` if we want to hide the undocumented members of a class;
  * `INPUT`: specify the input directory of the source code;
  * `FILE_PATTERNS`: specify which files should be treated as the input of Doxygen;
  * `RECURSIVE`: if `YES`, search sub directories;
  * `GENERATE_LATEX`: default is `YES`, if we don't need that, set it to `NO`.

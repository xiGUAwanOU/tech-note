# sed: A New Understanding

Notice: in BSD systems, the commands mentioned in this article are only available using `gsed` command (use `$ brew install coreutils gnu-sed` to install it on Mac).

Sed is definitely a tiny programming language interpreter. Say we have a test file like below:

  ```text
...

begin
end

...
  ```

And we want to add a new line between the `begin` and `end` lines. We could use the following command:

  ```console
$ sed "/begin/{N;s/end/  hello world\nend/}" test-sed.txt
  ```

In this command, there are 3 kinds of commands:

  * `/<pattern>/<command>`: this is a conditional statement, if text matches the pattern, the command will be executed;
  * `N`: this command make sed read the next line into the pattern area;
  * `s/<pattern>/<replacement>/<flags>`: this is the famous s-command in sed, if the text matches the pattern, the matched text will be replaced by the replacement text.

Besides, `{` and `}` are used for grouping commands, `;` is used for seperate multiple commands.

The sed command will be applied to each single line of the input file. For the example above, the processing steps are:

  1. read one line `"..."` into the pattern area;
  2. if the text in the pattern area `"..."` matches pattern (`"begin"`) (no);
  3. no more command to execute, read another line (empty line) into the pattern area;
  4. if the text in the pattern area (empty line) matches pattern (`"begin"`) (no);
  5. no more command to execute, read another line (`"begin"`) into the pattern area;
  6. if the text in the pattern area (`"begin"`) matches pattern (`"begin"`) (yes);
    1. read next line (`"end"`) into the pattern area;
    2. if the text in the pattern area (`"end"`) matches pattern (`"end"`) (yes);
    3. replace the text with replacement text (`"  hello world\nend"`);
  7. no more command to execute, read another line (empty line) into the pattern area;
  8. tl;dw.

This list should have explained the machanism of the sed command. For more commands and usages, just read the man page of sed.

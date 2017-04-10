# Create a Hotkey to Launch an Application

Follow the steps below:

1. open an application called "Automator",
2. create a "Service" (or "服务" in Chinese version of Mac OS) working process;
3. change the "Service receives" to "No Input" ("没有输入") and "Any Application" ("任何应用程序");
4. find the "Launch Application" ("开启应用程序") operation and drag it to the right side;
5. change the operation, so that it will open the application that we need;
6. save it and quit Automator.
7. go to "Keyboard" in "System Preference",
8. go to the "Shortcuts" tab,
9. in "Services", a new item we have just created will appear;
10. set a shortcut for that service. Done!

Notice that, the created service will be stored in `/Users/$USER_NAME/Library/Services` directory as a `*.workflow` file.

# Reactivity Explained

Reactivity is the process that Vue.js trys to detect which data has been changed, and then update the DOM tree accordingly.

The fields defined in the `data` section play key roles in reactivity in Vue.js. After a data field is defined, its sub-fields along with itself are converted into getters and setters, which makes a room for doing something in the background.

The render function will try to get the current data value for rendering, which will call the getter of a data field. Once the getter of a data field has been called, it will call the watcher to help it build a value dependency chain. As a result, the watcher will be able to decide which components are to be re-rendered.

Once a setter of a data field (or its sub-field) has been called, it will notify the watcher in a component, and the watcher will trigger re-render for the related components.

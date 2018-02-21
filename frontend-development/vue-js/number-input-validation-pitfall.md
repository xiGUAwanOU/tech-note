# Number Input Validation Pitfall

Different browsers treat `<input>` tag with `type="number"` differently. For example in FireFox, the empty number typed input will have an empty string `""` as its value. And if we do validation on the field and check the exact value type, it could potentially fail.

Furthermore, if we enter something non-numerical into the number typed input field, the value will also be empty string.

And the open question would be, should we provide all wrapped input components for different input types at beginning of a new project, so that we are safe from this situation?

# Personal Best Practices

## 1. Wrap Input Fields

Wrap input fields, try not to use HTML input tag directly. Provide wrappers for different type of inputs with validations or with validation supports.

The motivation behind it is, say, an input field is used for number inputs. Even if the type of the input is set to `number`, in some browsers, the field is still accepting characters. Furthermore, if we empty the input field, the value bound to this input field could be an empty string, instead of a `null` value in some frontend framework.

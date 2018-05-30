# Jasmine Customer Matcher

An example of custom matcher:

```javascript
export default {
  toContainAllInSameOrder(util, customEqualityTesters) {
    return {
      compare(actual, expected = []) {
        let lastIndex = 0
        for (let text of expected) {
          let currentIndex = actual.indexOf(text)
          if (currentIndex < lastIndex) {
            return {
              pass: false,
              message: `Expect ${JSON.stringify(actual)} to contain all of ${JSON.stringify(expected)} in the same order, ` +
              `but ${JSON.stringify(text)} is either missing or out of order.`
            }
          }
          lastIndex = currentIndex
        }

        return {
          pass: true,
          // Error message for not.toContainAllInSameOrder()
          message: `Expect ${JSON.stringify(actual)} not to contain all of ${JSON.stringify(expected)} or not in the same order.`
        }
      }
    }
  }
}
```

To use it:

```javascript
import Matchers from './matchers'

beforeEach(() => {
  jasmine.addMatchers(Matchers)
})
```

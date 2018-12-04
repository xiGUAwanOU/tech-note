# Use vue-rx

Install it in an existing project:

```shell
$ npm install vue-rx rxjs --save
```

Include it into the application (just like what we used to do for the other libraries):

```javascript
import Vue from 'vue'
import VueRx from 'vue-rx'

Vue.use(VueRx)
```

Prepare the service like this:

```javascript
import { BehaviorSubject } from 'rxjs'

class HelloService {
  constructor () {
    this.message = new BehaviorSubject('')
  }

  get messageObservable () {
    return this.message.asObservable()
  }

  updateMessage () {
    this.message.next('New Message')
  }
}

export default new HelloService()
```

Then the Vue component (the `subscriptions` sections are used by vue-rx):

```vue
<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="updateMessage">Update</button>
  </div>
</template>

<script>
import HelloService from './HelloService'

export default {
  subscriptions () {
    return {
      msg: HelloService.messageObservable
    }
  },

  methods: {
    updateMessage () {
      HelloService.updateMessage()
    }
  }
}
</script>
```

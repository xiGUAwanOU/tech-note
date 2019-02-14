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

Click the button, the content of the `<h1>` tag will be changed.

Note that, this binds the data from service to the component. With rxjs, it is possible to bind other way round. But still need to consider if it is the right thing to do. The [official readme file](https://github.com/vuejs/vue-rx) contains the instructions of how to do that.

A problem is it is hard to get the current state of the underlying value. Two ways to get the underlying value are:
1. calling the `getValue()` method on the `BehaviorSubject` object;
2. create a local reactive field and set it manually while the observable has been changed.

The first way lacks reactiveness. Say, a view property A is computed from the underlying value of behavior subject B, in this case, we cannot write A as a normal vue computed value. This is because the underlying value of behavior subject B is not vue reactive.

The second way introduces unnecessary reactiveness fields. Say we listen to observe B and manually set data field B', since B' is reactive, we can compute A from B'. But this is not beautiful, since it introduces a data field B', which must be readonly. If one tries to write data in B', it will be out of sync with the underlying value of B.

Despite of the unnecessary extra fields, it could be a good alternative to Vuex.

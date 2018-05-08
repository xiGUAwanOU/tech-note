# Event Loop

# 1. Event Loop Itself

This is the key to open the door to the real JavaScript world. It can be roughly discribed as:

```javascript
while (messageQueue.waitForMessage()) {
  messageQueue.processNextMessage()
}
```

Note that, this process is synchronous. Each message is processed completely before any other message is processed.

# 2. Messages

They come from different sources, e.g. mouse click on a button, the response of an XHR, dispatched event by calling `element.dispatchEvent(new Event('hello'))`, the `setTimeout(callback, 0)`, etc..

Once generated, they will be pushed to the end of the message queue, which will be later handled by event loop.

# 3. Set Timeout

As mentioned above, `setTimeout(callback, 0)` will also generate a message. It actually tells the browser, "Hey! Please add a message to the end of the message queue after 0 milliseconds, which will be handled by `callback` method." In this case, the callback won't be executed immediately. It has to wait for all other messages before it getting fully processed, then the `callback` method will be called as the handler of the message.

So the following code:

```javascript
function main() {
  console.log('hello')
  setTimeout(() => { console.log('foo') }, 0)
  console.log('world')
  setTimeout(() => { console.log('bar') }, 0)
  console.log('done')
}

main()
```

will produce following outputs:

```
hello
world
done
foo
bar
```

4. Non-blocking I/O

They are non-blocking because they are not handled by JavaScript. It is handled by the browser implementation.

E.g. if we have an XHR call. JavaScript will only tell the browser to handle that, mean while JavaScript can process other messages. Once the browser has finished the XHR call, the response of the XHR call will be added to the message queue as a message. After all the other messages before it get processed, the response of the XHR will also be processed.

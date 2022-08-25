---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the TEST.stop command to stop a UIlicious test during a test run. 
---

# Stop Command

### `TEST.stop` <a href="#teststop" id="teststop"></a>

Stops the test.

Note that tests will automatically stop when there are no more commands.

Use this command to manually stop test in specific scenarios with conditions (see example).

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.stop()
```

#### Example <a href="#example" id="example"></a>

```javascript
if(I.see$("Out of stock")){ // I.see$ is the same as I.see, but any errors are supressed
   TEST.stop()
}
```

This test will stop if the text "Out of stock" is seen on the page.

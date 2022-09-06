---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.wait command to pause your UIlicious test during a test run.
---

# Waits

## Automatic "wait until visible" behavior

Most UIlicious commands have a built-in automatic "wait until visible" behavior. 

Commands that target a page element (e.g. `I.see`, `I.click`, `I.fill`) will not fail immediately if a matching element is not visible on the page. Instead, UIlicious will attempt to search for a matching element to be visible until the command reaches the timeout. UIlicious will proceed to interact with the element as soon as the element is found. But if an element could not be found when the timeout is reached, the command will fail with an error indicating that the element is not found.

### Changing the timeout for automatic waits

By default, the automatic wait timeout is set to 15 seconds. You can change the timeout at any point of the test, by setting the number of seconds to wait for in the `TEST.commandTimeout` property.

```javascript
I.goTo("https://google.com")
TEST.commandTimeout = 90 // increase automatic wait to 90 seconds
I.click("...")
TEST.commandTimeout = 5 // reduce automatic wait to 5 seconds
I.click("...")
```

## Using the `I.wait` command

If you want the test to wait for a specific amount of time, you can use the `I.wait` command. Set the number of seconds you want to wait for in the first argument of the `I.wait` command.

```javascript
I.goTo("https://google.com") // start the timer
I.wait(10) // wait for 10 seconds
I.see("check timer")
```

## Reference: `I.wait` command

Wait for a given amount of time

**Usage**

```javascript
I.wait(seconds)
```

**Parameters**

| Parameter | Type   | Remarks                       |
| --------- | ------ | ----------------------------- |
| seconds   | number | Number of seconds to wait for |
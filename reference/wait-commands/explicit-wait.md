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
I.see("this command fails after 90 seconds")
TEST.commandTimeout = 5 // reduce automatic wait to 5 seconds
I.see("this command fails after 5 seconds")
```

## Using the `I.wait` command

If you want the test to wait for a specific amount of time, you can use the `I.wait` command. 

Set the number of seconds you want to wait for in the first argument.

This example below starts a countdown timer of 60 seconds and waits for 10 seconds before pressing the "Stop" button to stop the timer.

{% tabs %}
{% tab title="Example" %}

```javascript{10}
// Go to google.com
I.goTo("https://google.com")
I.click("Accept all") // accept cookies

// Start a timer for 60 seconds
I.fill("Search", "set timer for 60 seconds")
I.pressEnter()

// Stop the timer after 10 seconds
I.wait(10) 
I.click("Stop")
```

{% endtab %}
{% tab title="Result" %}

<iframe title='i-wait-example' src="https://snippet.uilicious.com/embed/test/public/EP6cipyx89JfyuyfRoUXf8?stepNum=6&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

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
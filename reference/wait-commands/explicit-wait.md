---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.wait command to pause your UIlicious test during a test run.
---

# Waits

{% hint style="info" %}
Any command that targets an element has a built-in **"wait until element visible"** behavior. Read ["Automatic Waits"](/core-concepts/automatic-waits.md) to learn more.
{% endhint %}

## Wait for a specific duration using `I.wait`

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
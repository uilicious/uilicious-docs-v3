---
# Write a short description about the page. This will be displayed on google search results.
description: Learn about how automatic waits work in UIlicious
---

# Automatic waits

## Automatic "wait until element visible" behavior

All UIlicious commands that target an element (e.g. `I.see`, `I.click`, `I.fill`) have a built-in automatic **"wait until element visible"** behavior. 

These commands will not fail immediately if a matching element is not visible on the page. Instead, UIlicious will attempt to search for a matching element to be visible until the command reaches the timeout. 

UIlicious will proceed to interact with the element as soon as the element is found. But if an element could not be found when the timeout is reached, the command will fail with an error indicating that the element is not found.

### Changing the timeout

By default, the automatic wait timeout is set to **15 seconds**. You can change the timeout at any point of the test, by setting the number of seconds to wait for in the `TEST.commandTimeout` property.

```javascript
I.goTo("https://google.com")

TEST.commandTimeout = 90 // increase automatic wait to 90 seconds
I.see("flying pigs") // UIlicious will search for the text for up to 90 seconds

TEST.commandTimeout = 5 // reduce automatic wait to 5 seconds
I.see("flying pigs") // UIlicious will search for the text for up to 5 seconds
```

{% hint style="info" %}
If you want to wait for a fixed amount of time, you can use the [`I.wait`](/reference/wait-commands/explicit-wait.md) command.
{% endhint %}
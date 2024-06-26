---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.acceptAlert or I.cancelAlert command to accept or dimiss alerts in your UIlicious test.
---

# Accept / Dismiss Alert

{% hint style="info" %}
NOTE: Fully supported on **Chrome** and **Microsoft Edge**. Unstable on **Firefox**, **Safari**, and **IE11** - work in progress to fully support alerts
{% endhint %}

### `I.acceptAlert` <a href="#iacceptalert" id="iacceptalert"></a>

Press the "Ok" button (or the equivalent in other languages) on the alert.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.acceptAlert()
```

### `I.cancelAlert` <a href="#icancelalert" id="icancelalert"></a>

Press the "Cancel" (or the equivalent in other languages) button on the alert.

> On alert boxes that do not have the "Cancel" button, the "Ok" button will be pressed instead to dismiss the alert.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.cancelAlert()
```
### Test Scripting Tutorial for Alerts Command(s)

[How to test Browser Alerts](/test-scripting-tutorials/testing-browser-alerts.md)

This tutorial shows you how to test the browser alerts in website(s) using the Alert command(s).

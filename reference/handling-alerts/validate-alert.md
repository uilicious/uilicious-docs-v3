---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.seeAlert command to validate that an alert is seen in your UIlicious test.
---

# Validate Alert

{% hint style="info" %}
NOTE: Fully supported on **Chrome** and **Microsoft Edge**. Unstable on **Firefox**, **Safari**, and **IE11** - work in progress to fully support alerts
{% endhint %}

### `I.seeAlert` <a href="#iseealert" id="iseealert"></a>

Assert the message displayed on the alert.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.seeAlert(text)
```

| Parameter | Type   | Remarks                                                        |
| --------- | ------ | -------------------------------------------------------------- |
| text      | string | (Optional) Text that is expected to be displayed on the alert. |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
UI.execute("alert('hello    world')") // opens an alert with the message "Hello world"
I.seeAlert() // pass
I.seeAlert("hello world") // pass
I.seeAlert("lorem") // fail
```

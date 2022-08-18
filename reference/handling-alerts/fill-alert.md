# Fill Alert

{% hint style="info" %}
NOTE: Fully supported on **Chrome** and **Microsoft Edge**. Unstable on **Firefox**, **Safari**, and **IE11** - work in progress to fully support alerts
{% endhint %}

### `I.fillAlert` <a href="#ifillalert" id="ifillalert"></a>

Fill the text box on the alert.

> Only applicable to **prompt** dialogs.

#### Usage <a href="#usage" id="usage"></a>

```
I.fillAlert(value)
```

| Parameter | Type   | Remarks                                 |
| --------- | ------ | --------------------------------------- |
| value     | string | Text to fill into the prompt's text box |

#### Example(s) <a href="#examples" id="examples"></a>

```
UI.execute("prompt('What's your name?')") // open a prompt dialog
I.fillAlert("Jane") // fill in the prompt dialog with "Jane"
I.acceptAlert() // press "Ok"
```

This fills in the text box in the alert with "Jane", and presses the "Ok" button.

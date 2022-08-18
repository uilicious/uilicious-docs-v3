# Validate Alert

### `I.seeAlert` <a href="#iseealert" id="iseealert"></a>

Assert the message displayed on the alert.

#### Usage <a href="#usage" id="usage"></a>

```
I.seeAlert(text)
```

| Parameter | Type   | Remarks                                                        |
| --------- | ------ | -------------------------------------------------------------- |
| text      | string | (Optional) Text that is expected to be displayed on the alert. |

#### Example(s) <a href="#examples" id="examples"></a>

```
UI.execute("alert('hello    world')") // opens an alert with the message "Hello world"
I.seeAlert() // pass
I.seeAlert("hello world") // pass
I.seeAlert("lorem") // fail
```

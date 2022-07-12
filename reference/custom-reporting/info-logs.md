# Info Logs

### `TEST.log.info` <a href="#testloginfo" id="testloginfo"></a>

Log a message to report

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.log.info(message)
```

**Parameters**

| Parameter | Type   | Remarks                  |
| --------- | ------ | ------------------------ |
| message   | string | Message to log to report |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
var applicationId = I.getText("#applicationId")
TEST.log.info("Application ID is " + applicationId)
```

Gets the text from the element with the id "applicationId" and prints it to the report.

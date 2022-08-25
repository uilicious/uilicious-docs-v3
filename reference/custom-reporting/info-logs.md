---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the TEST.log.info command to log a custom report in your UIlicious test.
---

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

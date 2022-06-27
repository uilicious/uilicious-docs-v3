# Write Custom Logs

## Logging commands <a href="#logging-commands" id="logging-commands"></a>

These commands are for you to write custom logs to the reports with statuses.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command                                                                          | Description                                |
| -------------------------------------------------------------------------------- | ------------------------------------------ |
| [`TEST.log.info`](https://docs.uilicious.com/scripting/logging.html#testloginfo) | Log a message to report                    |
| [`TEST.log.pass`](https://docs.uilicious.com/scripting/logging.html#testlogpass) | Log a message to report with `pass` status |
| [`TEST.log.fail`](https://docs.uilicious.com/scripting/logging.html#testlogfail) | Log a message to report with `fail` status |

***

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

***

### `TEST.log.pass` <a href="#testlogpass" id="testlogpass"></a>

Log a message to report with `pass` status

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.log.pass(message)
```

**Parameters**

| Parameter | Type   | Remarks                  |
| --------- | ------ | ------------------------ |
| message   | string | Message to log to report |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.click("Clear all")
var numTodos = I.getCount(".todo")
if(numTodos === 0){
    TEST.log.pass("No more todos!")
}
```

Clears all items in a todo list, and count the number of elements with the "todo" class. If there's no more todos, prints "No more todos!" as a passed validation.

***

### `TEST.log.fail` <a href="#testlogfail" id="testlogfail"></a>

Log a message to report with `fail` status. This adds to the error count and will result in the overall test failing.

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.log.fail(message)
```

**Parameters**

| Parameter | Type   | Remarks                  |
| --------- | ------ | ------------------------ |
| message   | string | Message to log to report |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
if(I.amAt('/notFound')){
    TEST.log.fail("Product page is unavailable")
}
```

If the current url is at `/notFound`, prints "Product page is unavailable" to report as a failed validation.

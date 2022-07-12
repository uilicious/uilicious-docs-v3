# Success status Logs

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

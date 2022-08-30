---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the TEST.log.pass command to log a passing custom report in your UIlicious test.
---

# Success status Logs

Log a message to report with `pass` status using `TEST.log.pass` command.

## Example

{% tabs %}

{% tab title="Example" %}

```javascript
I.click("Clear all")
var numTodos = I.getCount(".todo")
if(numTodos === 0){
    TEST.log.pass("No more todos!")
}
```

Clears all items in a todo list, and count the number of elements with the "todo" class. If there's no more todos, prints "No more todos!" as a passed validation.

{% endtab %}
{% tab title="Result" %}

**Usage**

```javascript
TEST.log.pass(message)
```

**Parameters**

| Parameter | Type   | Remarks                  |
| --------- | ------ | ------------------------ |
| message   | string | Message to log to report |

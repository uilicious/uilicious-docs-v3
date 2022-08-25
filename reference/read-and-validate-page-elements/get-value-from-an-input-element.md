---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.getValue command to get the value of an input element in your UIlicious test.
---

# Get value from an input element

### `I.getValue` <a href="#igetvalue" id="igetvalue"></a>

Get the value of an input element

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.getValue(target)
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                                                                                                                                                                                       |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target    | string | <p>Keyword to identify the field.<br>The associated label, aria-label, placeholder, adjacent text, and current value can be used to identify a field.<br>CSS selectors can also be used, <em>but is not recommended as it makes the tests harder to keep up to date.</em></p> |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.fill("Search", "Hello")
I.type(" from the other side") 
var foo = I.getValue("Search") // `foo` would be "Hello from the other side"
```

In this example, we first fill "Hello" to the "Search" field, and continue typing " from the other side" into the field which is currently in focus. You can get the value of the "Search" field using `I.getValue` and store the value into a variable for later use.

***

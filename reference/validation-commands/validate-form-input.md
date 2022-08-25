---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.filled command to validate form or field inputs in your UIlicious test.
---

# Validate Form Input

### `I.filled` <a href="#ifilled" id="ifilled"></a>

Asserts that the form is filled with a specific value

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.filled(field, value)
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                                                                                                                                                                  |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| field     | string | <p>Keyword to identify the field.<br>The associated label, placeholder, adjacent text, and name can be used to identify a field.<br>CSS selectors can also be used, <em>but is not recommended as it makes the tests harder to keep up to date.</em></p> |
| value     | string | Value that the field is expected to have                                                                                                                                                                                                                 |

***

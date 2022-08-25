---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.getCount command to get the number of occurrences of a text or element in your UIlicious test. 
---

## `I.getCount`

Get the number of occurances of a text or element

### Usage

```javascript
I.getCount(target)
```

#### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | The text or element to find |

### Example(s)

```javascript
var count = I.getCount("Add to cart")
```

Sets the variable `count` to the number occurances of the text "Add to cart".

```javascript
var count = I.getCount(".product")
```

Sets the variable `count` to the number occurances of the element with the CSS class "product".


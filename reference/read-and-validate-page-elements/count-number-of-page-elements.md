---
description: Get the number of occurrences for a text or element
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


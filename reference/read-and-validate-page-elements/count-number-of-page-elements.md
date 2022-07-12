---
description: Assert the number of occurrences for a text or element
---

# Count number of page elements

### `I.count` <a href="#icount" id="icount"></a>

Aliases: `I.seeCount`

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.count(target, n)
```

**Parameters**

| Parameter | Type   | Remarks                      |
| --------- | ------ | ---------------------------- |
| target    | string | Text or element to find      |
| n         | number | Number of occurance expected |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.count("Add to cart", 20);
```

Asserts that there's 20 occurances of the text "Add to cart".

```javascript
I.count(".product", 20);
```

Asserts that there's 20 occurances of the element with the "product" CSS class.

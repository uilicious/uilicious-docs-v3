---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.see command to assert texts is seen in your UIlicious test.
---

# I see Command

### `I.see` <a href="#isee" id="isee"></a>

Assert that an text or element is visible

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.see(target)
```

**Parameters**

| Parameter | Type   | Remarks                 |
| --------- | ------ | ----------------------- |
| target    | string | Text or element to find |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.see("Welcome back, Bruce");
```

Asserts that the text "Welcome back, Bruce" is seen on the page.

***

### `I.dontSee` <a href="#idontsee" id="idontsee"></a>

Assert that an text or element is **NOT** visible

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.dontSee(target)
```

**Parameters**

| Parameter | Type   | Remarks                 |
| --------- | ------ | ----------------------- |
| target    | string | Text or element to find |

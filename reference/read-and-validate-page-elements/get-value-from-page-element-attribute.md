---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the different commands to get the page element attribute in your UIlicious test.
---

# Get value from page element attribute

### `UI.getAttributes` <a href="#uigetattributes" id="uigetattributes"></a>

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.getAttribute(target, attribute)
```

| Parameter | Type   | Remarks                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| attribute | string | Name of the attribute to get the value of.                                            |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
let signUpLink = UI.getAttribute("Register a new account", "href")
if(signUpLink !== null) I.goTo(signUpLink + "?promo=summersale")
```

Extract the `href` attribute from "Register a new account" element into a variable named `signUpLink`, which can then be used subsequently in the test. In this exmaple, the text of the element (assumed to be an \<a> element) is use to target the element, but you can also use a CSS selector or an XPATH selector.

---

## `UI.getAttributes`

Get the names and values of attributes on an element as a map.

### Usage

```javascript
UI.getAttributes(target)
```

| Parameter | Type | Remarks |
|-----------|------|---------|
| target | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |

### Example(s)

Let's use an example radio button for reference:
```html
<input id='backorder-product-checkbox' type="checkbox" class="pretty-checkbox" data-product-id="PRD_3820" checked/>
```

We can read the attributes of the checkbox to variable in our test script like this:
```javascript
var attr = UI.getAttributes("#backorder-product-checkbox") // returns attributes as a json map object
var productID = attr["data-product-id"]
```

The attributes of the checkbox will be read to an json map object as such:
```json
{
    "id": "backorder-product-checkbox",
    "type": "checkbox",
    "class": "pretty-checkbox",
    "data-product-id": "PRD_3820",
    "checked": ""
}
```

Note that attributes representing input state like `checked` or `selected` only indicate the default state of the input element but not its current state. If you want to get or validate the current state of selection input elements, use the `I.selected` or `I.deselect` commands.

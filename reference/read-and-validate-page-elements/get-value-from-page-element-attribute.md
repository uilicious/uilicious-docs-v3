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

# Get and assert element attributes

## Element commands <a href="#element-commands" id="element-commands"></a>

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

To get and assert attributes on an element:

| Command                                                                                                         | Description                                                                                                          |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [`UI.getAttribute`](https://docs.uilicious.com/scripting/element\_commands.html#uigetattribute)                 | Get the value of an attribute on an element.                                                                         |
| [`UI.getAttributes`](https://docs.uilicious.com/scripting/element\_commands.html#uigetattributes)               | Get the attributes names and values on an element as a map.                                                          |
| [`UI.hasAttribute`](https://docs.uilicious.com/scripting/element\_commands.html#uihasattribute)                 | Assert the presence or the expected value of an attribute on an element.                                             |
| [`UI.doesNotHaveAttribute`](https://docs.uilicious.com/scripting/element\_commands.html#uidoesnothaveattribute) | Assert the absence of an attribute on an element, or that the value of an attribute is not equals to a given string. |

To get and assert CSS classes on an element:

| Command                                                                                                 | Description                                       |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`UI.hasClass`](https://docs.uilicious.com/scripting/element\_commands.html#uihasclass)                 | Assert the presence of a CSS class on an element. |
| [`UI.doesNotHaveClass`](https://docs.uilicious.com/scripting/element\_commands.html#uidoesnothaveclass) | Assert the absence of a CSS class on an element.  |

To get and assert HTML for an element:

| Command                                                                                                | Description                      |
| ------------------------------------------------------------------------------------------------------ | -------------------------------- |
| [`UI.getHTML`](https://docs.uilicious.com/scripting/element\_commands.html#element-html-commands)      | Get the outer HTML of an element |
| [`UI.getOuterHTML`](https://docs.uilicious.com/scripting/element\_commands.html#element-html-commands) | Get the outer HTML of an element |
| [`UI.getInnerHTML`](https://docs.uilicious.com/scripting/element\_commands.html#element-html-commands) | Get the inner HTML of an element |

### `UI.getAttribute` <a href="#uigetattribute" id="uigetattribute"></a>

Get the value of an attribute on an element.

Returns `null` if the attribute is not found on the element.

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

***

### `UI.getAttributes` <a href="#uigetattributes" id="uigetattributes"></a>

Get the names and values of attributes on an element as a map.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.getAttributes(target)
```

| Parameter | Type   | Remarks                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |

#### Example(s) <a href="#examples" id="examples"></a>

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

***

### `UI.hasAttribute` <a href="#uihasattribute" id="uihasattribute"></a>

Assert the presense or the expected value of an attribute on an element.

#### Usage <a href="#usage" id="usage"></a>

```javascript
// assert the presense of the attribute on the target element
UI.hasAttribute(target, attribute)
// assert the value of the attribute on the target element
UI.hasAttribute(target, attribute, value)
```

| Parameter | Type   | Remarks                                                                                                                                                   |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector.                                                                     |
| attribute | string | Name of the attribute.                                                                                                                                    |
| value     | string | (Optional) Value expected for the attribute. Case-insensitive. If not provided, this command will simply assert that the attribute exists on the element. |

#### Example(s) <a href="#examples" id="examples"></a>

**Validate that an element should be disabled**

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// leave the username and password fields blank
I.fill("Username", "")
I.fill("Password", "")

// assert that the #login-button is disabled
UI.hasAttribute("#login-button", "disabled")
```

In this example, we can use the `UI.hasAttribute` to test if the `#login-button` element is disabled, when the Username and Password fields are empty.

**Validate that the element attribute should have a specific value**

```javascript
I.goTo("https://mystore.com")
UI.hasAttribute("#summer-sale-banner", "campaign-id", "SUMMERSALE2020")
```

This test will pass if the `#summer-sale-banner` element exists on the page, and has the `campaign-id` attribute, with the value of `SUMMERSALE2020`.

### `UI.doesNotHaveAttribute` <a href="#uidoesnothaveattribute" id="uidoesnothaveattribute"></a>

Assert the absense of an attribute on an element, or that the value of an attribute is not equals a given string.

#### Usage <a href="#usage" id="usage"></a>

```javascript
// Assert that the element does not have an attribute
UI.doesNotHaveAttribute(target, attribute)
// Assert that the element does not have an attribute with an given value
UI.doesNotHaveAttribute(target, attribute, value)
```

| Parameter | Type   | Remarks                                                                                                                                                                          |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector.                                                                                            |
| attribute | string | Name of the attribute.                                                                                                                                                           |
| value     | string | (Optional) Value that the attribute should not be equal to. Case-insensitive. If not provided, this command will simply assert that the attribute does not exist on the element. |

#### Example(s) <a href="#examples" id="examples"></a>

**Validate that an element should not be disabled**

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// assert that the #login-button is disabled initially
UI.hasAttribute("#login-button", "disabled")

// fill the username and password fields
I.fill("Username", "john")
I.fill("Password", "supersecretpassword")

// assert that the #login-button is no longer disabled
UI.doesNotHaveAttribute("#login-button", "disabled")
```

In this example, we can use the `UI.hasAttribute` to test if the `#login-button` element is not disabled, when the Username and Password fields are filled.

### `UI.hasClass` <a href="#uihasclass" id="uihasclass"></a>

Assert the presence of a CSS class on an element.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.hasClass(target, cssClass)
```

| Parameter | Type   | Remarks                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| cssClass  | string | CSS class that should exist on the element.                                           |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// fill in the username, and wrong password
I.fill("Username", "john")
I.fill("Password", "WRONGPASSWORD") 
I.click("Login")

// assert that the #password-field-group has the "has-error" css class
UI.hasClass("#password-field-group", "has-error")
```

In this example, we can use `UI.hasClass` to check if the `has-error` CSS class is applied to an form field when the form is submitted with invalid values, like an invalid password.

### `UI.doesNotHaveClass` <a href="#uidoesnothaveclass" id="uidoesnothaveclass"></a>

Assert the absence of a CSS class on an element.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.doesNotHaveClass(target, cssClass)
```

| Parameter | Type   | Remarks                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| cssClass  | string | CSS class that should not exist on the element.                                       |

***

### Element HTML commands <a href="#element-html-commands" id="element-html-commands"></a>

There are three commands for getting the HTML for an element. These commands return a markup of an element as a string.

#### Usage <a href="#usage" id="usage"></a>

```javascript
// get the outer HTML of an element
UI.getHTML(target)
UI.getOuterHTML(target)

// get the inner HTML of an element
UI.getInnerHTML(target)
```

| Parameter | Type   | Remarks                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |

#### Example(s) <a href="#examples" id="examples"></a>

Let's use this example button for reference:

```javascript
<button id="sign-up-button">
  <b>Create</b> an account
</button>
```

We can read the outer and inner HTML of the button in our test script like this:

```javascript
var outerHTML = I.getHTML("sign-up-button")
// outerHTML includes the html of the element and its contents:
// <button id="sign-up-button"><b>Create</b> an account</button>

var innerHTML = I.getInnerHTML("sign-up-button")
// innerHTML includes the html of the element's contents only:
// <b>Create</b> an account
```

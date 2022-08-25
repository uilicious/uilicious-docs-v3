---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the different commands to get the HTML code for a page element in your UIlicious test. There are three commands for getting the HTML for an element. These commands
  return a markup of an element as a string.
---

# Get HTML code for a page element

### Element HTML commands <a href="#element-html-commands" id="element-html-commands"></a>

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

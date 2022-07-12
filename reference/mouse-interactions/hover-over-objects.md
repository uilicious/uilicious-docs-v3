# Hover over Objects



### `I.hoverOn` <a href="#ihoveron" id="ihoveron"></a>

Hover on an element.

For image / icon elements, we'd strongly recommend that setting an `aria-label` for the target element, use `I.click` using the label. This will also help make your application more friendly to humans using accessibility tools.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.hoverOn(target);
```

**Parameters**

| Parameter | Type   | Remarks                                                                       |
| --------- | ------ | ----------------------------------------------------------------------------- |
| target    | string | <p>Keyword to identify the element to click.<br>This is case-insensitive.</p> |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
// using element's label, based on e.g. the element's text, tooltip, title, ARIA labels, etc.
I.hoverOn("Help")          // Hover on the element labelled "Help"

// using css selector
I.hoverOn("#menu-mobile")  // Hover on element with the id "menu-mobile"
I.hoverOn(".menu")         // Hover on element with the class ".menu"

// using xpath
I.hoverOn("//img[@class='question-card']") // Hover on image with the class "question-card"
```

---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.hoverOn command to hover on various elements in your UIlicious test.
---

# Hover command

Use the `I.hoverOn` command to move the mouse cursor over a target and hover.

There are several ways to specify the target for the hover command:

- Using **text**
- Using **CSS / XPATH**
- Using **X and Y offset from an element**
- Using **X and Y offset from screen**

To hover on an element using it's text, provide the text of the element to the `I.hoverOn` command.

```javascript
// I.hoverOn(target) using element's text
I.hoverOn("Login"); // targets element containing the the text "Login"
```

To hover on an element using CSS selector or XPATH, provide the CSS selector or XPATH that matches the element.

```javascript
// I.hoverOn(target) using CSS / XPATH
I.hoverOn("#zoom-in-btn"); // targets element with CSS selector
I.hoverOn("//[data-test-id='close-button']"); // targets element using XPATH selector
```

To hover on a position offset from an element, provide the text/CSS/XPATH to match the element, and the X and Y offset from the top-left corner of the element, which could be an integer amount to offset by pixels, or a percentage to offset by the width or the height of the element.

In this example below, the test engine will move to 100 pixels to the right, and 10 pixels down, from the top-left corner of the element with contains the text "First Name".

```javascript
// I.hoverOn(target, x, y) using pixel offset
I.hoverOn("First Name", 100, 10);
```

Here's another example, but using percentages instead. By setting the x and y offset to "50%", the test engine will hover on the center point of the element that matches the CSS selector ".map".

```javascript
// I.hoverOn(target, x, y) using pixel offset
I.hoverOn(".map", "50%", "50%");
```

You can also hover on a point using the x and y coordinate from the top-left corner of the screen. Here's an example:

```javascript
// I.hoverOn(x,y)
I.hoverOn(500, 300); // clicks 500px right and 300px down from the top-left corner of the screen
```

## Automatic screenshots for hover command

Screenshots are automatically taken for all test commands. For the `I.hoverOn` command, screenshots are taken after the mouse is moved to the target position.

{% hint style="warning" %}
When testing on Safari and IE11, the `I.hoverOn` command is simulated using Javascript instead of moving the cursor, due to limitations with the browser. This will only trigger mouseevents (mouseenter -> mouseover -> mousemove) on the target. It will not trigger any :hover CSS style changes on the target.
{% endhint %}

## Reference

```javascript
// hover over a target element
I.hoverOn(target);

// hover over a target element with x and y offset
I.hoverOn(target, x, y);

// hover over position (x,y) on the screen
I.hoverOn(x, y);
```

**Parameters**

| Parameter | Type             | Remarks                                                                                                                                                                                                                                                                                                                             |
| --------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target    | string           | The element to hover over. This can be the element's text, or a CSS / XPATH selector matching the element.                                                                                                                                                                                                                          |
| x         | number or string | Optional. <br> X offset. <br> If `target` is set, then this is offset from the top-left corner of the element, otherwise this is offset from the top-left corner of the screen. <br> If `x` is a number, the offset is in pixels. If `x` is a string that expresses a percentage, it is the percentage of the width of the target.  |
| y         | number o string  | Optional. <br> Y offset. <br> If `target` is set, then this is offset from the top-left corner of the element, otherwise this is offset from the top-left corner of the screen. <br> If `y` is a number, the offset is in pixels. If `y` is a string that expresses a percentage, it is the percentage of the height of the target. |

## Example(s)

```javascript
// using element's label, based on e.g. the element's text, tooltip, title, ARIA labels, etc.
I.hoverOn("Help"); // Hover on the element labelled "Help"

// using css selector
I.hoverOn("#menu-mobile"); // Hover on element with the id "menu-mobile"
I.hoverOn(".menu"); // Hover on element with the class ".menu"

// using xpath
I.hoverOn("//img[@class='question-card']"); // Hover on image with the class "question-card"
```

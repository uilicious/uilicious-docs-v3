# Mouse Actions



### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

#### Click commands <a href="#click-commands" id="click-commands"></a>

| Command                                                                                                                                                           | Description                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| <p><a href="mouse-actions.md#iclick--idoubleclick"><code>I.click</code></a><br><a href="mouse-actions.md#iclick--idoubleclick"><code>I.doubleClick</code></a></p> | Click or double click on an element |
| [`I.rightClick`](mouse-actions.md#irightclick)                                                                                                                    | Right click on an element           |

#### Hover commands <a href="#hover-commands" id="hover-commands"></a>

| Command                                  | Description         |
| ---------------------------------------- | ------------------- |
| [`I.hoverOn`](mouse-actions.md#ihoveron) | Hover on an element |

#### Drag commands <a href="#drag-commands" id="drag-commands"></a>

| Command                                      | Description                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------ |
| [`I.dragTo`](mouse-actions.md#idragto)       | Drag an element to another target element                                |
| [`I.dragBy`](mouse-actions.md#idragby)       | Drag an element directionally by (x,y) pixel offset                      |
| [`I.dragUp`](mouse-actions.md#idragup)       | Drag an element to the up by a given number of pixel                     |
| [`I.dragDown`](mouse-actions.md#idragdown)   | Drag an element to the down by a given number of pixel                   |
| [`I.dragLeft`](mouse-actions.md#idragleft)   | Drag an element to the left by a given number of pixel                   |
| [`I.dragRight`](mouse-actions.md#idragright) | Drag an element to the right by a given number of pixel                  |
| [`I.scrollBy`](mouse-actions.md#iscrollby)   | Scrolls the page horizontally and vertically by a given number of pixels |

#### Scroll commands <a href="#scroll-commands" id="scroll-commands"></a>

| Command                                                | Description                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`I.scrollBy`](mouse-actions.md#iscrollby)             | Scrolls the page horizontally and vertically by a given number of pixels |
| [`I.scrollUp`](mouse-actions.md#iscrollup)             | Scrolls the page up by a given number of pixels                          |
| [`I.scrollDown`](mouse-actions.md#iscrolldown)         | Scrolls the page down by a given number of pixels                        |
| [`I.scrollLeft`](mouse-actions.md#iscrollleft)         | Scrolls the page left by a given number of pixels                        |
| [`I.scrollRight`](mouse-actions.md#iscrollright)       | Scrolls the page right by a given number of pixels                       |
| [`I.scrollTo`](mouse-actions.md#iscrollto)             | Scroll to a given coordinate on the page                                 |
| [`I.scrollToTop`](mouse-actions.md#iscrolltotop)       | Scroll to the top of the page                                            |
| [`I.scrollToBottom`](mouse-actions.md#iscrolltobottom) | Scroll to the bottom of the page                                         |

***

### `I.click` / `I.doubleclick` <a href="#iclick--idoubleclick" id="iclick--idoubleclick"></a>

Click or double click on an element.

For image / icon elements, we'd strongly recommend that setting an `aria-label` for the target element, use `I.click` using the label. This will also help make your application more friendly to humans using accessibility tools.

If the click triggers a page load, note that the time taken to execute the command will include the time taken to load the page.

If the click opens a page in a new tab, the browser will automatically be switched to the new tab.

#### Usage <a href="#usage" id="usage"></a>

```javascript
// Single click
I.click(target);
I.click(target, x, y);

// Double click
I.doubleClick(target);
I.doubleClick(target, x, y);
```

**Parameters**

| Parameter | Type   | Remarks                                                                                             |
| --------- | ------ | --------------------------------------------------------------------------------------------------- |
| target    | string | <p>Keyword to identify the element to click.<br>This is case-insensitive.</p>                       |
| x         | number | <p>Optional.<br>Offset the click x pixels right from the top-left corner of the target element.</p> |
| y         | number | <p>Optional.<br>Offset the click y pixels down from the top-left corner of the target element.</p>  |

#### Example(s) <a href="#examples" id="examples"></a>

**Click on element with text**

```javascript
I.click("Log In")
```

Click on an element with the text "Log In".

**Click on images / icons using `aria-label` or `title`**

Image / icon elements can be clicked on using the `aria-label` or `title` attribute set on the element. We'd strongly recommend setting both, because `aria-label` also makes your application more friendly to humans using accessibility tools, and `title` gives your element a helpful tooltip for visual users.

Here, we will use this plus button with the tooltip "Add" for illustration:

```xml
<!-- Button with the tooltip "Add"-->
<button title="Add">
    <!-- Icon -->
    <i class="fa fa-plus"></i>
</button>
```

You can click on the button using its tooltip like this:

```javascript
I.click("Add");
```

**Click on element using CSS selectors**

```javascript
I.click("#login-btn")
```

Click on an element with its `id` property set to `login-btn`.

```javascript
I.click(".login-btn")
```

Click on an element with its `class` property set to `login-btn`.

**Click on element with offset**

```javascript
I.click("#map", 100, 100)
```

Clicks on 100 to the right and 100 down from the top-left corner of the element with the id `map`

***

### `I.rightClick` <a href="#irightclick" id="irightclick"></a>

Right click on an element.

For image / icon elements, we'd strongly recommend that setting an `aria-label` for the target element, use `I.click` using the label. This will also help make your application more friendly to humans using accessibility tools.

> Note that this action will typically open the default OS context menu, which cannot be interacted with by the test engine or captured in screenshot. Hence, this command will only be useful if you have a custom behavior on right click for the target element

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.rightClick(target)
I.rightClick(target, x, y)
```

**Parameters**

| Parameter | Type   | Remarks                                                                                             |
| --------- | ------ | --------------------------------------------------------------------------------------------------- |
| target    | string | <p>Keyword to identify the element to click.<br>This is case-insensitive.</p>                       |
| x         | number | <p>Optional.<br>Offset the click x pixels right from the top-left corner of the target element.</p> |
| y         | number | <p>Optional.<br>Offset the click y pixels down from the top-left corner of the target element.</p>  |

***

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

***

### `I.dragTo` <a href="#idragto" id="idragto"></a>

Drags an element to another target element

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.dragTo(element, target);
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                                  |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| element   | string | <p>Keyword to identify the element to drag.<br>This is case-insensitive.<br>CSS / XPATHs may also be used.</p>           |
| target    | string | <p>Keyword to identify the target element to drop on.<br>This is case-insensitive.<br>CSS / XPATHs may also be used.</p> |

#### Example(s) <a href="#examples" id="examples"></a>

**Drag elements using labels**

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragTo("drag me", "drop here")
```

Drags the element "drag me" to the target element "drop here".

**Drag elements using CSS**

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragTo("#draggable", "#droppable")
```

Drags the element with the ID "draggable" to the target element with the ID "droppable".

***

### `I.dragBy` <a href="#idragby" id="idragby"></a>

Drags an element directionally by (x,y) pixels right and down.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.dragBy(element, x, y);
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                        |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| element   | string | <p>Keyword to identify the element to drag.<br>This is case-insensitive.<br>CSS / XPATHs may also be used.</p> |
| x         | number | Number of pixels to drag right. Use negative numbers to drag left instead.                                     |
| y         | number | Number of pixels to drag down. Use negative numbers to drag up instead.                                        |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragBy("drag me", 150, 75)
```

Drags the element "drag me" 150 pixels right, and 75 pixels down.

***

### `I.dragUp` <a href="#idragup" id="idragup"></a>

Drags an element up by a given number of pixels

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.dragUp(element, y);
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                        |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| element   | string | <p>Keyword to identify the element to drag.<br>This is case-insensitive.<br>CSS / XPATHs may also be used.</p> |
| y         | number | Number of pixels to drag up.                                                                                   |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragUp("drag me", 10)
```

Drags the element "drag me" 10 pixels up.

***

### `I.dragDown` <a href="#idragdown" id="idragdown"></a>

Drags an element down by a given number of pixels

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.dragDown(element, y);
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                        |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| element   | string | <p>Keyword to identify the element to drag.<br>This is case-insensitive.<br>CSS / XPATHs may also be used.</p> |
| y         | number | Number of pixels to drag down.                                                                                 |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragDown("drag me", 10)
```

Drags the element "drag me" 10 pixels down.

***

### `I.dragLeft` <a href="#idragleft" id="idragleft"></a>

Drags an element left by a given number of pixels

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.dragLeft(element, x);
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                        |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| element   | string | <p>Keyword to identify the element to drag.<br>This is case-insensitive.<br>CSS / XPATHs may also be used.</p> |
| x         | number | Number of pixels to drag left.                                                                                 |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragLeft("drag me", 10)
```

Drags the element "drag me" 10 pixels left.

***

### `I.dragRight` <a href="#idragright" id="idragright"></a>

Drags an element right by a given number of pixels

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.dragRight(element, x);
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                        |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| element   | string | <p>Keyword to identify the element to drag.<br>This is case-insensitive.<br>CSS / XPATHs may also be used.</p> |
| x         | number | Number of pixels to drag right.                                                                                |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragRight("drag me", 10)
```

Drags the element "drag me" 10 pixels right.

***

### `I.scrollBy` <a href="#iscrollby" id="iscrollby"></a>

Scrolls the page horizontally and vertically by a given number of pixels.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.scrollBy(x,y);
```

**Parameters**

| Parameter | Type   | Remarks                                                                            |
| --------- | ------ | ---------------------------------------------------------------------------------- |
| x         | number | Number of pixels to scroll right by. Use a negative number to scroll left instead. |
| y         | number | Number of pixels to scroll down by. Use a negative number to scroll up instead.    |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.scrollBy(200, -500);
```

Scrolls the page 200 pixels to the right, and 500 pixels up.

***

### `I.scrollUp` <a href="#iscrollup" id="iscrollup"></a>

Scrolls the page up by a given number of pixels.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.scrollUp(y);
```

**Parameters**

| Parameter | Type   | Remarks                           |
| --------- | ------ | --------------------------------- |
| y         | number | Number of pixels to scroll up by. |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.scrollUp(50);
```

Scrolls the page 50 pixels up.

***

### `I.scrollDown` <a href="#iscrolldown" id="iscrolldown"></a>

Scrolls the page down by a given number of pixels.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.scrollDown(y);
```

**Parameters**

| Parameter | Type   | Remarks                             |
| --------- | ------ | ----------------------------------- |
| y         | number | Number of pixels to scroll down by. |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.scrollDown(50);
```

Scrolls the page 50 pixels down.

***

### `I.scrollLeft` <a href="#iscrollleft" id="iscrollleft"></a>

Scrolls the page left by a given number of pixels.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.scrollLeft(x);
```

**Parameters**

| Parameter | Type   | Remarks                             |
| --------- | ------ | ----------------------------------- |
| x         | number | Number of pixels to scroll left by. |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.scrollLeft(50);
```

Scrolls the page 50 pixels left.

***

### `I.scrollRight` <a href="#iscrollright" id="iscrollright"></a>

Scrolls the page right by a given number of pixels.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.scrollRight(x);
```

**Parameters**

| Parameter | Type   | Remarks                              |
| --------- | ------ | ------------------------------------ |
| x         | number | Number of pixels to scroll right by. |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.scrollRight(50);
```

Scrolls the page 50 pixels right.

***

### `I.scrollTo` <a href="#iscrollto" id="iscrollto"></a>

Scrolls the given coordinate of the page.

If the page is sufficiently tall and wide, the page will be scrolled until the given coordinate is at the top left corner of the screen.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.scrollTo(x,y);
```

**Parameters**

| Parameter | Type   | Remarks                                |
| --------- | ------ | -------------------------------------- |
| x         | number | x coordinate of the page to scroll to. |
| y         | number | y coordinate of the page to scroll to  |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.scrollTo(0, 500);
```

Scrolls to the (0, 500) coordinate of the page.

***

### `I.scrollToTop` <a href="#iscrolltotop" id="iscrolltotop"></a>

Scroll to the top of the page.

This is the same as using the command `I.scrollTo(0,0)`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.scrollToTop();
```

***

### `I.scrollToBottom` <a href="#iscrolltobottom" id="iscrolltobottom"></a>

Scroll to the bottom of the page.

> For infinite scrolling pages, this command will simply scroll to the end of the rendered content.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.scrollToBottom();
```

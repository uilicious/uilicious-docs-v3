---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.dragTo command to drag various elements in your UIlicious test.
---

# Drag Objects

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

### Test Scripting Guide for I.drag Command(s)
[How to test Slider Components](test-scripting-tutorials/testing-slider-components.md)

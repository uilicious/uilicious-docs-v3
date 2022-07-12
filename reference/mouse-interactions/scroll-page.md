# Scroll Page

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

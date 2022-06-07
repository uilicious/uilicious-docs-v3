# Extract Page Content

## Extraction commands <a href="#extraction-commands" id="extraction-commands"></a>

These commands allow you to extract parts of the page, which you may then use as inputs for later commands.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command                                                                             | Description                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`I.getCount`](https://docs.uilicious.com/scripting/extract.html#igetcount)         | Get the number of occurances of a text or element |
| [`I.getText`](https://docs.uilicious.com/scripting/extract.html#igettext)           | Get the text content of an element                |
| [`I.getValue`](https://docs.uilicious.com/scripting/extract.html#igetvalue)         | Get the value from an input element               |
| [`I.getPageTitle`](https://docs.uilicious.com/scripting/extract.html#igetpagetitle) | Get the title of the page                         |

***

### `I.getCount` <a href="#igetcount" id="igetcount"></a>

Get the number of occurances of a text or element

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.getCount(target)
```

**Parameters**

| Parameter | Type   | Remarks                     |
| --------- | ------ | --------------------------- |
| target    | string | The text or element to find |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
var count = I.getCount("Add to cart")
```

Sets the variable `count` to the number occurances of the text "Add to cart".

```javascript
var count = I.getCount(".product")
```

Sets the variable `count` to the number occurances of the element with the CSS class "product".

***

### `I.getText` <a href="#igettext" id="igettext"></a>

Get the text content of an element

Aliases: `I.grabText` (legacy)

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.getText(target)
```

**Parameters**

| Parameter | Type   | Remarks                                                               |
| --------- | ------ | --------------------------------------------------------------------- |
| target    | string | CSS selector or XPATH of the element to extract the text content from |

#### Example(s) <a href="#examples" id="examples"></a>

**HTML**

```xml
<div id="message">Welcome</div>
<div id="secret">Batman</div>
<div>
    <label for="secret_message">Secret Message</label>
    <input id="secret_message" type="text"/>
</div>
```

**Script**

```javascript
// Extract text from elements
var message = I.getText("#message"); // extracts "Welcome"
var secret = I.getText("#secret"); // extracts "Batman"

// Use the extracted text in later commands
// For example, enter "Welcome Batman" to the "Secret Message" text field
I.fill("Secret Message", message + ' ' + secret);
```

***

### `I.getValue` <a href="#igetvalue" id="igetvalue"></a>

Get the value of an input element

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.getValue(target)
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                                                                                                                                                                                       |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target    | string | <p>Keyword to identify the field.<br>The associated label, aria-label, placeholder, adjacent text, and current value can be used to identify a field.<br>CSS selectors can also be used, <em>but is not recommended as it makes the tests harder to keep up to date.</em></p> |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.fill("Search", "Hello")
I.type(" from the other side") 
var foo = I.getValue("Search") // `foo` would be "Hello from the other side"
```

In this example, we first fill "Hello" to the "Search" field, and continue typing " from the other side" into the field which is currently in focus. You can get the value of the "Search" field using `I.getValue` and store the value into a variable for later use.

***

### `I.getPageTitle` <a href="#igetpagetitle" id="igetpagetitle"></a>

Get the title of the current page.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.getPageTitle()
```

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("https://www.wikipedia.org/")
var pageTitle = I.getPageTitle() // The returned value will be "Wikipedia"
```

This example test navigates to the `https://www.wikipedia.org/` and reads the current title of the page to the `pageTitle` variable.

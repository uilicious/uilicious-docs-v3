# Get text from a page element

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

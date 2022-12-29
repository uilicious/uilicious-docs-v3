---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.getURL command to get the URL of the page in your UIlicious test.
---

# Get page URL

### `I.getURL` <a href="#igeturl" id="igeturl"></a>

Get the URL of the page

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.getURL()
```

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("https://www.wikipedia.org/")
var URL = I.getURL()

// Validate extracted URL by using TEST.log.info to display it in result screen
TEST.log.info("Current URL is " + URL)
```

This example test navigates to the `https://www.wikipedia.org/` and gets the current URL of the page to the `URL` variable.

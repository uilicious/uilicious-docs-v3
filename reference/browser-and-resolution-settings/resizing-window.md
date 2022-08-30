---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the different commands to resize the resolution of the browser in your UIlicious test. 
---

# Resize Window

Use the `UI.resize` command that allows you to set the resolution of the browser in the middle of the test.

## Resize browser to a specific resolution

```javascript
I.goTo("https://github.com/login")
I.fill("Email", "john@example.com")

// Set the browser resolution to 1920 x 1080
UI.resize("1920x1080")
```
This will resize the resolution of the entire browser window to width of 1920 pixels, and height of 1080 pixels.

## Resize viewport

```javascript
I.goTo("https://github.com/login")
I.fill("Email", "john@example.com")

// Set the viewport to 1920 x 1080
UI.resize("1920x1080", {target: "viewport"})
```
To resize the **viewport** (the browser window excluding the browser's UI such as the menu bar and the address bar, etc), you can specify `target` as `"viewport"` in options.

## Example: Resizing browser in the middle of the test

{% tabs %}

{% tab title="Example" %}

```javascript
I.goTo("https://github.com/login")

// Set the Resolution to 2560 x 1440
UI.resize("2560x1440")
// Set the viewport to 1920 x 1080
UI.resize("1920x1080", {target: "viewport"})
// Set the Resolution to a Mobile Resolution
UI.resize("1080x1920")

I.fill("Email", "john@example.com")
I.fill("Password", "supersecretpassword")
I.click("Sign in")
I.see("Incorrect username or password.")
```

{% endtab %}
{% tab title="Result" %}

<iframe title='resize-window' src="https://snippet.uilicious.com/embed/test/public/D9bZwoDcXMyd25mbCrovT8?stepNum=1&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

## Reference

**Usage**
```javascript
// You can pass in width and height together in a string formatted as "<width>x<height>"
UI.resize(resolution) 
UI.resize(resolution, options)

// Alternatively you can pass width and height as two seperate numbers
UI.resize(width, height)
UI.resize(width, height, options)
```

**Parameters**

| Parameter | Type | Remarks |
|-----------|------|---------|
| resolution | string | A string representation of the resolution to resize to, following the format "&lt;width>x&lt;height>", e.g. "1920x800". |
| width | number |  The width to resize the resolution to. |
| height | number |  The height to resize the resolution to. |
| options | object |  Additional options, see `options` parameters below. |

**Additional `options`**

| Parameter | Type | Remarks |
|-----------|------|---------|
| target | string | Set to "viewport" to resize the viewport. <br> Set to "window" to resize the entire window. |

### Read-only properties

The properies allow you to query the current resolution of the browser.

| Property | Description | 
|----------|-------------|
| `UI.outerWidth`  | The width of the browser window, including the broswer's UI, such as the menubar and addressbar, etc. |
| `UI.outerHeight` | The height of the browser window, including the broswer's UI, such as the menubar and addressbar, etc. |
| `UI.innerWidth`  | The width of the browser **viewport**. |
| `UI.innerHeight` | The height of the browser **viewport**. |


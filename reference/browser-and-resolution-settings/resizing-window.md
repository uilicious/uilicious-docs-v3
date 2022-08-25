---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the different commands to resize the resolution of the browser in your UIlicious test. 
---


# Window resize commands

### `UI.resize` <a href="#uiresize" id="uiresize"></a>

These commands allow you to set the resolution of the browser.

| Command | Description|
|---------|------------|
| `UI.resize` | Resize the resolution to a specific width and height. |

## Read-only properties

The properies allow you to query the current resolution of the browser.

| Property | Description | 
|----------|-------------|
| `UI.outerWidth`  | The width of the browser window, including the broswer's UI, such as the menubar and addressbar, etc. |
| `UI.outerHeight` | The height of the browser window, including the broswer's UI, such as the menubar and addressbar, etc. |
| `UI.innerWidth`  | The width of the browser **viewport**. |
| `UI.innerHeight` | The height of the browser **viewport**. |

---

## `UI.resize`

Resize the resolution to a specific width and height.

By default the command will resize the **entire browser window**, including the browser's UI, such as the menu bar, address bar, etc.

To resize the **viewport** (the browser window excluding the browser's UI such as the menu bar and the address bar, etc), you can specify `target` as `"viewport"` in options.

### Usage
```javascript
// You can pass in width and height together in a string formatted as "<width>x<height>"
UI.resize(resolution) 
UI.resize(resolution, options)

// Alternatively you can pass width and height as two seperate numbers
UI.resize(width, height)
UI.resize(width, height, options)
```

#### Parameters

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

### Example(s)

#### Resize browser window

```javascript
UI.resize("1920x1080")
UI.resize(1920, 1080)
```
This will resize the resolution of the entire browser window to width of 1920 pixels, and height of 1080 pixels.

#### Resize browser window viewport

```javascript
UI.resize("1920x1080", {target: "viewport"})
UI.resize(1920, 1080, {target: "viewport"})
```
This will resize the resolution of the viewport to width of 1920 pixels, and height of 1080 pixels.


---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.switchTab command to navigate between different tabs in your UIlicious test.
---

# Switch Tabs

### `I.switchTab` <a href="#iswitchtab" id="iswitchtab"></a>

Switch to a tab.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.switchTab() // switch to the next tab
I.switchTab(tab) // switch to a specific tab by tab number or page title
```

**Parameters**

| Parameter | Type                 | Remarks                                                                                                 |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------- |
| tab       | `number` or `string` | <p>(Optional)<br>Tab number or page title to switch to.<br>If not provided, switch to the next tab.</p> |

#### Example(s) <a href="#examples" id="examples"></a>

**Switch to next tab**

```javascript
I.switchTab()
```

Switch to the next tab.

If the browser is currently on the last tab, then this command will switch to the first tab.

**Switch to tab with tab number**

```javascript
I.switchTab(2)
```

Switch to the second tab.

**Switch to tab with page title**

```javascript
I.switchTab("Login") // switch to the next tab
```

Switch to the tab titled "Login".

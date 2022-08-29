---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.switchTab command to navigate between different tabs in your UIlicious test.

# add tags to improve search results
tags: i.switchTab, page navigation, switch tab
---

# Switch Tabs

You can use the `I.switchTab` command to switch to another tab.

## Automatic switch to new tabs

Note that whenever any command (e.g. I.click) opens a new tab, UIlicious will automatically switch to the newly opened tab. You generally don't need to explicitly use `I.switchTab` to switch to a new tab, unless you want to go to a previously opened tab. 

## Switch to the next tab

The `I.switchTab` command switches the active tab to the next tab. If the current active tab is the last tab in the browser window, this will switch to the first tab instead.

{% tabs %}

{% tab title="Example" %}

```javascript
// First, go to google.com
I.goTo("https://google.com")

// Then, open a new tab, and go to wikipedia.com
// The test browser will automatically switch to the new tab.
I.goTo("https://wikipedia.com", {newTab: true})

// Now, switch to the next tab.
// Since the current tab is last tab, this will go to the first tab, which has google.com opened
I.switchTab()
```

{% endtab %}

{% tab title="Result" %}

<iframe title='switch-tab-example-1' src="https://snippet.uilicious.com/embed/test/public/DYUjuxtQUdpcKkFtR6WwtC?stepNum=2&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}

{% endtabs %}

## Switch using page title or tab number

You can switch to the specific tab by using the `I.switchTab` command with the title of the page or number of the tab to switch to.

{% tabs %}

{% tab title="Example" %}

```javascript
// First, go to google.com.
I.goTo("https://google.com") 

// Then, open a new tab, and go to wikipedia.com.
// The test browser will automatically switch to the new tab.
I.goTo("https://wikipedia.com", {newTab: true})

// Switch to the first tab, which has google.com opened
I.switchTab(1)

// Switch to the second tab, which as the page title "Wikipedia"
I.switchTab("Wikipedia")
```

{% endtab %}

{% tab title="Result" %}

<iframe title='switch-tab-example-1' src="https://snippet.uilicious.com/embed/test/public/8Nvyj5j96tigStdGC5EHm6?stepNum=2&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}

{% endtabs %}

## Close tabs when they are not needed

When you no longer need to use a tab, we recommend using the `I.closeTab()` command instead of the `I.switchTab()` command, because having more tabs open will slow down the overall test execution.


## Reference

**Usage** 

```javascript
I.switchTab() // switch to the next tab
I.switchTab(tab) // switch to a specific tab by tab number or page title
```

**Parameters**

| Parameter | Type                 | Remarks                                                                                                 |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------- |
| tab       | `number` or `string` | <p>(Optional)<br>Tab number or page title to switch to.<br>If not provided, switch to the next tab.</p> |

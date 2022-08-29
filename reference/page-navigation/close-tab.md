---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.closeTab command to close a tab in your UIlicious test.

# add tags to improve search results
tags: i.closeTab, page navigation, close tab
---

# Close Tab

Use the `I.closeTab` command to close the current active tab.

After the tab is closed, the window will automatically switch to the previous tab.

Note that this command will be ignored if the current tab is the only tab open. 

```javascript
// First, go to google.com
I.goTo("https://google.com")

// Then, open a new tab, and go to wikipedia.com
// The test browser will automatically switch to the new tab.
I.goTo("https://wikipedia.com", {newTab: true})

// Close the current tab (wikipedia.com)
// This will automatically switch to the previous tab (google.com)
I.closeTab()
```

<iframe title='close-tab-example-1' src="https://snippet.uilicious.com/embed/test/public/SnPdeAEHjMHgog77tp4egu?stepNum=2&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>
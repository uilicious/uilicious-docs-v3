---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the TEST.log.info command to log a custom report in your UIlicious test.
---

# Info Logs

Log a message to report

##Example

{% tabs %}

{% tab title="Example" %}

```javascript
I.goTo("https://en.wikipedia.org/wiki/Main_Page")

// extract text from the ID
var sampleInfo = I.getText("#Welcome_to_Wikipedia")
// Report the extracted text using TEST.log.info
TEST.log.info("The extracted text is: "+ sampleInfo)
```

Gets the text from the element with the id "Welcome_to_Wikipedia" and prints it to the report.

{% endtab %}
{% tab title="Result" %}

<iframe title='log-a-message-1' src="https://snippet.uilicious.com/embed/test/public/6JPz1uQdvXoWYT5ocLYg4D?stepNum=1&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

**Usage**

```javascript
TEST.log.info(message)
```

**Parameters**

| Parameter | Type   | Remarks                  |
| --------- | ------ | ------------------------ |
| message   | string | Message to log to report |

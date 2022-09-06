---
title: Validate URL

# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.amAt command to validate a URL in your UIlicious test.

# add tags to improve search results
tags: i.amat, page navigation, url
---

# Validate URL

Use the `I.amAt` command to validate the url of the current tab.

Set the url that you want to check as the first argument. The URL should be enclosed in quotes.

This command will fail the test if the URL of the current tab does not match the expected URL.

{% tabs %}

{% tab title="Example" %}
```javascript
I.goTo("https://google.com")
I.amAt("https://google.com") // this should pass
```
{% endtab %}

{% tab title="Result" %}
<iframe title='i-am-at-example-1' src="https://snippet.uilicious.com/embed/test/public/34qeVUNWueXA1PjQWGJ3iH?stepNum=2&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>
{% endtab %}

{% endtabs %}

## Validate URL parts

You can specify parts of the URL to validate instead of the full path. The `I.amAt` command will split and validate the URL into the followin parts:
- **Protocol**, e.g,: `http`, `https`
- **Domain**, e.g.: `myapp.com` or `uat.myapp.com`
- **Path**, e.g.: `/books/mystery`
- **Query String**, e.g. `?search=history`
- **Hash**, e.g. `#popular`


### Ignoring the protocol

If you want validate the domain but ignore the protocol, start with `://`. 

```javascript
// this should pass for:
// "http://google.com"
// "https://google.com"
I.amAt("://google.com") 
```

### Validate path

If you want validate the path, but ignore the protocol and domain, start with `/` followed by the path.

```javascript
// this should pass for:
// "https://mystore.com/books/mystery"
// "https://uat.mystore.com/books/mystery"
I.amAt("/books/mystery") 
```

### Validate query string

Include `?param=value` to validate the query string in the current URL.

```javascript
// this should pass for:
// "https://mystore.com?search=alice in wonderland"
I.amAt("?search=alice in wonderland")
```

### Validate hash

Include `#hash` to validate the hash in the current URL.

```javascript
// this should pass for:
// "https://mystore.com#popular"
I.amAt("#popular")
```

## Reference

**Usage**

```javascript
I.amAt(url)
```

**Parameters**

| Parameter | Type   | Remarks              |
| --------- | ------ | -------------------- |
| url       | string | URL to check against |

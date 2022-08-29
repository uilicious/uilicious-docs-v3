---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.goTo command to navigate to a URL in your UIlicious test.

# add tags to improve search results
tags: i.goto, page navigation, go to, open new tab, basic authentication, url
---

# Go to URL

Use the `I.goTo` command to navigate to a URL.

Set the URL that you want to go in the first parameter. The URL should be enclosed in quotes.

```javascript
I.goTo("https://google.com")
```

The example above instructs the test browser to navigate to https://google.com.

## Open a new tab

The `I.goTo` command will always open URLs in the current active tab. To open an URL in a new tab instead, pass in an options object and set the `newTab` property to `true`.

```javascript
I.goTo("https://google.com", {newTab: true})
```

The example above will open https://google.com in a new tab.

## Basic HTTP Authentication


<img :src="$withBase('/static/img/basic_http_authentication_prompt.png')" alt="A webpage that shows a basic HTTP authentication prompt" style="display: block; min-width: 100%;">
<figcaption style="text-align: center; margin-bottom: 2rem;"><small>Firefox displaying the sign in alert for website that requires Basic HTTP Authentication.</small></figcaption>

If the website you want to access shows a browser alert to prompt for login credentials, you can pass in the username and password as part of the URL in the `I.goTo` command, like this:

```javascript
I.goTo("http://<USERNAME>:<PASSWORD>@topsecretbase.com")
```
Copy the line above, and replace `<USERNAME>`, `<PASSWORD>` and the url.

## Relative Paths

You can use relative paths instead of specifying the full URL. This is useful when you want to reuse a test for different test environments hosted at different base urls.

### Example: Set the path

```javascript
I.goTo("https://mystore.com")
I.goTo("/books/mystery")
// This goes to "https://mystore.com/books/mystery"
```

### Example: Reference current directory using "."

```javascript
I.goTo("https://mystore.com/books/mystery")
I.goTo("./romance")
// This goes to "https://mystore.com/books/romance"
```

Note that the current directory is "/books", and the current document is "/books/mystery", so `I.goTo("./romance")` will navigate to "/books/romance".

### Example: Go to parent path using '..'

```javascript
I.goTo("https://mystore.com/books/mystery")
I.goTo("..")
// This goes to "https://mystore.com/"
```

Note that the current directory is "/books", and the current document is "/books/mystery", so `I.goTo("..")` will navigate to the parent directory which is "/".

### Example: Set query parameter

```javascript
I.goTo("https://mystore.com")
I.goTo("?search='alice in wonderland'")
// This goes to "https://mystore.com/?search='alice in wonderland'"
```

### Example: Set hash

```javascript
I.goTo("https://mystore.com/books/mystery")
I.goTo("#popular")
// This goes to "https://mystore.com/books/mystery#popular"
```

## Go back / Go Forward

{% hint style="info" %}
We currently do not have native commands to navigate back or forward, but there is a workaround using the `UI.execute` command.
{% endhint %}

{% tabs %}

{% tab title="Example" %}

```javascript
I.goTo("https://google.com")
I.goTo("https://wikipedia.org")

// Go back to the previous page, https://google.com
UI.execute('window.history.back()')
I.amAt("https://google.com")

// Go forward to the next page, https://wikipedia.org
UI.execute('window.history.forward()')
I.amAt("https://wikipedia.org")
```

{% endtab %}
{% tab title="Result" %}

<iframe title='switch-tab-example-1' src="https://snippet.uilicious.com/embed/test/public/X9c6AwxTpEn8qBVL6U9M5G?stepNum=2&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

## Reference

**Usage**
```javascript
I.goTo(url);
I.goTo(url, options);
```

**Parameters**

| Parameter | Type     | Remarks                                                                                                                                                                                                                                                                                                                |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url       | `string` | <p>URL to navigate to.<br><br>You can use an absolute URL like <code>http://mystore.com/shoes</code> or a relative URL like <code>/shoes</code>.<br><br>If there is Basic HTTP Authentication on the page, add the username and password to your url like this: <code>https://username:password@mystore.com</code></p> |
| options   | `object` | See below.                                                                                                                                                                                                                                                                                                             |

**Options**

| Option | Type      | Remarks                                                 |
| ------ | --------- | ------------------------------------------------------- |
| newTab | `boolean` | Flag to open the url in an new tab. Defaults to `false` |
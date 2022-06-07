# Handling Cookies

## Cookies <a href="#cookies" id="cookies"></a>

You may use these commands for setting and asserting cookies.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command                                                                                      | Description                      |
| -------------------------------------------------------------------------------------------- | -------------------------------- |
| [`UI.COOKIE.set`](https://docs.uilicious.com/scripting/cookies.html#uicookieset)             | Set a cookie on the current page |
| [`UI.COOKIE.isSet`](https://docs.uilicious.com/scripting/cookies.html#uicookieisset)         | Assert the presence of a cookie  |
| [`UI.COOKIE.isEqual`](https://docs.uilicious.com/scripting/cookies.html#uicookieisEqual)     | Assert the value of a cookie     |
| [`UI.COOKIE.delete`](https://docs.uilicious.com/scripting/cookies.html#uicookiedelete)       | Delete a cookie                  |
| [`UI.COOKIE.deleteAll`](https://docs.uilicious.com/scripting/cookies.html#uicookiedeleteAll) | Delete all cookies               |

### `UI.COOKIE.set` <a href="#uicookieset" id="uicookieset"></a>

Sets a cookie on the current page.

#### Basic Usage <a href="#basic-usage" id="basic-usage"></a>

You can set a cookie on the current page with the cookie `name` and `value` like this.

```javascript
UI.COOKIE.set(name, value)
```

For example:

```javascript
I.goTo("https://google.com")
UI.COOKIE.set("foo", "bar")
```

This sets a cookie named "foo" with the value "bar" on the page "[https://google.com](https://google.com/)".

#### Advanced Usage <a href="#advanced-usage" id="advanced-usage"></a>

You can set a cookie by using an `options` object. This lets you set other properties of the cookie.

```javascript
UI.COOKIE.set(options)
```

Here are the available options:

> Not sure what are these options? Learn more about HTTP Cookies from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

| Option                                | Description                                                                                                                                                       | Type      | Default value              |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------- |
| <p><code>name</code><br>Required</p>  | Name of the cookie                                                                                                                                                | `string`  |                            |
| <p><code>value</code><br>Required</p> | Value of the cookie                                                                                                                                               | `string`  |                            |
| `secure`                              | <p>Set a Secure cookie.<br>Secure cookies cannot be set on insecure <code>http:</code> sites.</p>                                                                 | `boolean` | `false`                    |
| `httpOnly`                            | Set an HttpOnly cookie.                                                                                                                                           | `boolean` | `false`                    |
| `domain`                              | <p>Domain to apply the cookie to.<br>Can only be set to domains for the current page.<br>Examples: <code>example.com</code>, <code>support.example.com</code></p> | `string`  | Domain of the current page |
| `path`                                | Path to apply the cookie to.                                                                                                                                      | `string`  | `\`                        |
| `maxAge`                              | Number of seconds until this cookies expires                                                                                                                      | `boolean` |                            |
| `expires`                             | <p>Time when cookie expires.<br>Ignored if <code>maxAge</code> is also provided.<br>Example: <code>Wed, 21 Oct 2015 07:28:00 GMT</code></p>                       | `string`  |                            |

For example:

```javascript
UI.COOKIE.set({name: "foo", value: "bar", "secure": true, "maxAge": 86400 })
```

Sets a Secure cookie "foo" with the value "bar" that expires in 86400 seconds at the current page.

### `UI.COOKIE.isSet` <a href="#uicookieisset" id="uicookieisset"></a>

Assert that a cookie is found on the current page.

This command only asserts the presence of a cookie. To assert the value of cookie, use `UI.COOKIE.isEqual`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.COOKIE.isSet(name)
```

For example:

```javascript
I.goTo("https://mystore.com/brands")
UI.COOKIE.isSet("foo")
```

Assert that a cookie named "foo" has been found on "[https://mystore.com/brands](https://mystore.com/brands)".

Fails if the cookie "foo" is not found.

### `UI.COOKIE.isEqual` <a href="#uicookieisequal" id="uicookieisequal"></a>

Assert the value of a cookie on the current page.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.COOKIE.isEqual(name, value)
```

For example:

```javascript
I.goTo("https://mystore.com/brands")
UI.COOKIE.isEqual("foo", "bar")
```

Assert that there is a cookie name "foo" with the value "bar" on "[https://mystore.com/brands](https://mystore.com/brands)".

Fails if the cookie "foo" is not found, or if the value is not "bar".

#### Usage <a href="#usage" id="usage"></a>

### `UI.COOKIE.delete` <a href="#uicookiedelete" id="uicookiedelete"></a>

Delete a cookie on the current page

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.COOKIE.delete(name)
```

For example:

```javascript
UI.COOKIE.delete("foo")
```

Deletes the cookie named "foo" from the current page.

### `UI.COOKIE.deleteAll` <a href="#uicookiedeleteall" id="uicookiedeleteall"></a>

Delete all cookies found on the current page

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.COOKIE.deleteAll()
```

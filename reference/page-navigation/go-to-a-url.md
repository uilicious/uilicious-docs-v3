---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.goTo command to navigate to a URL in your UIlicious test.
---

# Go to a URL

### `I.goTo` <a href="#igoto" id="igoto"></a>

Navigate to a URL.

#### Usage <a href="#usage" id="usage"></a>

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

#### Example(s) <a href="#examples" id="examples"></a>

**Absolute URL**

```javascript
I.goTo("https://mystore.com/shoes");
```

Go to [https://mystore.com/shoes](https://mystore.com/shoes).

**Absolute URL with Basic HTTP Authentication**

```javascript
I.goTo("https://username:password@mystore.com/shoes");
```

Go to [https://mystore.com/shoes](https://mystore.com/shoes).

**Relative URL**

```javascript
I.goTo("/shoes");
```

Go to the "/shoes" path of the current domain.

The following table shows where the browser will be navigated to depending on the current URL:

| Before                                                   | After                                                  |
| -------------------------------------------------------- | ------------------------------------------------------ |
| [https://storeA.com](https://storea.com/)                | [https://storeA.com/shoes](https://storea.com/shoes)   |
| [https://storeB.com](https://storeb.com/)                | [https://storeB.com/shoes](https://storeb.com/shoes)   |
| [https://mystore.com/wallet](https://mystore.com/wallet) | [https://mystore.com/shoes](https://mystore.com/shoes) |

**Reference current folder using "."**

You can also reference the current folder using a single "." character.

For example, if the current URL is at "[https://mystore.com/popular/bags](https://mystore.com/popular/bags)".

Then the current folder is "/popular".

`I.goTo("./shoes")` will navigate to "[https://mystore.com/popular/shoes](https://mystore.com/popular/shoes)".



**Reference parent folder using ".."**

You can also reference parent folders using two "." characters.

For example, if the current URL is at "[https://mystore.com/popular/bags](https://mystore.com/popular/bags)".

Then the current folder is "/popular".

The parent folder is "/".

`I.goTo("../shoes")` will navigate to "[https://mystore.com/shoes](https://mystore.com/shoes)".



**Query string**

```javascript
I.goTo("?color=blue")
```

Set the query string of the URL to 'color=blue'.

The following table shows where the browser will be navigated to depending on the current URL:

| Before                                                                     | After                                                                        |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [https://mystore.com/shoes](https://mystore.com/shoes)                     | [https://mystore.com/shoes?color=blue](https://mystore.com/shoes?color=blue) |
| [https://mystore.com/shoes?color=red](https://mystore.com/shoes?color=red) | [https://mystore.com/shoes?color=blue](https://mystore.com/shoes?color=blue) |

**Hash**

```javascript
I.goTo("#sale")
```

Set the hash of the url to 'sale'.

The following table shows where the browser will be navigated to depending on the current URL:

| Before                                                         | After                                                            |
| -------------------------------------------------------------- | ---------------------------------------------------------------- |
| [https://mystore.com/shoes](https://mystore.com/shoes)         | [https://mystore.com/shoes#sale](https://mystore.com/shoes#sale) |
| [https://mystore.com/shoes#new](https://mystore.com/shoes#new) | [https://mystore.com/shoes#sale](https://mystore.com/shoes#sale) |

**Open in a new tab**

```javascript
I.goTo("https://mystore.com", {newTab: true})
```

Set `newTab` option to `true` to open "[https://mystore.com](https://mystore.com/)" in a new tab.

***

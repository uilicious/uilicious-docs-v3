# Page Navigation

#### Page navigation commands <a href="#page-navigation-commands" id="page-navigation-commands"></a>

| Command                                            | Description            |
| -------------------------------------------------- | ---------------------- |
| [`I.goTo`](page-navigation.md#igoto)               | Navigate to a URL      |
| [`I.refreshPage`](page-navigation.md#irefreshpage) | Refresh the page       |
| [`I.switchTab`](page-navigation.md#iswitchtab)     | Switch to the next tab |
| [`I.closeTab`](page-navigation.md#iclosetab)       | Close the current tab  |

#### Page assertion commands <a href="#page-assertion-commands" id="page-assertion-commands"></a>

| Command                              | Description                                  |
| ------------------------------------ | -------------------------------------------- |
| [`I.amAt`](page-navigation.md#iamat) | Assert that the browser is at a specific URL |

***

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
| [https://storeA.com](https://storea.com)                 | [https://storeA.com/shoes](https://storea.com/shoes)   |
| [https://storeB.com](https://storeb.com)                 | [https://storeB.com/shoes](https://storeb.com/shoes)   |
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

Set `newTab` option to `true` to open "[https://mystore.com](https://mystore.com)" in a new tab.

***

### `I.amAt` <a href="#iamat" id="iamat"></a>

Asserts that the browser is at a specific URL.

You can use an absolute URL or a relative URL.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.amAt(url)
```

**Parameters**

| Parameter | Type   | Remarks              |
| --------- | ------ | -------------------- |
| url       | string | URL to check against |

#### Example(s) <a href="#examples" id="examples"></a>

**Absolute URL**

```javascript
I.amAt("http://mystore.com")
```

Matches the following:

* [http://mystore.com](http://mystore.com)

Does not match:

* [https://mystore.com](https://mystore.com)

**Without protocol**

```javascript
I.amAt("://mystore.com")
```

Matches the following:

* [http://mystore.com](http://mystore.com)
* [https://mystore.com](https://mystore.com)

**Relative URL**

```javascript
I.amAt("/shoes")
```

Matches the following:

* [http://storeA.com/shoes](http://storea.com/shoes)
* [http://storeB.com/shoes](http://storeb.com/shoes)

**Query string**

```javascript
I.amAt("?color=blue")
```

Matches the following:

* [http://mystore.com/shoes?color=blue](http://mystore.com/shoes?color=blue)
* [http://mystore.com/bag?color=blue](http://mystore.com/bag?color=blue)

Does not matches:

* [http://mystore.com/shoes](http://mystore.com/shoes)
* [http://mystore.com/bag?color=red](http://mystore.com/bag?color=red)

**Hash**

```javascript
I.amAt("#sale")
```

Matches the following:

* [http://mystore.com/shoes#sale](http://mystore.com/shoes#sale)
* [http://mystore.com/bag#sale](http://mystore.com/bag#sale)

Does not matches:

* [http://mystore.com/shoes](http://mystore.com/shoes)
* [http://mystore.com/bag#new](http://mystore.com/bag#new)

***

### `I.refreshPage` <a href="#irefreshpage" id="irefreshpage"></a>

Refreshes the page

**Usage**

```javascript
I.refreshPage()
```

***

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

***

### `I.closeTab` <a href="#iclosetab" id="iclosetab"></a>

Close the current tab.

`I.closeTab` cannot be used if there's only one tab open.

After the tab is closed, the browser will be automatically switched to the next tab (or the last tab if the closed tab was the last).

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.closeTab()
```

[\
](https://docs.uilicious.com/scripting/form\_input.html)

# Validate URL

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

* [http://mystore.com](http://mystore.com/)

Does not match:

* [https://mystore.com](https://mystore.com/)

**Without protocol**

```javascript
I.amAt("://mystore.com")
```

Matches the following:

* [http://mystore.com](http://mystore.com/)
* [https://mystore.com](https://mystore.com/)

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

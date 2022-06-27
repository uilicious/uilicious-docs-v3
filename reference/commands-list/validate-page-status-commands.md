# Validate Page Status Commands

## Status Code Assertion <a href="#status-code-assertion" id="status-code-assertion"></a>

These commands allow you to assert the status code of the current page.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command                                                                                                           | Description                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`UI.isStatusCode`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiisstatuscode)       | Asserts that the status code for the current page is a specific status code.              |
| [`UI.isNotStatusCode`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiisnotstatuscode) | Asserts that the status code for the current page is **NOT** a specific status code.      |
| [`UI.is200`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiis200)                     | Asserts that the status code for the current page is 200 (OK).                            |
| [`UI.isNot200`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uisinot200)               | Asserts that the status code for the current page is **NOT** 200 (OK).                    |
| [`UI.is404`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#usis404)                     | Asserts that the status code for the current page is 404 (Not Found).                     |
| [`UI.isNot404`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiisnot404)               | Asserts that the status code for the current page is **NOT** 404 (Not Found).             |
| [`UI.is500`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiis500)                     | Asserts that the status code for the current page is 500 (Internal Server Error).         |
| [`UI.isNot500`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiisnot500)               | Asserts that the status code for the current page is **NOT** 500 (Internal Server Error). |

***

### `UI.isStatusCode` <a href="#uiisstatuscode" id="uiisstatuscode"></a>

Asserts that the status code for the current page is a specific status code.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.isStatusCode(statusCode)
```

**Parameters**

| Parameter  | Type   | Remarks                                        |
| ---------- | ------ | ---------------------------------------------- |
| statusCode | number | The status code to expect for the current page |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
UI.isStatusCode(403)
```

Validates that the current page returns 403 (Forbidden).

***

### `UI.isNotStatusCode` <a href="#uiisnotstatuscode" id="uiisnotstatuscode"></a>

Asserts that the status code for the current page is **NOT** a specific status code.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.isNotStatusCode(statusCode)
```

**Parameters**

| Parameter  | Type   | Remarks                                                       |
| ---------- | ------ | ------------------------------------------------------------- |
| statusCode | number | The status code that is **NOT** expected for the current page |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
UI.isNotStatusCode(500)
```

Validates that the current page does not return 500 (Internal Server Error).

***

### `UI.is200` <a href="#uiis200" id="uiis200"></a>

Asserts that the status code for the current page is 200 (OK).

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.is200()
```

***

### `UI.isNot200` <a href="#uiisnot200" id="uiisnot200"></a>

Asserts that the status code for the current page is **NOT** 200 (OK).

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.isNot200()
```

***

### `UI.is404` <a href="#uiis404" id="uiis404"></a>

Asserts that the status code for the current page is 404 (Not Found).

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.is404()
```

***

### `UI.isNot404` <a href="#uiisnot404" id="uiisnot404"></a>

Asserts that the status code for the current page is **NOT** 404 (Not Found).

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.isNot404()
```

***

### `UI.is500` <a href="#uiis500" id="uiis500"></a>

Asserts that the status code for the current page is 500 (Internal Server Error).

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.is500()
```

***

### `UI.isNot500` <a href="#uiisnot500" id="uiisnot500"></a>

Asserts that the status code for the current page is **NOT** 500 (Internal Server Error).

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.isNot500()
```

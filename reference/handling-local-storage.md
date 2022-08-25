---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the different local storage commands to allow you to access properties in local storage for the origin
  of the current page in your UIlicious test. This document assumes you already have some knowledge
  about local storage.
---



# Handling local storage

### `UI.LocalStorage.get` <a href="#uilocalstorageget" id="uilocalstorageget"></a>

Get the value of a property from local storage for the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the current page.

Returns `null` if the property does not exist.

If the property exists, its value will be automatically parsed as a JSON object if it is a valid JSON object, otherwise it will be returned as a string.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.LocalStorage.get(name)
```

| Parameter | Type   | Remarks                                            |
| --------- | ------ | -------------------------------------------------- |
| name      | string | The name of the property to get from local storage |

#### Example(s) <a href="#examples" id="examples"></a>

Here's how we can access the local storage in our test script to get the value of the `cart` property for example:

```javascript
var cart = UI.LocalStorage.get("cart")
```

***

### `UI.LocalStorage.set` <a href="#uilocalstorageset" id="uilocalstorageset"></a>

Set a property in local storage for the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the current page.

If the property already exists in local storage, the value is overriden.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.LocalStorage.set(name, value)
```

| Parameter | Type   | Remarks                                                                                                                |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| name      | string | The name of the property to put in local storage                                                                       |
| value     | any    | The value to the property to put in local storage. If the value is not a string, it will be stringified before saving. |

#### Example(s) <a href="#examples" id="examples"></a>

Set the `theme` property in local storage to `{"dark_mode": true}`:

```javascript
UI.LocalStorage.set("theme", {"dark_mode": true})
```

***

### `UI.LocalStorage.delete` <a href="#uilocalstoragedelete" id="uilocalstoragedelete"></a>

Delete a property in local storage for the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the current page.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.LocalStorage.delete(name)
```

| Parameter | Type   | Remarks                                               |
| --------- | ------ | ----------------------------------------------------- |
| name      | string | The name of the property to delete from local storage |

#### Example(s) <a href="#examples" id="examples"></a>

Delete the `cart` property from local storage:

```javascript
UI.LocalStorage.delete("cart")
```

***

### `UI.LocalStorage.deleteAll` <a href="#uilocalstoragedeleteall" id="uilocalstoragedeleteall"></a>

Delete all properties in local storage for the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the current page.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.LocalStorage.deleteAll()
```

# Get and Validate page title

### `I.seePageTitle` <a href="#iseepagetitle" id="iseepagetitle"></a>

Assert the title of the current page

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.seePageTitle(title)
```

**Parameters**

| Parameter | Type   | Remarks                 |
| --------- | ------ | ----------------------- |
| title     | string | The expected page title |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("https://www.wikipedia.org/")
I.seePageTitle("Wikipedia")
```

This example test navigates to the `https://www.wikipedia.org/` and checks if the page title is "Wikipedia". The test will pass if the page title is exactly "Wikipedia".

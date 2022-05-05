# Assertion Commands

These are commands to assert if the elements on the page is in a expected state.

If the assertion fail, the command results in an error.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command                                                 | Description                                           |
| ------------------------------------------------------- | ----------------------------------------------------- |
| [`I.see`](assertion-commands.md#isee)                   | Assert that an text or element is visible             |
| [`I.dontSee`](assertion-commands.md#idontsee)           | Assert that an text or element is NOT visible         |
| [`I.count`](assertion-commands.md#icount)               | Assert the number of occurances for a text or element |
| [`I.seePageTitle`](assertion-commands.md#iseepagetitle) | Assert the title of the current page                  |

***

### `I.see` <a href="#isee" id="isee"></a>

Assert that an text or element is visible

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.see(target)
```

**Parameters**

| Parameter | Type   | Remarks                 |
| --------- | ------ | ----------------------- |
| target    | string | Text or element to find |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.see("Welcome back, Bruce");
```

Asserts that the text "Welcome back, Bruce" is seen on the page.

***

### `I.dontSee` <a href="#idontsee" id="idontsee"></a>

Assert that an text or element is **NOT** visible

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.dontSee(target)
```

**Parameters**

| Parameter | Type   | Remarks                 |
| --------- | ------ | ----------------------- |
| target    | string | Text or element to find |

***

### `I.count` <a href="#icount" id="icount"></a>

Assert the number of occurances for a text or element

Aliases: `I.seeCount`

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.count(target, n)
```

**Parameters**

| Parameter | Type   | Remarks                      |
| --------- | ------ | ---------------------------- |
| target    | string | Text or element to find      |
| n         | number | Number of occurance expected |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.count("Add to cart", 20);
```

Asserts that there's 20 occurances of the text "Add to cart".

```javascript
I.count(".product", 20);
```

Asserts that there's 20 occurances of the element with the "product" CSS class.

***

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

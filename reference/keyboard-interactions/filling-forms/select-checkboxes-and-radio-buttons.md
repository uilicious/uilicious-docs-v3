---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.select command to select a checkbox or radio buttons in your UIlicious test.
---

# Select Checkboxes and Radio Buttons

### `I.select` <a href="#iselect" id="iselect"></a>

Select a dropdown, checkbox, or radio button.

> **This -ONLY- works on native HTML5 elements.**\
> \
> For custom elements, use `I.click` as a fallback.\
>

#### Usage <a href="#usage" id="usage"></a>

Select an `option`:

```javascript
I.select(option)
```

Select an `option` in a `list`:

```javascript
I.select(list, option)
```

**Parameters**

| Parameter | Type   | Remarks                                         |
| --------- | ------ | ----------------------------------------------- |
| list      | string | (Optional) Keyword to identify the options list |
| option    | string | Keyword to identify the option to select        |

#### Example(s) <a href="#examples" id="examples"></a>

### **Select a dropdown**

Here, we will use this "Number" dropdown list for illustration.

<details>

<summary>Number</summary>

One

Two

Three

</details>

Specify the `option`;

```javascript
 I.select("Two");
```

Or, specify the `list` and the `option`:

```javascript
I.select("Number", "Two");
```

This selects the option "Two".

### **Select a checkbox**

Here, we will use this check box for illustration.

&#x20;    ☐ I agree to the terms and conditions

```javascript
I.select("I agree to the terms and conditions");
```

This selects the checkbox "I agree to the terms and conditions".

**Select a check box in a checkbox list**

Here, we will use this "Color" checkbox list for illustration.

&#x20;    **Color**     ☐ Red  ☐ Blue  ☐ Green

Specify the `option`;

```javascript
I.select("Red");
```

Or, specify the `list` and the `option`:

```javascript
I.select("Color", "Red");
```

This selects the option "Red".

**Select a radio button**

Here, we will use this "Animal" radio button list for illustration.

&#x20;     **Animal**    ○ Cat ○ Dog ○ Mouse

Specify the `option`;

```javascript
I.select("Cat");
```

Or, specify the `list` and the `option`:

```javascript
I.select("Animal", "Cat");
```

This selects the option "Cat".

***

### `I.selected` <a href="#iselected" id="iselected"></a>

Asserts that a dropdown option, checkbox, or radio button is selected

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.selected(option)
```

```javascript
I.selected(list, option)
```

**Parameters**

| Parameter | Type   | Remarks                                       |
| --------- | ------ | --------------------------------------------- |
| list      | string | Keyword to identify the options list          |
| option    | string | Keyword to identify the option to be selected |

***

### `I.deselect` <a href="#ideselect" id="ideselect"></a>

Deselect a checkbox.

#### Usage <a href="#usage" id="usage"></a>

Deselect an `option`:

```javascript
I.deselect(option)
```

Deselect an `option` in a `list`:

```javascript
I.deselect(list, option)
```

**Parameters**

| Parameter       | Type   | Remarks                                    |
| --------------- | ------ | ------------------------------------------ |
| list (optional) | string | Keyword to identify the options list       |
| option          | string | Keyword to identify the option to deselect |

***

### `I.deselected` <a href="#ideselected" id="ideselected"></a>

Asserts that a dropdown option, checkbox, or radio button is NOT selected

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.deselected(option)
```

```javascript
I.deselected(list, option)
```

**Parameters**

| Parameter | Type   | Remarks                                                         |
| --------- | ------ | --------------------------------------------------------------- |
| list      | string | Keyword to identify the options list                            |
| option    | string | Keyword to identify the option that expected to be NOT selected |

\

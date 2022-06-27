# Form Actions

These commands are used to set values for form input and validate form inputs.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

#### Input commands <a href="#input-commands" id="input-commands"></a>

| Command                                   | Description                                         |
| ----------------------------------------- | --------------------------------------------------- |
| [`I.fill`](form-actions.md#ifill)         | Fill a textual field                                |
| [`I.select`](form-actions.md#iselect)     | Select a dropdown option, checkbox, or radio button |
| [`I.deselect`](form-actions.md#ideselect) | Deselect a checkbox                                 |
| [`I.upload`](form-actions.md#iupload)     | Upload a file                                       |

#### Assertion / Validation commands <a href="#assertion--validation-commands" id="assertion--validation-commands"></a>

| Command                                       | Description                                                              |
| --------------------------------------------- | ------------------------------------------------------------------------ |
| [`I.filled`](form-actions.md#ifilled)         | Assert that the form is filled with a specific value                     |
| [`I.selected`](form-actions.md#iselected)     | Assert that a dropdown option, checkbox, or radio button is selected     |
| [`I.deselected`](form-actions.md#ideselected) | Assert that a dropdown option, checkbox, or radio button is NOT selected |

***

### `I.fill` <a href="#ifill" id="ifill"></a>

> Short form of `I.fillField` command

Fill a textual field.

This works for date picker fields that accept direct text input.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.fill(field, value)
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                                                                                                                                                                                       |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| field     | string | <p>Keyword to identify the field.<br>The associated label, aria-label, placeholder, adjacent text, and current value can be used to identify a field.<br>CSS selectors can also be used, <em>but is not recommended as it makes the tests harder to keep up to date.</em></p> |
| value     | string | Value to fill into the field                                                                                                                                                                                                                                                  |

#### Example(s) <a href="#examples" id="examples"></a>

**Fill a field**

```javascript
I.fill("Email", "bruce@waynecorp.com");
```

This command fills "bruce@waynecorp.com" into the "Email" field.

**Clear a field**

```javascript
// fill with empty value
I.fill("Email", "");

// or
I.clear("Email");
```

This command clears the "Email" field.

***

### `I.filled` <a href="#ifilled" id="ifilled"></a>

Asserts that the form is filled with a specific value

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.filled(field, value)
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                                                                                                                                                                  |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| field     | string | <p>Keyword to identify the field.<br>The associated label, placeholder, adjacent text, and name can be used to identify a field.<br>CSS selectors can also be used, <em>but is not recommended as it makes the tests harder to keep up to date.</em></p> |
| value     | string | Value that the field is expected to have                                                                                                                                                                                                                 |

***

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

**Select a dropdown**

Here, we will use this "Number" dropdown list for illustration.

**Number**                   One         Two         Three    &#x20;

Specify the `option`;

```javascript
 I.select("Two");
```

Or, specify the `list` and the `option`:

```javascript
I.select("Number", "Two");
```

This selects the option "Two".

**Select a checkbox**

Here, we will use this check box for illustration.

&#x20;I agree to the terms and conditions

```javascript
I.select("I agree to the terms and conditions");
```

This selects the checkbox "I agree to the terms and conditions".

**Select a check box in a checkbox list**

Here, we will use this "Color" checkbox list for illustration.

**Color**  Red  Blue  Green

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

**Animal**  Cat  Dog  Mouse

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

***

### `I.upload` <a href="#iupload" id="iupload"></a>

Upload a file.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.upload(field, pathToFile)
```

**Parameters**

| Parameter  | Type   | Remarks                                                                                                                    |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| field      | string | Keyword to identify the file upload field                                                                                  |
| pathToFile | string | <p>Path to the file to upload.<br><strong>Currently, only absolute paths from the project root are supported.</strong></p> |

#### Example <a href="#example" id="example"></a>

First, you need to add the file to be used for testing file upload to the UI-licious test project.

Click on the "plus" button in the workspace pane to open the "Add file" dialog.

![Add a file to the project](https://docs.uilicious.com/images/i\_upload\_tutorial/add-file.png)

Select the "Upload file" menu, and upload the file to the project.

![Upload a file to the project](https://docs.uilicious.com/images/i\_upload\_tutorial/upload-file.png)

Finally, specify the absolute or relative path to the file in the `I.upload` command.

![Specify the file to upload in I.upload command](https://docs.uilicious.com/images/i\_upload\_tutorial/i-upload-command.png)

This will upload "cat.jpg" to the "Start uploading" file input field in our test application.

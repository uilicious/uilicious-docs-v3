# Fill input fields

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

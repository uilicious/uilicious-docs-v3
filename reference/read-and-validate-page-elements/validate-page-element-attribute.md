---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the different commands to assert the presence or the expected value of an attribute on an element in your UIlicious test.
---

# Validate page element attribute

### `UI.hasAttribute` <a href="#uihasattribute" id="uihasattribute"></a>

#### Usage <a href="#usage" id="usage"></a>

```javascript
// assert the presense of the attribute on the target element
UI.hasAttribute(target, attribute)
// assert the value of the attribute on the target element
UI.hasAttribute(target, attribute, value)
```

| Parameter | Type   | Remarks                                                                                                                                                   |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector.                                                                     |
| attribute | string | Name of the attribute.                                                                                                                                    |
| value     | string | (Optional) Value expected for the attribute. Case-insensitive. If not provided, this command will simply assert that the attribute exists on the element. |

#### Example(s) <a href="#examples" id="examples"></a>

**Validate that an element should be disabled**

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// leave the username and password fields blank
I.fill("Username", "")
I.fill("Password", "")

// assert that the #login-button is disabled
UI.hasAttribute("#login-button", "disabled")
```

In this example, we can use the `UI.hasAttribute` to test if the `#login-button` element is disabled, when the Username and Password fields are empty.

**Validate that the element attribute should have a specific value**

```javascript
I.goTo("https://mystore.com")
UI.hasAttribute("#summer-sale-banner", "campaign-id", "SUMMERSALE2020")
```

This test will pass if the `#summer-sale-banner` element exists on the page, and has the `campaign-id` attribute, with the value of `SUMMERSALE2020`.

### `UI.doesNotHaveAttribute` <a href="#uidoesnothaveattribute" id="uidoesnothaveattribute"></a>

Assert the absense of an attribute on an element, or that the value of an attribute is not equals a given string.

#### Usage <a href="#usage" id="usage"></a>

```javascript
// Assert that the element does not have an attribute
UI.doesNotHaveAttribute(target, attribute)
// Assert that the element does not have an attribute with an given value
UI.doesNotHaveAttribute(target, attribute, value)
```

| Parameter | Type   | Remarks                                                                                                                                                                          |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector.                                                                                            |
| attribute | string | Name of the attribute.                                                                                                                                                           |
| value     | string | (Optional) Value that the attribute should not be equal to. Case-insensitive. If not provided, this command will simply assert that the attribute does not exist on the element. |

#### Example(s) <a href="#examples" id="examples"></a>

**Validate that an element should not be disabled**

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// assert that the #login-button is disabled initially
UI.hasAttribute("#login-button", "disabled")

// fill the username and password fields
I.fill("Username", "john")
I.fill("Password", "supersecretpassword")

// assert that the #login-button is no longer disabled
UI.doesNotHaveAttribute("#login-button", "disabled")
```

In this example, we can use the `UI.hasAttribute` to test if the `#login-button` element is not disabled, when the Username and Password fields are filled.

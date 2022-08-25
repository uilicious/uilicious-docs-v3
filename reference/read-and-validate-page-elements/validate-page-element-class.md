---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the different commands to assert the presence of a CSS class on an element in your UIlicious test.
---


# Validate page element class

### `UI.hasClass` <a href="#uihasclass" id="uihasclass"></a>

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.hasClass(target, cssClass)
```

| Parameter | Type   | Remarks                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| cssClass  | string | CSS class that should exist on the element.                                           |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// fill in the username, and wrong password
I.fill("Username", "john")
I.fill("Password", "WRONGPASSWORD") 
I.click("Login")

// assert that the #password-field-group has the "has-error" css class
UI.hasClass("#password-field-group", "has-error")
```

In this example, we can use `UI.hasClass` to check if the `has-error` CSS class is applied to an form field when the form is submitted with invalid values, like an invalid password.

### `UI.doesNotHaveClass` <a href="#uidoesnothaveclass" id="uidoesnothaveclass"></a>

Assert the absence of a CSS class on an element.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.doesNotHaveClass(target, cssClass)
```

| Parameter | Type   | Remarks                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| target    | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| cssClass  | string | CSS class that should not exist on the element.                                       |

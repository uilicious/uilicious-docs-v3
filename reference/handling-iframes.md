---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the UI.context command to limit the test to specific parts of a page and
  handle iframes in your UIlicious test.
---


# Handling iFrames

### UI.context <a href="#uicontext" id="uicontext"></a>

Limit the test to specific parts of a page.

Can be used to explicitly switch to the context of an iframe. 👉 [Jump to "Handling Iframes"](https://docs.uilicious.com/scripting/ui\_context.html#handling-iframes).

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.context(context, test)
```

**Parameters**

| Parameter | Type     | Remarks                                                                                                                                                                                                                            |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | string   | Limit the test to specific parts of a page. Specify a CSS selector or XPATH to specify the element to limit the test to. If the CSS selector or XPATH matches multiple elements, the scope of the test will be set to all matches. |
| test      | function | Test to run using the context                                                                                                                                                                                                      |

#### Example(s) <a href="#examples" id="examples"></a>

Take this page for example, it has two identical forms to login and create account.

To limit the test to the login form, we can set the context using a CSS selector on the ID of the login form like this:

```javascript
I.see("Please log in ") // this runs on the entire page
UI.context("#login-form", function(){ // the following commands runs on the login form on
  I.fill("username", "hello@uilicious.com")
  I.fill("password", "password")
  I.click("login")
})
```

#### Handling IFrames <a href="#handling-iframes" id="handling-iframes"></a>

The contents of `<iframe>` can sometimes be inaccessible to the test engine, depending on how the `<iframe>` element is composed and the security policies of the browser, the iframe, and the parent page - so commands can fail unexpectedly if the target elements are within an `<iframe>` element. To interact with elements in an `<iframe>`, you need to explicitly select the iframe as the context using `UI.context`.

```javascript
UI.context("#secure-payment-iframe", ()=>{ 
  I.fill("Credit card", "4242 4242 4242 4242")
  I.fill("Expiry", "02/25")
  I.fill("CVC", "492")
})
```

This will run the commands to fill the credit card information in the iframe with the id `secure-payment-iframe`. The selector must match the iframe element and only one iframe exactly.

### Test Scripting Tutorial for handling iFrames

[How to test Slider Components](/test-scripting-tutorials/testing-iframes.md)

This tutorial shows you how to handle iFrames in website(s) using the UI.context command.

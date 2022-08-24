---
# By default, the H1 title will be used at the page title. Set title to override the default.
title: How targeting works in UIlicious

# Write a short description about the page. This will be displayed on google search results.
description: Understand how UIlicious find elements on your website.
---

# How Targeting Works in UIlicious

## What is UIlicious?

UIlicious is a UI automation testing tool for web applications that uses test scripts to simulate, test, and validate end-user workflows by _targeting_ UI elements like buttons, menu items, navigation, etc.

Even if your web application's HTML code for UI changes, the test is valid if the user journey remains the same.

The UIlicious core principle is to **test the user journey**, not HTML.

UIlicious encourages you to write tests as if you are telling a friend over the phone how to use a particular website.

### How Targeting Works

UIlicious looks specifically at the semantic HTML, ARIA label attributes, and alternative text for images provided in your code as it crawls through the structure of your site.

Semantic HTML are elements that provide a clear meaning to both you and your computer. For example, a `<title>` element is semantical because you as a reader understand the element's purpose is to represent a title.

ARIA label attributes also help make web pages more accessible and provide more context for elements seen on screen readers and other similar devices. For example, an interactive element could be a button used for searching with an aria-label that describes its use. We would then write: `<button aria-label="Search">`.

If you are interested in learning more about semantic HTML, please take a look at Mozilla firefox's [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics\_in\_html) and [ARIA - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) documentation.

Let's imagine a scenario where we are going to use Google Maps to search for a specific place on the map, and use the following script in UIlicious to tell the tool we want to search:

#### UIlicious Script Example:

```javascript
// UIlicious Script for Google Map Search​
// Step 1
I.goTo("https://www.google.com.sg/maps")
// Step 2
I.fill("Search", "Merlion, Singapore") // It's a half-fish, half-lion statue
// Step 3
I.click("Search")
```

UIlicious can successfully complete Step 1 and Step 2, but how does our tool know that the button (circled in red in our example below) is both clickable and labeled "Search"?

Let's take a look at the HTML code behind our Google Maps.

#### Example:

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651536726/ui-licious/ui-licious:%20conceptual%20guide/Screen\_Shot\_2022-05-02\_at\_7.10.42\_PM\_dy05mu.png)

Using the Inspect tool provided by our browser, we can see that our Search `<button>` is given an accessible name using  `aria-label="Search"`.

#### Example:

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652156462/ui-licious/ui-licious:%20conceptual%20guide/Screenshot\_of\_Google\_Map\_Search\_Button.png)

So, when we run our tests, UIlicious can make educated guesses _based on the context provided_ in our HTML code.

### Targeting Similar Elements

**What happens if there are multiple elements with the same keyword?**

UIlicious will make an educated guess to resolve the ambiguity using semantics, accessibility, and the previous commands you use in a script.

#### Using Semantics

For example, if `I.click("Sign in")` matches a `h1` element and a `button` element, the UIlicious is more likely to click on the `button` which semantically indicates that the element is clickable.

#### Using Previous Commands

UIlicious focuses on user journeys, so it tries to think like a user when moving through your web application.

UIlicious will also look at your previous commands to identify the target element.

For example, on the Twitter page below, the "Log In" button appears twice on the page.

#### Example:

![The UI.licious Studio displays the left panel of a given website and the right panel of UI.licious commands.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651596744/ui-licious/ui-licious:%20conceptual%20guide/conceptual-guide-1.png)

UIlicious will infer that it should target the closest button element to submit the form because the previous commands were to fill in the username and password.

#### UIlicious Script Example:

```javascript
// UIlicious Script for Twitter Login

​I.goTo("https://twitter.com")
I.fill("Username", "brucewayne")
I.fill("Password", "supersecretpassword")​
// Even though there's two log in buttons, 
// this will click on the nearest button to the "username" and "password" fields.  
I.click("Log in")

```

### Alternatives to Targeting Elements

#### Using the `I.see` command

Sometimes, we want UIlicious to target an element that may look ambiguous in comparison to other elements on the same webpage.

In other automation tools, it can require you to write a script using the position of the element or CSS or XPath selectors, which can be faulty since both can change over time.

`I.see()` is one of the basic commands of UIlicious that allows you to assert or validate that the element exists within the page.&#x20;

Let's say we want to purchase a specific type of rose called "Love, Actually" for a friend from a popular flower shop called [Far East Flora](https://www.fareastflora.com/catalogsearch/result/?q=roses).&#x20;

In the example below, we can see that there are several types of roses with the same "View Details" button.&#x20;

Using the `I.see` command in our script, we can give clues to UIlicious to set its anchor point specifically on the **"PY06 - Love, Actually"** roses.&#x20;

Then, the UIlicious test engine is smart enough to infer that you would like to specifically click the "View Details" button under **"PY06 - Love, Actually"** roses.

#### Example:

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653357686/ui-licious/ui-licious:%20conceptual%20guide/fareastflora-roses.png)

#### UIlicious Script Example:

```javascript
I.goTo("https://www.fareastflora.com")

// Let's search for roses
I.fill("Search", "Roses")
I.pressEnter();

// Use the I.see command to give UIlicious a focus point
I.see("PY06 - Love, Actually")
I.click("PY06 - Love, Actually")

// Let's add the flowers to our cart
I.click("Add To Cart")

// Checkout the flowers
I.click("Checkout")
I.click("Continue as a Guest")
```

#### Hinting with `I.see.hint` command

`I.see.hint` is a command that allows you to explicitly focus on a specific element within the page that cannot be seen by the command `I.see`.&#x20;

The difference between `I.see` and `I.see.hint` is that when certain texts or CSS elements are nested inside another element, they cannot be seen by just I.see. So to target the nested element, we must use another command such as `I.see.hint`.&#x20;

Take a look at the example below.&#x20;

On the [James Hardie](https://www.jameshardie.ca/forms/request-a-sample) site, there are multiple Siding Samples to select from. To pick which Siding Sample we want UIlicious to select, we can use `I.see.hint` to give a hint to UIlicious to focus on a specific Siding Sample. UIlicious is smart enough to infer that our next commands will relate to that specific Siding Sample.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655513518/ui-licious/ui-licious:%20conceptual%20guide/i.see.hint-example.png)

#### Limiting the scan area using `UI.Context`

In some cases, we need to limit the scan area for the UIlicious test engine to identify target elements when we cannot use commands like I.see and I.see.hint.

In the [example](how-targeting-works-in-uilicious.md#example-4) below, there are two identical forms to log in and create an account.

This can be confusing for UIlicious to decide which form to fill in since both have an identical set of usernames and passwords.&#x20;

Let's say we want to specifically target the login form.&#x20;

To solve this issue, we can use `UI.context` to specify a region, the login form, so that UIlicious will scan and identify our target element.&#x20;

See the [UIlicious script](how-targeting-works-in-uilicious.md#uilicious-code-example-1) below.

**Note**: [**`UI.context()`** also allows you explicitly focus on an **iFrame**](how-targeting-works-in-uilicious.md#handling-less-than-iframe-greater-than-using-ui.context) by targeting the **`<iframe>`** element or XPath.&#x20;

#### Example:

{% tabs %}
{% tab title="Login Form & Register Form" %}
![The web page has two forms: a login form and a create account form. The login form is directly above the create account form.](https://res.cloudinary.com/di7y5b6ed/image/upload/c\_scale,h\_380,w\_500/v1652212420/ui-licious/ui-licious:%20conceptual%20guide/login%20and%20register%20form.png)
{% endtab %}

{% tab title="HTML" %}
```html
Please log in to your Qacker News account or create one to continue.
<br>
<br>
<!-- our login form-->
<form id="login-form">
  <div>username: <input type="text"></div>
  <div>password: <input type="password"></div>
  <button type="submit">login</button>
</form>
<br>

<!-- our register form -->
<form id="register-form">
    <div>username: <input type="text"></div>
    <div>password: <input type="password"></div>
    <button type="submit">create account</button>
</div>
```
{% endtab %}
{% endtabs %}

To limit the scan area to the login form, we can set the `UI.context` to use a CSS id Selector, `#login-form`, that identifies the Login Form like this:

#### UIlicious Code Example:

```javascript
I.see("Please log in") // This looks at the entire page for this phrase.

UI.context("#login-form", function(){    
I.fill("username", "hello@uilicious.com")  
I.fill("password", "password")  
I.click("login")
})
```

#### Handling `<iframe>` using `UI.Context`

In some cases such as targeting an `<iframe>`, using the commands, I.see or I.see.hint, is not a choice because of how the `<iframe>` element is composed, like a pop-up or modal. As a result, the UIlicious test engine cannot access or target the elements inside of an `<iframe>`.&#x20;

To interact with elements in an `<iframe>`, you must explicitly select the iframe as the context using `UI.context`.

Inside of the UI.context brackets, { } , all of the commands listed will only apply to that specific `<iframe>` or element.&#x20;

In the example below, we have a pop-up window that has a unique class of `.trust_popframe`. We cannot target the content of this pop-up window with I.see or I.see.hint because it is located within an `<iframe>`.

#### Example:

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653361446/ui-licious/ui-licious:%20conceptual%20guide/jackdaniel.png)

#### Using CSS/XPath Selectors

{% hint style="warning" %}
We do not recommend using CSS and XPath selectors because it can make your test results unstable since class and ID names can change over time and cause your code to become unreadable.&#x20;
{% endhint %}

You can use CSS and XPath Selectors as an alternative to targeting elements.

```javascript
I.click("#signin-button") // click on the element with the id "signin-button"
I.click("//table[1]//tr[1]//td[1]") // click on the first cell of the first row of the first table
```

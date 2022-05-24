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

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651536726/ui-licious/ui-licious:%20conceptual%20guide/Screen\_Shot\_2022-05-02\_at\_7.10.42\_PM\_dy05mu.png)

Using the Inspect tool provided by our browser, we can see that our Search `<button>` is given an accessible name using  `aria-label="Search"`.

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

![The UI.licious Studio displays the left panel of a given website and the right panel of UI.licious commands.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651596744/ui-licious/ui-licious:%20conceptual%20guide/conceptual-guide-1.png)

UIlicious will infer that it should target the closest button element to submit the form because the previous commands were to fill in the username and password.

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

You can use `I.see` to give clues to the UIlicious tool on where your target element is located near. Also, I.see uses the five previous commands used in your script for context.

For example, let's say we want to purchase roses for a friend from a popular flower shop called [Far East Flora](https://www.fareastflora.com/catalogsearch/result/?q=roses). We also know that we want to purchase a specific type of roses called "Love, Actually".&#x20;

Using the `I.see` command, we can give clues to UIlicious to indicate the "PY06 - Love, Actually" flowers are to be added to our cart.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652158000/ui-licious/ui-licious:%20conceptual%20guide/Far%20East%20Flora%20-%20Love%2C%20Actually.png)

In the example below,  you can view `I.see("PY06 - Love, Actually")` being selected by the UIlicious test engine from the blue dot.&#x20;

{% tabs %}
{% tab title="UIlicious Studio" %}
![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652158716/ui-licious/ui-licious:%20conceptual%20guide/UIlicious%20Studio%20shows%20Love%20Actually%20Flowers%20chosen.png)
{% endtab %}

{% tab title="UIlicious Script" %}
```javascript
I.goTo("https://www.fareastflora.com")


//Let's Search for Love Actually
I.fill("Search", "Roses")
I.pressEnter();
I.see("PY06 - Love, Actually")
I.click("PY06 - Love, Actually")
I.click("Add To Cart")
I.click("Checkout")
I.click("Continue as a Guest")
```
{% endtab %}
{% endtabs %}

#### Hinting with `I.see.hint` command

You can also use `I.see.hint` to give hints to the UIlicious tool about the element.

Unlike I.see, `I.see.hint` only looks at a single element and _ignores previous commands._

Using our previous example, we could write a script such as:

```javascript
// Start by going to a web page first, like this:
I.goTo("https://www.fareastflora.com")


// Let's Search for Love Actually
I.fill("Search", "Roses")
I.pressEnter();
// Use I.see.hint command to find our flowers
I.see.hint("PY06 - Love, Actually")
I.click("PY06 - Love, Actually")
I.click("Add To Cart")
I.click("Checkout")
I.click("Continue as a Guest")
```

#### Limiting the scan area using `UI.Context`

`UI.context` can specify the region where UIlicious will scan to identify target elements.&#x20;

For example, in the Codepen below, there are two forms for UIlicious to scan: **Login Form** and **Register Form**.​​&#x20;

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

```javascript
I.see("Please log in") // This looks at the entire page for this phrase.

UI.context("#login-form", function(){    
I.fill("username", "hello@uilicious.com")  
I.fill("password", "password")  
I.click("login")
})
```

#### Using CSS/XPath Selectors

{% hint style="warning" %}
We do not recommend using CSS and XPath selectors because it can make your test results unstable since class and ID names can change over time and cause your code to become unreadable.&#x20;
{% endhint %}

You can use CSS and XPath Selectors as an alternative to targeting elements.

```javascript
I.click("#signin-button") // click on the element with the id "signin-button"
I.click("//table[1]//tr[1]//td[1]") // click on the first cell of the first row of the first table
```

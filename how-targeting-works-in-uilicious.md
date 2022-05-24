# How Targeting Works in UIlicious

## What is UIlicious?

UIlicious is a UI automation testing tool for web applications that uses test scripts to simulate, test, and validate end-user workflows by _targeting_ UI elements like buttons, menu items, navigation, etc.

Even if your web application's HTML code for UI changes, the test is valid if the user journey remains the same.

The UIlicious core principle is to **test the user journey**, not HTML.

UIlicious encourages you to write tests as if you are telling a friend over the phone how to use a particular website.

### How Targeting Works

UIlicious looks specifically at the semantic HTML, ARIA label attributes, and alternate text for images provided in your code as it crawls through the structure of your site.

Semantic HTML are elements that provide a clear meaning to both you and your computer. For example, a \<title> element is semantical because you as a reader understand the element's purpose is to represent a title.

ARIA label attributes also help make web pages more accessible and provide more context for elements seen on screen readers and other similar devices. For example, an interactive element could be a button used for searching with an aria-label that describes its use. We would then write: `<button aria-label="Search">`.

Let's imagine a scenario where we are going to use Google Maps to search for a specific place on the map, and use the following script in UIlicious to tell the tool we want to search:

```javascript
// UIlicious Script for Google Map Search​//
Step 1
I.goTo("https://www.google.com.sg/maps")
//Step 2
I.fill("Search", "Merlion, Singapore") // It's a half-fish, half-lion statue
//Step 3
I.click("Search")
```

UIlicious can successfuly complete Step 1 and Step 2, but how does our tool know that the button (circled in red in our example below) is both clickable and labeled "Search"?

Let's take a look at the HTML code behind our Google Maps.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651536726/ui-licious/ui-licious:%20conceptual%20guide/Screen\_Shot\_2022-05-02\_at\_7.10.42\_PM\_dy05mu.png)

Using the Inspect tool provided by our browser, we can see that our Search `<button>` is given an aria description with `aria-label="Search"`.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651537699/ui-licious/ui-licious:%20conceptual%20guide/showing-arialabelsearch.gif)

So, when we run our tests, UIlicious can make educated guesses _based on the context provided_ in our HTML code.

### Targeting Similiar Elements

**What happens if there are multiple elements with the same keyword?**

UIlicious will make an educated guess to resolve the ambiguity using semantics, accessibility, and the previous steps.

#### Using Semantics

For example, if `I.click("Sign in")` matches a `h1` element and a `button` element, the UIlicious is more likely to click on the `button` which semantically indicates that the element is clickable.

#### Using Previous Commands

UIlicious focuses on user journeys, so it tries to think like a user when moving through your web application.

UIlicious will also look at your previous commands to identify the target element.

For example, on the Twitter page below, the "Log In" button appears twice on the page.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651596744/ui-licious/ui-licious:%20conceptual%20guide/conceptual-guide-1.png)

UIlicious will infer that it should target the closest button element to submit the form because the previous commands were to fill in the username and password.

```javascript
// UIlicious Script for Twitter Login

​I.goTo("https://twitter.com")
I.fill("Username", "brucewayne")
I.fill("Password", "supersecretpassword")​
// Even though there's two log in buttons, this will click on the nearest button to the "username" and "password" fields.
I.click("Log in")

```

### Alternatives to Targeting Elements

#### Hinting with I.see

You can use `I.see` to drop hints to the UIlicious tool on where your target element is located near.

For example, let's say you need to update the birthday of a specific person on a page, but there is more than one person's birthday available to update on that same page.

Using `I.see` will help UIlicious to know that you specifically want this person's birthday to be updated.

```javascript
// UIlicious Script for I.see ​

// The tool will see "Ann"
I.see("Ann")
I.fill("Birthday", "03 May 2012") // Updates the birthday of "Ann"​
I.see("Max")
I.fill("Birthday", "19 July 2015") // Updates the birthday of "Max"

```

#### Limiting the scan area

Sometimes, it might be more convenient to just specify the region where UIlicious will scan to identify target elements. You can use `UI.context` to do so.

For example, in the Codepen below, there are two forms for UIlicious to scan: **Login Form** and **Register Form**.​​

{% embed url="https://codepen.io/alexandriastech-the-bashful/pen/poavqEE" %}

To limit the scan area to the login form, we can set the `UI.context` to use a CSS id Selector, `#login-form`, that identifies the Login Form like this:

```javascript
I.see("Please log in ") // This looks at the entire page for this phrase.

UI.context("#login-form", function(){ //   
I.fill("username", "hello@uilicious.com")  
I.fill("password", "password")  
I.click("login")
})
```

#### Using CSS/XPath Selectors

{% hint style="warning" %}
We do not recommend using CSS and XPath selectors because selectors can change names over time, making your tests flaky.
{% endhint %}

You can use CSS and XPath Selectors as an alternative to targeting elements.

```javascript
I.click("#signin-button") // click on the element with the id "signin-button"
I.click("//table[1]//tr[1]//td[1]") // click on the first cell of the first row of the first table
```

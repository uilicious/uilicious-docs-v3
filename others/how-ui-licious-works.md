# How UI-licious works



### Targeting Elements <a href="#how-ui-licious-works" id="how-ui-licious-works"></a>

UI-licious core principle is to **test user journeys, not HTML**.

The reason for this is because writing your tests using hard-coded CSS and XPATH selectors is like pouring concrete onto a specific UI implementation. This creates very high-maintenance tests that break at the slightest changes to the UI and are very hard for humans to read.

UI-licious encourages you to write tests as if you are telling a friend over the phone how to use a particular website, e.g.:

```javascript
I.goTo("https://github.com/login")
I.fill("Email", "john@example.com")
I.fill("Password", "supersecretpassword")
I.click("Sign in")
I.see("Incorrect username or password.")
```

UI-licious uses dynamic code analysis to understand the structure of your website based on the use of semantic HTML and ARIA accessibility attributes, as well as context of the previous commands, to identify which is the intended element to target for every command. This means that even if the HTML code for the UI changes underneath the code, the test is valid as long as the user journey remains the same.

That said, your website doesn't to be written perfectly for UI-licious to work. But good practices like using semantic HTML and ARIA accessibility attributes doing so certainly helps the UI-licious test engine to be a lot more accurate. Plus, it makes your website more accessible!

### Targeting graphical elements <a href="#targeting-graphical-elements" id="targeting-graphical-elements"></a>

You can target graphical elements based on tooltips (given by the `title` attribute, including variants for specific front-end frameworks), ARIA labels, and alternate text for images (the `alt-text` attribute.)

Try this example to see how UI-licious is able to interact with the "Search" and "Zoom In" buttons on Google Maps.

```javascript
I.goTo("https://www.google.com.sg/maps")
I.fill("Search", "Merlion, Singapore") // it's a half-fish, half-lion statue
I.click("Search")
I.click("Zoom in")
I.click("Zoom in")
I.click("Zoom in")
I.click("Zoom in")
```

[👉 Run this test](https://snippet.uilicious.com/test/public/PkTu3tBWFvYDvFUbcUpmaP)

### Resolving similar elements <a href="#resolving-similar-elements" id="resolving-similar-elements"></a>

When there are multiple elements matching the same keyword, UI-licious will make an educated guess to resolve the ambiguity based on semantics, accessibility, and the previous steps.

#### Using semantics <a href="#using-semantics" id="using-semantics"></a>

For example, if `I.click("Sign in")` matches a `h1` element and a `button` element, the UI-licious is more biased to click on the `button` which sematically indicates that the element is clickable.

#### Using previous commands <a href="#using-previous-commands" id="using-previous-commands"></a>

UI-licious also looks at your previous commands to identify the target element.

For example, on the Twitter page where the "Log In" button appears twice on the page, UI-licious will target the one to submit the form because the previous commands was to fill in the username and password:

```javascript
I.goTo("https://twitter.com")
I.fill("Username", "brucewayne")
I.fill("Password", "supersecretpassword")

// Even though there's two log in buttons, this will click on the one near the "username" and "password" fields.
I.click("Log in")
```

**Results:**

#### Hinting with I.see <a href="#hinting-with-isee" id="hinting-with-isee"></a>

You can use `I.see` to drop hints to the test engine on where your target element for the subsequent commands might be.

For example, on a page to update the birthdays of several individuals:

```javascript
I.see("Ann")
I.fill("Birthday", "03 May 2012") // Updates the birthday of "Ann"

I.see("Max")
I.fill("Birthday", "19 July 2015") // Updates the birthday of "Max"
```

This will help you to avoid having to specify CSS or XPATH selectors to update the first, second, third... nth... birthday fields.

#### Limiting the scan area <a href="#limiting-the-scan-area" id="limiting-the-scan-area"></a>

Sometimes it might be more convenient to just specify the region where UI-licious will scan to identify target elements. You can use `UI.context` to do so.

For example, on this page with very similar forms for login and registration side by side:

See the Pen [gjoJoN](https://codepen.io/shiling/pen/gjoJoN/) by shiling ([@shiling](https://codepen.io/shiling)) on [CodePen](https://codepen.io/).

To limit the test to the login form, we can set the context using a CSS selector on the ID of the login form like this:

```javascript
I.see("Please log in ") // this runs on the entire page
UI.context("#login-form", function(){ // the following commands runs on the login form on
  I.fill("username", "hello@uilicious.com")
  I.fill("password", "password")
  I.click("login")
})
```

### Using CSS / XPATH selectors <a href="#using-css--xpath-selectors" id="using-css--xpath-selectors"></a>

While we strongly don't recommend it, but if you really need to, you can still use CSS and XPATH selectors to target element, e.g.

```javascript
I.click("#signin-button") // click on the element with the id "signin-button"
I.click("//table[1]//tr[1]//td[1]") // click on the first cell of the first row of the first table
```

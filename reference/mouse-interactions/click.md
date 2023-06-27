---
title: Click

# Write a short description about the page. This will be displayed on google search results.
description: Learn how to automate clicks on page elements with UIlicious

tags:
  - i.click
  - iclick
  - click
  - i.doubleclick
  - idoubleclick
  - double click
  - i.rightclick
  - irightclick
  - right click
  - click icon
  - implicit wait
  - wait
---

# Click

There are three click commands to perform different types of clicks.

- Use `I.click` to clicks on a target with the **left** mouse button
- Use `I.doubleClick` to double clicks on a target with the **left** mouse button
- Use `I.rightClick` to clicks on a target with the **right** mouse button

There are several ways to specify the target for the click command:

- Using **text**
- Using **CSS / XPATH**
- Using **X and Y offset from an element**
- Using **X and Y offset from screen**

To click on an element using it's text, provide the text of the element to the click command.

```javascript
// I.click(target) using element's text
I.click("Login"); // targets element containing the the text "Login"
```

To click on an element using CSS selector or XPATH, provide the CSS selector or XPATH that matches the element.

```javascript
// I.click(target) using CSS / XPATH
I.click("#zoom-in-btn"); // targets element with CSS selector
I.click("//[data-test-id='close-button']"); // targets element using XPATH selector
```

To click on a position offset from an element, provide the text/CSS/XPATH to match the element, and the X and Y offset from the top-left corner of the element, which could be an integer amount to offset by pixels, or a percentage to offset by the width or the height of the element.

In this example below, the test engine will click 100 pixels to the right, and 10 pixels down, from the top-left corner of the element with contains the text "First Name".

```javascript
// I.click(target, x, y) using pixel offset
I.click("First Name", 100, 10);
```

Here's another example, but using percentages instead. By setting the x and y offset to "50%", the test engine will click the center point of the element that matches the CSS selector ".map".

```javascript
// I.click(target, x, y) using pixel offset
I.click(".map", "50%", "50%");
```

You can also click on an element using the x and y coordinate from the top-left corner of the screen. Here's an example:

```javascript
// I.click(x,y)
I.click(500, 300); // clicks 500px right and 300px down from the top-left corner of the screen
```

## Resolving multiple matches

If a click command matches multiple elements, UIlicious will pick the most relavent element to click on, based on:

1. **Semantics**: Elements that are clickable by W3 specifications have a higher weight, such as buttons and links.
2. **Match % and Accessibility**: Elements with a closer match to the phrase have a higher weight. E.g. I.click("Search") will prefer to target a button that says "Search" over a button that says "Research".
3. **Context**: Elements that are closer to element have the most recent interaction have a height weight.

## Automatic wait until element is visible

If no visible elements are found for the click command, UIlicious will automatically wait and search for the element again up until 15 seconds. You can increase this threshold by setting the `TEST.commandTimeout` property to any number of seconds at any point of the test. If no visible elements are found after the command times out, the command will fail with and error indicating that no elements are found. You can also use the `I.wait` command if you want the test to always wait for a fixed amount of time.

## Automatic wait when click triggers a page navigation

If the click triggers a page navigation, the click command will automatically wait for the next page to load until the `document.readyState` is `complete`. The time taken to complete the click command in this case will also include the time taken to load the page.

## Automatic switch tab when click opens a page in a new tab

If the click opens page in a new tab, the click command will automatically switch to the new tab. You do not need to add an extra `I.switchTab` command if you wish to interact with the new tab afterwards.

## Automatic screenshots for click commands

Screenshots are automatically taken for all test commands, typically after the command is performed to show you the state of the UI afterwards. However, for the `I.click` and `I.doubleClick` command, screenshots are taken after the mouse is moved over the target, but before the click is performed. This is to show you where is the identified target element, and what effects gets applied to the element on hover. If you wish to capture the screenshot of the application after the click, you can add a non-interactive command like `TEST.log.info` after the click command.

## Real world examples

### Clicking on text buttons / links

The easiest way to click an element is to target its text content. Note that if a text matches multiple elements, UIlicious will pick the [most relavent match](#resolving-multiple-matches).

Here's an example of a web page with a green button labeled "Enter".

![A website with the button labeled "Enter"](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651598658/ui-licious/i.click%20and%20i.doubleclick/i.click-a1.gif)

We can target the button with the text "Enter" with the following:

```javascript
I.click("Enter"); // This will press the button with the text "Enter"
```

Here's another example, with a web page that has a link with the text "Log in".

![A website with a "Log in" linked text in the top navigation menu](https://res.cloudinary.com/di7y5b6ed/image/upload/v1650571116/ui-licious/i.click%20and%20i.doubleclick/I.clickExamples-1.png)

{% tabs %}

{% tab title="Example" %}

```javascript{2}
I.goTo("https://www.fareastflora.com/")
I.click("Log In") // This will press the button with the text "Log in"
I.amAt("/customer/account/login/")
```

{% endtab %}
{% tab title="Result" %}

<iframe title='click-link-text-example' src="https://snippet.uilicious.com/embed/test/public/RNyhvazRGp1EFxvmCKo82Q?stepNum=3&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

### Clicking on icon buttons / images

If a graphical element such as an icon or an image has an accessibility label set using the `aria-label` attribute, or tooltip set using the `title` attribute, or alternate text set using the `alt-text` attribute, you can target the element using any of these labels. If the element does not have any of these attributes set, refer to the next session on clicking using CSS selectors and XPATHs.

Here's an example to show you how to click on various icon buttons on Google Maps which has accessibility labels for all icon buttons.

{% tabs %}
{% tab title="Example" %}

```javascript{4-6}
I.goTo("https://www.google.com/maps")
I.click("Accept all") // accept cookies
I.fill("Search", "Merlion, Singapore")
I.click("Search") // clicks the "magnifying glass" icon
I.click("Zoom in") // clicks the "plus" icon
I.click("Zoom out") // clicks the "minus" icon
```

{% endtab %}
{% tab title="Result" %}

<iframe title='click-icons-example-1' src="https://snippet.uilicious.com/embed/test/public/2yifotaSRFpx6ErNt17Njq?stepNum=5&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

### Clicking using CSS and XPATH

You can also click on an element using a CSS or XPATH selector. Note that if a selector matches multiple elements, UIlicious will pick the [most relavent match](#resolving-multiple-matches).

In this website below, we can inspect the "Track Order" link button to find that it has an `id` attribute set to `track-icon`.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653363819/ui-licious/ui-licious:%20conceptual%20guide/far-east-flora-track-order.png)

Here's an example to target the "Track Order" button using the CSS selector `#track-icon`:

{% tabs %}
{% tab title="Example" %}

```javascript{2}
I.goTo("https://www.fareastflora.com/")
I.click("#track-icon") // click the "Track order" button
I.amAt("/track-order") // redirected to "/track-order" page
```

{% endtab %}
{% tab title="Result" %}

<iframe title='click-css-example-1' src="https://snippet.uilicious.com/embed/test/public/LoMkv3gfRjPfGVePLWRng6?stepNum=3&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

Here's an example to target the "Track Order" button using the XPATH selector `//a[@id='track-icon']`:

{% tabs %}
{% tab title="Example" %}

```javascript{2}
I.goTo("https://www.fareastflora.com/")
I.click("//a[@id='track-icon']") // click the "Track order" button
I.amAt("/track-order") // redirected to "/track-order" page
```

{% endtab %}
{% tab title="Result" %}

<iframe title='click-css-example-1' src="https://snippet.uilicious.com/embed/test/public/CpT5qfymZtPqLfaAadopVQ?stepNum=3&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

### Clicking using an offset

In some scenarios, it is not possible to target an element directly using its text, a CSS selector or an XPATH selector. We can try to targeting it using an offset from a reference element instead.

For example, in this map application, we want to click on specific points on the map, but the points do not have an DOM element.

![We want to click on the circled point in this map application.](/static/img/click-with-offset-example-website.png)

We can use the `I.click(element, x, y)` command with a X pixel offset and a Y pixel offset from the left-corner of an element. To click on the point that is circled on the map, we can click 550px to the right and 480px down from the left-corner of the `//canvas` element, using `I.click("//canvas", 550, 480)`.

{% tabs %}
{% tab title="Example" %}

```javascript{2}
I.goTo("https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/live/")
I.click("//canvas", 550, 480)
I.see("Middle of nowhere")

```

{% endtab %}
{% tab title="Result" %}

Specifying negative X offset will target X pixels right from the top-left corder of the reference element.

Specifying a negative Y offset will target Y pixels up from the top-left corner of the reference element.

<iframe title='click-with-offset-example' src="https://snippet.uilicious.com/embed/test/public/3StHKMJsteiBuScgz6a9if?stepNum=3&autoplay=0" style="display: block; min-width: 600px; min-height: 400px; margin: 0 auto; border: none;"></iframe>

{% endtab %}
{% endtabs %}

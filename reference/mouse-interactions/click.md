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

Use the `I.click` command to click on an object with the **left** mouse button.

Use the `I.doubleClick` command to double click on an object with the **left** mouse button.

Use the `I.rightClick` command to click on an object with the **right** mouse button.

## Click on text buttons / links

The easiest way to click an element is to target its text content. Note that if a text matches multiple elements, UIlicious will pick the [most relavent match](#resolving-multiple-matches).

Here's an example of a web page with a green button labeled "Enter".

![A website with the button labeled "Enter"](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651598658/ui-licious/i.click%20and%20i.doubleclick/i.click-a1.gif)

We can target the button with the text "Enter" with the following:

```javascript
I.click("Enter") // This will press the button with the text "Enter"
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


## Clicking on icon buttons / images

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

## Clicking using CSS and XPATH

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


## Clicking using an offset

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

## Resolving multiple matches

If a click command matches multiple elements, UIlicious will pick the most relavent element to click on, based on:
1. **Semantics**: HTML elements that are clickable by W3 specification are preferred, such as buttons and links.
2. **Match %**: Elements with a closer match to the phrase are preferred. E.g. I.click("Search") will prefer to target a button that says "Search" over a button that says "Research".
3. **Context**: Elements that are closer to element have the most recent interaction are preferred.

## Automatic wait until element is visible

If no visible elements are found for the click command, UIlicious will automatically wait and search for the element again up until 15 seconds. You can increase this threshold by setting the `TEST.commandTimeout` property to any number of seconds at any point of the test. If no visible elements are found after the command times out, the command will fail with and error indicating that no elements are found. You can also use the `I.wait` command if you want the test to always wait for a fixed amount of time.

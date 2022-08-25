---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.click or I.doubleClick command to click various elements in your UIlicious test.
---

# Click on Objects

Use the `I.click` to click on an element.

Use the `I.doubleclick` command to double-click on an element.

Both commands take into account the left corner of the target element.

#### Usage:

```javascript
// Single click
I.click("target")
I.click("target", x, y)

// Double click
I.doubleClick("target")
I.doubleClick("target", x, y)
```

If the parameters, x and y, are not specified, UIlicious will target the center of the element.

To learn more about clicking on a target element with offset, view the [I.click offset](./#click-on-elements-id-or-class-with-offset) section.&#x20;

**In this section, we will use** [**Far East Flora**](https://www.fareastflora.com/) **as the test site in the examples listed below.**

### Examples:

**Click on an element with text**

{% hint style="info" %}
To view the source code of any webpage, right-click any element on the site you would like to inspect and select **Inspect**.
{% endhint %}

In the example below, there is a green button element labeled "Enter".

When using the command, `I.click("Enter")`, UIlicious will make an educated guess based on the element's semantic text.

![The browser's developer tools help you view the code behind the selected element. We can view the code behind the green Enter button on the element panel on the left side of the web page.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651598658/ui-licious/i.click%20and%20i.doubleclick/i.click-a1.gif)

Let's say we want to click on the text, Log In.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1650571116/ui-licious/i.click%20and%20i.doubleclick/I.clickExamples-1.png)



Use the I.click command to specifically click on an element with text.

```javascript
I.click("Enter")

// The command will click an element with the text "Enter"
```

In UI-licious, it should look similar to the example below:

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1650573219/ui-licious/i.click%20and%20i.doubleclick/I.click.Examples.2.gif)

**Click on images and icons using the `aria-label` or `title`**

{% hint style="info" %}
We'd strongly recommend setting both.\
\
The`aria-label`makes your application user-friendly to humans using accessibility tools, and the `title` gives your element a helpful tooltip for visual users.
{% endhint %}

You can click on images and icons using the `aria-label` or `title` attribute set on the element.

In the example below, there is an Amazon logo. The logo has an aria-label called \
`aria-label="Amazon"`.&#x20;

![The browser's developer tools help you view the code behind the selected element. In this case, we can see the code behind the Amazon logo on the element panel on the left side of the web page.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653363583/ui-licious/ui-licious:%20conceptual%20guide/amazon-blurred-background.png)

For example, click on the image using its' `aria-label`.&#x20;

```javascript
I.click("Amazon")
```

#### **Click on element using CSS selectors: ID and Class**

In the example below, we can click on the Track Order link on the site, [Far East Flora](https://www.fareastflora.com/), with its `id` property, `#track-order`.

![The browser's developer tools help you view the code behind the selected element. We can view the code behind the Track Order logo on the element panel on the left side of the web page.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653363819/ui-licious/ui-licious:%20conceptual%20guide/far-east-flora-track-order.png)

In UIlicious, we can use the script below target the element.

```javascript
I.click("#track-order")
```

In the example below, we can click on the Shopping Cart icon using its `class` property set to `shopping-class`.

![The browser's developer tools help you view the code behind the selected element. We can view the code behind the shopping icon on the element panel on the left side of the web page.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653364083/ui-licious/ui-licious:%20conceptual%20guide/far-east-flora-shopping-icon.png)

We can use the script below in UIlicious to target the shopping icon by its' class.

```javascript
I.click(".shopping-class")
```

#### Click on element's ID or class with offset

The offset feature allows UIlicious to select the element relative to the top left corner of the element.

If the parameters, x and y, are not specified, UIlicious will target the center of the element.

Otherwise, it will use the x and values to offset the click on the selected element.

**To see how that looks visually, look at our** [**offset example**](./#offset-example).

| Parameter  | Description                                                                                                                                                    | Type   |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **target** | <p><strong>Keyword to identify the element to click.</strong> <br><br>Required.<br>Case-insensitive.<br>Must be in quotations; ex. ("#idElement")</p>          | string |
| **x**      | <p><strong>Offset the click x pixels right from the top-left corner of the target element.</strong><br><br>Optional.<br>Can be positive or negative value.</p> | number |
| **y**      | <p><strong>Offset the click y pixels down from the top-left corner of the target element.</strong><br><br>Optional.<br>Can be positive or negative value.</p>  | number |

#### Offset Example&#x20;

In some cases, we are not able to target an element by its label, XPath or CSS selector.

In the example below, we want to target the elements on the map but we are unable to access a label, XPath, or CSS selector.&#x20;

Instead, we can use **offset** and target our element by its x and y coordinates like so, `I.click("//canvas", 550, 480)`.

`//canvas` is an element that typically contains graphics such as the canvas below.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653364606/ui-licious/ui-licious:%20conceptual%20guide/offset-map-example.png)

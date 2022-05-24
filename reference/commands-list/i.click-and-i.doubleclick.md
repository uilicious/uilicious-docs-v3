# I.click and I.doubleclick

Use the `I.click` to click on an element.

Use the `I.double` command to double-click on an element.

Both commands take into account the left corner of the target element.

For example, `I.click(target, 10, 10)` will offset the click 10 pixels right and 10 pixels down from the top-left corner of the target element.

If the click triggers a page load, note that the time taken to execute the command will include the time taken to load the page.

If the click opens a page in a new tab, the browser will automatically be switched to the new tab.

### Usage:

```javascript
// Single click
I.click(target)
I.click(target, x, y)

// Double click
I.doubleClick(target)
I.doubleClick(target, x, y)
```

### Examples:

{% hint style="info" %}
To view the source code of any webpage, right-click any element on the site you would like to inspect and select **Inspect**.
{% endhint %}

In the example below, there is a green button element labeled "Enter".

When using the command, `I.click("Enter")`, UIlicious will make an educated guess based on the element's semantic text.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651598658/ui-licious/i.click%20and%20i.doubleclick/i.click-a1.gif)

```javascript
I.click("Enter")

// The command will click an element with the text "Enter"
```

**Click on images and icons using the `aria-label` or `title`**

{% hint style="info" %}
We'd strongly recommend setting both.\
\
The`aria-label`makes your application user-friendly to humans using accessibility tools, and the `title` gives your element a helpful tooltip for visual users.
{% endhint %}

You can click on images and icons using the `aria-label` or `title` attribute set on the element.

![The Amazon.com icon has an aria-label of "Amazon".](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651703155/ui-licious/i.click%20and%20i.doubleclick/i.click-a2.gif)

For example, click on the image using its' `aria-label`.&#x20;

```javascript
I.click("Amazon")
```

#### **Click on element using CSS selectors: ID and Class**

In the example below, we can click on the Track Order link on the site, [Far East Flora](https://www.fareastflora.com/), with its `id` property, `#track-order`.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651703866/ui-licious/i.click%20and%20i.doubleclick/i.click-a3.gif)

```javascript
I.click("#track-order")
```

In the example below, we can click on the Shopping Cart icon using its `class` property set to `shopping-class`.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1651704248/ui-licious/i.click%20and%20i.doubleclick/i.click-a4.gif)

```javascript
I.click(".shopping-class")
```

**Click on element's ID or class with offset**

Click 100 to the right and 100 down from the top-left corner of the element with either the id and class `loginbutton` .

```javascript
I.click("#login-btn", 100, 100)
I.click(".login-btn", 100, 100)
```

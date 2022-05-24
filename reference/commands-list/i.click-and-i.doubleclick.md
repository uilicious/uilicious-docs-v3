# I.click and I.doubleclick

Use the `I.click` to click on an element.

Use the `I.doubleclick` command to double-click on an element.

Both commands take into account the left corner of the target element.

```javascript
// Single click
I.click("target")
I.click("target", x, y)

// Double click
I.doubleClick("target")
I.doubleClick("target", x, y)
```

If the parameters, x and y, are not specified, UIlicious will target the center of the element.

To learn more about clicking on a target element with offset, view the [I.click offset](i.click-and-i.doubleclick.md#click-on-elements-id-or-class-with-offset) section.&#x20;

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

In the example below, there is an Amazon logo. The logo has an aria-label called \
`aria-label="Amazon"`.&#x20;

![In this example, the Inspect feature reveals the code behind the web page. The Amazon icon is described by its' aria-label.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652216923/ui-licious/i.click%20and%20i.doubleclick/Amazon%20Aria%20Label.png)

For example, click on the image using its' `aria-label`.&#x20;

```javascript
I.click("Amazon")
```

#### **Click on element using CSS selectors: ID and Class**

In the example below, we can click on the Track Order link on the site, [Far East Flora](https://www.fareastflora.com/), with its `id` property, `#track-order`.

![Using the Inspector feature, the Track Order link has a CSS id titled "track-icon".](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652217952/ui-licious/i.click%20and%20i.doubleclick/Far%20East%20Flora%20Track%20Order%20has%20CSS%20ID.png)

In UIlicious, we can use the script below target the element.

```javascript
I.click("#track-order")
```

In the example below, we can click on the Shopping Cart icon using its `class` property set to `shopping-class`.

![Using the Inspector feature, the shopping icon on FarEastFlora.com has a class titled "shopping-icon".](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652218387/ui-licious/i.click%20and%20i.doubleclick/Far%20East%20Flora%20Shopping%20icon%20has%20a%20CSS%20class.png)

We can use the script below in UIlicious to target the shopping icon by its' class.

```javascript
I.click(".shopping-class")
```

#### Click on element's ID or class with offset

The offset feature allows UIlicious to select the element relative to the top left corner of the element.

If the parameters, x and y, are not specified, UIlicious will target the center of the element.

Otherwise, it will use the x and values to offset the click on the selected element.

**To see how that looks visually, look at our** [**offset example**](i.click-and-i.doubleclick.md#offset-example).

| Parameter  | Description                                                                     | Type   | Notes                                                                              |
| ---------- | ------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| **target** | Keyword to identify the element to click.                                       | string | <p>Required.<br>Case-insensitive.<br>Must be in quotations; ex. ("#idElement")</p> |
| **x**      | Offset the click x pixels right from the top-left corner of the target element. | number | <p>Optional.<br>Can be positive or negative value.</p>                             |
| **y**      | Offset the click y pixels down from the top-left corner of the target element.  | number | <p>Optional.<br>Can be positive or negative value.</p>                             |

#### Offset Example&#x20;

Let's take a look at our target element, the green button element labeled "**Sign up**" on [UIlicious.com](https://uilicious.com/).

The **Sign up** button has an ID, `#navbar-sign-up-btn`that we will click on in our script.

In UIlicious Studio, we can manipulate where we specifically click on our target element by changing the x and y values.

![The green "Sign Up" button on UIlicious has an id called #navbar-sign-up-btn.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652464433/ui-licious/i.click%20and%20i.doubleclick/uilicious-sign-up-button-id.png)

When just using `I.click("#navbar-sign-up-btn")`, UIlicious will target the center of the element.&#x20;

In the example below, the blue circle represents our mouse click.&#x20;

![If UIlicious is not given x and y parameters in I.click, it will click the center of the target element.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652467403/ui-licious/i.click%20and%20i.doubleclick/I.click-Signup-button-in-center.png)

#### Offset with X: Changing X values

If we change the **x value**, we are either moving from the left (negative numbers) or to the right (positive numbers).

In the example on the left, we can see our mouse **click to the left** using \
`I.click("navbar-signup-btn", -100, 0)`.

In the example on the right, we can see our mouse **click to the right** using \
`I.click("navbar-signup-btn", 100, 0)`.

![Using a negative value in place of x, we can move our mouse to click to the left of our target element.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652467656/ui-licious/i.click%20and%20i.doubleclick/I.click-Sign-up-button-left.png) ![Using a positive value in place of x, we can move our mouse to click to the right of our target element.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652467654/ui-licious/i.click%20and%20i.doubleclick/I.click-Sign-up-button-right.png)

#### Offset with Y: Changing Y values

If we change the **y value**, we are moving up (negative numbers) or down (positive numbers).

In the example on the left, we can see our mouse **click further down from the target element** using \
`I.click("navbar-signup-btn", 0, 100)`.

In the example on the right, we can see our mouse **click further up from the target element** using \
`I.click("navbar-signup-btn", 0, -100)`.

![Using a positive value in place of y, we can move our mouse to click down from our target element.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652568165/ui-licious/i.click%20and%20i.doubleclick/I.click-sign-up-down.png) ![Using a negative value in place of y, we can move our mouse to click up from our target element.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652568187/ui-licious/i.click%20and%20i.doubleclick/i.click-sign-up-up.png)

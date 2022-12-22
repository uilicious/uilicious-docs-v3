---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to test slider components using UI-licious
---

# How to test slider components

In this article, we're going to look at how to test slider components using UI-licious. 

UIlicious provides different drag commands for dragging a page element :

| Property | Description | 
|----------|-------------|
| `I.dragTo`  | drag an element and drop it over another element |
| `I.dragBy` | drag an element by a fixed number of pixels |
| `I.dragDown`  | drag an element down |
| `I.dragUp` | drag an element up |
| `I.dragLeft` | drag an element left |
| `I.dragRight` | drag an element right |

In this tutorial, we’ll be testing the slider component on Sendgrid’s pricing page. 

![Sample Slider](/static/img/Slider.gif)

We want to drag the “email/mo” slide on the “Essentials” plan to the right to increase the volume of emails, which then updates the price estimation. 

![Targetting CSS Element](/static/img/CSS_Element.png)

First, we need to identify the element that we want to drag. Open the browser inspector to inspect the elements on the page. The round knob on the slider has the class “**rc-slider-handle**”. Now we can use the I.dragRight command to drag the slider known which as the CSS class “rc-slider-handle” to the right by 200 pixels like this:

```javascript
I.dragRight(".rc-slider-handle", 200)
```

This is what the full test script will look like:


```javascript
I.goTo("https://sendgrid.com/pricing/")
UI.context("//iframe", ()=>{
	I.click("Accept All")
	I.click("Close")
})
I.see("Essential")
I.see("Starts at $19.95/mo")
I.dragRight(".rc-slider-handle", 200) //This will drag the slider to the right by 200 px
```

Below is the quick snippet preview of the test
<iframe src="https://snippet.uilicious.com/embed/test/public/UpXF42C8oAMPQVfPy2C2iB?stepNum=1&autoplay=0" frameborder="0" width="600px" height="400px;"></iframe>

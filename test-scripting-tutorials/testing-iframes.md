---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to test iframes using UI-licious
---

# How to test iFrames

In this tutorial, we’re going to look at how to test elements within an iframe using UI-licious.

![Sample iFrame](/static/img/iframe.gif)

## Real-World Example: Eventbrite’s modal

We’ll be testing the checkout modal on one of [Eventbrite’s](https://www.eventbrite.com/) pages. 

Let’s write a test to interact with the elements on the modal and select the number of tickets and proceed to the checkout page.

First, we'll write all the code necessary to automate the testing of these elements. 

We'll begin by clicking on "Get Tickets" to open the modal for selecting the number of tickets. 
```javascript
I.click("Get Tickets")
```
Then, we'll specify how many tickets to buy and for this test, we’ll be choosing 2.
```javascript
I.select("Women's Retreat: Mindshift", 2) 
```
After that, we'll click on "Check Out" to move on to the next page.
```javascript
I.click("Check out")
```
As of now our script is:
```javascript
//Navigate to site
I.goTo("https://www.eventbrite.com/e/mindshift-push-beyond-your-limits-spa-and-wellness-retreat-tickets-480366688697?aff=ebdssbdestsearch")

//Accept Cookies
I.click("Accept All")

I.click("Get Tickets")

//Codes to interact with elements on the iframe
I.select("Women's Retreat: Mindshift", 2)
I.click("Checkout")
```
Now, let's try running our script and see if it will click an element in our iframe. 

We can see there are a few errors and one of them suggests our element is inside an iframe. The errors are shown because the checkout modal is actually an iframe

![Failing test due to iFrame handling](/static/img/failing-test-iframe.png)

## Inspecting the iframe component

To handle this scenario, we need to use “UI.context()” in conjunction with our code to help UI-licious interact with those elements inside an iframe.

Iframe elements are used to embed a webpage on another webpage. An iframe is considered a separate browsing context from its parent webpage, similar to how individual browser tabs are considered separate browsing contexts. The contents of an iframe are not accessible and are essentially a black box to UIlicious unless the test explicitly targets the iframe.

![Inspecting Iframe Element](/static/img/inspecting-iframe-element.png)

First, we need to identify the correct attribute for the iframe. We will open the browser inspector and check the attributes present for the iframe. 

## Using UI.context within our script

For this, we can use the “data-automation” attribute to be used with “UI.context()”.
```javascript
UI.context("iframe[data-automation^=checkout-widget-iframe]")
```

We wrote “data-automation” so we can only match the very beginning of the given value and not the whole as the attribute we chose has a random ID that may change in the future.

## Complete test script and result

Our complete script should now be
```javascript
//Navigate to site
I.goTo("https://www.eventbrite.com/e/mindshift-push-beyond-your-limits-spa-and-wellness-retreat-tickets-480366688697?aff=ebdssbdestsearch")

//Accept Cookies
I.click("Accept All")

I.click("Get Tickets")

//Codes to interact with elements on the iframe
UI.context("iframe[data-automation^=checkout-widget-iframe]", ()=>{
	I.select("Women's Retreat: Mindshift", 2)
	I.click("Check out")
})
```

After adding that into our script and running it again, we can see it was successfully able to interact with them now!

You may view, rerun and edit the test script available publicly on snippets here:
[View “Testing Element Inside An iframe” test script](https://snippet.uilicious.com/test/public/USBF96RdQkBHHwQbkpzFDh?step=7)

<iframe src="https://snippet.uilicious.com/embed/test/public/USBF96RdQkBHHwQbkpzFDh?stepNum=1&autoplay=0" frameborder="0" width="600px" height="400px;"></iframe>

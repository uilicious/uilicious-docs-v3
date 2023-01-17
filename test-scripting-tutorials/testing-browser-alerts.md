---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to test browser alerts using UI-licious
---

# How to test browser alerts

In this tutorial, we are going to look at how to test browser alerts with UI-licious

![Sample Browser Alert](/static/img/browser-alerts.gif)

## Real-World Example: Bomb Squad Simulator

We’ll be testing the browser alerts on the [Bomb Squad Simulator](https://example.uilicious.com/bomb_squad_simulator.html) made by one of our engineers

Let’s write a test to click on the buttons present on the website and interact and validate the alerts appearing on the site if the bomb has been successfully disarmed or not.

Browser alerts are still commonly used on websites to show important messages to users. There are three types of browser alerts: simple alerts, confirmation alerts, and prompt alerts.

## Handling Alerts on UI-licious

UI-licious provides different alert commands for interacting with browser alerts:
| Property | Description | 
|----------|-------------|
| `I.seeAlert`  | to assert that an alert is displayed. |
| `I.acceptAlert` | press the "Ok" button on the alert |
| `I.cancelAlert` | press the "Cancel" button on the alert |
| `I.fillAlert` | fill the text box on the alert |

## Validating Alert Display and Message

To validate the alert display and message we will be using “I.seeAlert” for this

We will write on our script:
```javascript
I.seeAlert()
I.seeAlert("Are you sure you want to cut the black wire?")
```
## Cancel a Confirmation Alert

To cancel an alert prompt we will be using “I.cancelAlert” for this

We will write on our script:
```javascript
I.cancelAlert()
I.see("You Hesitated")
```

## Accepting an Alert

To accept an alert prompt we will be using “I.acceptAlert” for this

We will write on our script:
```javacript
I.see("Are you sure you want to cut the black wire?")
I.acceptAlert()
```

## Fill an Alert Prompt

To fill an alert prompt we will be using “I.fillAlert” for this

We will write on our script:
```javascript
I.fillAlert("Jane")
```
## Complete test script and result

This is what the entire test script will look like:
```javascript
I.goTo("https://example.uilicious.com/bomb_squad_simulator.html")
I.click("Cut the black wire")

//Validate the alert and the alert message
I.seeAlert()
I.seeAlert("Are you sure you want to cut the black wire?")

//Cancel the alert prompt
I.cancelAlert()
I.see("You hesistated.")

I.click("Cut the black wire")
I.seeAlert("Are you sure you want to cut the black wire?")

//Accept the alert prompt and validate the message
I.acceptAlert()
I.seeAlert("Congratulations! The bomb is safely disarmed!")

I.acceptAlert()

//Fill in alert prompt
I.seeAlert("What's your name dear hero?")
I.fillAlert("Jane")

I.acceptAlert()
I.see("The bomb is disarmed. Hurray, Jane saved the day!")
```

You may view, rerun and edit the test script available publicly on snippets here:
[View “Bomb Squad Simulator”](https://snippet.uilicious.com/test/public/QkbgwvLLQgkLbtjVVk7JH2?step=16) test script

<iframe src="https://snippet.uilicious.com/embed/test/public/QkbgwvLLQgkLbtjVVk7JH2?stepNum=1&autoplay=0" frameborder="0" width="600px" height="400px;"></iframe>



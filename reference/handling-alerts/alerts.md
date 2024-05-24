---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to handle browser alerts in your UIlicious tests.

# tags to help built-in search
tags:
    - alert
    - i.acceptalert
    - iacceptalert
    - accept alert
    - i.dismissalert
    - idismissalert
    - dismiss alert
    - i.fillalert
    - ifillalert
    - fill alert
    - i.seealert
    - iseealert
    - validate alert
    - prompt
    - confirmation
    - dialog
---

# Handling alerts

This section covers commands for handling browser alerts / prompts / confirmation dialogs.

## Accept or dismiss alerts

Use the `I.acceptAlert()` command to accept a browser alert. This will press the "OK" button on the alert.

```javascript{5}
// open a browser alert using javascript
UI.execute("alert('Welcome!')");

// accept the alert
I.acceptAlert()
```

Use the `I.cancelAlert()` command to dismiss a browser alert. This will press the "Cancel" button on the alert. On alerts that do not have the "Cancel" button, this will press the "OK" button to close the alert.

```javascript{5}
// open a browser alert using javascript
UI.execute("alert('Welcome!')");

// dismiss the alert
I.cancelAlert()
```

## Fill alert text input

If you have a browser alert that asks for a text input, you can fill it with the `I.fillAlert` command.

The example below shows how to use the `I.fillAlert` command to enter the text "Jane" into the browser alert.

```javascript{5}
// open a prompt dialog
UI.execute("prompt('What's your name?')") 

// fill in the prompt dialog with "Jane"
I.fillAlert("Jane") 
I.acceptAlert() 
```

## Validate alert is open

If you want to validate that a browser alert is open, use the `I.seeAlert` command. This will fail the test if an alert is not opened.

```javascript{2}
UI.execute("alert('Welcome!')");
I.seeAlert() // checks if a browser alert is opened
```

## Validate alert message

If you want validate the text content of a browser alert, you can use the `I.seeAlert` command and provide the text that is expected to be shown in the alert. This will fail the test if an alert is not opened or if the alert does not have the expected text content.

```javascript{2}
UI.execute("alert('Welcome!')");
I.seeAlert("Welcome!") 
```

## Screenshots disabled during alerts

UIlicious is currently not able to take screenshots when a browser alert is opened, so automatic screenshots are disabled until the alert is closed.

### Test Scripting Tutorial for Alerts Command(s)

[How to test Browser Alerts](/test-scripting-tutorials/testing-browser-alerts.md)

This tutorial shows you how to test the browser alerts in website(s) using the Alert command(s).


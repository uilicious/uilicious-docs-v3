---
# Write a short description about the page. This will be displayed on google search results.
description: Guide on how to test Salesforce with UIlicious.
---

# Salesforce

## Getting Started with Testing Salesforce <a href="#getting-started-with-testing-salesforce" id="getting-started-with-testing-salesforce"></a>

![Salesforce Logo](/static/img/salesforce_logo.jpg)

Here's a quick start guide to testing Salesforce with UI-licious.

This guides answers common questions folks that people ask when writing their first tests:

1. How to get around the Salesforce Login 2FA
2. How to click on icon buttons, like the "9 dots" button?
3. How to test components in an iframe?

### Salesforce authentication <a href="#salesforce-authentication" id="salesforce-authentication"></a>

Whenever you login to Salesforce from a new device, Salesforce will give you a 2FA challenge.

There's a few ways resolve this in your test:

1. **IP Allow List** - Recommended. This is the simplest solution and works permenantly.
2. **Using Salesforce CLI** - This is a temporarily solution if IP allow listing is not available.
3. **Extracting the 2FA code from email** - Technically possible, but extremely tedious. We won't be discussing this method in this guide, but if you really want to know, you can email us at support@uilicious.com.

#### IP Allow Listing <a href="#ip-allow-listing" id="ip-allow-listing"></a>

You can disable the 2FA challenge by allow listing the IP addresses used by the UI-licious Testing Grid.

You need to be a Salesforce administrator to do the following.

1. Login to Salesforce
2. Click on "Setup"
3. Under "Settings", click on "Security", then "Network Access"
4. Add the [UI-licious IP Address Range](../reference/configurations/cloud-ip-list.md) to the allow list

![Salesforce Setup - Security - Network Access](/static/img/salesforce-network-allowlist.png)

#### Using the Salesforce CLI <a href="#using-the-salesforce-cli" id="using-the-salesforce-cli"></a>

You can use the Salesforce CLI to generate a url that logs in directly into the Salesforce org with an authentication token. This url can be then be used in the test. This is a temporary solution as the authentication token will expire after 30 minutes or so.

Note that the Developer Hub on your Salesforce org must be enabled on order for you to use the Salesforce CLI.

Open your command line shell and run the following commands:

1. Run `npm install -g sfdx-cli` to install Salesforce.
2. Run `sfdx force:auth:web:login` to authorise the Salesforce CLI for use for a Salesforce org. This will open the web browser which will prompt you to login as a Salesforce developer.
3. `sfdx force:org:open -r -u bruce@waynecorp.com` to get a url to the Salesforce org for a user with an auth token.

Console output:

```bash
Access org 00D6F000002VRoFUAW as user bruce@waynecorp.com with the following URL: https://waynecorp.salesforce.com/secur/frontdoor.jsp?sid=00D6F000002VRoF!AQ8AQKC4bOf4T3A4ENSwB3dL9jA616NPmo7oGX2WL72CBXPyWwoa8hdiW5mxPG2qyrB.Q_qKhQ53OZvR3bCShsTSCTQgSj3h
```

Copy the url from the console output and use it in your test:

```javascript
// Copy the url from the sdfx-cli force:org:open output
// and use it to navigate to the Salesforce org in our tests
I.goTo("https://waynecorp.salesforce.com/secur/frontdoor.jsp?sid=00D6F000002VRoF!AQ8AQKC4bOf4T3A4ENSwB3dL9jA616NPmo7oGX2WL72CBXPyWwoa8hdiW5mxPG2qyrB.Q_qKhQ53OZvR3bCShsTSCTQgSj3h")
```

### Clicking on Icon Buttons <a href="#clicking-on-icon-buttons" id="clicking-on-icon-buttons"></a>

The first thing you'll probably want to do is to click on the "9 dots" icon.

![Salesforce App Launcher Button](/static/img/salesforce-app-launcher-button.png)

UI-licious automatically picks up the tooltips and accessibility labels for icon buttons in Salesforce, so you can use these in the `I.click` commands in your test to target these elements. You can hover your mouse over the icon to find out what is the tooltip for it, and use that in your test.

The "9 dots" icon button is labelled **"App Launcher"** in the English edition of Salesforce.

Here's how you can click on the "App Launcher" and then open a specific Salesforce app:

```javascript
// click the "9 dots" button
I.click("App Launcher")

// wait for the menu to popup
I.see(".appLauncherMenu") 

// and select your app
I.fill("Search apps and items", "Car Demo")
I.click("Car Demo")
```

### Testing components in iframes <a href="#testing-components-in-iframes" id="testing-components-in-iframes"></a>

Within Salesforce, you're likely to see pages that are sandboxed within an iframe, especially for your custom apps.

The contents of iframe are invisible to the UI-licious test engine due to security restrictions (which may differ from browser to browser). So to test such pages, you will need to explicitly target the iframe using the `UI.context` command.

Here's an example to show you how to use `UI.context` to target pages within iframes:

```javascript
// <login to salesforce>

// Create a new custom field on the "Animal" object
I.goTo("/lightning/setup/ObjectManager/home")
I.click("Animal")
I.click("Fields & Relationships")
I.click("New")
I.see("New Custom Field")

// Target the New Custom Field Form
// here we use an XPATH selector to target the iframe based on it's title attribute
var IFRAME = "//iframe[@title='Animal: New Custom Field ~ Salesforce - Developer Edition']"
I.see(IFRAME) // check that the iframe exists first
UI.context(IFRAME, ()=>{
    // test within an iframe
    I.see("Step 1. Choose the field type")    
    I.select("Geolocation")
    I.click("Next")
    I.see("Step 2. Enter the details")    
})
```

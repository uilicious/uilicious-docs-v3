---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to run Webdriver tests on the UIlicious Testing Grid
---

# Connect to UIlicious Grid

{% hint %}
This feature is only supported on the Business plans.
{% endhint %}

You can connect to the UIlicious Testing Grid directly and remotely execute test scripts written with browser automation libraries that uses the [WebDriver Protocol](https://www.w3.org/TR/webdriver/), such as:
- [Selenium](https://www.selenium.dev/documentation/webdriver/)
- [WebDriverIO](https://webdriver.io/)

The UIlicious Testing Grid supports all Webdriver Protocol endpoints, and legacy [JSON Wire Protocol](https://www.selenium.dev/documentation/legacy/json_wire_protocol/) endpoints.

## Step 1: Get webdriver connection URL

You will need the **UIlicious Webdriver Connection URL** in order to configure your test to connect to the UIlicious Testing Grid.

Follow the following steps to get the **UIlicious Webdriver Connection URL** 
- Log in to UIlicious
- Go to **Project Settings**
- Open the **Connect to Webdriver** tab
- Copy the **Webdriver Connection URL**

![Copy the "Webdriver Connection URL"](/static/img/uilicious-studio-webdriver-config.png)

## Step 2: Configure remote web driver connection

Now, configure your test to connect to the UIlicious Testing Grid using the **Webdriver Connection URL** that you have previously copied.

For Selenium tests, you can copy the examples below and replace `<UILICIOUS WEBDRIVER URL>` with copied URL.

{% tabs %}
{% tab title="Java" %}
```java{2}
ChromeOptions chromeOptions = new ChromeOptions();
WebDriver driver = new RemoteWebDriver(new URL("<UILICIOUS WEBDRIVER URL>"), chromeOptions);
driver.get("http://www.google.com");
driver.quit();
```
{% endtab %}
{% tab title="Python" %}
```python{5}
from selenium import webdriver

chrome_options = webdriver.ChromeOptions()
driver = webdriver.Remote(
    command_executor='<UILICIOUS WEBDRIVER URL>',
    options=chrome_options
)
driver.get("http://www.google.com")
driver.quit()  
```
{% endtab %}
{% tab title="CSharp" %}
```csharp{2}
var chromeOptions = new ChromeOptions();
IWebDriver driver = new RemoteWebDriver(new Uri("<UILICIOUS WEBDRIVER URL>"), chromeOptions);
driver.Navigate().GoToUrl("http://www.google.com");
driver.Quit();
```
{% endtab %}
{% tab title="Ruby" %}
```ruby{2}
caps = Selenium::WebDriver::Remote::Capabilities.chrome
driver = Selenium::WebDriver.for :remote, :url => "<UILICIOUS WEBDRIVER URL>", :desired_capabilities => caps
```
{% endtab %}
{% tab title="Javascript" %}
```javascript{7}
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
let opts = new chrome.Options();

async function runTest() {
    let driver = new Builder()
        .usingServer("<UILICIOUS WEBDRIVER URL>")
        .forBrowser('chrome')
        .setChromeOptions(opts)
        .build();
    try {
        await driver.get('http://www.google.com');
    } finally {
        await driver.quit();
    }
}

runTest()
```
{% endtab %}
{% endtabs %}

If you are using another library that requires the remote webdriver connection parameters to be configured individually instead of a single string, you can refer to the connection information below:

| Connection Parameter | Value | 
|----------------------|-------|
| protocol | https |
| hostname | webdriver.uilicious.com |
| port | 80 |
| path | /wd/hub |
| user | **Your Project ID** |
| key | **Your Access Key** |

Your project ID and access key will be used as the `user` and `key` for authentication. You can get your project ID and access key from the **Webdriver Connection URL** that you've copied, which is follows the format:

`https://<PROJECT_ID>:<ACCESS_KEY>@webdriver.uilicious.com/wd/hub`

## Configure session capabilities

When starting a webdriver session, you need to specify the test configuration in the `capabilties` object:

Here's an example:
```javascript
const capabilities = {
  browserName       : 'firefox', // required
  'uilicious:config': {
    name: "Name of the test", // optional
    width : 2560, // optional
    height: 1440, // optional
    region: 'netherlands-amsterdam', // optional
    userAgent: "", // optional
  }
}
```

### Browser

To configure which browser to run the test on, set the `browserName`:
- Use `chrome` for Google Chrome
- Use `firefox` for Firefox
- Use `safari` for MacOS Safari
- Use `edgechromium` for Microsoft Edge Chromium
- Use `edge` for Microsoft Edge (Legacy EdgeHTML)
- Use `ie11` for Internet Explore 11

```javascript{2}
const capabilities = {
    browserName : 'firefox' // run the test on "Firefox"
}
```

### Resolution

To configure the initial resolution of the browser window, set the `width` and `height` to the desired width and height in pixels in the `uilicious:config` object in the `capabilities` object:

```javascript{5-6}
const capabilities = {
    browserName : 'firefox'
    'uilicious:config': {
        // Set the initial resolution to 2560 x 1440
        width : 2560,
        height: 1440,
    }
}
```

### Region

To configure the geolocation to run the test from, set the `region` in the `uilicious:config` object in the `capabilities` object:

- Asia Pacific regions:
    - Use `india-bangalore` for India, Bangalore
    - Use `hongkong` for HongKong
    - Use `indonesia-jarkata` for Indonesia, Jarkata
    - Use `singapore` for Singapore
- Europe regions:
    - Use `netherlands-amsterdam` for Netherlands, Amsterdam
    - Use `germany-frankfurt` for Germany, Frankfurt
    - Use `unitedkingdom` for United Kingdom, London
- North America regions:
    - Use `usa-newyork` for USA, New York
    - Use `usa-sanfranc` for USA, San Francisco
    - Use `canada-toronto` for Canada, Toronto

```javascript{7}
const capabilities = {
    browserName : 'firefox'
    'uilicious:config': {
        width : 2560, 
        height: 1440, 
        // Run the test from "Singapore"
        region: "singapore"
    }
}
```

### User Agent

{% hint style="info" %}
This is only supported on **Chrome** and **Firefox** tests.
{% endhint %}

To configure the user agent of the test browser, set the `userAgent` property in the `uilicious:config` object in the `capabilities` object:

```javascript{7}
const capabilities = {
    browserName : 'firefox'
    'uilicious:config': {
        width : 2560, 
        height: 1440, 
        // Use an IPhone Safari browser User Agent
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
    }
}
```

### Test Name

You can view the tests that were ran under the "Runs" tab in the UIlicious Studio. These test runs will be titled "Webdriver Session" by default. If you want the test runs to have a more meaningful name, you can set the `name` property in the `uilicious:config` object in the `capabilities` object:

```javascript{7}
const capabilities = {
    browserName : 'firefox'
    'uilicious:config': {
        width : 2560, 
        height: 1440, 
        // Set a meaningful name for the test run
        name: "TC83 - purchase as guest user"
    }
}
```


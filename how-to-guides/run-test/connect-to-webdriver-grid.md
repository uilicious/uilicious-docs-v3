---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to run Selenium tests on the UIlicious Testing Grid
---

# Connect to UIlicious Grid

{% hint %}
This feature is only supported on the Business plans.
{% endhint %}

If you have existing tests written in Selenium, or other browser automation library that uses the [WebDriver Protocol](https://www.w3.org/TR/webdriver/), you can run these tests remotely using the UIlicious Testing Grid. The UIlicious Testing Grid supports all Webdriver Protocol endpoints, as the legacy [JSON Wire Protocol](https://www.selenium.dev/documentation/legacy/json_wire_protocol/).


## Webdriver Connection URL

You will need to configure your test to connect the UIlicious Webdriver Grid. 

The easiest way to get the full URL to the UIlicious Webdriver Grid is to go to the "**Connect to Webdriver**" tab under the "**Project Settings**", and copy the "**Webdriver Connection URL**".

![Copy the "Webdriver Connection URL"](/static/img/uilicious-studio-webdriver-config.png)

In Selenium, you can use this test like this:

{% tabs %}
{% tab title="Java" %}
```java
ChromeOptions chromeOptions = new ChromeOptions();
WebDriver driver = new RemoteWebDriver(new URL("<UILICIOUS WEBDRIVER URL>"), chromeOptions);
driver.get("http://www.google.com");
driver.quit();
```
{% endtab %}
{% tab title="Python" %}
```python
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
```csharp
var chromeOptions = new ChromeOptions();
IWebDriver driver = new RemoteWebDriver(new Uri("<UILICIOUS WEBDRIVER URL>"), chromeOptions);
driver.Navigate().GoToUrl("http://www.google.com");
driver.Quit();
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
caps = Selenium::WebDriver::Remote::Capabilities.chrome
driver = Selenium::WebDriver.for :remote, :url => "<UILICIOUS WEBDRIVER URL>", :desired_capabilities => caps
```
{% endtab %}
{% tab title="Javascript" %}
```javascript
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

If you use another library that requires the connection to be specified as a configuration object, such as Webdriver IO, you can use the following:
```javscript
{
    "protocol": "",
    "protocol": "",
    "protocol": "",
    "protocol": ""
}
```


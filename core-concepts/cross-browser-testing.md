# Cross-browser testing

One of the things that makes UIlicious different from popular test automation tools such as Cypress, Puppeteer, and Playwright is that UIlicious tests are not limited to just Chrome-based browsers. 

**At UIlicious, we believe in making the web accessible.** It's not enough to only test mainstream browsers like Chrome. It is our mission to enable test automation for every modern browser, and ensure users have the perfect user experience no matter what devices they own or which browsers they prefer. 

## Supported browsers

UIlicious currently supports testing for the latest builds for the following modern browsers:
- Google Chrome
- Firefox
- Microsft Edge (Chromium)
- MacOS Safari

UIlicious also supports testing for the following legacy browsers:
- Microsoft Edge (EdgeHTML, Version 42)
- Internet Explore 11

## How UIlicious ensures reliable cross-browser testing

One of the reasons why browser automation libraries like Cypress, Puppeteer, and Playwright are limited to testing only Chrome-based browsers is because they rely on the Chrome DevTools Protocol to automate browsers. However, as of the moment, the Chrome DevTools Protocol is not a W3C standard and is not adopted by all browsers. UIlicious, on the other hand, uses the **W3C Standard Webdriver Protocol** to automate browsers, which is supported by all major browsers.

One of the challenges of cross-browser test automation is often dealing with the quirks of different browsers. For example, a test that passes on Chrome might fail on Safari not because of a bug in the web application, but because the Safari WebDriver did not execute the command the same way the Chrome WebDriver did. As a result, test engineers would often need to write browser-specific workarounds to handle these special quirks.

At UIlicious, we have carefully engineered and tested every command to ensure they work the same way on every browser to ensure that your tests execute reliably across browsers without any false alerts due to browser quirks.



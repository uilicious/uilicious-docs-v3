# Cross-browser testing

**At UIlicious, we believe in making the web accessible.** It's not enough to only test mainstream browsers like Chrome. It is our mission to enable test automation for every modern browser, and ensure users have the perfect user experience no matter what devices they own or which browsers they prefer. 

## Supported browsers


![Select multiple browsers to run your test](/static/img/uilicious-select-multiple-browsers.gif)

UIlicious currently supports testing for the latest builds for the following modern browsers:
- Google Chrome
- Firefox
- Microsft Edge (Chromium)
- MacOS Safari

UIlicious also supports testing for the following legacy browsers:
- Microsoft Edge (EdgeHTML, Version 42)
- Internet Explorer 11

## Reliably test across browsers

One of the challenges of cross-browser test automation is often dealing with the quirks of different browsers. For example, a test that passes on Chrome might fail on Safari not because of a bug in the web application, but because the Safari WebDriver did not execute the command the same way the Chrome WebDriver did. As a result, test engineers would often need to write browser-specific workarounds to handle these special quirks. 

At UIlicious, we have carefully engineered and tested every command to ensure they work the same way on every browser to ensure that your tests execute across browsers reliably without any false alerts due to browser quirks.



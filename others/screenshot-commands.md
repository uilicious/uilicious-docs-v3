# Screenshot commands

## Screenshot commands <a href="#screenshot-commands" id="screenshot-commands"></a>

If you haven't already noticed, screenshots are automatically taken for every command. The screenshots taken are usually of what's visible in the viewport - meaning what you as a user would see on your screen given the specified resolution for the test run.

Theses commands are for you to take full page screenshots.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command                                                                                                  | Description                                    |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`TEST.takeFullScreenshot`](https://docs.uilicious.com/scripting/screenshot.html#testtakefullscreenshot) | Take a full page screenshot (Safari & IE only) |

***

### `TEST.takeFullScreenshot` <a href="#testtakefullscreenshot" id="testtakefullscreenshot"></a>

> Currently only available for Safari and IE tests.

Take a full page screenshot of the current page

Note that taking full page screenshots can slow down your tests, use it when you need to.

Additionally, if there's infinite scrolling on the page, only what's currently visible will be taken. You'll need to combine this with scrolling commands to take longer screenshots on these kinds of pages.

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.takeFullScreenshot()
```

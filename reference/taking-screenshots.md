---
description: >-
  If you haven't already noticed, screenshots are automatically taken for every
  command. The screenshots taken are usually of what's visible in the viewport -
  meaning what you as a user would see on you
---

# Taking Screenshots

Theses commands are for you to take full page screenshots.

### `TEST.takeFullScreenshot` <a href="#testtakefullscreenshot" id="testtakefullscreenshot"></a>

> Currently only available for Safari and IE tests.

Take a full page screenshot of the current page

Note that taking full page screenshots can slow down your tests, use it when you need to.

Additionally, if there's infinite scrolling on the page, only what's currently visible will be taken. You'll need to combine this with scrolling commands to take longer screenshots on these kinds of pages.

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.takeFullScreenshot()
```

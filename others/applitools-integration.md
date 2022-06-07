# Applitools Integration



## Integrating with Applitools Eyes <a href="#integrating-with-applitools-eyes" id="integrating-with-applitools-eyes"></a>

> Applitools Eyes Integration is still under beta, the following APIs are experimental and subject to change.

### What is Applitools? <a href="#what-is-applitools" id="what-is-applitools"></a>

[Applitools](https://applitools.com/) is a visual regression testing tool.

Why do you need this?

UI-licious only performs functional end-to-end testing for your web applications. While UI-licious can tell you if your Login form is working as expected or not, but it cannot tell if your Login form looks inconsistent across browsers or has any visual changes since last week. You would still need to check the screenshots in UI-licious with a human eye to detect visual issues, **or** use Applitool Eyes to detect these issues automatically for you! Applitools works by creating snapshots and intelligently comparing snapshots with the baseline to detect differences.

### Setup <a href="#setup" id="setup"></a>

Integrating your UI-licious tests with Applitools is easy.

First, 👉 [get your Applitools API key](https://applitools.com/docs/topics/overview/obtain-api-key.html)

Then, add this line to the start of your UI-licious test:

```javascript
// Setup Applitools at the start of your UI-licious test
TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY")

//===========================
// My Test
//===========================
I.goTo("https://mystore.com")
I.fill("Search", "watches")
I.click("Search")
```

That's all!

Now, whenever you run the test in UI-licious, it will also be visually tested by Applitools, and you can see the results in Applitools.

#### App and Test Naming <a href="#app-and-test-naming" id="app-and-test-naming"></a>

By default, the app and test in Applitools will be named according to the name of the project and test respectively in UI-licious.

However, this means that if project or tests are renamed or moved in UI-licious, your Applitools tests will be saved under the new name, and lose continuity with past snapshots.

You can manually set how your tests will be named in Applitools by passing in the `testName` option to `TEST.applitools.setup`, e.g.:

```javascript
// Setup Applitools at the start of your UI-licious test
TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY", {
    testName: "My Applitools Test 1"
})
```

### Snapshots <a href="#snapshots" id="snapshots"></a>

When you run the test, an Applitool snapshot will be automatically captured for every UI-licious command.

Each snapshot will be automatically named according to the step number and the command name in UI-licious, e.g. `2-fill`, `3-click`, `4-see`.

#### Manually capturing snapshots <a href="#manually-capturing-snapshots" id="manually-capturing-snapshots"></a>

Capturing an Applitool snapshot for every UI-licious command can get overwhelming, especially when there are many commands interacting with the same screen.

You can disable automatic snapshots and capture snapshots manually instead.

Set the `autoScreenshot` option to false during setup, e.g.:

```javascript
TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY", {
    autoScreenshot: false
})
```

Note that this only disables the snapshots automatically taken for Applitools, but screenshots for every command will still be taken for UI-licious reports.

You can capture a snapshot manually with the `.check` or `.checkWindow` API:

```javascript
// Take a snapshot of the current viewport
TEST.applitools.check("Custom snapshot name")
```

Example:

```javascript
I.goTo("https://mystore.com")
TEST.applitools.check("Home") // 👈 Add a checkpoint here
I.fill("Search", "watches")
I.click("Search")
TEST.applitools.check("Search 'watches' result") // 👈 Add a checkpoint here
```

To know more about using Applitools eyes, 👉 [read the official documentation](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

#### Tip: `eyes` object alias <a href="#tip-eyes-object-alias" id="tip-eyes-object-alias"></a>

If you feel that typing `TEST.applitools.check` is pretty long, you can alias the Applitools API returned by `TEST.applitools.setup` to a shorter variable, e.g. `eyes`:

```javascript
var eyes = TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY")

I.goTo("https://mystore.com")
eyes.check("Home") // 👈 Add a checkpoint here
I.fill("Search", "watches")
I.click("Search")
eyes.check("Search 'watches' result") // 👈 Add a checkpoint here
```

#### Check Window <a href="#check-window" id="check-window"></a>

The `.checkWindow(name)` methods takes a snapshot of the window.

```javascript
var eyes = TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY")

I.goTo("https://mystore.com")
eyes.checkWindow("Home") // 👈 Add a checkpoint here
```

#### Check Fluent API <a href="#check-fluent-api" id="check-fluent-api"></a>

The `.check` Fluent APIs offers more flexiblity on how screenshots will be captured.

First, we recommend aliasing the Applitools `Target` and `By` APIs for convenience.

```javascript
var Target = TEST.applitools.Target // 👈 Alias the "Target" API for convenience
var By = TEST.applitools.By // 👈 Alias the "By" API for convenience
```

The `Target` and `By` APIs provide methods for targeting specific parts of the window or page to screenshot.for example:

```javascript
I.goTo("https://wikipedia.com")
eyes.check("Search form", Target.region(By.id("searchform")) // 👈 Add a checkpoint here
```

In above example, Applitools will only only capture the screenshot of Wikipedia's search form which has the id `searchform`.

**Taking a full page screenshot**

You can use `Target.window().fully()` to instruct Applitools to take a full page screenshot.

```javascript
var Target = TEST.applitools.Target
eyes.check("Search results", Target.window().fully())
```

**Taking a element screenshot**

You can take element screenshots by targeting an element using css or xpath selectors, e.g.:

* `Target.region(By.id("login-btn"))`
* `Target.region(By.css("#login-btn .dropdown"))`
* `Target.region(By.xPath("//button[@id='login-btn']"))`

```javascript
var Target = TEST.applitools.Target
var By = TEST.applitools.By
eyes.check("Menu dropdown button", Target.region(By.css("#login-btn .dropdown-menu")))
```

# Commands List

### Page Navigation Commands <a href="#page-navigation-commands" id="page-navigation-commands"></a>

| Command                                                                                                      | Description           |
| -------------------------------------------------------------------------------------------------------------| --------------------- |
| [`I.goTo`](https://v3/reference/page-navigation/go-to-a-url.html#igoto)               | Navigate to a URL     |
| [`I.refreshPage`](https://v3/reference/page-navigation/refresh-page.html#irefreshpage)| Refresh a page        |
| [`I.switchTab`](https://v3/reference/page-navigation/switch-tabs.html#iswitchtab)     | Switch to a tab       |
| [`I.closeTab`](https://v3/reference/page-navigation/close-tab.html#iclosetab)         | Close the current tab |

### Page Assertion Commands <a href="#page-assertion-commands" id="page-assertion-commands"></a>

| Command                                                                                                           | Description                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`I.amAt`](https://v3/reference/validation-commands/validate-url.html#iamAt)               | Assert that the browser is at a specific URL                                              |
| [`UI.isStatusCode`](https://v3/reference/page-navigation/validate-page-status.html#uiisstatuscode)       | Asserts that the status code for the current page is a specific status code.              |
| [`UI.isNotStatusCode`](https://v3/reference/page-navigation/validate-page-status.html#uiisnotstatuscode) | Asserts that the status code for the current page is **NOT** a specific status code.      |
| [`UI.is200`](https://v3/reference/page-navigation/validate-page-status.html#uiis200)                     | Asserts that the status code for the current page is 200 (OK).                            |
| [`UI.isNot200`](https://v3/reference/page-navigation/validate-page-status.html#uisinot200)               | Asserts that the status code for the current page is **NOT** 200 (OK).                    |
| [`UI.is404`](https://v3/reference/page-navigation/validate-page-status.html#usis404)                     | Asserts that the status code for the current page is 404 (Not Found).                     |
| [`UI.isNot404`](https://v3/reference/page-navigation/validate-page-status.html#uiisnot404)               | Asserts that the status code for the current page is **NOT** 404 (Not Found).             |
| [`UI.is500`](https://v3/reference/page-navigation/validate-page-status.html#uiis500)                     | Asserts that the status code for the current page is 500 (Internal Server Error).         |
| [`UI.isNot500`](https://v3/reference/page-navigation/validate-page-status.html#uiisnot500)               | Asserts that the status code for the current page is **NOT** 500 (Internal Server Error). |

### Form Input Commands <a href="#form-input-commands" id="form-input-commands"></a>

| Command                                                                         | Description                                 |
| ------------------------------------------------------------------------------- | ------------------------------------------- |
| [`I.fill`](https://v3/reference/keyboard-interactions/filling-forms/fill-input-fields.html#ifill)         | Fill a text field with a value              |
| [`I.select`](https://v3/reference/keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.html#iselect)     | Select a dropdown / checkbox / radio button |
| [`I.deselect`](https://v3/reference/keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.html#ideselect) | Deselect a checkbox                         |
| [`I.upload`](https://v3/reference/keyboard-interactions/filling-forms/upload-files.html#iupload)     | Upload a file to a file field               |

### Form Assertion Commands <a href="#form-assertion-commands" id="form-assertion-commands"></a>

| Command                                                                             | Description                                                              |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`I.filled`](https://v3/reference/validation-commands/validate-form-input.html#ifilled)         | Assert that the form is filled with a specific value                     |
| [`I.selected`](https://v3/reference/keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.html#iselected)     | Assert that a dropdown option, checkbox, or radio button is selected     |
| [`I.deselected`](https://v3/reference/keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.html#ideselected) | Assert that a dropdown option, checkbox, or radio button is NOT selected |

### Mouse Commands <a href="#mouse-commands" id="mouse-commands"></a>

| Command                                                                                                                                | Description                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| <p><code></code><a href="mouse-interactions/click-on-objects/"><code>I.click</code><br><code>I.doubleClick</code></a><code></code></p> | Click or double click on an element                                       |
| [`I.rightClick`](https://v3/reference/mouse-interactions/click-on-objects/right-clicking-on-objects.html#irightclick)                                                          | Right click on an element                                                 |
| [`I.hoverOn`](https://v3/reference/mouse-interactions/hover-over-objects.html#ihoverOn)                                                                | Hover on an element                                                       |
| [`I.dragTo`](hhttps://v3/reference/mouse-interactions/drag-objects.html#idragto)                                                                  | Drag an element to another target element                                 |
| [`I.dragBy`](https://v3/reference/mouse-interactions/drag-objects.html#idragby)                                                                  | Drag an element directionally by (x,y) pixel offset                       |
| [`I.dragUp`](https://v3/reference/mouse-interactions/drag-objects.html#idragup)                                                                  | Drag an element to the up by a given number of pixel                      |
| [`I.dragDown`](https://v3/reference/mouse-interactions/drag-objects.html#idragdown)                                                              | Drag an element to the down by a given number of pixel                    |
| [`I.dragLeft`](https://v3/reference/mouse-interactions/drag-objects.html#idragleft)                                                              | Drag an element to the left by a given number of pixel                    |
| [`I.dragRight`](https://v3/reference/mouse-interactions/drag-objects.html#idragright)                                                            | Drag an element to the right by a given number of pixel                   |
| [`I.scrollBy`](https://v3/reference/mouse-interactions/scroll-page.html#iscrollby)                                                              | Scrolls the page horizontally and vertically by a given number of pixels. |
| [`I.scrollUp`](https://v3/reference/mouse-interactions/scroll-page.html#iscrollup)                                                              | Scrolls the page up by a given number of pixels                           |
| [`I.scrollDown`](https://v3/reference/mouse-interactions/scroll-page.html#iscrolldown)                                                          | Scrolls the page down by a given number of pixels                         |
| [`I.scrollLeft`](https://v3/reference/mouse-interactions/scroll-page.html#iscrollleft)                                                          | Scrolls the page left by a given number of pixels                         |
| [`I.scrollRight`](https://v3/reference/mouse-interactions/scroll-page.html#iscrollright)                                                        | Scrolls the page right by a given number of pixels                        |
| [`I.scrollTo`](https://v3/reference/mouse-interactions/scroll-page.html#iscrollto)                                                              | Scrolls to a coordinate on the page                                       |
| [`I.scrollToTop`](https://v3/reference/mouse-interactions/scroll-page.html#iscrolltotop)                                                        | Scroll to the top of the page                                             |
| [`I.scrollToBottom`](https://v3/reference/mouse-interactions/scroll-page.html#iscrolltobottom)                                                  | Scroll to the bottom of the page                                          |

### Keyboard Commands <a href="#keyboard-commands" id="keyboard-commands"></a>

| Command                                                                                                                                                                                                          | Description                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| <p><a href="https://v3/reference/keyboard-interactions/Typing-or-pressing-keys.html#itype--ipress"><code>I.type</code></a><br><a href="hhttps://v3/reference/keyboard-interactions/Typing-or-pressing-keys.html#itype--ipress"><code>I.press</code></a></p> | Press a key or a string of keys |
| [`I.pressEnter`](https://v3/reference/keyboard-interactions/Typing-or-pressing-keys.html#ipressenter)                                                                                                                                 | Press the `Enter` key           |
| [`I.pressUp`](https://v3/reference/keyboard-interactions/Typing-or-pressing-keys.html#ipressup)                                                                                                                                       | Press the ↑ key                 |
| [`I.pressDown`](https://v3/reference/keyboard-interactions/Typing-or-pressing-keys.html#ipressdown)                                                                                                                                   | Press the ↓ key                 |
| [`I.pressLeft`](https://v3/reference/keyboard-interactions/Typing-or-pressing-keys.html#ipressleft)                                                                                                                                   | Press the ← key                 |
| [`I.pressRight`](https://v3/reference/keyboard-interactions/Typing-or-pressing-keys.html#ipressright)                                                                                                                                 | Press the → key                 |
| [`I.pressTab`](https://v3/reference/keyboard-interactions/Typing-or-pressing-keys.html#ipresstab)                                                                                                                                     | Press the `Tab` key             |

### Validate Page Content <a href="#validate-page-content" id="validate-page-content"></a>

| Command                                                                               | Description                                           |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`I.see`](https://v3/reference/validation-commands/validate-page-content/i-see-command.html#isee)                   | Assert that an text or element is visible             |
| [`I.dontSee`](https://v3/reference/validation-commands/validate-page-content/i-see-command.html#idontSee)           | Assert that an text or element is NOT visible         |
| [`I.count`](https://v3/reference/validation-commands/validate-page-content/i-count-command.html#icount)               | Assert the number of occurances for a text or element |
| [`I.seePageTitle`](https://v3/reference/page-navigation/get-and-validate-page-title.html#iseepagetitle) | Assert the title of the current page                  |

### Page Content Extraction Commands <a href="#page-content-extraction-commands" id="page-content-extraction-commands"></a>

| Command                                                                             | Description                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`I.getCount`](https://v3/reference/read-and-validate-page-elements/count-number-of-page-elements.html#igetcount)         | Get the number of occurances of a text or element |
| [`I.getText`](https://v3/reference/read-and-validate-page-elements/get-text-from-a-page-element.html#igettext)           | Get text content from an element                  |
| [`I.getValue`](https://v3/reference/read-and-validate-page-elements/get-value-from-an-input-element.html#igetvalue)         | Get value from an input element                   |
| [`I.getPageTitle`](https://v3/reference/validation-commands/get-and-validate-page-title.html#igetpagetitle) | Get the title of the current page                 |

### Read and Validate Page Elements <a href="#read-and-validate-page-elements" id="read-and-validate-page-elements"></a>

**Element attribute**

| Command                                                                                                         | Description                                                                                                       |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`UI.getAttribute`](https://v3/reference/read-and-validate-page-elements/get-value-from-page-element-attribute.html#uigetattribute)                 | Get an attribute on an element.                                                                                   |
| [`UI.getAttributes`](https://v3/reference/read-and-validate-page-elements/get-value-from-page-element-attribute.html#uigetattributes)               | Get all attributes on an element.                                                                                 |
| [`UI.hasAttribute`](https://v3/reference/read-and-validate-page-elements/validate-page-element-attribute.html#uihasattribute)                 | Assert the presence or the expected value of an attribute on an element.                                          |
| [`UI.doesNotHaveAttribute`](https://v3/reference/read-and-validate-page-elements/validate-page-element-attribute.html#uidoesnothaveattribute) | Assert the absence of an attribute on an element, or that the value of an attribute is not equals a given string. |

**Element class**

| Command                                                                                                 | Description                                       |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`UI.hasClass`](https://v3/reference/read-and-validate-page-elements/validate-page-element-class.html#uihasclass)                 | Assert the presence of a CSS class on an element. |
| [`UI.doesNotHaveClass`](https://v3/reference/read-and-validate-page-elements/validate-page-element-class.html#uidoesnothaveclass) | Assert the absence of a CSS class on an element.  |

**Element HTML**

| Command                                                                          | Description                                                    |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`UI.getHTML`](https://v3/reference/read-and-validate-page-elements/get-html-code-for-a-page-element.html)      | Get the outer HTML of an element. Alias for `UI.getOuterHTML`. |
| [`UI.getOuterHTML`](https://v3/reference/read-and-validate-page-elements/get-html-code-for-a-page-element.html) | Get the outer HTML of an element.                              |
| [`UI.getInnerHTML`](https://v3/reference/read-and-validate-page-elements/get-html-code-for-a-page-element.html) | Get the inner HTML of an element.                              |

### Alert Commands <a href="#alert-commands" id="alert-commands"></a>

| Command                                                                          | Description                                                                                   |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`I.seeAlert`](https://v3/reference/interacting-with-alerts/validate-alert.html#iseealert)       | Assert that an alert is displayed, and/or that an expected message is displayed on the alert. |
| [`I.acceptAlert`](https://v3/reference/interacting-with-alerts/accept-dismiss-alert.html#iacceptalert) | Press the "Ok" button on the alert                                                            |
| [`I.cancelAlert`](https://v3/reference/interacting-with-alerts/accept-dismiss-alert.html#icancelalert) | Press the "Cancel" button on the alert                                                        |
| [`I.fillAlert`](https://v3/reference/interacting-with-alerts/fill-alert.html#ifillalert)     | Fill the text box on the alert                                                                |

### Utility Commands <a href="#utility-commands" id="utility-commands"></a>

| Command                                                             | Description                     |
| ------------------------------------------------------------------- | ------------------------------- |
| [`I.wait`](https://v3/reference/wait-commands/explicit-wait.html#iwait) | Wait for a given amount of time |

### Generate Sample Data <a href="#generate-sample-data" id="generate-sample-data"></a>

| Command                                                                        | Description                                            |
| ------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`SAMPLE.id`](https://v3/reference/dynamic-test-data/generate-sample-data.html#sampleid)       | Generates a random string useful for IDs and passwords |
| [`SAMPLE.phone`](https://v3/reference/dynamic-test-data/generate-sample-data.html#samplephone) | Generates a random phone number                        |
| [`SAMPLE.last`](https://v3/reference/dynamic-test-data/generate-sample-data.html#samplelast)   | Generates a random last name                           |
| [`SAMPLE.first`](https://v3/reference/dynamic-test-data/generate-sample-data.html#samplefirst) | Generates a random first name                          |
| [`SAMPLE.name`](https://v3/reference/dynamic-test-data/generate-sample-data.html#samplename)   | Generates a random full name                           |
| [`SAMPLE.email`](https://v3/reference/dynamic-test-data/generate-sample-data.html#sampleemail) | Generates a random email address                       |

### Loading Test Data From File <a href="#loading-test-data-from-file" id="loading-test-data-from-file"></a>

| Command                                                                                                          | Description                        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`TEST.loadDataFromCsv`](https://v3/reference/dynamic-test-data/load-test-data-from-file.html#testloaddatafromcsv)   | Loads test data from a .csv file.  |
| [`TEST.loadDataFromJson`](https://v3/reference/dynamic-test-data/load-test-data-from-file.html#testloaddatafromjson) | Loads test data from a .json file. |

### Test Flow Commands <a href="#test-flow-commands" id="test-flow-commands"></a>

| Command                                                                    | Description       |
| -------------------------------------------------------------------------- | ----------------- |
| [`TEST.run`](https://v3/reference/reusing-tests/running-another-test.html#testrun)   | Runs another test |
| [`TEST.stop`](https://v3/reference/stopping-tests/stop-command.html#teststop) | Stops the test    |

### Screenshot Commands <a href="#screenshot-commands" id="screenshot-commands"></a>

| Command                                                                                                  | Description                                    |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`TEST.takeFullScreenshot`](https://v3/reference/taking-screenshots.html#testtakefullscreenshot) | Take a full page screenshot (Safari & IE only) |

### Reporting Commands <a href="#reporting-commands" id="reporting-commands"></a>

| Command                                                                          | Description                                |
| -------------------------------------------------------------------------------- | ------------------------------------------ |
| [`TEST.log.info`](https://v3/reference/custom-reporting/info-logs.html#testloginfo) | Log a message to report                    |
| [`TEST.log.pass`](https://v3/reference/custom-reporting/success-status-logs.html#testlogpass) | Log a message to report with `pass` status |
| [`TEST.log.fail`](https://v3/reference/custom-reporting/failure-status-logs.html#testlogfail) | Log a message to report with `fail` status |

### Limiting Test Scope <a href="#limiting-test-scope" id="limiting-test-scope"></a>

| Command                                                                         | Description                                                                                                                       |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`UI.context`](https://v3/reference/handling-iframes.html#uicontext) | <p>Limit the test to target within specific parts of a page.<br>Can be used to explicitly switch to the context of an iframe.</p> |

### Execute Javascript <a href="#execute-javascript" id="execute-javascript"></a>

| Command                                                                                  | Description                        |
| ---------------------------------------------------------------------------------------- | ---------------------------------- |
| [`UI.execute`](https://v3/reference/using-javascript/use-javascript-in-your-test/execute-javascript-on-the-browser.html#uiexecute) | Executes Javascript on the browser |

### HTTP Requests <a href="#http-requests" id="http-requests"></a>

| Command                                                                                       | Description                             |
| --------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`UI.httpGet`](https://v3/reference/making-http-requests.html#how-it-works)     | Do a http request with the GET method.  |
| [`UI.httpPost`](https://v3/reference/making-http-requests.html#how-it-works)    | Do a http request with the POST method. |
| [`UI.httpRequest`](https://v3/reference/making-http-requests.html#how-it-works) | Do a http request.                      |

### Cookie Management <a href="#cookie-management" id="cookie-management"></a>

| Command                                                                                      | Description                      |
| -------------------------------------------------------------------------------------------- | -------------------------------- |
| [`UI.COOKIE.set`](https://v3/reference/handling-cookies.html#uicookieset)             | Set a cookie on the current page |
| [`UI.COOKIE.isSet`](https://v3/reference/handling-cookies.html#uicookieisset)         | Assert the presence of a cookie  |
| [`UI.COOKIE.isEqual`](https://v3/reference/handling-cookies.html#uicookieisEqual)     | Assert the value of a cookie     |
| [`UI.COOKIE.delete`](https://v3/reference/handling-cookies.html#uicookiedelete)       | Delete a cookie                  |
| [`UI.COOKIE.deleteAll`](https://v3/reference/handling-cookies.html#uicookiedeleteAll) | Delete all cookies               |

### Local Storage Management <a href="#local-storage-management" id="local-storage-management"></a>

| Command                                                                                                                   | Description                                  |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`UI.LocalStorage.get`](https://v3/reference/handling-local-storage.html#uilocalstorageget)             | Get the value of property from local storage |
| [`UI.LocalStorage.set`](https://v3/reference/handling-local-storage.html#uilocalstorageset)             | Set a property in local storage              |
| [`UI.LocalStorage.isSet`](https://v3/reference/handling-local-storage.html)                             | - coming soon -                              |
| [`UI.LocalStorage.isEqual`](https://v3/reference/handling-local-storage.html)                           | - coming soon -                              |
| [`UI.LocalStorage.delete`](https://v3/reference/handling-local-storage.html#uilocalstoragedelete)       | Delete a property in local storage           |
| [`UI.LocalStorage.deleteAll`](https://v3/reference/handling-local-storage.html#uilocalstoragedeleteall) | Delete all properties in local storage       |

### Window Resize <a href="#window-resize" id="window-resize"></a>

| Command                                                                          | Description                                           |
| -------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`UI.resize`](https://docs.uilicious.com/scripting/window\_resize.html#uiresize) | Resize the resolution to a specific width and height. |

# Commands List

### Page Navigation Commands <a href="#page-navigation-commands" id="page-navigation-commands"></a>

| Command                                                                                                      | Description           |
| -------------------------------------------------------------------------------------------------------------| --------------------- |
| [`I.goTo`](./page-navigation/go-to-a-url.html#igoto)               | Navigate to a URL     |
| [`I.refreshPage`](./page-navigation/refresh-page.html#irefreshpage)| Refresh a page        |
| [`I.switchTab`](./page-navigation/switch-tabs.html#iswitchtab)     | Switch to a tab       |
| [`I.closeTab`](./page-navigation/close-tab.html#iclosetab)         | Close the current tab |

### Page Assertion Commands <a href="#page-assertion-commands" id="page-assertion-commands"></a>

| Command                                                                                                           | Description                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`I.amAt`](./validation-commands/validate-url.html#iamAt)               | Assert that the browser is at a specific URL                                              |
| [`UI.isStatusCode`](./page-navigation/validate-page-status.html#uiisstatuscode)       | Asserts that the status code for the current page is a specific status code.              |
| [`UI.isNotStatusCode`](./page-navigation/validate-page-status.html#uiisnotstatuscode) | Asserts that the status code for the current page is **NOT** a specific status code.      |
| [`UI.is200`](./page-navigation/validate-page-status.html#uiis200)                     | Asserts that the status code for the current page is 200 (OK).                            |
| [`UI.isNot200`](./page-navigation/validate-page-status.html#uisinot200)               | Asserts that the status code for the current page is **NOT** 200 (OK).                    |
| [`UI.is404`](./page-navigation/validate-page-status.html#usis404)                     | Asserts that the status code for the current page is 404 (Not Found).                     |
| [`UI.isNot404`](./page-navigation/validate-page-status.html#uiisnot404)               | Asserts that the status code for the current page is **NOT** 404 (Not Found).             |
| [`UI.is500`](./page-navigation/validate-page-status.html#uiis500)                     | Asserts that the status code for the current page is 500 (Internal Server Error).         |
| [`UI.isNot500`](./page-navigation/validate-page-status.html#uiisnot500)               | Asserts that the status code for the current page is **NOT** 500 (Internal Server Error). |

### Form Input Commands <a href="#form-input-commands" id="form-input-commands"></a>

| Command                                                                         | Description                                 |
| ------------------------------------------------------------------------------- | ------------------------------------------- |
| [`I.fill`](./keyboard-interactions/filling-forms/fill-input-fields.html#ifill)         | Fill a text field with a value              |
| [`I.select`](./keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.html#iselect)     | Select a dropdown / checkbox / radio button |
| [`I.deselect`](./keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.html#ideselect) | Deselect a checkbox                         |
| [`I.upload`](./keyboard-interactions/filling-forms/upload-files.html#iupload)     | Upload a file to a file field               |

### Form Assertion Commands <a href="#form-assertion-commands" id="form-assertion-commands"></a>

| Command                                                                             | Description                                                              |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`I.filled`](./validation-commands/validate-form-input.html#ifilled)         | Assert that the form is filled with a specific value                     |
| [`I.selected`](./keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.html#iselected)     | Assert that a dropdown option, checkbox, or radio button is selected     |
| [`I.deselected`](./keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.html#ideselected) | Assert that a dropdown option, checkbox, or radio button is NOT selected |

### Mouse Commands <a href="#mouse-commands" id="mouse-commands"></a>

| Command                                                                                                                                | Description                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| <p><a href="./mouse-interactions/click-on-objects/I.click-and-I.doubleClick.html"><code>I.click</code><br><code>I.doubleClick</code></a><code></code></p> | Click or double click on an element                                       |
| [`I.rightClick`](./mouse-interactions/click-on-objects/right-clicking-on-objects.html#irightclick)                                                          | Right click on an element                                                 |
| [`I.hoverOn`](./mouse-interactions/hover-over-objects.html#ihoverOn)                                                                | Hover on an element                                                       |
| [`I.dragTo`](./mouse-interactions/drag-objects.html#idragto)                                                                  | Drag an element to another target element                                 |
| [`I.dragBy`](./mouse-interactions/drag-objects.html#idragby)                                                                  | Drag an element directionally by (x,y) pixel offset                       |
| [`I.dragUp`](./mouse-interactions/drag-objects.html#idragup)                                                                  | Drag an element to the up by a given number of pixel                      |
| [`I.dragDown`](./mouse-interactions/drag-objects.html#idragdown)                                                              | Drag an element to the down by a given number of pixel                    |
| [`I.dragLeft`](./mouse-interactions/drag-objects.html#idragleft)                                                              | Drag an element to the left by a given number of pixel                    |
| [`I.dragRight`](./mouse-interactions/drag-objects.html#idragright)                                                            | Drag an element to the right by a given number of pixel                   |
| [`I.scrollBy`](./mouse-interactions/scroll-page.html#iscrollby)                                                              | Scrolls the page horizontally and vertically by a given number of pixels. |
| [`I.scrollUp`](./mouse-interactions/scroll-page.html#iscrollup)                                                              | Scrolls the page up by a given number of pixels                           |
| [`I.scrollDown`](./mouse-interactions/scroll-page.html#iscrolldown)                                                          | Scrolls the page down by a given number of pixels                         |
| [`I.scrollLeft`](./mouse-interactions/scroll-page.html#iscrollleft)                                                          | Scrolls the page left by a given number of pixels                         |
| [`I.scrollRight`](./mouse-interactions/scroll-page.html#iscrollright)                                                        | Scrolls the page right by a given number of pixels                        |
| [`I.scrollTo`](./mouse-interactions/scroll-page.html#iscrollto)                                                              | Scrolls to a coordinate on the page                                       |
| [`I.scrollToTop`](./mouse-interactions/scroll-page.html#iscrolltotop)                                                        | Scroll to the top of the page                                             |
| [`I.scrollToBottom`](./mouse-interactions/scroll-page.html#iscrolltobottom)                                                  | Scroll to the bottom of the page                                          |

### Keyboard Commands <a href="#keyboard-commands" id="keyboard-commands"></a>

| Command                                                                                                                                                                                                          | Description                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| <p><a href="./keyboard-interactions/Typing-or-pressing-keys.html#itype--ipress"><code>I.type</code></a><br><a href="./keyboard-interactions/Typing-or-pressing-keys.html#itype--ipress"><code>I.press</code></a></p> | Press a key or a string of keys |
| [`I.pressEnter`](./keyboard-interactions/Typing-or-pressing-keys.html#ipressenter)                                                                                                                                 | Press the `Enter` key           |
| [`I.pressUp`](./keyboard-interactions/Typing-or-pressing-keys.html#ipressup)                                                                                                                                       | Press the ↑ key                 |
| [`I.pressDown`](./keyboard-interactions/Typing-or-pressing-keys.html#ipressdown)                                                                                                                                   | Press the ↓ key                 |
| [`I.pressLeft`](./keyboard-interactions/Typing-or-pressing-keys.html#ipressleft)                                                                                                                                   | Press the ← key                 |
| [`I.pressRight`](./keyboard-interactions/Typing-or-pressing-keys.html#ipressright)                                                                                                                                 | Press the → key                 |
| [`I.pressTab`](./keyboard-interactions/Typing-or-pressing-keys.html#ipresstab)                                                                                                                                     | Press the `Tab` key             |

### Validate Page Content <a href="#validate-page-content" id="validate-page-content"></a>

| Command                                                                               | Description                                           |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`I.see`](./validation-commands/validate-page-content/i-see-command.html#isee)                   | Assert that an text or element is visible             |
| [`I.dontSee`](./validation-commands/validate-page-content/i-see-command.html#idontSee)           | Assert that an text or element is NOT visible         |
| [`I.count`](./validation-commands/validate-page-content/i-count-command.html#icount)               | Assert the number of occurances for a text or element |
| [`I.seePageTitle`](./read-and-validate-page-elements/get-and-validate-page-title.html#iseepagetitle) | Assert the title of the current page                  |

### Page Content Extraction Commands <a href="#page-content-extraction-commands" id="page-content-extraction-commands"></a>

| Command                                                                             | Description                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`I.getCount`](./read-and-validate-page-elements/count-number-of-page-elements.html#igetcount)         | Get the number of occurances of a text or element |
| [`I.getText`](./read-and-validate-page-elements/get-text-from-a-page-element.html#igettext)           | Get text content from an element                  |
| [`I.getValue`](./read-and-validate-page-elements/get-value-from-an-input-element.html#igetvalue)         | Get value from an input element                   |
| [`I.getPageTitle`](./read-and-validate-page-elements/get-and-validate-page-title.html#igetpagetitle) | Get the title of the current page                 |

### Read and Validate Page Elements <a href="#read-and-validate-page-elements" id="read-and-validate-page-elements"></a>

**Element attribute**

| Command                                                                                                         | Description                                                                                                       |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`UI.getAttribute`](./read-and-validate-page-elements/get-value-from-page-element-attribute.html#uigetattribute)                 | Get an attribute on an element.                                                                                   |
| [`UI.getAttributes`](./read-and-validate-page-elements/get-value-from-page-element-attribute.html#uigetattributes)               | Get all attributes on an element.                                                                                 |
| [`UI.hasAttribute`](./read-and-validate-page-elements/validate-page-element-attribute.html#uihasattribute)                 | Assert the presence or the expected value of an attribute on an element.                                          |
| [`UI.doesNotHaveAttribute`](./read-and-validate-page-elements/validate-page-element-attribute.html#uidoesnothaveattribute) | Assert the absence of an attribute on an element, or that the value of an attribute is not equals a given string. |

**Element class**

| Command                                                                                                 | Description                                       |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`UI.hasClass`](./read-and-validate-page-elements/validate-page-element-class.html#uihasclass)                 | Assert the presence of a CSS class on an element. |
| [`UI.doesNotHaveClass`](./read-and-validate-page-elements/validate-page-element-class.html#uidoesnothaveclass) | Assert the absence of a CSS class on an element.  |

**Element HTML**

| Command                                                                          | Description                                                    |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`UI.getHTML`](./read-and-validate-page-elements/get-html-code-for-a-page-element.html)      | Get the outer HTML of an element. Alias for `UI.getOuterHTML`. |
| [`UI.getOuterHTML`](./read-and-validate-page-elements/get-html-code-for-a-page-element.html) | Get the outer HTML of an element.                              |
| [`UI.getInnerHTML`](./read-and-validate-page-elements/get-html-code-for-a-page-element.html) | Get the inner HTML of an element.                              |

### Alert Commands <a href="#alert-commands" id="alert-commands"></a>

| Command                                                                          | Description                                                                                   |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`I.seeAlert`](./handling-alerts/validate-alert.html#iseealert)       | Assert that an alert is displayed, and/or that an expected message is displayed on the alert. |
| [`I.acceptAlert`](./handling-alerts/accept-dismiss-alert.html#iacceptalert) | Press the "Ok" button on the alert                                                            |
| [`I.cancelAlert`](./handling-alerts/accept-dismiss-alert.html#icancelalert) | Press the "Cancel" button on the alert                                                        |
| [`I.fillAlert`](./handling-alerts/fill-alert.html#ifillalert)     | Fill the text box on the alert                                                                |

### Utility Commands <a href="#utility-commands" id="utility-commands"></a>

| Command                                                             | Description                     |
| ------------------------------------------------------------------- | ------------------------------- |
| [`I.wait`](./wait-commands/explicit-wait.html#iwait) | Wait for a given amount of time |

### Generate Sample Data <a href="#generate-sample-data" id="generate-sample-data"></a>

| Command                                                                        | Description                                            |
| ------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`SAMPLE.id`](./dynamic-test-data/generate-sample-data.html#sampleid)       | Generates a random string useful for IDs and passwords |
| [`SAMPLE.phone`](./dynamic-test-data/generate-sample-data.html#samplephone) | Generates a random phone number                        |
| [`SAMPLE.last`](./dynamic-test-data/generate-sample-data.html#samplelast)   | Generates a random last name                           |
| [`SAMPLE.first`](./dynamic-test-data/generate-sample-data.html#samplefirst) | Generates a random first name                          |
| [`SAMPLE.name`](./dynamic-test-data/generate-sample-data.html#samplename)   | Generates a random full name                           |
| [`SAMPLE.email`](./dynamic-test-data/generate-sample-data.html#sampleemail) | Generates a random email address                       |

### Loading Test Data From File <a href="#loading-test-data-from-file" id="loading-test-data-from-file"></a>

| Command                                                                                                          | Description                        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`TEST.loadDataFromCsv`](./dynamic-test-data/load-test-data-from-file.html#testloaddatafromcsv)   | Loads test data from a .csv file.  |
| [`TEST.loadDataFromJson`](./dynamic-test-data/load-test-data-from-file.html#testloaddatafromjson) | Loads test data from a .json file. |

### Test Flow Commands <a href="#test-flow-commands" id="test-flow-commands"></a>

| Command                                                                    | Description       |
| -------------------------------------------------------------------------- | ----------------- |
| [`TEST.run`](./reusing-tests/running-another-test.html#testrun)   | Runs another test |
| [`TEST.stop`](./stopping-tests/stop-command.html#teststop) | Stops the test    |

### Screenshot Commands <a href="#screenshot-commands" id="screenshot-commands"></a>

| Command                                                                                                  | Description                                    |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`TEST.takeFullScreenshot`](./taking-screenshots.html#testtakefullscreenshot) | Take a full page screenshot (Safari & IE only) |

### Reporting Commands <a href="#reporting-commands" id="reporting-commands"></a>

| Command                                                                          | Description                                |
| -------------------------------------------------------------------------------- | ------------------------------------------ |
| [`TEST.log.info`](./custom-reporting/info-logs.html#testloginfo) | Log a message to report                    |
| [`TEST.log.pass`](./custom-reporting/success-status-logs.html#testlogpass) | Log a message to report with `pass` status |
| [`TEST.log.fail`](./custom-reporting/failure-status-logs.html#testlogfail) | Log a message to report with `fail` status |

### Limiting Test Scope <a href="#limiting-test-scope" id="limiting-test-scope"></a>

| Command                                                                         | Description                                                                                                                       |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`UI.context`](./handling-iframes.html#uicontext) | <p>Limit the test to target within specific parts of a page.<br>Can be used to explicitly switch to the context of an iframe.</p> |

### Execute Javascript <a href="#execute-javascript" id="execute-javascript"></a>

| Command                                                                                  | Description                        |
| ---------------------------------------------------------------------------------------- | ---------------------------------- |
| [`UI.execute`](./using-javascript/use-javascript-in-your-test/execute-javascript-on-the-browser.html#uiexecute) | Executes Javascript on the browser |

### HTTP Requests <a href="#http-requests" id="http-requests"></a>

| Command                                                                                       | Description                             |
| --------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`UI.httpGet`](./making-http-requests.html#how-it-works)     | Do a http request with the GET method.  |
| [`UI.httpPost`](./making-http-requests.html#how-it-works)    | Do a http request with the POST method. |
| [`UI.httpRequest`](./making-http-requests.html#how-it-works) | Do a http request.                      |

### Cookie Management <a href="#cookie-management" id="cookie-management"></a>

| Command                                                                                      | Description                      |
| -------------------------------------------------------------------------------------------- | -------------------------------- |
| [`UI.COOKIE.set`](./handling-cookies.html#uicookieset)             | Set a cookie on the current page |
| [`UI.COOKIE.isSet`](./handling-cookies.html#uicookieisset)         | Assert the presence of a cookie  |
| [`UI.COOKIE.isEqual`](./handling-cookies.html#uicookieisEqual)     | Assert the value of a cookie     |
| [`UI.COOKIE.delete`](./handling-cookies.html#uicookiedelete)       | Delete a cookie                  |
| [`UI.COOKIE.deleteAll`](./handling-cookies.html#uicookiedeleteAll) | Delete all cookies               |

### Local Storage Management <a href="#local-storage-management" id="local-storage-management"></a>

| Command                                                                                                                   | Description                                  |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`UI.LocalStorage.get`](./handling-local-storage.html#uilocalstorageget)             | Get the value of property from local storage |
| [`UI.LocalStorage.set`](./handling-local-storage.html#uilocalstorageset)             | Set a property in local storage              |
| [`UI.LocalStorage.isSet`](./handling-local-storage.html)                             | - coming soon -                              |
| [`UI.LocalStorage.isEqual`](./handling-local-storage.html)                           | - coming soon -                              |
| [`UI.LocalStorage.delete`](./handling-local-storage.html#uilocalstoragedelete)       | Delete a property in local storage           |
| [`UI.LocalStorage.deleteAll`](./handling-local-storage.html#uilocalstoragedeleteall) | Delete all properties in local storage       |

### Window Resize <a href="#window-resize" id="window-resize"></a>

| Command                                                                          | Description                                           |
| -------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`UI.resize`](https://docs.uilicious.com/scripting/window\_resize.html#uiresize) | Resize the resolution to a specific width and height. |

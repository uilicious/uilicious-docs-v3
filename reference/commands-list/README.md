# Commands List

### Page Navigation Commands <a href="#page-navigation-commands" id="page-navigation-commands"></a>

| Command                                                                              | Description           |
| ------------------------------------------------------------------------------------ | --------------------- |
| [`I.goTo`](https://docs.uilicious.com/scripting/navigation.html#igoto)               | Navigate to a URL     |
| [`I.refreshPage`](https://docs.uilicious.com/scripting/navigation.html#irefreshpage) | Refresh a page        |
| [`I.switchTab`](https://docs.uilicious.com/scripting/navigation.html#iswitchtab)     | Switch to a tab       |
| [`I.closeTab`](https://docs.uilicious.com/scripting/navigation.html#iclosetab)       | Close the current tab |

### Page Assertion Commands <a href="#page-assertion-commands" id="page-assertion-commands"></a>

| Command                                                                                                           | Description                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`I.amAt`](https://docs.uilicious.com/scripting/navigation.html#iamAt)                                            | Assert that the browser is at a specific URL                                              |
| [`UI.isStatusCode`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiisstatuscode)       | Asserts that the status code for the current page is a specific status code.              |
| [`UI.isNotStatusCode`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiisnotstatuscode) | Asserts that the status code for the current page is **NOT** a specific status code.      |
| [`UI.is200`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiis200)                     | Asserts that the status code for the current page is 200 (OK).                            |
| [`UI.isNot200`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uisinot200)               | Asserts that the status code for the current page is **NOT** 200 (OK).                    |
| [`UI.is404`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#usis404)                     | Asserts that the status code for the current page is 404 (Not Found).                     |
| [`UI.isNot404`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiisnot404)               | Asserts that the status code for the current page is **NOT** 404 (Not Found).             |
| [`UI.is500`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiis500)                     | Asserts that the status code for the current page is 500 (Internal Server Error).         |
| [`UI.isNot500`](https://docs.uilicious.com/scripting/http\_status\_code\_assertion.html#uiisnot500)               | Asserts that the status code for the current page is **NOT** 500 (Internal Server Error). |

### Form Input Commands <a href="#form-input-commands" id="form-input-commands"></a>

| Command                                                                         | Description                                 |
| ------------------------------------------------------------------------------- | ------------------------------------------- |
| [`I.fill`](https://docs.uilicious.com/scripting/form\_input.html#ifill)         | Fill a text field with a value              |
| [`I.select`](https://docs.uilicious.com/scripting/form\_input.html#iselect)     | Select a dropdown / checkbox / radio button |
| [`I.deselect`](https://docs.uilicious.com/scripting/form\_input.html#ideselect) | Deselect a checkbox                         |
| [`I.upload`](https://docs.uilicious.com/scripting/form\_input.html#iupload)     | Upload a file to a file field               |

### Form Assertion Commands <a href="#form-assertion-commands" id="form-assertion-commands"></a>

| Command                                                                             | Description                                                              |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`I.filled`](https://docs.uilicious.com/scripting/form\_input.html#ifilled)         | Assert that the form is filled with a specific value                     |
| [`I.selected`](https://docs.uilicious.com/scripting/form\_input.html#iselected)     | Assert that a dropdown option, checkbox, or radio button is selected     |
| [`I.deselected`](https://docs.uilicious.com/scripting/form\_input.html#ideselected) | Assert that a dropdown option, checkbox, or radio button is NOT selected |

### Mouse Commands <a href="#mouse-commands" id="mouse-commands"></a>

| Command                                                                                                                                   | Description                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| <p><code></code><a href="../mouse-interactions/click-on-objects/"><code>I.click</code><br><code>I.doubleClick</code></a><code></code></p> | Click or double click on an element                                       |
| [`I.rightClick`](https://docs.uilicious.com/scripting/mouse.html#irightclick)                                                             | Right click on an element                                                 |
| [`I.hoverOn`](https://docs.uilicious.com/scripting/mouse.html#ihoverOn)                                                                   | Hover on an element                                                       |
| [`I.dragTo`](https://docs.uilicious.com/scripting/mouse.html#idragto)                                                                     | Drag an element to another target element                                 |
| [`I.dragBy`](https://docs.uilicious.com/scripting/mouse.html#idragby)                                                                     | Drag an element directionally by (x,y) pixel offset                       |
| [`I.dragUp`](https://docs.uilicious.com/scripting/mouse.html#idragup)                                                                     | Drag an element to the up by a given number of pixel                      |
| [`I.dragDown`](https://docs.uilicious.com/scripting/mouse.html#idragdown)                                                                 | Drag an element to the down by a given number of pixel                    |
| [`I.dragLeft`](https://docs.uilicious.com/scripting/mouse.html#idragleft)                                                                 | Drag an element to the left by a given number of pixel                    |
| [`I.dragRight`](https://docs.uilicious.com/scripting/mouse.html#idragright)                                                               | Drag an element to the right by a given number of pixel                   |
| [`I.scrollBy`](https://docs.uilicious.com/scripting/mouse.html#iscrollby)                                                                 | Scrolls the page horizontally and vertically by a given number of pixels. |
| [`I.scrollUp`](https://docs.uilicious.com/scripting/mouse.html#iscrollup)                                                                 | Scrolls the page up by a given number of pixels                           |
| [`I.scrollDown`](https://docs.uilicious.com/scripting/mouse.html#iscrolldown)                                                             | Scrolls the page down by a given number of pixels                         |
| [`I.scrollLeft`](https://docs.uilicious.com/scripting/mouse.html#iscrollleft)                                                             | Scrolls the page left by a given number of pixels                         |
| [`I.scrollRight`](https://docs.uilicious.com/scripting/mouse.html#iscrollright)                                                           | Scrolls the page right by a given number of pixels                        |
| [`I.scrollTo`](https://docs.uilicious.com/scripting/mouse.html#iscrollto)                                                                 | Scrolls to a coordinate on the page                                       |
| [`I.scrollToTop`](https://docs.uilicious.com/scripting/mouse.html#iscrolltotop)                                                           | Scroll to the top of the page                                             |
| [`I.scrollToBottom`](https://docs.uilicious.com/scripting/mouse.html#iscrolltobottom)                                                     | Scroll to the bottom of the page                                          |

### Keyboard Commands <a href="#keyboard-commands" id="keyboard-commands"></a>

| Command                                                                                                                                                                                                          | Description                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| <p><a href="https://docs.uilicious.com/scripting/keyboard.html#itype--ipress"><code>I.type</code></a><br><a href="https://docs.uilicious.com/scripting/keyboard.html#itype--ipress"><code>I.press</code></a></p> | Press a key or a string of keys |
| [`I.pressEnter`](https://docs.uilicious.com/scripting/keyboard.html#ipressenter)                                                                                                                                 | Press the `Enter` key           |
| [`I.pressUp`](https://docs.uilicious.com/scripting/keyboard.html#ipressup)                                                                                                                                       | Press the ↑ key                 |
| [`I.pressDown`](https://docs.uilicious.com/scripting/keyboard.html#ipressdown)                                                                                                                                   | Press the ↓ key                 |
| [`I.pressLeft`](https://docs.uilicious.com/scripting/keyboard.html#ipressleft)                                                                                                                                   | Press the ← key                 |
| [`I.pressRight`](https://docs.uilicious.com/scripting/keyboard.html#ipressright)                                                                                                                                 | Press the → key                 |
| [`I.pressTab`](https://docs.uilicious.com/scripting/keyboard.html#ipresstab)                                                                                                                                     | Press the `Tab` key             |

### Validate Page Content <a href="#validate-page-content" id="validate-page-content"></a>

| Command                                                                               | Description                                           |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`I.see`](https://docs.uilicious.com/scripting/assertion.html#isee)                   | Assert that an text or element is visible             |
| [`I.dontSee`](https://docs.uilicious.com/scripting/assertion.html#idontSee)           | Assert that an text or element is NOT visible         |
| [`I.count`](https://docs.uilicious.com/scripting/assertion.html#icount)               | Assert the number of occurances for a text or element |
| [`I.seePageTitle`](https://docs.uilicious.com/scripting/assertion.html#iseepagetitle) | Assert the title of the current page                  |

### Page Content Extraction Commands <a href="#page-content-extraction-commands" id="page-content-extraction-commands"></a>

| Command                                                                             | Description                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`I.getCount`](https://docs.uilicious.com/scripting/extract.html#igetcount)         | Get the number of occurances of a text or element |
| [`I.getText`](https://docs.uilicious.com/scripting/extract.html#igettext)           | Get text content from an element                  |
| [`I.getValue`](https://docs.uilicious.com/scripting/extract.html#igetvalue)         | Get value from an input element                   |
| [`I.getPageTitle`](https://docs.uilicious.com/scripting/extract.html#igetpagetitle) | Get the title of the current page                 |

### Read and Validate Page Elements <a href="#read-and-validate-page-elements" id="read-and-validate-page-elements"></a>

**Element attribute**

| Command                                                                                                         | Description                                                                                                       |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`UI.getAttribute`](https://docs.uilicious.com/scripting/element\_commands.html#uigetattribute)                 | Get an attribute on an element.                                                                                   |
| [`UI.getAttributes`](https://docs.uilicious.com/scripting/element\_commands.html#uigetattributes)               | Get all attributes on an element.                                                                                 |
| [`UI.hasAttribute`](https://docs.uilicious.com/scripting/element\_commands.html#uihasattribute)                 | Assert the presence or the expected value of an attribute on an element.                                          |
| [`UI.doesNotHaveAttribute`](https://docs.uilicious.com/scripting/element\_commands.html#uidoesnothaveattribute) | Assert the absence of an attribute on an element, or that the value of an attribute is not equals a given string. |

**Element class**

| Command                                                                                                 | Description                                       |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`UI.hasClass`](https://docs.uilicious.com/scripting/element\_commands.html#uihasclass)                 | Assert the presence of a CSS class on an element. |
| [`UI.doesNotHaveClass`](https://docs.uilicious.com/scripting/element\_commands.html#uidoesnothaveclass) | Assert the absence of a CSS class on an element.  |

**Element HTML**

| Command                                                                          | Description                                                    |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`UI.getHTML`](https://docs.uilicious.com/scripting/element\_commands.html)      | Get the outer HTML of an element. Alias for `UI.getOuterHTML`. |
| [`UI.getOuterHTML`](https://docs.uilicious.com/scripting/element\_commands.html) | Get the outer HTML of an element.                              |
| [`UI.getInnerHTML`](https://docs.uilicious.com/scripting/element\_commands.html) | Get the inner HTML of an element.                              |

### Alert Commands <a href="#alert-commands" id="alert-commands"></a>

| Command                                                                          | Description                                                                                   |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`I.seeAlert`](https://docs.uilicious.com/scripting/alerts.html#iseealert)       | Assert that an alert is displayed, and/or that an expected message is displayed on the alert. |
| [`I.acceptAlert`](https://docs.uilicious.com/scripting/alerts.html#iacceptalert) | Press the "Ok" button on the alert                                                            |
| [`I.cancelAlert`](https://docs.uilicious.com/scripting/alerts.html#icancelalert) | Press the "Cancel" button on the alert                                                        |
| [`I.fillAlert`](https://docs.uilicious.com/scripting/alerts.html#ifillalert)     | Fill the text box on the alert                                                                |

### Utility Commands <a href="#utility-commands" id="utility-commands"></a>

| Command                                                             | Description                     |
| ------------------------------------------------------------------- | ------------------------------- |
| [`I.wait`](https://docs.uilicious.com/scripting/utility.html#iwait) | Wait for a given amount of time |

### Generate Sample Data <a href="#generate-sample-data" id="generate-sample-data"></a>

| Command                                                                        | Description                                            |
| ------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`SAMPLE.id`](https://docs.uilicious.com/scripting/sample.html#sampleid)       | Generates a random string useful for IDs and passwords |
| [`SAMPLE.phone`](https://docs.uilicious.com/scripting/sample.html#samplephone) | Generates a random phone number                        |
| [`SAMPLE.last`](https://docs.uilicious.com/scripting/sample.html#samplelast)   | Generates a random last name                           |
| [`SAMPLE.first`](https://docs.uilicious.com/scripting/sample.html#samplefirst) | Generates a random first name                          |
| [`SAMPLE.name`](https://docs.uilicious.com/scripting/sample.html#samplename)   | Generates a random full name                           |
| [`SAMPLE.email`](https://docs.uilicious.com/scripting/sample.html#sampleemail) | Generates a random email address                       |

### Loading Test Data From File <a href="#loading-test-data-from-file" id="loading-test-data-from-file"></a>

| Command                                                                                                          | Description                        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`TEST.loadDataFromCsv`](https://docs.uilicious.com/scripting/load\_data\_from\_file.html#testloaddatafromcsv)   | Loads test data from a .csv file.  |
| [`TEST.loadDataFromJson`](https://docs.uilicious.com/scripting/load\_data\_from\_file.html#testloaddatafromjson) | Loads test data from a .json file. |

### Test Flow Commands <a href="#test-flow-commands" id="test-flow-commands"></a>

| Command                                                                    | Description       |
| -------------------------------------------------------------------------- | ----------------- |
| [`TEST.run`](https://docs.uilicious.com/scripting/sequence.html#testrun)   | Runs another test |
| [`TEST.stop`](https://docs.uilicious.com/scripting/sequence.html#teststop) | Stops the test    |

### Screenshot Commands <a href="#screenshot-commands" id="screenshot-commands"></a>

| Command                                                                                                  | Description                                    |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`TEST.takeFullScreenshot`](https://docs.uilicious.com/scripting/screenshot.html#testtakefullscreenshot) | Take a full page screenshot (Safari & IE only) |

### Reporting Commands <a href="#reporting-commands" id="reporting-commands"></a>

| Command                                                                          | Description                                |
| -------------------------------------------------------------------------------- | ------------------------------------------ |
| [`TEST.log.info`](https://docs.uilicious.com/scripting/logging.html#testloginfo) | Log a message to report                    |
| [`TEST.log.pass`](https://docs.uilicious.com/scripting/logging.html#testlogpass) | Log a message to report with `pass` status |
| [`TEST.log.fail`](https://docs.uilicious.com/scripting/logging.html#testlogfail) | Log a message to report with `fail` status |

### Limiting Test Scope <a href="#limiting-test-scope" id="limiting-test-scope"></a>

| Command                                                                         | Description                                                                                                                       |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`UI.context`](https://docs.uilicious.com/scripting/ui\_context.html#uicontext) | <p>Limit the test to target within specific parts of a page.<br>Can be used to explicitly switch to the context of an iframe.</p> |

### Execute Javascript <a href="#execute-javascript" id="execute-javascript"></a>

| Command                                                                                  | Description                        |
| ---------------------------------------------------------------------------------------- | ---------------------------------- |
| [`UI.execute`](https://docs.uilicious.com/scripting/executing-javascript.html#uiexecute) | Executes Javascript on the browser |

### HTTP Requests <a href="#http-requests" id="http-requests"></a>

| Command                                                                                       | Description                             |
| --------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`UI.httpGet`](https://docs.uilicious.com/scripting/ui\_http\_commands.html#how-it-works)     | Do a http request with the GET method.  |
| [`UI.httpPost`](https://docs.uilicious.com/scripting/ui\_http\_commands.html#how-it-works)    | Do a http request with the POST method. |
| [`UI.httpRequest`](https://docs.uilicious.com/scripting/ui\_http\_commands.html#how-it-works) | Do a http request.                      |

### Cookie Management <a href="#cookie-management" id="cookie-management"></a>

| Command                                                                                      | Description                      |
| -------------------------------------------------------------------------------------------- | -------------------------------- |
| [`UI.COOKIE.set`](https://docs.uilicious.com/scripting/cookies.html#uicookieset)             | Set a cookie on the current page |
| [`UI.COOKIE.isSet`](https://docs.uilicious.com/scripting/cookies.html#uicookieisset)         | Assert the presence of a cookie  |
| [`UI.COOKIE.isEqual`](https://docs.uilicious.com/scripting/cookies.html#uicookieisEqual)     | Assert the value of a cookie     |
| [`UI.COOKIE.delete`](https://docs.uilicious.com/scripting/cookies.html#uicookiedelete)       | Delete a cookie                  |
| [`UI.COOKIE.deleteAll`](https://docs.uilicious.com/scripting/cookies.html#uicookiedeleteAll) | Delete all cookies               |

### Local Storage Management <a href="#local-storage-management" id="local-storage-management"></a>

| Command                                                                                                                   | Description                                  |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`UI.LocalStorage.get`](https://docs.uilicious.com/scripting/local\_storage\_commands.html#uilocalstorageget)             | Get the value of property from local storage |
| [`UI.LocalStorage.set`](https://docs.uilicious.com/scripting/local\_storage\_commands.html#uilocalstorageset)             | Set a property in local storage              |
| [`UI.LocalStorage.isSet`](https://docs.uilicious.com/scripting/local\_storage\_commands.html)                             | - coming soon -                              |
| [`UI.LocalStorage.isEqual`](https://docs.uilicious.com/scripting/local\_storage\_commands.html)                           | - coming soon -                              |
| [`UI.LocalStorage.delete`](https://docs.uilicious.com/scripting/local\_storage\_commands.html#uilocalstoragedelete)       | Delete a property in local storage           |
| [`UI.LocalStorage.deleteAll`](https://docs.uilicious.com/scripting/local\_storage\_commands.html#uilocalstoragedeleteall) | Delete all properties in local storage       |

### Window Resize <a href="#window-resize" id="window-resize"></a>

| Command                                                                          | Description                                           |
| -------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`UI.resize`](https://docs.uilicious.com/scripting/window\_resize.html#uiresize) | Resize the resolution to a specific width and height. |

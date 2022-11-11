---
# Write a short description about the page. This will be displayed on google search results.
description: List of updates and changes of UIlicious throughout the years.
---

# Release Notes

**What the version numbers mean:**

\<Major>.\<Minor>.\<Patch>

* Major: Contains breaking changes
* Minor: Contains new features
* Patch: Contains enhancements and bug fixes only

### 3.29.0 <a href="#3290" id="3290"></a>

_Released 07 November 2022_

**🚀 New Features**

* Web Studio
  - Browser Add-ons
    - You may now purchase additional Safari browser test runners as an add-on
      - The additional Safari browser test runners may only be used for running tests on Safari
      - Additional test runners that are purchased will show up separately
      - You may upgrade / downgrade / remove the browser add-on at any time

**💪 Enhancement**

* Web Studio
  - Change tooltip from “Maximise Preview” to “Full Screen”
  - You can now set custom resolution when running a test 
  - Skip file naming dialog when creating test files

* User Panel
  - Revamped “Manage billing” page
  - UI improvements to ensure consistency in styling UI components

**🐞 Fixes**

* Web Studio
  - Fixed Project directory context menus should be the same
  - Fixed Editor no longer opens the README file by default
  - Fixed uploading a file, editor should open the uploaded file instead of the scratchpad
  - Fixed “Unsaved changes” warning keeps appearing when editing a file while a test is running
  - Fixed Change “Add issues” hotkey binding
  - Fixed Cannot upload project logo

### 3.28.2 <a href="#3282" id="3282"></a>

_Released 07 October 2022_

**🐞 Fixes**

* User Panel
  - Fixed Profile name not updating accordingly

### 3.28.1 <a href="#3281" id="3281"></a>

_Released 26 September 2022_

**🐞 Fixes**

* Web Studio
  - Fixed button to start the tutorial

### 3.28.0 <a href="#3280" id="3280"></a>

_Released 29 August 2022_

**🚀 New Features**

* Web Studio
  * Test Report Annotaions
    - You can now mark up test run screenshots with comments by pointing or drawing regions. 
    - Added ability to manually fail a test by toggling the ‘Fail test run’ switch when adding a new issue. Turning the switch on will change the test run’s status to ‘failed’ even if the run was successful.
    - Added Maximize / minimize preview button. This button expands or minimizes the preview window, allowing the user to draw annotations more easily

**🐞 Fixes**

* Web Studio
  - Fixed position issue with dropdown popover menus
  - Fixed error with running test count
  - Fixed steps not showing on runs tab

### 3.27.0 <a href="#3270" id="3270"></a>

_Released 19 August 2022_

**🚀 New Features**

* Web Studio
  * Custom Branding on Projects
    * You can now add a logo for your project and change the project’s background color to match your company’s or client’s branding.
    * To update your project branding:
      1. Go to an existing project
      2. Click on the “gear” icon and click on the “Branding” tab
      3. Add your logo and change the background colors
      4. Click update to save your settings

**🐞 Fixes**

* Web Studio
  * Fixed issue where the UI is broken after renaming the project.

### 3.26.2 <a href="#3262" id="3262"></a>

_Released 17 August 2022_

**🐞 Fixes**

* Inboxkitten
  * Fixed the issue where email content is empty

### 3.26.1 <a href="#3261" id="3261"></a>

_Released 05 August 2022_

**🐞 Fixes**

* Web Studio
  * Fixed the issue with incorrect link redirection when inviting a user to create an account on uilicious

### 3.26.0 <a href="#3260" id="3260"></a>

_Released 04 August 2022_

**🚀 New Features**

* Web Studio
  * Project Webdriver configuration
    * You can now connect directly to your UIlicious test runner via a Webdriver connection. The Webdriver settings for can be found in Project Settings (the gear icon) > Webdriver.

**💪 Enhancement**

* Web Studio
  * Word wrap is disabled by default
  * Added “Auto-Format” button to help you automatically fix code indentation

### 3.25.2 <a href="#3252" id="3252"></a>

_Released 26 July 2022_

**💪 Enhancement**

* Web Studio
  * Test Runner Status
    * The UI for the test runner status dropdown has been improved. It now shows the total available test runners and also the ‘Dataset’ for each test run.

### 3.25.1 <a href="#3251" id="3251"></a>

_Released 22 July 2022_

**🐞 Fixes**

* Web Studio
  * Fixed an issue where “Edit Dataset” button is hidden when value entered is too long
  * Increased margin size around the URL display in test report
  * Fixed dataset retrieving. Dataset is now retrieved from the server every time the “edit dataset form” button is opened
  * Fixed runs tab pagination and counter not updating properly

### 3.25.0 <a href="#3250" id="3250"></a>

_Released 21 June 2022_

**🚀 New Features**

* CLI
  * Added the `--userAgent` support (chrome only) for test run via CLI

**💪 Enhancement**

* CLI
  * Added the option to pass the access key via `UILICIOUS_ACCESSKEY`, instead of a param on the CLI
  * Improved error handling for upload errors (for debugging a regression issue)

**🐞 Fixes**

* CLI
  * Fixed error handling for expired accounts, and several other failure modes, which the CLI would have looped on

### 3.24.1 <a href="#3241" id="3241"></a>

_Released 25 May 2022_

**🐞 Fixes**

* Web Studio
  * Fixed "Dataset" filter is not filtering properly on the Monitoring Page

### 3.24.0 <a href="#3240" id="3240"></a>

_Released 25 May 2022_

**🚀 New Features**

* Web Studio
  * You can now add file and folders quickly by **right-clicking** on any directory file or folder.

**💪 Enhancement**

* Web Studio
  * The Search bar in the ‘Test Runs’ page has been updated with a greatly improved interface.
    * Multi-select filters: You can now select multiple values for the `Status`, `Browsers`, `Resolutions`, and `Triggers` filters.
    * Search by Run ID: You can now also search by the `Run ID` in the search bar.

**🐞 Fixes**

* Web Studio
  * The "Enable Job" controls on the Job Settings page will now correctly show when a job is disabled.

### 3.23.3 <a href="#3233" id="3233"></a>

_Released 26 April 2022_

**💪 Enhancement**

* Web Studio
  * **Region dropdown improvements:**
    * Timezones: The region picker now shows the timezone of the region so that it is easier to tell in which timezone your tests will run.
    * Continents: The options in the region picker are now grouped by continents to make it easier to find the region you want.
    * Set default region: You can now set a default region for your tests. Once a default region is test, all tests will be set to run from that region by default.
  * **Job scheduling field improvements**
    * Presets for "everyday", "on weekdays", "on weekends" has been added to make it easy to setup common scheduling scenarios.
    * Confusing combinations have been removed.
  * **Editor: Find and Replace**
    * You can now find and replace text in the test script editor. Press `Cmd/Ctrl-F` or press the `search` button to open the find and replace popup.
  * **Additional info in Test Run reports**
    * The `region` the test was run in (only visible if not default)
    * The `dataset` used for the test (only visible if not default)
    * The `timestamp` for the selected test step.

### 3.23.2 <a href="#3232" id="3232"></a>

_Released 11 April 2022_

**🐞 Fixes**

* Web Studio
  * Switching away from the Editor tab in large projects with many files is now much quicker and should no longer result in the “Page is unresponsive” error.

### 3.23.1 <a href="#3231" id="3231"></a>

_Released 04 April 2022_

**💪 Enhancement**

* Test Engine
  * Improved error messages like `cannot read “label” of undefined` when you forget an parameter, e.g. `I.fill(”label”)`
  * `I.click` now accepts a singlmie numeric field, e.g. `I.click(2020)`
  * `I.fill` will accept numbers for the value field, e.g. `I.fill(”Year”, 2020)`

### 3.23.0 <a href="#3230" id="3230"></a>

_Released 29 March 2022_

**💪 Enhancement**

* Web Studio
  * New and improved CSV file
    * Added and improved CSV Handling for easier organization of data
    * Added the following key features to the CSV Editor:
      * Insert rows
      * Delete rows
      * Edit cell values
      * Rename columns
      * Set first row as header

**🐞 Fixes**

* Web Studio
  * Files are now saved correctly when quickly switching between files
  * Editor Cursor will now appear correctly when collapsing the “Results” panel

### 3.22.1 <a href="#3221" id="3221"></a>

_Released 25 March 2022_

**🐞 Fixes**

* Web Studio
  * Fixed file name in the title bar is clipped off. It should now display the entire name as long as it has enough space.
  * Fixed cloning test files that creates a “.test.js.test.js” file.

### 3.22.0 <a href="#3220" id="3220"></a>

_Released 24 March 2022_

**🚀 New Features**

* Web Studio
  * Right clicking on a File in the directory now opens the context (the “...”) menu
  * Files and Folders can now be cloned

**💪 Enhancement**

* Web Studio
  * Improved File/folder input component with typeahead suggestion and file picker dialog
  * Drag and Drop to upload files is now supported
  * Multiple Files or a Folder full of files can now be uploaded without using uilicious CLI
  * Double clicking a folder will not collapse the folder

### 3.21.6 <a href="#3216" id="3216"></a>

_Released 8 March 2022_

**🐞 Fixes**

* Test Engine
  * Fixed an issue where some self-signed certs will give a 502 error instead of loading the page
  * Fixed unexpected error with `I.closeTab` command because a bug in switching to the next browser tab after closing the tab.

### 3.21.5 <a href="#3215" id="3215"></a>

_Released 5 March 2022_

**🐞 Fixes**

* Web Studio
  * Fixed slowdown in loading Monitoring and Runs tabs due to large queries for test run history

### 3.21.4 <a href="#3214" id="3214"></a>

_Released 24 February 2022_

**🐞 Fixes**

* Web Studio
  * Fixed issue where growl alerts (for success and error messages) are not being displayed.
* Test Engine
  * Fixed intermittent "element is detached from DOM" issue when an `I.click` operation triggers a page navigation and page takes took long to load causing the webdriver to timeout for the click operation.

### 3.21.3 <a href="#3213" id="3213"></a>

_Released 23 February 2022_

**💪 Enhancement**

* Web Studio:
  * Added a Welcome tour to help new users get started with testing using UIlicious
  * Usability improvements to the "Datasets" form to fix several confusing behaviors when adding new properties to the dataset
  * User preferences (e.g. autosave, default dataset) is now saved to server instead of the browser's local storage, and can be restored to browser sessions across different devices.

**🐞 Fixes**

* Web Studio
  * Fix issue where the tooltips are sometimes empty

### 3.21.2 <a href="#3212" id="3212"></a>

_Released 04 January 2022_

**🐞 Fixes**

* Test Engine
  * Improvements to page element visibility checks for all commands that target an element, e.g. `I.click`. This fixes an issue in some edge cases where some elements cannot be detected because they are evaluated as invisible.

### 3.21.1 <a href="#3211" id="3211"></a>

_Released 22 December 2021_

**🐞 Fixes**

* Web Studio:
  * Fixed an issue where some users are missing in Space's Member lists
* Test Engine:
  * Fixed the issue with Timezones. System Timezone should now match with the time for the selected region

### 3.21.0 <a href="#3210" id="3210"></a>

_Released 6 December 2021_

**🚀 New Features**

* Test Engine
  * New Window resize command
    * `UI.resize` allows you to change the browser resolution in the middle of the test.
      * `UI.resize(<width>, <height>)` - to resize window
      * `UI.resize(<width>, <height>, {target: "viewport"})`
    * Also added some basic properties for the new command
      * `UI.outerWidth`, `UI.outerHeight` - get the current width and height of the window
      * `UI.innerWidth`, `UI.innerHeight` - get the current width and height of the viewport

**🐞 Fixes**

* Test Engine
  * Fixed an issue where I.select doesn't work on some VueJS dropdowns

### 3.20.0 <a href="#3200" id="3200"></a>

_Released 5 Oct 2021_

**🚀 New Features**

* Web Studio
  * Changes to user quota count. Now, only **Collaborator** users count towards the quota. **Collaborator** users are users that are allowed to edit resources (projects, tests, jobs) in the space, therefore it includes the the Owner, Admin, and Editor roles.

**💪 Enhancement**

* Web Studio:
  * Load **README** file by default. If a **README** file exists in the project it will automatically load it after accessing the project.

**🐞 Fixes**

* Web Studio:
  * Fixed sorting in members list
  * Fixed broken dropdown menu UI

### 3.19.0 <a href="#3190" id="3190"></a>

_Released 23 Jul 2021_

**🚀 New Features**

* Web Studio:
  * Added **Bulk Enable / Disable** feature in Monitoring tab
    * This allows you to enable or disable multiple jobs all at the same time.
  * Added **Bulk Delete** feature in Monitoring tab
    * This allows you to delete multiple jobs

### 3.18.0 <a href="#3180" id="3180"></a>

_Released 6 Jul 2021_

**🚀 New Features**

* Support for testing on **Chromium-based Microsoft Edge**.
  * The new Edge browser will be referred to as "Edge (Chromium)" and legacy Edge browser will be referred to as "Edge (2019)" within the Studio.
  * If you are using the CLI to trigger test runs, you can set the `--browser` option to `edgechromium` to run tests on the new Edge browser. Setting the `--browser` option to `edge` will run tests on the legacy Edge browser, for backwards compatibility.
* New Test Commands:
  * Added [`I.seePageTitle()`](https://docs.uilicious.com/scripting/assertion.html#iseepagetitle) to validate the title of the page
  * Added [`I.getPageTitle()`](https://docs.uilicious.com/scripting/extract.html#igetpagetitle) command to get the title of the page
  * Added [`UI.getAttributes(target)`](https://docs.uilicious.com/scripting/element\_commands.html#uigetattributes) command to get all attributes of an element
  * Added [commands](https://docs.uilicious.com/scripting/element\_commands.html#element-html-commands) to get the html of an element: `UI.getHTML(target)`, `UI.getOuterHTML(target)` and `UI.getInnerHTML(target)`
  * Added [commands](https://docs.uilicious.com/scripting/local\_storage\_commands.html) to access local storage:
    * `UI.LocalStorage.get(name)` - get a property from local storage
    * `UI.LocalStorage.set(name, value)` - set a property in local storage
    * `UI.LocalStorage.delete(name)` - delete a property in local storage
    * `UI.LocalStorage.deleteAll(name)` - delete all properties in local storage

**💪 Enhancement**

* Test Engine:
  * Improvements to selection commands (`I.select`, `I.selected`, `I.deselect`, and `I.deselected`):
    * Improved smart targeting - previously, if both a `<select>` dropdown and a toggle field (either a checkbox or a radio button) matched the label, the engine would always prefer the dropdown even if the label matches the toggle field more closely.
    * Blue interaction markers now also indicate where the selection command is targeting

**🐞 Fixes**

* Test Engine:
  * Fixed a bug where if `I.click` triggers an alert, the command will fail indicating the action is blocked by an alert, even though it is actually successful.

### 3.17.0 <a href="#3170" id="3170"></a>

_Released 24 Mar 2021_

![Test Suites illustration](https://docs.uilicious.com/images/test-suite/test-suite-illustration.png)

We're very excited to announce the Test Suites update! This should help you to organise and manage tests better.

**🚀 New Features**

* Web Studio:
  * Jobs:
    * **Test Suites** - you can now schedule a job to run a suite of tests and get an aggregated report! [Read more on our blog here.](https://uilicious.com/blog/get-ready-to-suite-up/)
    * More scheduling options - you can now schedule jobs every 45 mins, every 2 weeks, every 30 days, etc...

**🐞 Fixes**

* Web Studio:
  * Fixed issue where the space disappears if the last project is deleted.
  * Fixed issue where pressing the "x" to close the modal does nothing.
  * (For UI-licious Enterprise edition) Share report button will be hidden if snippets is not enabled on the instance.

#### 3.16.4 <a href="#3164" id="3164"></a>

_Released 18 Feb 2021_

**🐞 Fixes**

* Web Studio:
  * Fixed slow scrolling in very large reports in some browsers (e.g. Chromium and WebKit browsers) because too many tooltips rendered on individual steps in the report. Now tooltips are only drawn as needed to reduce rendering overhead.
  * "More info" toggle button on report step will not be shown if there's no additional information available.

### 3.16.3 <a href="#3163" id="3163"></a>

_Released 17 Feb 2021_

**💪 Enhancement**

* Web Studio:
  * Improved reports:
    * Fixed alignment issues
    * Added "More info" for each step to show additional information such as the returned value of the command (useful for commands like I.getText, UI.execute / UI.http - which you usually want to save the value to a variable).

### 3.16.2 <a href="#3162" id="3162"></a>

_Released 10 Feb 2021_

**💪 Enhancement**

* Test Engine:
  * `I.goTo` will now handle references to parent and current path using ".." and "."
  * `I.amAt` will be less strict in some special cases:
    * When base path equals "/", it is treated as empty, e.g.: I.amAt("[https://google.com](https://google.com/)") will now pass if the actual url is "[https://google.com\*\*/\*\*](https://google.com\*\*/\*\*)"
    * When subdomain equals "www", it is treated as empty, e.g.: I.amAt("[https://google.com](https://google.com/)") will now pass if the actual url is "[https://\*\*www\*\*.google.com](https://\*\*www\*\*.google.com/)"

**🐞 Fixes**

* Test Engine:
  * `I.click` command:
    * Fix some edge case issues with clicking elements in iframes
    * Fix accuracy of I.click(x, y) and I.click(element, x, y) in some edge cases
    * If for some reason the element is removed or re-rendered in the middle of the click operation, causing a stale element reference error, the command will retried
    * Timing of the command will now include any page navigation triggered after the click
  * `I.hover` command is now supported for Edge browser
  * Testing within iframes:
    * If a command is executed within an iframe, the reported tabs, url and page title should be that of the top browsing context, not of the iframe's browsing context.
    * Fix the indicated position of interaction commands (as marked by the blue circle in reports) within iframes. There are still some issues in the case where the iframe is a long scrollable container though.

### 3.16.1 <a href="#3161" id="3161"></a>

_Released 9 Feb 2021_

**💪 Enhancement**

* UI-licious server (under the hood stuff):
  * Stopping a test will now immediately free up the concurrency instead of waiting until the test fully stops.
  * Changes under the hood in order to support new upcoming features in jobs and reporting. 😉

### 3.16.0 <a href="#3160" id="3160"></a>

_Released 8 Feb 2021_

**🚀 New Features**

* Test Engine:
  * Added new commands for performing API requests - `UI.httpGet`, `UI.httpPost`, `UI.httpRequest`. [Read the docs](https://docs.uilicious.com/scripting/ui\_http\_commands.html)

**🐞 Fixes**

* Test Engine:
  * Fix bug with `I.amAt` not honoring `TEST.commandTimeout`. Now, `I.amAt` will retry until it succeeds or timed out, instead of failing when current url did not immediately match.

### 3.15.3 <a href="#3153" id="3153"></a>

_Released 5 Feb 2021_

**🐞 Fixes**

* Web Studio:
  * UI should probably display appropriate error messages for 4xx errors from the API instead of a vague error message.

### 3.15.2 <a href="#3152" id="3152"></a>

_Released 15 Jan 2021_

* Web Studio:
  * Fix bug where file cannot be viewed on the Editor if its name contains the square brackets characters - `[` and `]`.
  * Display warning if the configured test for a job has been moved or deleted.

### 3.15.1 <a href="#3151" id="3151"></a>

_Released 13 Jan 2021_

* Test Engine
  * Fixed bug with `TEST.autoScreenshot=false` having no effect - it should properly disable screenshots now.

### 3.15.0 <a href="#3150" id="3150"></a>

_Released 6 Jan 2021_

**💪 Enhancement**

* Account and billing:
  * If you own more than one space, you can manage billing independently for both spaces.
  * Space members with the `Admin` role can now manage billing.

### 3.14.0 <a href="#3140" id="3140"></a>

**💪 Enhancement** _Released 28 Dec 2020_

* Web studio:
  * All resolutions are now enabled for Safari and IE11
  * Added button to go to Applitools report if test is ran with Applitools integration
  * When loading a report on the Editor for a test ran using a dataset, the dataset will be automatically selected in the Run toolbar
  * Add tooltip to indicate browser name and version number when you hover over the browser icon in reports.

### 3.13.3 <a href="#3133" id="3133"></a>

* Released 17 Dec 2020 \*

**💪 Enhancement**

* For Enterprise On-Premise Edition:
  * System administrators can now configure system-wide concurrency limits. If there are more requests to run test than the configured limits, then requests will be postponed (if it is a scheduled test triggered via a job) or rejected with "No server available" error (if it is an adhoc test run via the Editor or CLI).

### 3.13.2 <a href="#3132" id="3132"></a>

_Released 16 Dec 2020_

**🐞 Fixes**

* Test engine:
  * Fix bug where I.select does not work for \<select> element in some iframes

### 3.13.1 <a href="#3131" id="3131"></a>

_Released 25 Nov 2020_

**🐞 Fixes**

* Test engine:
  * (Applitools Integration) Fix bug that causes `eyes is undefined` error if you call TEST.applitools.setup more than once.

### 3.13.0 <a href="#3130" id="3130"></a>

_Released 14 Sept 2020_

**💪 Enhancement**

* Test engine:
  * Performance optimisations to improve test start times (reduced from an average of 15 seconds to 7 seconds!)

**🐞 Fixes**

* Test engine:
  * Fix issue in Edge browser tests being unable to properly scroll to and target elements in certain layouts.

### 3.12.1 <a href="#3121" id="3121"></a>

_Released 8 Sept 2020_

**🐞 Fixes**

* Test engine:
  * Fix issue that causes some files for the I.upload command to be corrupted.

### 3.12.0 <a href="#3120" id="3120"></a>

_Released 4 Sept 2020_

**💪 Enhancement**

* Test engine:
  * Faster keyboard input commands for Edge and IE11 tests

**🐞 Fixes**

* Test engine:
  * Fix random "file not found" errors with test initialisation

### 3.11.1 <a href="#3111" id="3111"></a>

_Released 3 Sept 2020_

**🐞 Fixes**

* Test engine:
  * Fix issue properly targeting deeply nested web components on Chrome tests (affects Salesforce LWC testing)

### 3.11.0 <a href="#3110" id="3110"></a>

_Released 2 Sept 2020_

**💪 Enhancement**

* Test engine:
  * Performance optimisations to improve test start times

**🐞 Fixes**

* Test engine:
  * Fix IE11 issue with randomly not filling fields sometimes
  * Fix IE11 "e is null" bug

### 3.10.0 <a href="#3100" id="3100"></a>

_Released 20 Aug 2020_

**💪 Enhancement**

* Studio
  * Added the "Admin" role - admins may manage users, projects, tests, and scheduled jobs.
* Test engine:
  * Added user agent support for firefox tests
  * Added TEST.assert command.

**🐞 Fixes**

* Studio
  * Fix the "Stop" button - in some cases, it did nothing.
  * Fix styling of "terminated" steps
  * If a step does not have a screenshot (bc. screenshots are disabled, or test was terminated, etc.), the report will fallback to the last available screenshot before step.
* Test Engine:
  * Fix issue where test will timeout if I.wait is long (like a few minutes) but not that long (more than an hour)
  * Fix user agent support for chrome tests
  * Fix report processing of some errors causing error messages to be formatted as a blank string
* (On-premise only) System administration
  * Fix search for user's access to a space, project, job, or test

### 3.9.0 <a href="#390" id="390"></a>

_Released 5 Aug 2020_

**💪 Enhancement**

* Studio:
  * You can now drag and drop to move files. :)
  * Better page titles across the application

**🐞 Fixes**

* Studio:
  * Fix janky tooltip display issues - sometimes tooltips will get stuck and doesn't go away

### 3.8.0 <a href="#380" id="380"></a>

_Released 3 Aug 2020_

**💪 Enhancement**

* Studio:
  * You can now set a dataset as a default for the Editor, so that when ever you load the Editor, it automatically gets selected as the dataset you want to run your tests with.
  * When you move away from the Editor tab to other tabs like "Monitoring", the last opened file is remembered, so that if you go back to the Editor, you'll see the last opened file instead of a blank file.

### 3.7.0 <a href="#370" id="370"></a>

_Released 23 Jun 2020_

**💪 Enhancement**

* Test Engine:
  * Added SAMPLE.fromList method - this will allow you to randomly pick a value from a list, e.g. SAMPLE.fromList("Red", "Green", "Blue")

**🐞 Fixes**

* Test Engine:
  * Fix a bug with SAMPLE.id that causes the tests to crash

### 3.6.1 <a href="#361" id="361"></a>

_Released 22 Jun 2020_

**🐞 Fixes**

* Test Engine:
  * Fix issue when test cannot be run on application where `window.self` property has been overwritten
  * Improved error handling for unexpected session termination on Chrome and Edge browsers so that such test runs will be automatically retried when triggered by a job.

### 3.6.0 <a href="#360" id="360"></a>

_Released 16 Jun 2020_

**💪 Enhancement**

* We now support the ability to transfer projects to another space. Please contact your administrator (for UI-licious Enterprise Edition) or support@uilicious.com to do so.

**🐞 Fixes**

* Fix bug with cloning dataset

### 3.5.0 <a href="#350" id="350"></a>

_Released 9 Jun 2020_

**💪 Enhancement**

* Webhook reports - Improved error preview for failed tests
* Clean up and restructuring underneath the hood to improve performance and support new features in the future.

**🐞 Fixes**

* Jobs:
  * Fix bug enabling/disabling jobs.
  * Fix bug where scheduled jobs would sometimes skip timings in some edge cases
  * Fix bug where jobs that failed due to system errors are retried excessively due to race conditions.
  * Fix messy UI display of retry attempts for job test runs - hide previous attempts if the final attempt completed properly, otherwise show test run ID and attempt counts.

### 3.4.0 <a href="#340" id="340"></a>

_Released 2 Jun 2020_

**💪 Enhancement**

* UI-licious Cloud Testing Grid:
  * Performance optimisations to increase startup and execution time for Safari, Edge, and IE11 test sessions
* Test Engine:
  * Taking screenshots for Safari tests is now faster.

### 3.3.1 <a href="#331" id="331"></a>

_Released 29 May 2020_

**🐞 Fixes**

* Studio
  * Fix bug where the running tests pill always showed 0 tests running.

### 3.3.1 <a href="#331" id="331"></a>

_Released 28 May 2020_

**🐞 Fixes**

* Studio
  * Fix bug - "Resend" space invitation was not working

### 3.3.0 <a href="#330" id="330"></a>

_Released 27 May 2020_

**💪 Enhancement**

* Clean up and restructuring underneath the hood to improve performance and support new features in the future.

### 3.2.4 <a href="#324" id="324"></a>

_Released 14 May 2020_

**🐞 Fixes**

* Studio
  * Dropped feature to download MP4 video for test report due to stability issues and lack of use.
* Test Engine
  * Fix bug where the `User-Agent` string is set to `null` when running Chrome tests, causing issues in applications that rely on user agent detection.

### 3.2.3 <a href="#323" id="323"></a>

_Released 12 May 2020_

* Test Engine:
  * Fix issue with compile reports for tests that are terminated before completion.

### 3.2.2 <a href="#322" id="322"></a>

_Released 11 May 2020_

**🐞 Fixes**

* Studio - Monitoring Tab:
  * Fix time display for jobs that are set to start at exact 12:00 PM (was showing 12:00 AM instead)
  * Updated "Bulk Edit" interface so that it is neater and shows errors better.

### 3.2.1 <a href="#321" id="321"></a>

_Released on 7 May 2020_

**🐞 Fixes**

* Test Engine
  * Add relative path support for `I.upload` command

### 3.2.0 <a href="#320" id="320"></a>

_Released on 28 Apr 2020_

**🚀 New Features**

* Test Engine:
  * Added new commands to get and assert element attributes and classes:
    * UI.getAttribute(element, attribute) - returns the value of an attribute on an element
    * UI.hasAttribute(element, attribute, \[value]) - assert the existance or value of an attribute on an element
    * UI.doesNotHaveAttribute(element, attribute) - asser the absence of an attribute on an element
    * UI.hasClass - assert the existance of a CSS class on an element
    * UI.doesNotHaveClass - assert the absense of a CSS class on an element

**🐞 Fixes**

* Test Engine
  * Fix issue with executing click commands on IE11 in some edge cases

### 3.1.0 <a href="#310" id="310"></a>

_Released on 21 Apr 2020_

**💪 Enhancement**

* Studio - Monitoring Tab:
  * Add "Dataset" filter to make it easier to view jobs ran with specific datasets.
  * Add "Bulk Run" button to allow you to trigger "Run" on multiple jobs at a time.

**🐞 Fixes**

* Studio - Editor:
  * Fix bug where "Region" setting from the "Advanced Run Settings" dialog "sticks" and also gets applied when triggering runs using the quick "Run" button on the toolbar afterwards.

### 3.0.1 <a href="#301" id="301"></a>

_Released on 17 Apr 2020_

**🐞 Fixes**

* Test Engine:
  * Improve error message when I.goTo command times out because the target page took too long to load.
  * Increase timeout for I.goTo command to fail if page takes too long to load from 1 minute to 5 minutes.

### 3.0.0 <a href="#300" id="300"></a>

_Released on 14 Apr 2020_

This release contains a minor breaking change that only affects you if you've used `TEST.loadDataFromCsv` with only the `file` parameter passed in to read a CSV file with exactly one entry. See details below.

[View TEST.loadDataFromCsv documentation](https://docs.uilicious.com/scripting/load\_data\_from\_file.html#testloaddatafromcsv)

**❗️ Breaking Changes**

*   Previously, `TEST.loadDataFromCsv(file)` could be used to read a CSV with exactly one entry. As this is an uncommon use case and support to read all entries in an CSV is a popular request, it made more sense for `TEST.loadDataFromCsv` to load all entries if `dataset` parameter is not provided, `TEST.loadDataFromCsv(file)` will now return all entries as a JSON object array instead. If your tests are failing due to this change, you need to update your test like this:

    ```javascript
    // this will no longer work
    var admin = TEST.loadDataFromCsv("admin_user.csv") 

    // fix by adding [0] to read the first element from the returned array
    var admin = TEST.loadDataFromCsv("admin_user.csv")[0]
    ```

**🐞 Fixes**

* Fix bug with processing `TEST.loadDataFromCsv(file, options)` method signature.
* Fix bug with handling CSV files with exactly 2 rows and 2 columns.

### 2.23.12 <a href="#22312" id="22312"></a>

_Released on 27 Mar 2020_

**💪 Enhancement**

* You can now bulk edit notifications settings for jobs from the Monitoring dashboard.

### 2.23.11 <a href="#22311" id="22311"></a>

_Released on 24 Mar 2020_

**💪 Enhancement**

* Studio - Spaces:
  * Renamed the "Invite" button to "Manage members" button because it wasn't obvious that the button opens the controls for editting and removing team members as well.

**🐞 Fixes**

* Studio - Editor:
  * Fix bug with failed steps with error supressions are being included in the error count.

### 2.23.10 <a href="#22310" id="22310"></a>

_Released on 20 Mar 2020_

**🐞 Fixes**

* Studio
  * Fix bug with "Try it" button on "Learn" pane not working
* Test Engine:
  * Fix issue with I.click missing the target element on websites where the layout changes on scroll.
  * Fix missing return value for click, select, deselect, and drag commands - these commands will return `true` or `false` depending on where the action was performed successfully or not. E.g. `false` will be returned if the target element is not found.

### 2.23.9 <a href="#2239" id="2239"></a>

_Released on 16 Mar 2020_

**💪 Enhancement**

* Email reports:
  * Display test run time in more human-friendly way (now it shows 4:00 PM GMT+8 instead of 16:00 +0800)

**🐞 Fixes**

* Email reports:
  * Fix issues with processing failed tests steps caused by non-assertion errors, causing some Test Failure reports to be unsent.
  * Fix bug were timezone offset for test run time was incorrectly computed
  * Display test run time in more human-friendly way (now it shows 4:00 PM GMT+8 instead of 16:00 +0800)

### 2.23.8 <a href="#2238" id="2238"></a>

_Released on 12 Mar 2020_

**🐞 Fixes**

* Fix issues with `I.click` targeting elements in scrollable dropdown menus.

### 2.23.7 <a href="#2237" id="2237"></a>

_Released on 04 Mar 2020_

**💪 Enhancement**

* Testing nested iframe elements is now supported - using nested `UI.context`

**🐞 Fixes**

* Fix bug where the first command used in `UI.context` will always fail when used to target an iframe.

### 2.23.6 <a href="#2236" id="2236"></a>

_Released on 02 Mar 2020_

**🐞 Fixes**

* Fix bug with `I.click` not working on elements in iframes on Chrome 80.

### 2.23.5 <a href="#2235" id="2235"></a>

_Released on 28 Feb 2020_

**🐞 Fixes**

* Fix bug where PDF report show test run start time as 1 Jan 1970
* (On-premise only) Fix link to PDF reports

### 2.23.4 <a href="#2234" id="2234"></a>

_Released on 20 Feb 2020_

_Several fixes for edge cases with click operations, and other minor fixes and improvements in the Test Engine._

**💪 Enhancement**

* Test Engine:
  * Improve error handling for UI.execute so that it reports the actual javascript error now instead of a generic error.
* Studio:
  * Minor performance improvements to reduce time to load UI-licious Studio

**🐞 Fixes**

* Test Engine:
  * Fix evaluation of XPATH selectors in **IE11** tests
  * Fix edge case issues with targeting element using coordinates or pixel offsets from target elements using `I.click(x,y)` and `I.click(target, x, y)`
  * Fix edge case issues with `I.rightClick`
  * Fix edge case issues with `I.click` on Salesforce navigation bar and dropdown components
  * Fix incorrect information about browser tabs and current page url being reported when `I.click` triggers a page navigation. Previously, I.click will show the screenshot taken **before** the click operation, but reports the browser tabs and current page url **after** the click operation instead. Now I.click commands will report the screenshot, browser tabs, and current page url **before** the click operation.
  * Fix bug where browser tabs and current page url does not update after `I.closeTab` commands are used

### 2.23.3 <a href="#2233" id="2233"></a>

_Released on 11 Feb 2020_

**💪 Enhancement**

* Spaces:
  * Clicking on the UI-licious Cake logo should bring you to the Spaces page without doing a full page reload
  * Spaces can be renamed directly by click on the name of the space on the Spaces page _\[Only for Space Owner roles]_
* Editor:
  * Added preview for .md files
* Monitoring:
  * Added dropdown menu with quick actions to disable or delete a job from the Job list page.

**🐞 Fixes**

* Editor:
  * Fix broken layout when viewing an image in the project files in Editor

### 2.23.2 <a href="#2232" id="2232"></a>

_Released on 14 Jan 2020_

**🐞 Fixes**

* Fix bug with tests not being ran with the selected dataset for users with the Editor role.

### 2.23.1 <a href="#2231" id="2231"></a>

_Released on 10 Jan 2020_

**💪 Enhancement**

* Editor:
  * New syntax highlighting theme to make it easier to read and understand test scripts
* Test Engine:
  * Performance improvements during test initialising process. Projects that were very large were experience issues with very slow starts and occasionally timeouts due to the slow down.

### 2.23.0 <a href="#2230" id="2230"></a>

_Released on 12 Dec 2019_

_Major update to the test-engine - we've added `I.hoverOn` and `I.rightClick` command, ability to send chords in `I.press` and `I.type`, and fixed several issues._

**🚀 New Features**

* New commands:
  * [`I.hoverOn`](https://docs.uilicious.com/scripting/mouse.html#ihoveron) lets you hover on target elements, e.g. `I.hoverOn("Help")`, `I.hoverOn(".menu")`
  * [`I.rightClick`](https://docs.uilicious.com/scripting/mouse.html#irightclick) lets you press right mouse button on target element. However, if the action opens the default OS context menu, there is no way to interact with this menu or to take a screenshot of it. This command should only be used if you have a custom behavior for the element on right click.
* `I.press` and `I.type` now supports key chords, e.g. `I.press(["Alt", "r"])` will press "Alt" and "r" keys together.

**🧪 Experimental (currently under Beta):**

* [Applitools](https://applitools.com/) Integration:
  * Added method to enable setting stitch mode for full page screenshots.

**🐞 Fixes**

* Fixed issue with clearing fields with `I.clear` or `I.fill("my field", "")` commands on right-aligned fields or fields with values in RTL languages.
* Fixed issue with test crashing when new tab to specific websites are opened
* Fixed issue with `I.dontSee` always returning `false` - it should return `true` when target is not visible.
* Fixed: improved error message if element cannot be found for `I.getText` and `I.getValue` commands
* Fixed issue with alerts being auto-dismissed by default on Firefox
* Fixed issue with test crashing when alerts are opened on Safari and IE11.

### 2.22.1 <a href="#2221" id="2221"></a>

_Released on 28 Nov 2019_

**🐞 Fixes**

* Fixed issue with UI showing no controls when the last project in the space is deleted.

### 2.22.0 <a href="#2220" id="2220"></a>

_Released on 13 Nov 2019_

![Applitools](https://docs.uilicious.com/images/integrations/applitools.png)

**🧪 Experimental (currently under Beta):**

* Integration with [Applitools](https://applitools.com/) for visual regression testing

### 2.21.1 <a href="#2211" id="2211"></a>

_Released on 4 Nov 2019_

**💪 Enhancement**

* **Editor**: Pressing the "Stop" button now releases the Report pane immediately instead of waiting for the test run to be fully stopped, so that you can immediately execute another test.

**🐞 Fixes**

* Fixed issue on "Manage Datasets" modal cannot be scrolled
* Fixed issue with newly created jobs showing last run time as 1 Jan 1970.
* Fixed layout on "Monitoring" tab to accomodate narrow screen sizes.

### 2.21.0 <a href="#2210" id="2210"></a>

_Released on 25 Oct 2019_

**🚀 New Features**

* **Editor**: Code hinting and auto complete is available as you type!
* **Browser Notifications**: Get browser notifications whenever tests (triggered manually from the Editor) are completed.

**💪 Enhancement**

* **Jobs**:
  * You can now get a quick glance of the schedule configured for a job on the Monitoring tab
  * Dates are now displayed in localised format.

**🐞 Fixes**

* **Runs page**: Fixed Enter key support for submitting search query on the test runs

### 2.20.1 <a href="#2201" id="2201"></a>

_Released on 14 Oct 2019_

![Run tab filters](https://docs.uilicious.com/images/project-run-tab/run-tab-filters.png)

**💪 Enhancement**

* **Runs page**: Added filters for searching test runs by Name, Status, Browser, and Trigger.

**🐞 Fixes**

* **Runs page**: Fixed issue with pending test run reports not updating automatically.

### 2.20.0 <a href="#2200" id="2200"></a>

_Released on 8 Oct 2019_

![Microsoft Teams](https://docs.uilicious.com/images/integrations/microsoft-teams.png)

**🚀 New Features**

* **Jobs**: Integration with Microsoft Teams now supported - you can now get error reports sent straight to your channels in MS Teams.

### 2.19.3 <a href="#2193" id="2193"></a>

_Released on 2 Oct 2019_

**💪 Enhancement**

* **Jobs**: You can now enable / disable jobs to temporarily pause them.

### 2.19.2 <a href="#2192" id="2192"></a>

_Released on 23 Sept 2019_

**💪 Enhancement**

* **Spaces page**: (For cloud edition) Added tag to display subscription plan for each space

### 2.19.1 <a href="#2191" id="2191"></a>

_Released on 11 Sept 2019_

**💪 Enhancement**

* **Reporter role**: You can invite a team member as a Reporter. Reporters may only view reports.
* **Spaces page**: Add indicator of your role in each space.

### 2.19.0 <a href="#2190" id="2190"></a>

_Released on 06 Sept 2019_

![Invite team members to your space](https://docs.uilicious.com/images/invite-team-members.gif)

**🚀 New Features**

* **Spaces & Teams**: You can now invite your team members to your Space (your collection of projects) as Editors! Editors may create, edit, run tests and schedule jobs, but may not manage users or billing.

**💪 Enhancement**

* **Editor Tab**:
  * Added preview for your image files
  * Added icons to help you differentiate between different files types

### 2.18.8 <a href="#2188" id="2188"></a>

_Released on 26 Aug 2019_ **💪 Enhancement**

_We've made the Monitoring Dashboard richer to help you identify problems faster!_

![More Info and Actions on the Jobs List](https://docs.uilicious.com/images/job-list-enhancements-26-aug-2019.png)

* **Latest results at a glance**: You can now see the latest result for each job at a glance, and click on the status to view the report directly.
* **More Info and Actions**:
  * Added the browser, resolution, and dataset configuration information for each job to help you differentiate similar jobs at a glance.
  * Added the "Edit" button to allow you to edit your Job configuration without leaving the Jobs list page.
* **New Filters**:
  * Added the resolution filter.

![Bulk Edit Jobs](https://docs.uilicious.com/images/job-list-bulk-edit-26-aug-2019.png)

* **Bulk edit**:
  * You can now select multiple jobs and bulk edit the browsers, resolutions, and schedule configurations for the selected jobs.

### 2.18.7 <a href="#2187" id="2187"></a>

_Released on 22 Aug 2019_

**🐞 Fixes**

* Drag and drop commands:
  * Fixed issues with the drag commands on implementations of the Drag and Drop UI where the original drag element is destroyed after dragging.

### 2.18.6 <a href="#2186" id="2186"></a>

_Released on 16 Aug 2019_

**🐞 Fixes**

* Drag and drop commands:
  * Fixed issues with the drag commands on various implementations of the Drag and Drop UI, including:
    * Native HTML5 implementations
    * Implementations that creates ghosts during dragging,
    * Implementations that detaches the drag element from its parent during dragging

### 2.18.5 <a href="#2185" id="2185"></a>

_Released on 8 Aug 2019_ **💪 Enhancement**

* PDF reports:
  * Added interaction highlighting to indicate targeted elements for interaction commands.
  * Buffered rendering to improve experience of loading really huge reports

**🐞 Fixes**

* Reports:
  * Fixed janky scrolling issues when selecting a report step.
  * Fixed Preview Window not resizing to fit on Firefox, Safari, and Edge browsers.
* Run Tab:
  * Fixed list display issue on Safari.
* PDF reports:
  * Fixed overflow issues happening on certain screen sizes and zoom levels.

### 2.18.4 <a href="#2184" id="2184"></a>

_Released on 1 Aug 2019_

**💪 Enhancement**

* Improve performance of retrieving screenshots of the tests

### 2.18.3 <a href="#2183" id="2183"></a>

_Released on 19 July 2019_ **💪 Enhancement**

* Job filters:
  * Added filters to quickly filter jobs by name, and by statuses.

### 2.18.2 <a href="#2182" id="2182"></a>

_Released on 18 July 2019_ **💪 Enhancement**

* Added raw time taken to execute tests, including post-processing time.
  * Previously, we only displayed the time taken to execute a test excluding post-processing time (which includes time taken for capturing screenshots and other telemetry) and other script processing time (for example, if you have a long running loop to compute stuff in between test commands). Depending on the browser used for the test, the post-processing time can be significant. Some users requested for raw time taken in order to accurately predict the total time needed to execute the full test suite.

### 2.18.1 <a href="#2181" id="2181"></a>

_Released on 24 Jun 2019_

**💪 Enhancement**

* Editor: We've made some improvements to the editor to increase your productivity in writing tests.
  * Added hotkeys to quickly comment and uncomment lines using (`CTRL + /`, or `CMD + /` for Mac users)
  * Added hotkeys to quickly indent and un-indent using `TAB` and `SHIFT + TAB`.
  * Defaults for auto-indentation is now 1 tab instead of 2 spaces (sorry spaces!)
  * Braces and quotes are now automatically closed for your convenience.
* Offline Warning: Display warning if you are currently offline

### 2.18.0 <a href="#2180" id="2180"></a>

_Released on 23 May 2019_ **🚀 New Features**

* Added new commands to assert HTTP status code of the current page:
  * `UI.isStatusCode(code)`, `UI.is200`, `UI.isNot200`, `UI.is404`, `UI.isNot404`, `UI.is500`, `UI.isNot500`

**💪 Enhancement**

* Improve report status message for terminated tests - add cause of test termination e.g. stopped by user, reached max test run time limit, reached max concurrency.

### 2.17.3 <a href="#2173" id="2173"></a>

_Released on 21 May 2019_

**🐞 Fixes**

* Fixed an issue that causes ESOCKETTIMEOUT errors in the test when a new tab is opened.

### 2.17.2 <a href="#2172" id="2172"></a>

_Released on 17 May 2019_

**💪 Enhancement**

* Update the report for test runs in jobs, replaced with the same report component as the editor for a more consistent look.
* Added 🎨 color to browser icons so that it's faster to visually differentiate browsers

### 2.17.1 <a href="#2171" id="2171"></a>

_Released on 15 May 2019_

**🐞 Fixes**

* Fixed: Reports can't be loaded if they are too large (>2000 steps) and crashes the browser instead. Buffered rendering of the report to prevent browser from crashing.

### 2.17.0 <a href="#2170" id="2170"></a>

_Released on 13 May 2019_

**🚀 New Features**

* Added "Runs" tab - We added a new "Runs" tab so that you can view all your previously ran tests in one place.

**💪 Enhancement**

* Test reports now shows you which tabs are opened at each step of the test.
* Added browser icon to the preview window in test reports to indicate which browser the test was ran in.

### 2.16.1 <a href="#2161" id="2161"></a>

_Released on 6 May 2019_

**🐞 Fixes**

* Fixed: Safari tests freezes whenever native `<select>` dropdowns are opened.

### 2.16.0 <a href="#2160" id="2160"></a>

_Released on 23 Apr 2019_

**🚀 New Features**

* Added "Learn" pane to the editor which contains tutorials and references on how to write UI-liicous test scripts.

**💪 Enhancement**

* Added prettier "Running Tests" dropdown to the top nav bar. Removed "Running Tests" drawer at the bottom of the screen.

**🐞 Fixes**

* Fix slowdown of tests due to slow merge array function

### 2.15.3 <a href="#2153" id="2153"></a>

_Released on 1 Apr 2019_

**💪 Enhancement**

* Added `TEST.browser`, `TEST.width` and `TEST.height` to expose the settings for the current test run
* Added `I.pressDelete` and `I.pressBackspace` commands for convenience.
* Added `I.clear` to clear input fields (basically the same as `I.fill` using an empty string)

**🐞 Fixes**

* Fixed issue with scrolling elements into center when elements are within scrollable elements within the page body. Elements within scrollable elements were often scrolled to the top of the screen which caused problems, especially for dropdown elements.
* Fixed issue with `I.fill` command being able to properly clear certain input fields, and instead append the value instead.

### 2.15.2 <a href="#2152" id="2152"></a>

_Released on 26 Mar 2019_

**🐞 Fixes**

* Fixed issues with tab handling when alert popups are opened

### 2.15.1 <a href="#2151" id="2151"></a>

_Released on 25 Mar 2019_

**💪 Enhancement**

* Added new SAMPLE commands
  * `SAMPLE.name` - Generate random full name
  * `SAMPLE.last` - Generate random last name
  * `SAMPLE.first` - Generate random first name
  * `SAMPLE.email` - Generate random email address
  * `SAMPLE.phone` - Generate random phone number
* Now you can close tabs with `I.closeTab` command! 😀

### 2.15.0 <a href="#2150" id="2150"></a>

_Released on 6 Mar 2019_

**🚀 New Features**

* Added editing and linting support in the web studio for .json, .csv, .md files.
* Added new commands for loading test data from .json and .csv files within the project:
  * `TEST.loadDataFromJson`, `TEST.loadDataFromCsv`, `TEST.loadDataFromFile`

**💪 Enhancement**

* Retrieval of test run results are now faster and more accurate!

**🐞 Fixes**

* Fix error handling when user attempt to create a file when it already exists.

### 2.14.2 <a href="#2142" id="2142"></a>

_Released on 5 Mar 2019_

**💪 Enhancement**

* Sort dataset and dataset variables alphabetically. :)

### 2.14.1 <a href="#2141" id="2141"></a>

_Released on 4 Mar 2019_

**💪 Enhancement**

* Improvements to web reports - added controls to allow you to jump directly to errors.

**🐞 Fixes**

* Fix webhook report - When test fails, the report was showing last 3 steps from the end of the test instead of the last 3 steps from the first error occurrence, which isn't very helpful.

### 2.14.0 <a href="#2140" id="2140"></a>

_Released on 1 Mar 2019_

**🚀 New Features**

* You can now share test run results publicly with an unlisted url and as an embedded iframe.

### 2.13.1 <a href="#2131" id="2131"></a>

_Released on 29 Jan 2019_

**🐞 Fixes**

* Fix `UI.context` - `UI-context` was failing when single quotes are used in the selector

### 2.13.0 <a href="#2130" id="2130"></a>

_Released on 11 Jan 2019_

**🚀 New Features**

* You can **download test results as MP4 Video**

### 2.12.1 <a href="#2121" id="2121"></a>

_Released on 8 Jan 2019_

**🐞 Fixes**

* Fix `I.seeCount` - the assertion was still passing even if the count is incorrect

### 2.12.0 <a href="#2120" id="2120"></a>

_Released on 7 Jan 2019_

**🚀 New Features**

* Drag and drop commands are now available:
  * `I.dragTo` - Allows you to drag an element to another target element.
  * `I.dragBy` - Allows you to drag an element in a direction using (x,y) pixel offset.
  * `I.dragUp`, `I.dragDown`, `I.dragLeft`, `I.dragRight` - Shortcuts for `I.dragBy`

### 2.11.5 <a href="#2115" id="2115"></a>

_Released on 12 Dec 2018_

**💪 Enhancement**

* Improved performance on the test run history page for individual jobs.

### 2.11.4 <a href="#2114" id="2114"></a>

_Released on 5 Dec 2018_

**💪 Enhancement**

* Added test run durations to reports sent via webhooks.

### 2.11.3 <a href="#2113" id="2113"></a>

_Released on 30 Nov 2018_

**💪 Enhancement**

* `UI.context` can now be used to explicitly switch the context to an iframe. This is useful in cases where security policies on the web application or on specific browsers prevents UI-licious from normally being able to see the contents of iframes and test it.

### 2.11.2 <a href="#2112" id="2112"></a>

_Released on 25 Nov 2018_

**💪 Enhancement**

* `UI.execute` now prints out a snippet of the script to execute to make the test reports and flow easier to understand. And you may also override the log message for `UI.execute`.

### 2.11.1 <a href="#2111" id="2111"></a>

_Released on 20 Nov 2018_

**💪 Enhancement**

* You may now override xpaths and css selectors with more human-friendly labels in reports for every command, please refer to the documentation for each command.

### 2.11.0 <a href="#2110" id="2110"></a>

_Released on 7 Nov 2018_

**🚀 New Features**

* **Datasets**: You can now configure variables for running tests on different environments.
* New commands:
  * `I.getValue` - Allows you to grab the value of an input field and set it to a variable
  * New scroll commands for conveninence - `I.scrollUp`, `I.scrollDown`, `I.scrollLeft`, `I.scrollRight`.
  * **Error supression** - For all `I` and `UI` commands, you can suppress the error with the `$` variant of the command - e.g. `I.see$("Flying pigs")`. This may be useful when you want so suppress the errors for commands used as conditional expressions in `if/else` blocks.
  * Error and **log suppression** - For all `I` and `UI` commands, you can suppress the error and logs with the `$$` variant of the command - e.g. `UI.execute$$(...)`.

**💪 Enhancement**

* Better error logging about errors in the test script itself.

### 2.10.0 <a href="#2100" id="2100"></a>

_Released on 25 Oct 2018_

We'll be taking it slow for the next couple of months for some major refactoring under the hood so that we can write code more efficiently, improve the performance of UI-licious, and support development of features planned in our roadmap.

**🚀 New Features**

* **Stop button**. Yes, you have been asking for it. Now there's a way to stop tests.
* You can now see which tests that are currently being ran, how are they triggered, and how many of your concurrent test sessions are being used.

**💪 Enhancement**

* Studio - Monitoring View
  * Added sorting controls to the Jobs overview.

### 2.9.0 <a href="#290" id="290"></a>

_Released on 20 Sept 2018_

**🚀 New Features**

* Test Engine:
  * You can take full page screenshots with these new configuration and commands:
    * Add `TEST.fullScreenshot` configuration option to set screenshots to be taken as full page screenshots. Set `TEST.fullScreenshot = true` to enable full page screenshots for all subsequent commands. Note that this slows down testing time significantly, you should use it only when necessary.
    * Add `TEST.takeFullScreenshot()` command to take a full page screenshot
* Studio:
  * You can now download test run reports as JSON and CSV.
* (For Enterprise On-Premise):
  * Added views to monitor running tests, all tests, and all scheduled jobs system-wide.

**💪 Enhancement**

* Studio - Editor View:
  * You can now share reports of tests ran from the Editor view by grabbing the URL of report.
  * Where `I.fill` is performed on the screen is now highlighted
* Studio - Monitoring View:
  * You can now set the `User Agent` in jobs. This setting currently only works for tests running on Chrome.
  * Added pagination for list of tests ran for a scheduled job to view reports for test ran further back.

**🐞 Fixes**

* Studio - Editor View:
  * Editor wasn't loading new tests immediately after creation.

### 2.8.0 <a href="#280" id="280"></a>

\*Released on 6 Sept 2018

**Highlights:**

* Studio - Editor View:
  * Where `I.click` are performed on the screen is now highlighted. However, screenshots for `I.click` now shows the screen before the click is performed, instead of the screen after the click is performed. If you need to view the screen after the click is performed, simply add another command after `I.click` such as `I.see` to capture the screen after.

**🚀 New Features**

* Studio - Editor View:
  * "Autosave" switch to enable / disable autosaving of your test scripts.

**💪 Enhancement**

* Studio - Editor View:
  * Added a warning if you try to leave the Editor with unsaved changes to prevent accidental loss of work.
  * For each step in the test report, we've added a "View Test" link so that you can jump to the script for that step. \*

### 2.7.0 <a href="#270" id="270"></a>

_Released on 29 Aug 2018_

**🚀 New Features**

* Test Engine:
  * Added supported for `User-Agent` settings for tests ran on Chrome. You can now set `User-Agent` from the advanced run configuration in "Run" pane in the Studio Editor.
  * New commands for custom logging to support custom functions `TEST.log.info`, `TEST.log.pass`, `TEST.log.fail`.

**💪 Enhancement**

* Studio:
  * We've changed our chat and ticketing system from Zendesk to Intercom for a better experience in supporting you. :)

### 2.6.8 <a href="#268" id="268"></a>

_Released on 14 Aug 2018_

**🐞 Fixes**

* (Chrome, Safari, Edge, IE) Fix `I.doubleClick`
* (Firefox) Fixed bug with `I.click` not working for some elements
* (IE) Fix bug with handling XPATH selector

### 2.6.7 <a href="#267" id="267"></a>

_Released on 10 Aug 2018_

**🐞 Fixes**

* (Firefox) Fixed bug with `I.click` not working on elements within iframes

### 2.6.6 <a href="#266" id="266"></a>

_Released on 31 Jul 2018_

**🐞 Fixes**

* (Firefox) Fixed bug with `I.click` not working

### 2.6.5 <a href="#265" id="265"></a>

_Released on 30 Jul 2018_

**💪 Enhancements:**

* `UI.context` can now handle and target within multiple `context` matches
* Added `I.see.signpost` for more explicit hints to the test engine to resolve similar matches using a related element

### 2.6.4 <a href="#264" id="264"></a>

_Released on 20 Jul 2018_

**🐞 Fixes**

* (Firefox) Fixed bug typing space characters

### 2.6.3 <a href="#263" id="263"></a>

_Released on 19 Jul 2018_

**💪 Enhancements:**

* You can now use relative paths for `TEST.run`

### 2.6.2 <a href="#262" id="262"></a>

_Released on 16 Jul 2018_

**🐞 Fixes**

* Fixed bug typing special characters

### 2.6.2 <a href="#262" id="262"></a>

_Released on 13 Jul 2018_

**💪 Enhancements:**

* Added workaround to perform keyboard actions on input fields that override values on `input` event causing characters to be erased

### 2.6.1 <a href="#261" id="261"></a>

_Released on 12 Jul 2018_

**💪 Enhancements:**

* Added `I.clickXY` command to click on an element using (x,y) coordinates

### 2.6.0 <a href="#260" id="260"></a>

_Released on 2 Jul 2018_

**🚀 New Features**

* (Beta) You can now select from which region you want to run your test for certain plans (for Pro users only)
  * Available Regions : Singapore, Frankfurt, California, Taiwan, Japan
  * Support browsers : Chrome, Firefox
* (Beta) You can now run test on Safari (for Pro users only)

**🐞 Fixes**

* Error test run notification report was missing ❗ from email subject

### 2.5.4 <a href="#254" id="254"></a>

_Released on 1 Jul 2018_

**💪 Enhancements:**

* Improve `I.select` so that it can handle hidden checkboxes that is styled using an associated label that is visible

### 2.5.3 <a href="#253" id="253"></a>

_Released on 28 Jun 2018_

**🐞 Fixes**

* (Firefox) Fixed bug in getting element from browser

### 2.5.2 <a href="#252" id="252"></a>

_Released on 13 Jun 2018_

**🐞 Fixes**

* Fixed error that happens when cancelling rename file action from title bar in the Editor
* Block very edge case race condition where a file will override another

### 2.5.1 <a href="#251" id="251"></a>

_Released on 8 Jun 2018_

**💪 Enhancements:**

* `I.amAt` - Now supports partial matching of paths and handles RegExp.

### 2.5.0 <a href="#250" id="250"></a>

_Released on 4 Jun 2018_

**🚀 New Features**

* Added `I.doubleClick` command

**🐞 Fixes**

* Fixed `I.amAt` - clean up extra `/` characters before asserting path to prevent incorrect failed assertions
* Fixed `I.filled` - fails to catch errors
* Screenshot does not automatically center target elements for selection commands.

### 2.4.0 <a href="#240" id="240"></a>

_Released on 1 Jun 2018_

**🚀 New Features**

*   Add `I.count` and `I.getCount` to count elements and assert count of text and elements.

    ```
      Example:
      I.goTo("https://store.com/alcohol");
      I.count("beer", 99); // searchs for 99 occurances of "beer"
      var n = I.getCount("beer"); // gets the number of occurances of "beer" on the page as a variable
    ```

**💪 Enhancements:**

* Better reports for the Editor Tab
  * Improved design - nicer preview window, better layout for mobile resolution tests
  * There's now URL and page title information for each step
  * You can now download test run screenshots as an animated GIF for up to 100 steps.
* Scheduled jobs:
  * You can now set multiple email address for the job notification emails.
  * Added last 3 steps until first error in error reports sent to Webhooks.
* Test engine:
  * `aria-labelledby` is now evaluated when searching for elements
  * Search expression will now match all variants of single-quotes and double-quotes.

**🐞 Fixes**

* `I.deselect` and `I.deselected` wasn't working

### 2.3.1 <a href="#231" id="231"></a>

_Released on 18 May 2018_

**💪 Enhancements:**

* (On-premise only) You can download debugging logs for test runs.

**🐞 Fixes**

* Some XPATH expressions didn't work
* SSL certificate checks on Firefox was not skipped
* When jobs fail due to network errors, automatically retry the job.

### 2.3.0 <a href="#230" id="230"></a>

_Released on 8 May 2018_

**🚀 New Features**

* You can limit search scope by using `UI.context` or providing a `context` option in test commands.

### 2.2.0 <a href="#220" id="220"></a>

_Released on 22 Apr 2018_

**🚀 New Features**

* New commands to assert, accept, cancel, and fill **alert/confirm/prompt** dialogs.

**🐞 Fixes**

* Unable to set timezone for job schedule sometimes.

### 2.1.13 <a href="#2113" id="2113"></a>

_Released on 13 Apr 2018_

**🚀 New Features**

* New command `UI.execute` to execute javascript on the browser.

### 2.1.12 <a href="#2112" id="2112"></a>

_Released on 12 Apr 2018_

**💪 Enhancements:**

* Improved design for configuring webhook notification

**🐞 Fixes**

* Webhook notifications was triggering for every test run even when notification is set to send on errors only.
* Unable to disable webhook notification when editing job.

### 2.1.11 <a href="#2111" id="2111"></a>

_Released on 05 Apr 2018_

**💪 Enhancements:**

* Advanced options for scheduling jobs (Pro plan only).

### 2.1.10 <a href="#2110" id="2110"></a>

_Released on 02 Apr 2018_

**🚀 New Features**

* You can use webhooks to get notifications about the status of your jobs on your own Slack / Telegram channels.

**💪 Enhancements:**

* You can now download all the images of a test run from the Editor.

### 2.1.9 <a href="#219" id="219"></a>

_Released on 15 Mar 2018_

**🚀 New Features**

* You can now run tests on Microsoft Edge!

**💪 Enhancements:**

* `I.fill` and `I.click` commands can now target elements by `aria-label`
* You can now target input fields by their current value when using `I.fill`
* Added XPATH support for `I.fill`
* `I.see` and `I.click` now applies to the value and placeholder of textual input fields too
* You can use `I.type` in place of `I.press` for keyboard inputs
* Added `I.pressTab` command

### 2.1.8 <a href="#218" id="218"></a>

_Released on 12 Mar 2018_

**🐞 Fixes**

* Fix bug that prevented jobs from running.

**Others:**

* Capped maximum run time of tests to 1 day. Tests running longer than that will time out. If you have tests running for such a long time, you should split them into smaller tests.
* Improve performance of retrieving test run results.

### 2.1.7 <a href="#217" id="217"></a>

_Released on 9 Mar 2018_

**🐞 Fixes**

* Fixed bug that caused application to crash when polling for the status of pending jobs.

### 2.1.6 <a href="#216" id="216"></a>

_Released on 6 Mar 2018_

**🚀 New Features**

* 🍪🍪🍪 You can now set and assert [cookies](https://docs.uilicious.com/scripting/cookies.html).

**🐞 Fixes**

* Fixed: Jobs being ran and crashing when their tests get moved or deleted.

### 2.1.5 <a href="#215" id="215"></a>

_Released on 20 Feb 2018_

**🚀 New Features**

* Added `SAMPLE.id` method for generating sample data for random base58 strings.

### 2.1.4 <a href="#214" id="214"></a>

_Released on 12 Feb 2018_

**🐞 Fixes**

* Fixed: Unable to retrieve job status sometimes.

### 2.1.3 <a href="#213" id="213"></a>

_Released on 11 Feb 2018_

**🐞 Fixes**

* Fixed: Cannot open "Create Project" dialog

### 2.1.2 <a href="#212" id="212"></a>

_Released on 6 Feb 2018_

**💪 Enhancements:**

* Friendly reminders to ask you to pay us for our work. 😉

### 2.1.1 <a href="#211" id="211"></a>

_Released on 27 Jan 2018_

**🐞 Fixes**

* Fixed: Editor tab - Test report window could not be resized

### 2.1.0 <a href="#210" id="210"></a>

_Released on 23 Jan 2018_

**🚀 New Features**

* You can now automatically pay us for our work. 😉

### 2.0.0 <a href="#200" id="200"></a>

_Released on 3 Jan 2018_

**🚀 New Features**

* Documentation Tab: Now you can view this documentation site with UI-licious Studio with your tests side-by-side

**💪 Enhancements:**

* Internal changes to improve the performance of the application and test engine.
* Prettier web reports for your scheduled tests.
* You can specify the full path when creating or moving a file or folder. All intermediate folders to the destination path will be automatically created.

### 1.5.1 <a href="#151" id="151"></a>

_Released on 9 November 2017_

**💪 Enhancements:**

* Editor Tab:
  * Improved resolutions dropdown in Run pane - group resolutions by device class, and label resolutions by common screen size names
  * Display folder path in Script pane title bar
  * New tests/files/folders will be created as siblings to the currently selected test/file on the Directory pane.
  * When a folder is selected on the Directory pane, the Script pane will not navigate away to a blank page.

**🐞 Fixes**

* Editor Tab:
  * Fixed: Script pane does not automatically display the new test after creation, when test is created by clicking on the "Create Test" button on the blank Script pane.
  * Fixed: Tests get overridden when the switching between tests while a test is being saved

### 1.5.0 <a href="#150" id="150"></a>

_Released on 11 October 2017_

**🚀 New Features**

* **Scheduled tests**: You can schedule tests to run automatically, and send email alerts when there's an error.

**💪 Enhancements:**

* Reports now show you the total time taken for the entire tests.
* Changes to the color scheme to improve contrast and visibility.

### 1.4.3 <a href="#143" id="143"></a>

_Released on 28 September 2017_

* Improved `I.upload` command to better handle hidden `<input type=file>` fields
* Improved `I.press` command to support active elements within `<iframe>` and `<frame>` elements

### 1.4.2 <a href="#142" id="142"></a>

_Released on 9 September 2017_

* Improved CSS selector support for `I.fill` command

### 1.4.1 <a href="#141" id="141"></a>

_Released on 25 August 2017_

* Improved `I.select` command - Better identification of target element with option parameter alone
* Improved support for testing within `<frame>` elements

### 1.4.0 <a href="#140" id="140"></a>

_Released on 21 August 2017_

**Breaking Changes**

* When `I.click` opens a page in a new tab, the browser will be automatically switched to it.
  * If you are using `I.switchTab` to switch tabs after `I.click`, you can remove `I.switchTab`, or _(not recommended)_ add `TEST.autoSwitchTab = false` or `TEST.autoSwitchTabOff()` to the start of your test scripts to disable this behavior.

**Highlights**

* You can set the max duration to attempt a command before raising an error with the `TEST.commandTimeout` setting.

**New**

New Commands:

* Refresh a page: `I.refreshPage`
* Scrolling a page: `I.scrollBy`, `I.scrollTo`, `I.scrollToTop`, `I.scrollToBottom`
* ↑ ↑ ↓ ↓ ← → ← → `B` `A`\
  Shortcuts to press arrow keys: `I.pressUp`, `I.pressDown`, `I.pressLeft`, `I.pressRight`

New Configurations:

* You can set the max duration to attempt a command before raising an error with the `TEST.commandTimeout` setting.
* You can enable / disable automatic screenshots taken during test runs with the `TEST.autoScreenshot` flag.
* You can enable / disable automatic tab switching when new tab is open with the `TEST.autoSwitchTab` flag.

**Enhancements**

* Condensed the project directory, so you can see more.
* Asset optimizations to improve load time
* Separate runner pane from script pane so that the runner pane doesn't reload as you switch between different scripts which can be annoying during test runs.

**Fixes**

* Fixed: Layout of UI-licious Studio is broken on Safari.
* Fixed: Error moving files to project root.

### 1.3.0 <a href="#130" id="130"></a>

_Released on 21 June 2017_

* Added support for testing [Web Components](https://www.webcomponents.org/)! [Polymer](https://www.polymer-project.org/) is now a supported framework. Woohoo!
*   Added [`I.grabText`](https://docs.uilicious.com/scripting/extract.html#igrabtext) command to read a text from an element in a web page to use as an input variable for subsequent test commands:

    ```javascript
    // example usage:
    I.see("Thank you for ordering from UI-licious pizza. Your order number is"); // you have finished ordering pizza
    var orderId = I.grabText("#orderId"); // read the text from the #orderId element on the webpage
    I.goTo("/orders"); // go to your order history page
    I.click(orderId);
    ```
* Added CSS class selector and XPATH support for [`I.click`](https://docs.uilicious.com/scripting/mouse.html#iclick) command
  * It is recommended that you use these sparingly, because it would make your tests harder to maintain.
* Fixed: `I.press` support on Firefox
* Fixed: Studio briefly flashes when a project or a test loads.

### 1.2.0 <a href="#120" id="120"></a>

_Released on 03 May 2017_

* Added a chat box so that you can talk to our technical team!
* Added shorter commands to save keystrokes:
  * [`I.fill`](https://docs.uilicious.com/scripting/form\_input.html#ifill) - Shortcut for `I.fillField`
  * [`I.press`](https://docs.uilicious.com/scripting/keyboard.html#ipress) - Shortcut for `I.pressKey`
  * [`I.pressEnter`](https://docs.uilicious.com/scripting/keyboard.html#ipressenter) - Shortcut for `I.pressKey('Enter')`
* Added [`I.switchTab`](https://docs.uilicious.com/scripting/navigation.html#iswitchtab) to switch to webpages that open in a new window or tab
* Added [`I.filled`](https://docs.uilicious.com/scripting/assertion.html#ifilled) command to assert the value of a textual input field
* Powered up the [`I.goTo`](https://docs.uilicious.com/scripting/navigation.html#igoto) command. Now you can navigate to pages with paths relative to the current url. For example:

```javascript
I.goTo("https://petstore.com/store");
I.goTo("/toys"); // this will navigate to https://petstore.com/store/toys
```

* Powered up the [`I.fill`](https://docs.uilicious.com/scripting/form\_input.html#ifill) command. It's now better at identifying input fields. Now it handles non-semantic field labels.
* Capture screenshots every second during [`I.wait`](https://docs.uilicious.com/scripting/utility.html#iwait) command. Now you can watch lolcats videos at 1FPS in UI-licious
* Shortened the timeout when a command fails from 30 seconds to 15 seconds.
* You can move files and folders.
* Sort file and folders by name.
* Folders can be collapsed/expanded to hide/show their contents. They will be collapsed by default.
* More condensed report - so that you will have to scroll less while reading very long test run reports.
* You are no longer allowed to enter the following characters in your project/folder/file names: / ? % \* : | < > "
* Fixed: Test report summary gets scrolled out of view when report is very long. We've fixed the position of the test report summary so that it doesn't happen.

### 1.1.0 <a href="#110" id="110"></a>

_Released on 28 Feb 2017_

* Test Engine
  * Commands added
    * [`I.upload`](https://docs.uilicious.com/scripting/form\_input.html#iupload) - Uploads a file to a file input field
    * [`I.selected`](https://docs.uilicious.com/scripting/assertion.html#iselected) - Checks if an select / radio / checkbox option is selected
    * [`I.deselected`](https://docs.uilicious.com/scripting/assertion.html#ideselected) - Checks if an select / radio / checkbox option is deselected
    * [`TEST.run`](https://docs.uilicious.com/scripting/sequence.html#testrun) - Allows tests to call other tests
* Studio
  * Support nested directory structure in project workspace
  * Support file upload
  * Improvements to test run preview:
    * Show summary when test run is complete
    * Show the latest screenshot while test is running in case of long running steps
    * Autoscroll to selected steps
    * Select steps using up/down arrow keys
  * Add mobile resolutions to test run configurations

### 1.0.0 <a href="#100" id="100"></a>

_Released on 8 Feb 2017_

* Test Engine
  * Commands added
    * [`I.goTo`](https://docs.uilicious.com/scripting/navigation.html#igoto) - Navigate to a page.
    * [`I.amAt`](https://docs.uilicious.com/scripting/navigation.html#iamat) - Check that the browser is at a given url.
    * [`I.click`](https://docs.uilicious.com/scripting/mouse.html#iclick) - Click on an element.
    * [`I.see`](https://docs.uilicious.com/scripting/assertion.html#isee) - Check that a given text can be seen.
    * [`I.dontSee`](https://docs.uilicious.com/scripting/assertion.html#idontsee) - Ensure that a text cannot be seen.
    * [`I.fillField`](https://docs.uilicious.com/scripting/form\_input.html#ifill) - Fill an input field with a given value.
    * [`I.select`](https://docs.uilicious.com/scripting/form\_input.html#iselect) - Select an option.
    * [`I.deselect`](https://docs.uilicious.com/scripting/form\_input.html#ideselect) - Unselect an option.
  * Test runs supported on both Chrome & Firefox browsers
* Studio
  * Test script editor
    * Editor for writing test scripts
  * Test run preview
    * Trigger a test run and show the steps executed and screenshots for each step

***

### Command Line Interface <a href="#command-line-interface" id="command-line-interface"></a>

### 1.5.8 <a href="#158" id="158"></a>

* Automated patch version bump

### 1.5.7 <a href="#157" id="157"></a>

* Fixed : Exit an error process with an error code 1

### 1.5.6 <a href="#156" id="156"></a>

* Enhancement : simplifying `overwrite` param for `import` operation

### 1.5.5 <a href="#155" id="155"></a>

* Enhancement : Update version number and fix version command so that it grabs the version number from package.json

### 1.5.4 <a href="#154" id="154"></a>

* New Feature : Import image files into the workspace directory

### 1.2.12 <a href="#1212" id="1212"></a>

* Show summary of test run errors in test run report.

### 1.1.10 <a href="#1110" id="1110"></a>

* Fixed: Error running scripts in nested folders, e.g. `/folder_a/folder_b/test_c`

### 1.1.7 <a href="#117" id="117"></a>

* Add `list` command to list projects.

### v1.0.6 <a href="#v106" id="v106"></a>

* Add `run` command to run a script.

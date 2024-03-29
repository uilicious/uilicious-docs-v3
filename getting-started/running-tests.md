---
# Write a short description about the page. This will be displayed on google search results.
description: Get started on how to run a test for your website across different browsers and resolutions using UIlicious.

# Override sidebarDepth for this page : 0 - none; 1 - show h2 headers; 2 - show h3 headers
sidebarDepth: 2 

# Disable search for the getting started guides
search: false
---

# Running a test

There's several ways to run a test in UIlicious:
1. Run a test from the **Editor** in UIlicious Studio
2. Schedule a test using **Jobs**
3. Run a test using the UIlicious **Command Line Interface**
4. Run a test by directly connecting to the UIlicious **Webdriver Grid**

**In this getting started guide, we'll only cover how to run a test using the Studio Editor.** 

The Editor view is split into three panes:
1. **Workspace** - Manage files in your project here
2. **Editor** - Write your test here
3. **Result** - Configure your test run and view the result here

![The "workspace", "editor", and "result" panes in the UIlicious Editor](/static/img/uilicious-studio-editor-labelled.png)

Once you have written a test, you can configure how you want to run a test. There are several configuration options:
1. **Browser** - the browser you want to test
2. **Resolution** - the initial resolution you want to test
3. **Dataset** - the dataset you want to use with the test
4. **Region** - the geolocation you want to run the test in
5. **User Agent** - override the default user agent of the test browser

In this getting started guide, we'll only cover how to configure Browser and Resolution. To learn more about configuring and running tests in the Editor tab, [read the full guide here](/how-to-guides/run-test/run-test-using-editor.md).

## Set test browser

Open the "Browser" dropdown in toolbar at the top of the "Result" pane and select a browser to run the test with.

![Browser options in UIlicious Editor](/static/img/uilicious-studio-editor-browser-dropdown-opened.png)

UIlicious currently supports the latest versions of all major browsers, including:
- Chrome
- Firefox
- Safari
- Edge (Chromium edition)
- Edge (EdgeHTML edition, Version 42, 2019)
- Internet Explorer 11

Once the browser is selected, it cannot be changed for the rest of the test.

## Set test resolution

Open the "Resolution" dropdown in the toolbar and select an initial resolution to run the test with.

![Resolution options in UIlicious Editor](/static/img/uilicious-studio-editor-resolution-dropdown-opened.png)

UIlicious supports common resolutions for desktop, tablet, and mobile screens. 

You can change the resolution in the middle of the test using the `UI.resize` command.

## Run test 

Click on the "Run" button in the toolbar to start the test.

![Hit the run button to start the test](/static/img/uilicious-studio-editor-run-button-circled.png)

## View test report

You start seeing results in the "Result" pane while the test is running.

![Test report in the UIlicious Editor](/static/img/uilicious-studio-editor-test-report-shown.png)

You can click on the individual steps to view the screenshot for the step, or use the Up / Down Arrow Keys to move between steps.

You can also view this test and past test runs from the "Runs" tab.

![View past test runs from the "Runs" tab](/static/img/uilicious-studio-runs-tab-circled.png)


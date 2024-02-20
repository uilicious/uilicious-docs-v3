---
# Write a short description about the page. This will be displayed on google search results.
description: In this guide, learn how to run a test on UI-licious Studio
---

# Running a test

In UIlicious Studio, you can write and run tests in the **Editor** view.

The Editor tab has three panes:
1. **Workspace** - Manage your files in your project here
2. **Editor** - Write your tests here
3. **Result** - Run and view test reports here

![The "workspace", "editor", and "result" panes in the UIlicious Editor](/static/img/uilicious-studio-editor-labelled.png)

Once you have written a test, you can configure how you want to run a test. There are several configuration options:
1. **Browser** - the browser you want to test
2. **Resolution** - the initial screen resolution you want to test
3. **Dataset** - the dataset you want to use with the test
4. **Region** - the geographic location you want to run the test in
5. **User Agent** - override the default user agent of the test browser

## Basic configuration

In the toolbar above the "Result" pane, you can find basic configuration options for setting the test browser, resolution, and dataset.

![You can select browser, resolution, and dataset from the toolbar](/static/img/uilicious-studio-editor-results-pane-toolbar-circled.png)

To run a test, you **must** pick a browser and an initial resolution.

The selected browser cannot be changed for the rest of the test. 

The selected resolution will set the initial screen resolution of the test browser, and this can be changed at any point during the test using the `UI.resize` command. If you want to run the test with a custom resolution, you can use the `UI.resize` command to specify the custom resolution.

## Run a test 

Click on the "**Run**" button in the toolbar to start running the test that is opened in the **Editor** pane.

![Click the "Run" button to run the selected test file](/static/img/uilicious-studio-editor-run-button-circled.png)

Once the test starts, you will start seeing the test results while the test runs in the **Result** pane.

![The Editor with a finished test report](/static/img/uilicious-studio-editor-test-report-shown.png)

You can click on the individual steps to view the screenshot for the step, or use the Up / Down Arrow Keys to move between steps.
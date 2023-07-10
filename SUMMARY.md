# Table of contents

## Getting Started

* [What is UIlicious?](README.md)
* [Write your first test](getting-started/Writing-your-first-test.md)  
* [Run a test](getting-started/running-tests.md)  
* [Share test reports](getting-started/share-test-reports.md)

## Core Concepts

* [Cross Browser Testing](/core-concepts/cross-browser-testing.md)
* [How Targeting Works in UIlicious](core-concepts/how-targeting-works-in-uilicious.md)
* [Automatic waits](core-concepts/automatic-waits.md)

## How to Guides

* Running a test
  * [Run a test using the Editor](how-to-guides/run-test/run-test-using-editor.md) 
  * [Schedule a test using Jobs](how-to-guides/run-test/schedule-a-job.md)
  * [Run a test using the CLI](how-to-guides/run-test/run-test-using-cli.md)
  * [Connect to Webdriver Grid](how-to-guides/run-test/connect-to-webdriver-grid.md)
* Setting up jobs
  * [Schedule a Job](how-to-guides/Setting-up-jobs/schedule-a-job.md)
  * [Setup Notifications](how-to-guides/Setting-up-jobs/set-up-notifications.md)
  * [Set up Email Notifications](how-to-guides/Setting-up-jobs/set-up-email-notifications.md)
  * [Set up Discord Notifications](how-to-guides/Setting-up-jobs/set-up-discord-notifications.md)
  * [Set up Telegram Notifications](how-to-guides/Setting-up-jobs/set-up-telegram-notifications.md)
  * [Set up Slack Notifications](how-to-guides/Setting-up-jobs/set-up-slack-notifications.md)
  * [Set up Microsoft Teams Notifications](how-to-guides/Setting-up-jobs/set-up-microsoft-teams-notifications.md)
* Integrations
  * Github
    * [Saving project to Github](how-to-guides/github/saving-projects-to-github.md)
      * [Manual commits](/how-to-guides/github/saving-projects-to-github.html#manual-commits)
      * [Auto-commits using Github Actions](/how-to-guides/github/saving-projects-to-github.html#auto-commits-using-github-actions)
    * [Running tests using Github Actions](how-to-guides/github/running-tests-using-github-actions.md)

## Test Scripting Tutorials

* [How to test Slider Components](test-scripting-tutorials/testing-slider-components.md)
* [How to test iFrames](test-scripting-tutorials/testing-iframes.md)
* [How to test Browser Alerts](test-scripting-tutorials/testing-browser-alerts.md)

## Test Commands
* [List of commands](reference/commands-list.md)
* Configurations
  * [Uilicious IP List](reference/configurations/cloud-ip-list.md)
* Page Navigation
  * [Go to a URL](reference/page-navigation/go-to-a-url.md)
  * [Refresh / Reload Page](reference/page-navigation/refresh-page.md)
  * [Switch Tab](reference/page-navigation/switch-tabs.md)
  * [Close Tab](reference/page-navigation/close-tab.md)
  * [Validate Page Status](reference/page-navigation/validate-page-status.md)
  * [Validate URL](reference/validation-commands/validate-url.md)
* Mouse Actions
  * [Click](reference/mouse-interactions/click.md)
  * [Hover](reference/mouse-interactions/hover.md)
  * [Drag](reference/mouse-interactions/drag-objects.md)
  * [Scroll](reference/mouse-interactions/scroll-page.md)
* Keyboard Actions
  * [Typing](reference/keyboard-interactions/Typing-or-pressing-keys.md)
* Forms
  * [Fill text fields](reference/keyboard-interactions/filling-forms/fill-input-fields.md)
  * [Select Checkboxes and Radio Buttons](reference/keyboard-interactions/filling-forms/select-checkboxes-and-radio-buttons.md)
  * [Select Dropdowns](reference/keyboard-interactions/filling-forms/select-dropdowns.md)
  * [Upload Files](reference/form/upload-files.md)
  * [Validate Form Input](reference/validation-commands/validate-form-input.md)
* Validate Page Content
  * [I see Command](reference/validation-commands/validate-page-content/i-see-command.md)
  * [I count Command](reference/validation-commands/validate-page-content/i-count-command.md)
* Handling Alerts
  * [Accept / Dismiss Alert](reference/handling-alerts/alerts.md#accept-or-dismiss-alerts)
  * [Fill Alert](reference/handling-alerts/alerts.md#fill-alert-text-input)
  * [Validate Alert](reference/handling-alerts/alerts.md#validate-alert-is-open)
* [Handling iFrames](reference/handling-iframes.md)
* [Handling cookies](reference/handling-cookies.md)
* [Handling local storage](reference/handling-local-storage.md)
* [Wait Command](reference/wait-commands/explicit-wait.md)
* Using Javascript
  * Use Javascript in your test
    * [Loops and Conditionals](reference/using-javascript/use-javascript-in-your-test/loops-and-conditionals.md)
    * [Execute Javascript on the Browser](reference/using-javascript/use-javascript-in-your-test/execute-javascript-on-the-browser.md)
* [Making HTTP Requests](reference/making-http-requests.md)
* [Handling downloaded files](reference/handling-downloaded-files.md)
* [Taking Screenshots](reference/taking-screenshots.md)
* Custom Reporting
  * [Info Logs](reference/custom-reporting/info-logs.md)
  * [Success status Logs](reference/custom-reporting/success-status-logs.md)
  * [Failure status Logs](reference/custom-reporting/failure-status-logs.md)
* Dynamic Test Data
  * [Load test data from File](reference/dynamic-test-data/load-test-data-from-file.md)
  * [Generate Sample Data](reference/dynamic-test-data/generate-sample-data.md)
  * [Using Datasets](reference/dynamic-test-data/using-datasets.md)
* Read and validate Page Elements
  * [Get text from a page element](reference/read-and-validate-page-elements/get-text-from-a-page-element.md)
  * [Get value from an input element](reference/read-and-validate-page-elements/get-value-from-an-input-element.md)
  * [Get value from page element attribute](reference/read-and-validate-page-elements/get-value-from-page-element-attribute.md)
  * [Get and Validate page title](reference/read-and-validate-page-elements/get-and-validate-page-title.md)
  * [Get page URL](reference/read-and-validate-page-elements/get-page-url.md)
  * [Validate page element attribute](reference/read-and-validate-page-elements/validate-page-element-attribute.md)
  * [Validate page element class](reference/read-and-validate-page-elements/validate-page-element-class.md)
  * [Get HTML code for a page element](reference/read-and-validate-page-elements/get-html-code-for-a-page-element.md)
  * [Count number of page elements](reference/read-and-validate-page-elements/count-number-of-page-elements.md)
* Reusing Tests
  * [Running another test](reference/reusing-tests/running-another-test.md)
* Stopping Tests
  * [Stop Command](reference/stopping-tests/stop-command.md)
* Browser Settings
  * [Resizing the window](reference/browser-and-resolution-settings/resizing-window.md)

## Plugins
* [Metamask](plugins/metamask-plugin.md)
* [Applitools](reference/configurations/applitools.md)

## Use Cases

* [Testing Salesforce](best-practices/salesforce.md)
* [Testing Web3 Applications](how-to-guides/web3/testing-web3-applications.md)

## Product Notes

* [Release Notes](product-and-support/release-notes.md)

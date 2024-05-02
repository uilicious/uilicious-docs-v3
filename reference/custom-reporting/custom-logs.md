---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to print custom information or validation messages to the UI-licious test report.
---

# Custom validation and log messages

This article covers commands that allow you to print custom informational or validation messages to the test report.

Thera are 4 useful commands for printing custom messages:
- `TEST.log.info` - Print an information message to the test report
- `TEST.log.pass` - Print a message to the test report, with a **success** status
- `TEST.log.fail` - Print a message to the test report, with a **failure** status, causing the whole test run to fail
- `TEST.assert` - Checks a condition, and prints either a **success** or **failure** status message depending on the condition

## Usage

```javascript
// TEST.log methods accept a single parameter:
// - message: the message to print to the test report
TEST.log.info(message)
TEST.log.pass(message)
TEST.log.fail(message)

// TEST.assert accept two parameters:
// - condition : condition to validate, this should be an expression that evaluates to a boolean value
// - message: the validation message to print to the test report
// - errorMessage: (optional) the error message to print if the condition fails
TEST.assert(condition, message)
TEST.assert(condition, message, errorMessage)
```

## Using TEST.log for custom logging

Here's an example showing how custom logs can be used to perform custom validation.

```javascript
TEST.log.info("Test Case #102 : Catalog should show at least 10 products")

let count = I.getCount(".product-card")

if (count >= 10) {
	TEST.log.pass("Catalog has at least 10 products.")
} else {
	TEST.log.fail("Catalog has less than 10 products!")
}
```

In this example above, the test script uses `TEST.log.info` to print a reference to a test case number. It then counts the number of `.product-card` elements on the page, validates if there is at least 10 elements, and prints either a success or failure message using `TEST.log.pass` and `TEST.log.fail` respectively.


{% tabs %}
{% tab title="Demo" %}
<iframe src="https://snippet.uilicious.com/embed/test/public/LTXpHdGsnScXhi8EiKqN9a?stepNum=5&autoplay=0" frameborder="0" width="100%" height="400px;"></iframe>

[View source](https://snippet.uilicious.com/test/public/LTXpHdGsnScXhi8EiKqN9a?step=5)
{% endtab %}
{% endtabs %}


## Using TEST.assert for custom validation and logging

This previous test script can be simplified using the `TEST.assert` command to replace the if-else block:

```javascript
TEST.log.info("Test Case #102 : Catalog should show at least 10 products")

let count = I.getCount(".product-card")

TEST.assert(count >= 10, "Catalog has at least 10 products.", "Found only " + count + "products in the catalog")
```

{% tabs %}
{% tab title="Demo" %}
<iframe src="https://snippet.uilicious.com/embed/test/public/AE3iRxPSQNQw7Jw5HAWZqa?stepNum=7&autoplay=0" frameborder="0" width="100%" height="400px;"></iframe>

[View source](https://snippet.uilicious.com/test/public/AE3iRxPSQNQw7Jw5HAWZqa?step=7)
{% endtab %}
{% endtabs %}
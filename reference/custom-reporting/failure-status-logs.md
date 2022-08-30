---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the TEST.log.fail command to log a failing custom report in your UIlicious test.
---

# Failure status Logs

Log a message to report with `fail` status using `TEST.log.fail`. This adds to the error count and will result in the overall test failing.

## Example

```javascript
if(I.amAt('/notFound')){
    TEST.log.fail("Product page is unavailable")
}
```

If the current url is at `/notFound`, prints "Product page is unavailable" to report as a failed validation.

## Reference

**Usage**

```javascript
TEST.log.fail(message)
```

**Parameters**

| Parameter | Type   | Remarks                  |
| --------- | ------ | ------------------------ |
| message   | string | Message to log to report |

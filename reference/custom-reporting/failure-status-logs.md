---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the TEST.log.fail command to log a failing custom report in your UIlicious test.
---

# Failure status Logs

### `TEST.log.fail` <a href="#testlogfail" id="testlogfail"></a>

Log a message to report with `fail` status. This adds to the error count and will result in the overall test failing.

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.log.fail(message)
```

**Parameters**

| Parameter | Type   | Remarks                  |
| --------- | ------ | ------------------------ |
| message   | string | Message to log to report |

#### Example(s) <a href="#examples" id="examples"></a>

```javascript
if(I.amAt('/notFound')){
    TEST.log.fail("Product page is unavailable")
}
```

If the current url is at `/notFound`, prints "Product page is unavailable" to report as a failed validation.

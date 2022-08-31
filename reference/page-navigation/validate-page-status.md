---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the different page validation commands to validate page statuses in your UIlicious test.

tags:
    - validate page status
    - 404 page not found
    - 404
    - page not found
    - http status code
    - http status
---

# Validate Page Status

There are a number of commands available for validating the HTTP status of the current page.

## Checking for 200 OK

You can use the `UI.is200` command to validate that the current page is loaded with the HTTP status code of 200 "OK". If the current page has any status other than 200, the test will fail.

Inversely, you can use the `UI.isNot200` command to validate that the current page is NOT loaded with HTTP status code of 200 "OK".

```javascript
I.goTo("https://google.com")
UI.is200() // this should pass when google.com returns 200 "OK"

I.goTo("https://google.com")
UI.isNot200() // this should fail when google.com returns 200 "OK"
```

## Checking for 404 Page Not Found

You can use the `UI.is404` command to validate that the current page is loaded with the HTTP status code of 404 "Page Not Found". If the current page has any status other than 404, the test will fail.

Inversely, you can use the `UI.isNot404` command to validate that the current page is NOT loaded with HTTP status code of 404 "Page Not Found".

```javascript
I.goTo("https://google.com")
UI.is404() // this should pass when google.com returns 404 "Page Not Found"

I.goTo("https://google.com")
UI.isNot404() // this should fail when google.com returns 404 "Page Not Found"
```

## Checking for 500 Internal Server Error

You can use the `UI.is500` command to validate that the current page is loaded with the HTTP status code of 500 "Internal Server Error". If the current page has any status other than 500, the test will fail.

Inversely, you can use the `UI.isNot500` command to validate that the current page is NOT loaded with HTTP status code of 500 "Internal Server Error"

```javascript
I.goTo("https://google.com")
UI.is500() // this should pass when google.com returns 500 "Internal Server Error"

I.goTo("https://google.com")
UI.isNot500() // this should fail when google.com returns 500 "Internal Server Error"
```

## Checking for other HTTP Statuses

If you want to check for other HTTP statuses, you can use the `UI.isStatusCode` command or `UI.isNotStatusCode` command to test whether the current page did or did not load with a specific HTTP status code.

```javascript
I.goTo("https://mystore.com/admin")
UI.isStatusCode(403) // this should pass when the page returns with the status code 403 "Forbidden"

I.goTo("https://mystore.com")
UI.isNotStatusCode(418) // this should pass when the page returns with the status code 403 "I'm a teapot"
```
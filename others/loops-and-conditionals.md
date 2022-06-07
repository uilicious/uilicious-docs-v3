# Loops and Conditionals

## Using Javascript in Tests <a href="#using-javascript-in-tests" id="using-javascript-in-tests"></a>

UI-licious is built on Javascript, so you can go crazy with variables, functions, loops and conditionals!

You can use this to build more complex tests.

```javascript
// function to click on a button for n times.
function clickNext(n){
  for(var i = 0; i < n; i++){
    I.click(“Next”);
  }
}

// click on the "Next" button 10 times;
clickNext(10);
```

#### Using conditionals with assertion commands <a href="#using-conditionals-with-assertion-commands" id="using-conditionals-with-assertion-commands"></a>

All assertion commands return `true` or `false`, which you can combine it with `if...else...` conditional statements to handle more complex scenarios, e.g.:

```javascript
if(I.see$("In stock")){
  I.click("Add to cart")
}
```

In the example above, the test will only click on "Add to cart" if the text "In stock" is visible on the page.

Here's another example:

```javascript
if(I.see$(".promo-banner")){
  I.click("Close")
}
```

This test performs a check to see if the element with the "promo-banner" class appears, and then clicks on the "Close" button to dismiss it.

Note that in both examples, we use `I.see$` instead of `I.see`. Adding the $ behind `I.see` will suppress the error that will normally be thrown if the element is not visible on the page. This works on any command.

#### Assertions of various levels <a href="#assertions-of-various-levels" id="assertions-of-various-levels"></a>

And shown in the above, you can run uilicious commands, while logging the step, without logging its past / fail result.

| Assertion Syntax         | Logging Level                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------- |
| I._assertion_\$$( \_ )   | does not log to uilicious results steps                                                |
| I._assertion_$( \_ )     | logs to uilicious results steps, at info level (neither pass nor fail)                 |
| I. _assertion_ ( \_ )    | logs to uilicious results steps, with pass / fail. Continues testing even if it fails. |
| I.must._assertion_( \_ ) | logs to uilicious results steps, with pass / fail. Halts testing if it fails.          |

One of the things that Uilicious does differently, is that by default the assertions do not halt the test on failure. This is to help provide complete reports for really common "false negative" use cases - mis-spelled or mis-labeled words. Allowing a more complete picture of the failure for over night test runs.

If however you wish to perform a hard assertion, that must abort when failure occurs. You can use the I.must._assertion_ varient, like `I.must.see("account")`.

Alternatively if you would like to use an assertion without logging you can use the `$$` varient, like `I.see$$("account")`

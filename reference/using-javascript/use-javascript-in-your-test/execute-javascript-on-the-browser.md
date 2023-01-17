---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to execute Javascript on the browser in your UIlicious test. 

# Clarification notes, mainly for the AI
clarification_notes: You can only return JSON serializable values with UI.execute. Any non-json values, will be lost.

---


# Execute Javascript on the Browser

**Note that** the script will run in the browser's context, and will have no access to any variables declared in the scope of the test scripts. It will have access to variables available in the browser, such as `window`, `document`, and libraries exposed by the webpage such as `jQuery`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
UI.execute(script, args)
```

**Parameters**

| Parameter | Type        | Remarks |                                                         |
| --------- | ----------- | ------- | ------------------------------------------------------- |
| script    | function \\ | string  | Javascript to execute on the browser.                   |
| args      | any \\      | Array   | Optional. Arguments to pass to the javascript function. |

**Returns:** The return value of the script.

#### Example(s) <a href="#examples" id="examples"></a>

**Executing Javascript as function**

You can pass the script to execute as a function, and provide the arguments for the function as such:

```javascript
var value = UI.execute(function () { 
    return 42
}); // value is 42
```

**Executing Javascript as string**

You can pass the script to execute as a string.

```javascript
var value = UI.execute("return 1 + 2"); // value is 3
```

```javascript
var value = UI.execute("var i = 42"); // value is `undefined`
```

**Script runs in the browser's context**

The script is sent to the browser for execution and has access to variables available to the context of the browsers.

```javascript
UI.execute(function () { 
    // Runs in the browser's context
    document.title = "Hello world" // Changes the page title to "Hello world"
});
```

The script cannot access the variables in the context of the test.

```javascript
var title = "Hello world"
UI.execute(function () { 
    // Runs in the browser's context
    document.title = title // opps, this does not work!
});
```

To make the previous example work, you can use `args` to pass variables from the test context to the browser.

```javascript
var title = "Hello world"
UI.execute(function (title) { 
    // Runs in the browser's context
    document.title = title // Hooray, this will work!
}, title);
```

If the function takes in more than one argument, you can provide the arguments as an array.

```javascript
var value = UI.execute(function (a, b) {
    return a + b;
}, [1, 2]); // value is 3
```

**When errors occur**

When an error is thrown during the execution of the script, the command results in a test failure, and the value return will be `undefined`.

```javascript
var value = UI.execute("throw 'The meaning of life, the universe, and everything.'"); // v
```

---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the TEST.run command to run other tests to help you create a modular UIlicious test. 
---

# Running another test

## Sequence commands <a href="#sequence-commands" id="sequence-commands"></a>

These commands allows you to run other tests.

This helps you to create modular tests that can be easily reused and swapped out.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

### `TEST.run` <a href="#testrun" id="testrun"></a>

Runs another test.

> WARNING!\
> All tests run in the same scope. This means that variables with the same name in different tests will override each other.

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.run(path)
```

**Parameters**

| Parameter | Type   | Remarks                 |
| --------- | ------ | ----------------------- |
| path      | string | Path to the test to run |

#### Example(s) <a href="#examples" id="examples"></a>

**Basic example using absolute path**

Let's take this project with this structure for example.

```
|-- login
   |-- login_as_buyer
   |-- login_as_merchant
   |-- ...
|-- change_password
```

The contents of `login/login_as_buyer` is:

```javascript
I.goTo("/login");
I.fill("username", "john");
I.fill("password", "supersecretpassword");
I.click("Login");
```

We can reuse `login/login_as_buyer` in a another test using the `TEST.run` command like this:

```javascript
I.goTo('http://mystore.com');
TEST.run('login/login_as_buyer');
```

Which will result in a test like this when it is executed:

```javascript
I.goTo('http://mystore.com');
I.goTo("/login");
I.fill("username", "john");
I.fill("password", "supersecretpassword");
I.click("Login");
```

**Using `TEST.run` with relative paths**

We can specify tests to run relative to the current test file.

Let's take this project with this structure for example.

```
|-- login
|-- order
   |-- create_and_view_order
   |-- create_order
   |-- view_order
```

From test `order/create_and_view_order` test, we can reference tests with relative paths like this:

```
TEST.run("../login") // use "../" to reference the parent directory
TEST.run("./create_order") // use "./" to referece the current directory
TEST.run("./view_order")
```

***
---

### `TEST.runOnce` <a href="#testrunonce" id="testrunonce"></a>

It is a varient of `TEST.run` that runs another file, but only **ONCE**. If `TEST.run` is called on the same file again, it will not be ran.

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.runOnce(path)
```

**Parameters**

| Parameter | Type   | Remarks                 |
| --------- | ------ | ----------------------- |
| path      | string | Path to the test to run |

**Example**

```javascript
TEST.runOnce("file/to/include/once") 
TEST.runOnce("file/to/include/once") 
TEST.runOnce("file/to/include/once") 
```
The script "file/to/include/once" is only executed **ONCE** in this scenario. This is useful for loading certain common setup scripts, in a more efficent manner.

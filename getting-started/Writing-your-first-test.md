---
# Write a short description about the page. This will be displayed on google search results.
description: Learn to automate your first test for your website using UIlicious with this quick guide.

# Disable search for the getting started guides
search: false
---

# Write your first test

## Getting Started with UIlicious

Welcome to UI-licious! This guide will help you create your first automated test to ensure your web application delivers a flawless user experience.

## What is UIlicious?

UI-licious is a powerful yet easy-to-use tool designed to automate testing for your website. It validates user journeys, ensuring that your users don’t encounter unexpected issues—whether they're signing up for an account or completing a purchase.

Let’s dive in and start testing your website to ensure your users have a smooth experience.

## Quick Start Tutorial

In this quick-start tutorial, you will learn how to create a basic login test.

1. Create a Project
2. Set up Your First Test
3. Write and Run Your First Test


### Step 1: Create a Project 

Before we begin, you'll need a UI-licious account. If you haven’t signed up yet, you can do so [here](https://user.uilicious.com).

After logging into UI-licious:

1. Click the **+ Project** button to create a new project.

![Create a new project](/static/img/getting-started/write-your-first-test/create-project-btn.png)

2. Enter a name for your project.
3. Click the **Create** button.

![Name your first project](/static/img/getting-started/write-your-first-test/create-project-modal.png)


### Step 2: Set up Your First Test

Now that you’ve created a project, it’s time to set up your first test.

1. Click the **+** button in the toolbar on the left pane to add a new test file.

![Create a new test](/static/img/getting-started/write-your-first-test/click-add-file-btn.png)

2. Give your test a meaningful name like "Login with valid credentials"
3. Enter the URL of the website you want to test. For this tutorial, we will use `https://www.github.com`
4. Click the **Add** button.

![Name your first test](/static/img/getting-started/write-your-first-test/create-test-file.png)

### Step 3: Write and Run Your First Test

Now it's time to write your first test script.

![Write your first test script](/static/img/getting-started/write-your-first-test/my-first-test-script.png)

For our first test, we'll test the login functionality. Let's break it down into four key actions: 
1. Navigate to a website
2. Clicking an element
3. Filling an input
4. Validating text on the page

#### Navigating to a Website

Start by using the `I.goTo` command to navigate to `https://www.github.com`:

```javascript
I.goTo("https://www.github.com")
```

#### Clicking Elements

Next, use `I.click` to click on the **Sign in** button:

```javascript
I.click("Sign in")
```

#### Filling Inputs

To fill in an input, use the `I.fill` command, providing the field name and the input text.

```javascript
I.fill("Email", "bruce@waynecorp.com")
I.fill("Password", "alfredmakesthebestpies")
```

#### Validating Text on the Page

Then use `I.click` to click the Sign in button to submit the form:
```javascript
I.click("Sign in")
```

Finally, use `I.see` to validate that the expected text is shown on the page:

```javascript
I.see("Hello, Bruce")
```

![View of the script inside the editor](/static/img/Script Editor.png)

### Running Your Test

Once your script is ready, click the **Run** button. If everything is set up correctly, your test should execute, and you should see the outcome of the test with screenshots taken for every step.

![Run your first test!](/static/img/getting-started/write-your-first-test/run-my-first-test-script.png)

Congratulations, you've just written and run your first UI-licious test!

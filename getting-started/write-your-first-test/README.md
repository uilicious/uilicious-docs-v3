# Write your first test

## Getting Started with UIlicious

> The UIlicious platform is used in this quick start guide.

### What is UIlicious

UIlicious is a simple and powerful tool that allows anyone to test and analyze user journeys.

Use it to test your web apps to ensure that your users do not encounter unexpected failures. For example, during crucial user flows, a user could be registering for an account or completing their order.

Let's build a better user experience, together.

### Quick Start

In this quick-start tutorial, you will learn how to create a basic user test.

1. [Sign up for UI-licious](./#step-1-sign-up-for-ui-licious)
2. [Create a Project](./#step-2-create-a-project)
3. [Set up our First Test](./#step-3-set-up-our-first-test)
4. [Learn Basic Commands](./#step-4-basic-commands)
5. [Write our First Test](./#step-5-write-our-first-test)

You can find [**External Resources**](./#external-learning-resources) at the end of this quick-start tutorial.

### Step 1: Sign up for UI-licious

Sign up for an account with UI-licious [here](https://user.uilicious.com/signup).

### Step 2: Create a Project

Let's get started with creating our first user test on the UIlicious platform or also known as **UIlicious Studio**.

For the rest of the tutorial, we will use [https://www.amazon.com](https://www.amazon.com) for our user test.

Once logged into UIlicious, click the **+ Project** to create a new Project.

A Project can contain one or more tests.

Name our new Project, **My First Project**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649112961/ui-licious/amazon-getting-started-example/Signup-2\_eu0qia.png)

Then, click the blue **Create** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649279350/ui-licious/amazon-getting-started-example/Signup-2a\_qeei98.png)

### Step 3: Set up our First Test

Now, that we have named our first project, we will need to name our first test, and add the URL of the website we want to test.

Let's name our test, **myfirstScript**.

Type in the URL: [https://www.amazon.com/](https://www.amazon.com/).

![Setting up your first test in UI-licious requires a new test name and the URL of the website.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649112961/ui-licious/amazon-getting-started-example/Signup-3\_fyzee8.png)

Then, click the blue **Add** button.

![Click the blue Add button to add your first test to your Workspace in UI-licious. Your Workspace will display your user tests.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649113557/ui-licious/amazon-getting-started-example/Signup-3a\_gj9obg.png)

### Step 4: Basic Commands

Let's get started with our user journey with some basic commands.

Basic commands are used to automate basic user interactions with web applications.

For example, a user visits a page, fills in forms, clicks buttons, and checks to see if a particular text is visible.

We will use the most common commands for testing most of your web applications.

| Command   | Description                                          |
| --------- | ---------------------------------------------------- |
| `I.goTo`  | Navigate to a URL                                    |
| `I.click` | Click on things on the site                          |
| `I.fill`  | Fill in input boxes                                  |
| `I.see`   | Assert that something is seen, typically, a message. |

### Step 5: Write our First Test

First, let's have our user visit [https://www.amazon.com](https://www.amazon.com) using the `I.goTo` command.

`I.goTo("https://www.amazon.com")`

![Use the I.goTo command in the white box of the UIlicious platform to visit a website.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649112961/ui-licious/amazon-getting-started-example/Signup-4\_g0xpan.png)

Next, we want our user to click the yellow **Sign in** button on the current page.

![Use the I.click command in the white box of the UIlicious platform to click on something on the website.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649112962/ui-licious/amazon-getting-started-example/Signup-5\_gdphpx.png)

{% hint style="info" %}
**NOTE**:\
\
Use our throwaway e-mail service, [https://inboxkitten.com/](https://inboxkitten.com/), to test the user sign-up flows in your online apps.
{% endhint %}

Now, let's have our user log in using their email.

To specify where we want to fill in the form, we can use the following commands:

`I.fill("Email","youremail@inboxkitten.com")`

`I.click("Continue")`

![Use the I.fill and I.click command to fill in user information.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649712954/ui-licious/amazon-getting-started-example/Signup6\_yr353z.png)

Use the same commands for Password.

`I.fill("Password","yourPasswordGoesHere")`

`I.click("Sign in")`

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649713638/ui-licious/amazon-getting-started-example/Signup-7\_qh5wxv\_copy\_oohvre.png)

Now, let's confirm we have logged into our account.

Use the `I.see("")` command to hint to the test to focus on a specific element of the website. In this case, we want to make sure we see the name, Bruce.

Use the commands to confirm we have logged into our user's account:

`I.see("Hello, Bruce")`

Click the green **Run** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649713944/ui-licious/amazon-getting-started-example/Signup-8\_v3yrht\_copy\_tzi51e.png)

Our test is a success!

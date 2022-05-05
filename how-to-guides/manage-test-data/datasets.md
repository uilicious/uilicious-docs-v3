# Datasets

## What is a Dataset?

A **Dataset** is a collection of test data (property and its value) that can be used across multiple tests and manage your sensitive test data securely (e.g. URLs, passwords, and usernames).

If you are interested in learning how to mask sensitive test data, read more about that in [Secure Test Data](https://app.gitbook.com/o/-L\_zn3xNF3y1vIcZ2cNG/s/5Gc1KG0UQkd4sSXDq2Vm/how-to-guides/manage-test-data/secure-test-data).

Otherwise, continue to learn how to create and use a **Dataset**.

![The UI-licious Editor allows you to add in Datasets to your tests.](https://lh3.googleusercontent.com/cdsAbfb91j60iuIhUlCP3rlMakZ0j3iiWINSvQCIicf9sfTS8dnl2V3qrndHBxplDAZMbYJkG7QQ1l5ovvx3KWDqoYqoe6MypoSBpFoTfCnvOQ3EcvSo24xe65ElNPIm9HmoLWX4)

### Creating a Dataset

In the Editor, click on the **Dataset** dropdown menu.

![](https://lh5.googleusercontent.com/S6TUag2iF1kbs5bUxe17ky1htu0OjQ2Qfnw3etKkGQeitHtbNRa2f-6D97Lx3PiNEwRu1Jcow56aZhqr4KrUT\_zI-FoupMjIAutOynJdmWlzx0ziEh9SReUdazJjQBmL\_feSq251)

Select **+ Add Dataset** option to create a new dataset.

![](https://lh5.googleusercontent.com/WkmZ460TKcOPr40I2Y4asXBHkfCnHcYnfZJKJAxpzVkOIw0lVLJIOZHQT-fM-8cF3zUwyHygvHwJ3G9IMJd-WjMewRi9s4mWL2DYaO\_kHrucPN0Xe1wPDAKAl9NcGugxrv3i6qMt)

Enter a name for the dataset, e.g. "Production".

![](https://lh5.googleusercontent.com/xA5gJo\_Kbllp98AUu9CAsqvnWopVDbhAI\_kqNVyRHQW8hHfqdxGukszfNNxrkU3zKHW-b5J2t0EsoK9dG3ZQ0zLtzc-4\_hHh1vOMTShQl2iNpmxmIYoOJFwXMEKPURvROoCWXyBy)

Inside the **Add Dataset** modal window, there are two columns: **Property** and **Value**.

The **Property** column is the name and representation of the field you wish to use such as a Password or Username.

The **Value** column is where specific information is entered such as the password email address, and username.

To add a property to the dataset, enter the Property name and its Value, and press the **Add** button.

**Here's an example of how the dataset setup would look as you add new fields to your dataset.**

![](https://lh6.googleusercontent.com/MnIc9Hp7f7a\_rafDcgh3gsKi1AUKS3A1KrTCY3QmyF43DFoWd8KI1SAlnaJB28MDTVIMWxdPqBfVZcI6V5efjsKOrUCFnKmdkoM9Li1VqZnldaImZQSyY4KX5BRaTy22aEfEDaMi)

Click the **Save** button. You should see the new dataset in your "Dataset" dropdown.

![](https://lh5.googleusercontent.com/UonP7gq4ZdVwgePB4x7Ujguu7f8QiJ4xT-t6uK\_axqQKLfgT0rnOpsk1qBcnxDo2qc0ChScd7UGLW4J7HiWS41mX4ndfzh8oZ\_wikEbvAx99pPw7iGTCXg9a3XFoBe1\_waWr-iBl)

### **Using a Dataset**

Without using a Dataset, your test will look like this:

```javascript
I.goTo("https://github.com/login")
I.fill("Email", "johndoe@inboxkitten.com")
I.fill("Password", "supersecretpassword")
I.click("Sign in")
I.see("Incorrect username or password.")
```

{% hint style="info" %}
**Good to know**:\
\
The text entered in the Property field within the Dataset modal window is case-sensitive.

So, if you entered Data.Password _with a capital P_**,** this must be the same in your test script.
{% endhint %}

To use a Dataset in your test script, use the **I.fill** command, and replace the values with **DATA.Username** and **DATA.Password**.

When a dataset is selected, the properties and values will be loaded to the `DATA` object.

**This is an example of how a test looks with the Dataset values.**

```javascript
I.goTo("https://github.com/login")
I.fill("Email", "Data.Username")
I.fill("Password", "Data.Password")
I.click("Sign in")
I.see("Incorrect username or password.")
```

Click on the **Run** button to see your results.

In the Testing Results, you will notice words like “Data.Username" and "Data.Password" to represent any values in your dataset.

![](https://lh5.googleusercontent.com/gPeJB2AlU1xG5srJiasHZkA3CczUDOoy-quLOjH4wki5r5t6UyE7GyaXhy\_6U50P-\_w87PfaqOrpZmESqVEM1\_BN4ePVAOJvL58Rdu4K8orT-VDZZlNyGMj3IW3TDLMkUgEz8nTd)

---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.select command to select a dropdown in your UIlicious test.
---

# Select Dropdowns

### **Select a dropdown**

Here, we will use this "Number" dropdown list for illustration.

<details>

<summary>Number</summary>

One

Two

Three

</details>

Specify the `option`;

```javascript
 I.select("Two");
```

Or, specify the `list` and the `option`:

```javascript
I.select("Number", "Two");
```

This selects the option "Two".

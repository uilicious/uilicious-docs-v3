---
# Write a short description about the page. This will be displayed on google search results.
description: List of IP to whitelist that UIlicious uses when running tests.
---

# Whitelisting IP addresses for UI-licious Cross-Browser Testing

{% hint style="info" %}
This guide is only for UI-licious cloud customer. If you are using a self-hosted installation of UI-licious, please contact your system administrator.
{% endhint %}

If you are using UI-licious for cross-browser testing, you may need to whitelist our IP addresses to ensure the test browsers can access your application, or to to disable ReCapcha, Two-Factor Authentication (2FA), or analytics specifically for traffic originating from the UI-licious testing grid.

Here's the list of static IP addresses from which UI-licious will run your tests:

```
104.248.143.86
104.248.58.222
138.68.10.120
139.59.87.137
142.93.136.179
142.93.39.99
149.129.253.194
158.140.130.227
159.203.60.250
159.65.9.218
165.227.87.229
167.99.202.76
206.189.113.202
47.244.249.38
132.147.79.54
188.166.148.123
188.166.156.193
64.227.33.68
```

## Troubleshooting: 502 Bad Gateway Errors

If you encounter **502 Bad Gateway** errors when the test browser attempts to navigate to your application, it could indicate that the application is inaccessible due to network restrictions. To resolve this:

1. **Check Network Access Rules**: If your website is behind a firewall, ensure that the IP addresses provided are whitelisted in your network access rules.
2. **Check Public Accessibility**: If your website is not behind a firewall, check that your website is publicly accessible on the internet.

If the 502 errors persist even after whitelisting the IP addresses or if your website is publicly accessible, please contact [our support team](mailto:support@uilicious.com) for further assistance.

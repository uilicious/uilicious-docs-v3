---
# Write a short description about the page. This will be displayed on google search results.
description: How to generate time-based OTPs for 2FA testing
---

# Generating Time-based OTPs 

This article covers how to use the built-in `topt` plugin to generate **time-based OTPs** for handling **2-Factor Authentication (2FA)** login flows.

This can be applied to Single Sign On (SSO) logins that support using OAUTH authentication, e.g. Google login, Github login, PingID, etc.

## Getting the OATH key

To begin, you will need to get the OATH key which will be used to generate the OTPs. The OATH key is usually shown to you during the first time registration of an authenticator device on the application. Most applications often display the OATH key as a QR code by default, but will offer an option to view the key as a text. 

### Example: Getting the OATH key for Google Login

As an example, the steps below shows you how to get the OATH key for Google Login:

1. At the Google Account Security Settings page, add **"Authenticator"** as a new sign in method

![](/static/img/topt/topt-google-setup-1.png)

2. Click on "Set up Authenticator"

![](/static/img/topt/topt-google-setup-2.png)

3. The OATH key is displayed as a QR code, click on "Can't scan it" to view the key as a text.

![](/static/img/topt/topt-google-setup-3.png)

4. The OATH key is now shown to you as a text, copy the key to a notepad, as we will use this key for generating the OTP in the tests.

![](/static/img/topt/topt-google-setup-4.png)

5. **Make sure to click "Next" and finish the registration of the authenticator, so that the OATH key is registered.** You can use any authenticator app or [this TOTP token generator site](https://totp.danhersam.com/) to generate an OTP to complete the registration.


## Generating the OTP in your test

Once you have the OATH key, you can use the "topt" plugin to generate the OTP during test runs.

First, load the `topt` plugin into the test script.

```javascript
let TOPT = TEST.loadPlugin("topt");
```

Then, run `generateOTP`, passing in the OATH key, to generate the one-time password.
```javascript
let otp = TOPT.generateOTP("<oath_key>")
```
By default, this will generate an 6-digit OTP, with a period of 30 seconds, using "SHA-1" algorithm.

You may change the number of digits, the period, and the algorithm, by passing in additional options.
```javascript
let otp = TOTP.generateOTP("<oath_key>", { 
	digits: 8, // generate an 8-digit OTP
	period: 60, // generate an OTP for a 60 seconds time window
	algorithm: "SHA-512" // generate an OTP using "SHA-512" algorithm
 })
```

Finally, you can use the `I.fill` command to fill the text input field with the OTP.

### Full working example and test script

Here's working example demonstrating using the plugin to generate a valid OTP to solve the 2FA challenge for Google Login, in order to login to the Spotify application.

<iframe src="https://snippet.uilicious.com/embed/test/private/CjypDzyCtAmTrQVdnKjJoC?stepNum=12&autoplay=0&loop=1" frameborder="0" width="100%" height="400px;"></iframe>

The full test script for the test demostrated above is as such:
```javascript
var email = "<google email>"
var password = "<password>"
var oath_key = "<oath_key>"


// Login to spotify
I.goTo("https://open.spotify.com/")
I.click("Log in")
I.see("Log in to Spotify")

// Login with google
I.click("Continue with Google")
I.fill("Email", email) 
I.click("Next")
I.fill("Password", password) 
I.click("Next")

// Generate and fill OTP if 2FA challenge appears
if(I.see$("Get a verification code")){
	let TOTP = TEST.loadPlugin("totp")
	let otp = TOTP.generateOTP(oath_key)
	I.fill("code", otp)
	I.click("Next")
}

// Validate successful login to Spotify
I.amAt("https://open.spotify.com/")
```



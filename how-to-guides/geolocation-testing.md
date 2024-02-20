---
# Write a short description about the page. This will be displayed on google search results.
description: In this guide, we'll learn how to configure tests to run in specific regions for geolocation testing.
---

# Geolocation Testing

{% hint %}

**Note that this feature is only available to UI-licious cloud users.** It is not available for self-hosted installations.

{% endhint %}

You can configure tests to run in specific regions for geolocation testing. This is useful for testing content that are region locked based on IP addresses, or for testing timezone-sensitive features.

## Available regions

These are the regions that are currently available:

**Asia Pacific**
| Region    | Timezone  |
|-----------|-----------|
| Hong Kong | +8    GMT |
| Singapore | +8    GMT |
| Jakarta   | +7    GMT |
| Bangalore | +5:30 GMT |

**Europe**
| Region    | Timezone  |
|-----------|-----------|
| Amsterdam | +1    GMT |
| Frankfurt | +1    GMT |
| London    | +0    GMT |

**North America**
| Region         | Timezone  |
|----------------|-----------|
| Toronto        | -4    GMT |
| New York       | -5    GMT |
| San Francisco  | -8    GMT |

{% hint %}

Note that timezones are fixed and will not be affected by daylight savings. 

{% endhint %}


## Configuring test run region

{% hint %}

Note that only **Chrome** and **Firefox** browsers are supported in multiple regions.

{% endhint %}

To select a region for your test run, click on the Gear button in the Run toolbar to view the expanded Test Run Configuration menu.

Click on "**Region**" to select a region.

![](/static/img/test-configuration/configure-region__step-1.png)

**Select a region** that you want to run the test from.

![](/static/img/test-configuration/configure-region__step-2.png)

Once selected, run the test. The region that a test is ran with is indicated on a test report in the bottom left corner.

![](/static/img/test-configuration/configure-region__step-3.png)

## Setting default region

By default, tests will always be ran with the region set to "No Preference", which uses a range of IP addresses based in UK, with the timezone set to +0 GMT.

If you wish to choose a different region as the default, you may do so in two ways:
1. Set a default region
2. Set a default saved configuration with a selected region

### Setting a default region

Click the Gear button in the Run toolbar to view the expanded Test Run Configuration menu.

Then, click "**Add configuration**" or "**Manage configurations**" to open the Configurations settings dialog.

![](/static/img/test-configuration/set-default-region__step-1.png)

**Select a region** you want to use as default, then click **"Set default"**.

![](/static/img/test-configuration/set-default-region__step-2.png)

Now, whenever you open the project, the default region will be automatically selected. **Note that this default setting will be overridden if you have set a default saved configuration.**

### Setting a default region using saved configrations

Click the Gear button in the Run toolbar to view the expanded Test Run Configuration menu.

Then, click "**Add configuration**" or "**Manage configurations**" to open the Configurations settings dialog.

![](/static/img/test-configuration/set-default-region__step-1.png)

**Select a region** you want to use as default, then **save the configuration**, and **set the saved configuration as your default**.

![](/static/img/test-configuration/set-default-region__step-3.png)

Now, whenever you open the project, the default saved configuration will be loaded, applying the selected region from the saved configuration.


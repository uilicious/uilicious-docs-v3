# Set up Telegram Notifications

In this section, you will learn how to set up notifications on Telegram using a publicly-provided webhook called [Integram](https://integram.org/).

This section will guide you through the steps of setting up and integrating Telegram with UIlicious. It will provide you with a brief overview of Telegram as well.

* [Prerequisites](set-up-telegram-notifications.md#prerequisites)
* [What is Telegram](set-up-telegram-notifications.md#what-is-discord)
* Setting up Telegram Notifications in UIlicious
  * Step 1: [View the Notifications Section in UIlicious](set-up-telegram-notifications.md#step-1-view-the-notifications-section-in-uilicious)
  * Step 2: [Making a Webhook with Integram](set-up-telegram-notifications.md#step-2-making-a-webhook-in-discord)&#x20;
  * Step 3:
  * UIlicious Notification in Telegram Example

Once you have properly configured your webhook URL and added it to your Notification Settings, UIlicious can send test run alerts to your Telegram channel.

### Prerequisites

* Active Telegram Account
* Know how to [Schedule an Automated Job](../schedule-an-automated-job/)

### What is Telegram?

### Step 1: View the Notifications Section in UIlicious

To view the Notifications section, you can open the **Monitoring** tab in UIlicious studio.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652332/ui-licious/setting-up-notifications/monitoring-tab-active.png)

In **Monitoring**, you can view your complete list of jobs.

Then, click on the **Schedule New Job** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653413563/ui-licious/setting-up-notifications/scheduleajob\_c9hyqi.png)

Scroll down to the **Notifications** section.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652712/ui-licious/setting-up-notifications/scroll-to-notifications-section.gif)

Click the toggle next to **Notify by Webhook**.

Then, open the dropdown menu next to **Webhook** and select **Others**.



![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652028/ui-licious/setting-up-notifications/toggle\_on\_webhooks.gif)

### Step 2: Making a Webhook with Integram

Now, that we know where our Webhook URL goes in UIlicious, let's create our Webhook in UIlicious.




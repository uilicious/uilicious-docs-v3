# Set up Discord Notifications

In this section, you will learn how to set up notifications on Discord using their provided webhook.

This section will guide you through the steps of setting up and integrating Discord Webhooks with UIlicious. It will provide you with a brief overview of Discord.

* [Prerequisites](set-up-discord-notifications.md#prerequisites)
* Setting up Discord Notifications in UIlicious
  * Step 1: [View the Notifications Section in UIlicious](set-up-discord-notifications.md#step-1-view-the-notifications-section-in-uilicious)
  * Step 2: [Making a Webhook URL in Discord](set-up-discord-notifications.md#step-2-making-a-webhook-in-discord)
  * Step 3: [Add the Webhook URL to Your UIlicious Notification Settings](set-up-discord-notifications.md#step-3-add-the-webhook-url-into-your-uilicious-notification-settings)

Once you have properly configured your webhook URL and added it to your Notification Settings, UIlicious can send test run alerts to your Discord channel.

### Prerequisites

* Active Discord Account
* Know how to [Schedule an Automated Job](./how-to-guides/set-up-notification.md)
* Basic Knowledge of Webhooks

### Step 1: View the Notifications Section in UIlicious

To view the Notifications section, you can open the **Monitoring** tab in UIlicious studio.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652332/ui-licious/setting-up-notifications/monitoring-tab-active.png)

In **Monitoring**, you can view your complete list of jobs.

Then, click on the **Schedule New Job** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649282897/UI-licious:%20Monitoring/scheduleaJob-2\_klnawl.png)

Scroll down to the **Notifications** section.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652712/ui-licious/setting-up-notifications/scroll-to-notifications-section.gif)

Click the toggle next to **Notify by Webhook**.

Then, open the dropdown menu next to **Webhook** and select **Others**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652028/ui-licious/setting-up-notifications/toggle\_on\_webhooks.gif)

### Step 2: Making a Webhook in Discord

Now, that we know where our Webhook URL goes in UIlicious, let's create our Webhook in Discord.

Open **Server Settings** in Discord.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652654139/ui-licious/setting-up-notifications/scroll-to-Server-Settings-in-Discord.png)

Open the **Integrations** tab, and select **Create Webhook**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652654319/ui-licious/setting-up-notifications/go-to-integrations-and-select-create-webhook\_wjhupu.png)

Feel free to customize your avatar and name your Webhook.

Click the **Channel** name that you would like UIlicious to send notifications to.

Then, click **Copy Webhook URL**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652654609/ui-licious/setting-up-notifications/customize-your-webhook.png)

### Step 3: Add the Webhook URL into Your UIlicious Notification Settings

Now, that we have our Webhook URL, let's paste it in your UIlicious Notification Settings.

Then, click the **Schedule** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652655093/ui-licious/setting-up-notifications/paste-your-webhook-URL-into\_UIlicious\_r0d0hf.png)


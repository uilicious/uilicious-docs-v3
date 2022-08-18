# Set up Telegram Notifications

In this section, you will learn how to set up notifications on Telegram using a publicly-provided webhook called [Integram](https://integram.org/).

This section will guide you through the steps of setting up and integrating Telegram with UIlicious. It will provide you with a brief overview of Telegram as well.

* [Prerequisites](set-up-telegram-notifications.md#prerequisites)
* Setting up Telegram Notifications in UIlicious
  * Step 1: [View the Notifications Section in UIlicious](set-up-telegram-notifications.md#step-1-view-the-notifications-section-in-uilicious)
  * Step 2: [Making a Webhook with Integram](set-up-telegram-notifications.md#step-2-making-a-webhook-url-with-integram)&#x20;
  * Step 3: [Add the Webhook URL to Your UIlicious Notification Settings](set-up-telegram-notifications.md#step-3-add-the-webhook-url-to-your-uilicious-notification-settings)
  * [UIlicious Notification in Telegram Example](set-up-telegram-notifications.md#uilicious-notification-in-telegram-example)

Once you have properly configured your webhook URL and added it to your Notification Settings, UIlicious can send test run alerts to your Telegram channel.

### Prerequisites

* Active Telegram Account
* Telegram Installed (through App Store or Google Play)
* Know how to [Schedule an Automated Job](./schedule-a-job.html)

### Step 1: View the Notifications Section in UIlicious

To view the Notifications section, you can open the **Monitoring** tab in UIlicious studio.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652332/ui-licious/setting-up-notifications/monitoring-tab-active.png)

In **Monitoring**, you can view your complete list of jobs.

Then, click on the **Schedule New Job** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653413563/ui-licious/setting-up-notifications/scheduleajob\_c9hyqi.png)

Name your job.

Then, scroll down to the **Notifications** section.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652712/ui-licious/setting-up-notifications/scroll-to-notifications-section.gif)

**Note**: You can choose **When** to receive notifications, there are two options available: \
**Always** or **Error**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653501856/ui-licious/setting-up-notifications/telegram/when-to-receive-notifications.png)

Next, click the toggle next to **Notify by Webhook**.

Then, open the dropdown menu next to **Webhook** and select **Others**.



![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1652652028/ui-licious/setting-up-notifications/toggle\_on\_webhooks.gif)

### Step 2: Making a Webhook URL with Integram

Now, that we know where our Webhook URL goes in UIlicious, let's create our Webhook URL in Integram.

First, open Telegram.

Then, click the button in the upper-right-hand corner.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502479/ui-licious/setting-up-notifications/telegram/telegram-notif-0\_y07o7p.png)

Then, click **New Group**.&#x20;

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502479/ui-licious/setting-up-notifications/telegram/telegram-notif-1\_bqaeg6.png)

Type in **@integram\_bot** to see the available users to select from.

Then, select the **Integram** bot.&#x20;

Feel free to add more users to the group that would like to receive the same notifications.&#x20;

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502480/ui-licious/setting-up-notifications/telegram/telegram-notif-2\_h8j2qh.png)

Then, click **Next**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502478/ui-licious/setting-up-notifications/telegram/telegram-notif-3\_p6ylvl.png)

Now, type in the name of your new group.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502478/ui-licious/setting-up-notifications/telegram/telegram-notif-4\_jabkjs.png)

Then, click the **Create** button to create your new group.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653503570/ui-licious/setting-up-notifications/telegram/telegram-notif-5\_xynqgh.png)

Once you have created a new group, you will receive options on how to receive notifications from the Integram bot.

Click the **Webhook** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502479/ui-licious/setting-up-notifications/telegram/telegram-notif-6\_ohzxfb.png)

Now, you should see a bot titled Horn.

Click the **Start** button to receive your webhook.&#x20;

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502479/ui-licious/setting-up-notifications/telegram/telegram-notif-7\_u3mguj.png)

Copy the Webhook URL provided by the Horn bot.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502480/ui-licious/setting-up-notifications/telegram/telegram-notif-8\_ycquh3.png)

### Step 3: Add the Webhook URL to Your UIlicious Notification Settings

Now, that we have our Webhook URL, let's add it to our UIlicious Notification Settings.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502480/ui-licious/setting-up-notifications/telegram/telegram-notif-9\_r8opkb.png)

Then, click the blue **Schedule** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653502480/ui-licious/setting-up-notifications/telegram/telegram-notif-10\_y7cnnc.png)

### UIlicious Notification in Telegram Example

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653504594/ui-licious/setting-up-notifications/telegram/telegram-example.png)

# Set up Microsoft Teams Notifications

In this section, you will learn how to set up notifications on Teams.

This section will guide you through the steps of setting up and integrating Teams with UIlicious.

* [Prerequisites](set-up-microsoft-teams-notifications.md#prerequisites)
* Setting up Teams Notifications in UIlicious
  * Step 1: [View the Notifications Section in UIlicious](set-up-microsoft-teams-notifications.md#step-1-view-the-notifications-section-in-uilicious)
  * Step 2: [Making a Webhook with Teams](set-up-microsoft-teams-notifications.md#step-2-making-a-webhook-with-teams)
  * Step 3: [Add the Webhook URL to Your UIlicious Notification Settings](set-up-microsoft-teams-notifications.md#step-3-add-the-webhook-url-to-your-uilicious-notification-settings)
  * [UIlicious Notification in Teams Example](set-up-microsoft-teams-notifications.md#uilicious-notification-in-teams)

Once you have properly configured your webhook URL and added it to your Notification Settings, UIlicious can send test run alerts to your Teams.

### Prerequisites

* Active Teams Account
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

Then, open the dropdown menu next to **Webhook** and **** select **Microsoft Teams**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1654117021/ui-licious/setting-up-notifications/teams/teams-notifications-on.gif)

### Step 2: Making a Webhook with Teams

First, launch the Microsoft Teams application.

Next, click the **Apps** icon.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655512636/ui-licious/setting-up-notifications/teams/teams-1\_kt8y4q.png)

Then, search for "**Incoming Webhooks**".

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655512636/ui-licious/setting-up-notifications/teams/teams-2\_xsejxr.png)

Click the **Add to a team** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655512636/ui-licious/setting-up-notifications/teams/teams-3\_cl2brx.png)

Then, click **Setup a Connector**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655512636/ui-licious/setting-up-notifications/teams/teams-5\_pydcb6.png)

Click **Configure,** and add a name for your Webhook.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655512636/ui-licious/setting-up-notifications/teams/teams-7\_kdtxkn.png)

Name your Webhook.

Then, click **Create**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655512638/ui-licious/setting-up-notifications/teams/teams-9\_eyn6fo.png)

Next, copy your Webhook URL as we will use this in your UIlicious Notifications Settings.

Just a heads-up, this is what successfully setting up a Webhook looks like:

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655512637/ui-licious/setting-up-notifications/teams/teams-10\_rrca2m.png)

### Step 3: Add the Webhook URL to Your UIlicious Notification Settings&#x20;

Head back to UIlicious and scroll down to the Notifications section.

Next to Webhook URL, paste in the URL that you copied earlier.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1655513147/ui-licious/setting-up-notifications/teams/teams-example.png)

### UIlicious Notification in Teams Example

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1656342911/ui-licious/setting-up-notifications/teams/successful-notification-microsoft-teams\_rrnb90.png)

---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to setup scheduled job notification on UIlicious via Slack webhook.
---

# Set up Slack Notifications

In this section, you will learn how to set up notifications on Slack.

This section will guide you through the steps of setting up and integrating Slack with UIlicious by using Incoming Webhooks. Incoming Webhooks are unique URLs that allow us to post our alerts from UIlicious into Slack.

* [Prerequisites](set-up-slack-notifications.md#prerequisites)
* Setting up Slack Notifications in UIlicious
  * Step 1: [View the Notifications Section in UIlicious](set-up-slack-notifications.md#step-1-view-the-notifications-section-in-uilicious)
  * Step 2: [Making a Webhook with Slack](set-up-slack-notifications.md#step-2-making-a-webhook-with-slack)
  * Step 3: [Add the Webhook URL to Your UIlicious Notification Settings](set-up-slack-notifications.md#step-3-add-the-webhook-url-to-your-uilicious-notification-settings)
  * [UIlicious Notification in Slack Example](set-up-slack-notifications.md#uilicious-notification-in-slack-example)

Once you have properly configured your webhook URL and added it to your Notification Settings, UIlicious can send test run alerts to your Slack channel.

### Prerequisites

* Active Slack Account
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

Then, open the dropdown menu next to **Webhook.** \
****\
****Confirm that Slack is already selected.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507922/ui-licious/setting-up-notifications/slack/slack-notifications-1\_xmza0u.gif)

### Step 2: Making a Webhook with Slack

Prior to creating a webhook, please pick a name and choose a workspace on Slack if you have not already.&#x20;

Then, you will want to create a channel that will be dedicated to receiving UIlicious notifications.

First, click the **Add channels** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507920/ui-licious/setting-up-notifications/slack/slack-notifications-2\_h7kteq.png)

Then, click the **Create a new channel**. This channel will receive the UIlicious alerts.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507922/ui-licious/setting-up-notifications/slack/slack-notifications-3\_jqmxca.png)

Name the channel.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507919/ui-licious/setting-up-notifications/slack/slack-notifications-4\_b5olo9.png)

Then, click the **Create** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507918/ui-licious/setting-up-notifications/slack/slack-notifications-5\_tt1xqs.png)

Once you have created your channel, you will need to add the Incoming Webhooks app by Slack.

Click the **More** section.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507921/ui-licious/setting-up-notifications/slack/slack-notifications-6\_bbcfqq.png)

Then, click **Apps**.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507922/ui-licious/setting-up-notifications/slack/slack-notifications-7\_kmqljd.png)

Type **Incoming Webhooks** into the search bar.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507922/ui-licious/setting-up-notifications/slack/slack-notifications-8\_o2sz6k.png)

Click the **Add** button under the Incoming Webhooks app. This will navigate you to a new page.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507923/ui-licious/setting-up-notifications/slack/slack-notifications-9\_chtbft.png)

Next, click the green **Add to Slack** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507925/ui-licious/setting-up-notifications/slack/slack-notifications-10\_sixvcn.png)

Now, scroll down to the **Post to Channel** section. Choose the channel that you would like to receive UIlicious notifications.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507925/ui-licious/setting-up-notifications/slack/slack-notifications-11\_x8jsn1.png)

Click the green **Add Incoming Webhooks** integration.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507926/ui-licious/setting-up-notifications/slack/slack-notifications-12\_yvw41k.png)

Next to **Webhook URL**, copy the provided URL. This URL will be used in UIlicious.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507926/ui-licious/setting-up-notifications/slack/slack-notifications-13\_siobx2.png)

### Step 3: Add the Webhook URL to Your UIlicious Notification Settings

Head back to UIlicious and scroll down to the Notifications section.

Next to Webhook URL, paste in the URL that you copied earlier.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507924/ui-licious/setting-up-notifications/slack/slack-notifications-14\_jzvew9.png)

Then, select the blue **Schedule** button.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507924/ui-licious/setting-up-notifications/slack/slack-notifications-15\_pu5dtj.png)

### UIlicious Notification in Slack Example

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1653507925/ui-licious/setting-up-notifications/slack/slack-notifications-16\_lw00jc.png)

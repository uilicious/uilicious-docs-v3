---
# Write a short description about the page. This will be displayed on google search results.
description: In this guide, learn how to setup notifications on Microsoft Team for scheduled jobs
---

# Setting up Microsoft Teams notifications for Jobs

You can setup notifications for the outcomes of tests triggered by jobs on Microsoft Teams.

![Receive notifications on Microsoft Teams when tests fail](/static/img/jobs/teams-notifications/jobs__teams__example-notification.png)

In this guide, we'll cover the steps to setup notifications on Microsoft Teams.

[[toc]]

## Step 1: Create Incoming Webhook on Microsoft Teams

First, open the **Settings** for the channel where you want to receive notifications.

Under "**Connectors**", click "**Edit**".

![](/static/img/jobs/teams-notifications/jobs__teams__step1.png)

Search for "**Incoming Webhooks**", and click "**Configure**" to add a new Webhook. If "Incoming Webhook" is not available as a connector, please contact your Microsoft Teams administrator to enable the connector for your team.

![](/static/img/jobs/teams-notifications/jobs__teams__step2.png)

**Enter a name** for the webhook, for example "UI-licious Job", then click "Create".

![](/static/img/jobs/teams-notifications/jobs__teams__step3.png)

Once the webhook is created, **copy the webhook URL**.

![](/static/img/jobs/teams-notifications/jobs__teams__step4.png)


## Step 2: Configure Webhook Notification for job

Open the settings for the job, and under "Notifications", **enable "Notify by Webhook"**, **select "Microsoft Teams"** as the type of Webhook, and paste the webhook URL. Save the changes.

![](/static/img/jobs/teams-notifications/jobs__teams__step5.png)

Once configured, you will start receiving notifications on test outcomes in your Microsoft Teams channel.

![Receive notifications on Microsoft Teams when tests fail](/static/img/jobs/teams-notifications/jobs__teams__example-notification.png)
---
description: This section shows you how to schedule a job, delete a job, or disable a job.
---

# Schedule an Automated Job

## Introduction

Monitoring is creating a job to automatically run tests on a scheduled basis. You can schedule your tests to run at set intervals or at specific times.

There are two main ways to schedule automated test jobs in UIlicious: the UIlicious editor or the monitoring panel of the UIlicious editor. The Monitoring panel displays all scheduled jobs in one place.

You can select a single test or run tests in bulk in either approach.

There are also several options to configure in testing:

* Dataset
* Browser Type
* Resolution
* User Agent

Once you have created and scheduled a job, you can configure them to send instant notifications when automated tests fail or produce an error.

In this section, we will learn how to:

* [Create a scheduled job ](schedule-an-automated-job.md#schedule-a-job)
* [Delete a job](schedule-an-automated-job.md#how-to-delete-a-job)
* [Disable a job](schedule-an-automated-job.md#how-to-disable-a-job)
* [Check Job Status](schedule-an-automated-job.md#view-status-of-a-job)

If you are interested in setting up notifications to receive status updates about your scheduled job, check out our [How to Set Up Notifications](how-to-set-up-notifications/) section.

### Using the Editor

In the editor, click the **Schedule** button.

![The blue Schedule button in the editor allows you to schedule a job for your current test script.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649282897/UI-licious:%20Monitoring/scheduleaJob-1\_vcknh8.png)

### Using the Monitoring Panel

In the **Editor** panel, select the **Monitoring** pane at the top.&#x20;

In **Monitoring**, you can view your complete list of jobs.

![The blue Schedule a New Job button allows you to schedule a new job for your test scripts](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649282897/UI-licious:%20Monitoring/scheduleaJob-2\_klnawl.png)

### Schedule a Job

Under **General**, name your scheduled job.

![Enter your Job Name in the input box.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649285376/UI-licious:%20Monitoring/scheduleaJob-3\_cgrw23.gif)

Select either a single test or multiple tests.

![Select a single test or choose multiple tests for your scheduled job](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649285820/UI-licious:%20Monitoring/scheduleaJob-4\_loimqh.gif)

{% hint style="info" %}
Region and User-Agent only work in Chrome and Firefox browsers.
{% endhint %}

Select the desired Dataset, Browser, Resolution, Region, and User-Agent for your scheduled job.

![UI-licious allows you to add in datasets and select which browsers and resolution sizes to test in. Choose the region you would also like to test in.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649286615/UI-licious:%20Monitoring/scheduleaJob-5\_gvvzuu.gif)

Under **Schedule**, select when and how often you want the job to repeat.

You can make your jobs run daily or weekly.

You can also choose to schedule your job to run once a day or at regular intervals (ex. every six hours).

![UI-licious allows you to schedule your jobs daily or weekly.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649286864/UI-licious:%20Monitoring/ScheduleaJob-6\_df88hs.gif)

### How to Delete a Job

{% hint style="warning" %}
**WARNING**:\
\
You will no longer be able to see historical reports if you delete a job.&#x20;

Deleted jobs and reports cannot be recovered.
{% endhint %}

To view all scheduled jobs, go to the **Monitoring** pane.

Scroll down to the scheduled job you would like to delete.

Click the **three dots (...)** next to the blue **Run** button, and select **Delete**.

![Click the Delete button next to a scheduled job to delete the job.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649287592/UI-licious:%20Monitoring/ScheduleaJob-7\_cvelit.png)

Then, click the red **Delete** button.

![alt\_text](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649288445/UI-licious:%20Monitoring/scheduleaJob-8\_ti25kf.gif)

Confirm you have deleted the selected job.

### How to Disable a Job

{% hint style="info" %}
**Good to know:**\
****\
****Once a job is disabled, the user can still access reports.
{% endhint %}

To view all scheduled jobs, go to the **Monitoring** pane.

Scheduled jobs are enabled by default.

Scroll down to the scheduled job you would like to disable.

Click on the **three dots (...)** next to the blue **Run** button, and select **Disable**.

Then, click the red **Disable** button.

![Click the red Disable button to disable a scheduled job.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649288526/UI-licious:%20Monitoring/scheduleaJob-9a\_hdmsji.gif)

Confirm there is a **Scheduled test run is a disabled** label.

![A black Scheduled test run is disabled label should appear after disabling a job.](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649288248/UI-licious:%20Monitoring/ScheduleaJob-10\_sxejyh.png)

### View Status of a Job

A **status** tells the current state of your scheduled job in UIlicious.

Under **Status**, click the dropdown menu to reveal more options.

![](https://res.cloudinary.com/di7y5b6ed/image/upload/v1649781432/UI-licious:%20Monitoring/ScheduleaJob11.png)

### Set Up Notifications

If you are interested in learning more about setting up your notifications (whether it be email or an application of your choice), view our [How to Set Up Notifications](how-to-set-up-notifications/) section.

---
title: Deploy a Gridsome App on Azure Static Web Apps
date: 2020-06-08T15:10:12.691Z
published: true
tags:
  - gridsome
  - jamstack
canonical_url: true
description: In this tutorial, We'll go over how to deploy a static website
  using Azure Static Web Apps.
---
[Microsoft Build](https://mybuild.microsoft.com/home) happened a few weeks back, among the various exciting news, one of my favorite ones was the newly unveiled [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/). I'm excited to give it a try and show you how to deploy a Gridsome web application. There's already enough tutorials about this why write more? Well, because I couldn't find one with a Gridsome example and I decided to take on the opportunity, there's never enough written tutorials on a subject.

## What is Azure Static Web Apps?

Azure Static Web Apps is a service that automatically builds and deploys full-stack web apps to Azure from a GitHub repository.

![](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1591628792500_static-apps-overview.png)

These are some of the features it ships with out of the box:

* Free web hosting
* Free SSL Certificates
* Authentication Integrations
* Custom Domains
* Globally distributed

Here's a more detailed guide on how [Azure Static Web Apps Works](https://docs.microsoft.com/en-us/azure/static-web-apps/overview).

In this tutorial, We'll go over how to deploy a static website to Azure using the Static Web Apps service. For this example, I have a Gridsome app I'll like to deploy to this service, and I'll walk through how to set up and deploy my app.

## Prerequisites

To follow this guide, you need to have basic knowledge of Vue.js, have an Azure account, Node.js installed, and a GitHub account handy.

## Step 1:

Install Gridsome CLI tool:

```bash
npm install --global @gridsome/cli
```

## Step 2:

I’m using a starter project I created to get things moving fast here. Go ahead and run the command to create a new Gridsome project.

```
gridsome create my-blog https://github.com/lauragift21/gridsome-minimal-blog
```

Now run your app locally with the command.

```bash
npm run develop
```

![screenshot of gridsome blog](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590433661331_Screenshot+2020-05-25+at+8.07.25+PM.png)

## Step 3:

We have our [Gridsome](http://www.gridsome.org) application up and running, Let's push the app to GitHub we'll do so using the following commands:

```bash
git add.

git commit -m 'my new gridsome blog'
```

Next, create a repository on [GitHub](https://github.com/new) called my-fancy-blog or use any fancy name you want and run the following commands:

```bash
git remote add origin git@github.com:<YOUR-USER-NAME>/my-fancy-blog.git`

git push -u origin master
```

We've now added our application to GitHub successfully. Let's move on to the last step.

## Step 4:

This is where we deploy the web app on Azure Static Web Apps.

You need to have an active Azure account to follow these next steps.

* Login to your Azure account and navigate to Azure Portal
* Click on create a resource

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590606779748_Screenshot+2020-05-27+at+7.57.18+PM.png)

* Search for Static Web Apps and click create

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590607743578_Screenshot+2020-05-27+at+7.57.42+PM.png)

* Next, pick a subscription from the dropdown and pick a resource group in my case, I selected the default subscription and created a new resource group.
* Give your app a name and choose a region that’s closest to you.
* Click on the sign in with the GitHub button. It'll enable you to connect your repository to Azure Static Web Apps.

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590606908511_Screenshot+2020-05-27+at+8.05.59+PM.png)

* Once you have GitHub connected, you can choose your GitHub repository and choose the branch you want to deploy.

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590607195497_Screenshot+2020-05-27+at+8.11.08+PM.png)

* Specify a folder location to store static output in my case I’m using thedistdirectory.

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590607248709_Screenshot+2020-05-27+at+8.11.27+PM.png)

In the last step, we can review our configuration to make sure we have everything set up correctly and click create to get the app deployed.

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590607481589_Screenshot+2020-05-27+at+8.21.58+PM.png)

That's it! You'll get redirected to a page showing your app deployment is ongoing.

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590607486946_Screenshot+2020-05-27+at+8.22.27+PM.png)

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590607491471_Screenshot+2020-05-27+at+8.23.23+PM.png)

* To check how things are working under the hood, Log on to GitHub and check the actions tab on your repo.

![setting up azure static web apps](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590607496804_Screenshot+2020-05-27+at+8.23.33+PM.png)

You should see the actions running, and when that ends, your app should be live. Check back on the Azure portal you should see a browse button by clicking on it will take you to your deployed app🎉

![Deployed version of the blog](https://paper-attachments.dropbox.com/s_A01F5AB394E159A5771101449A83AC90C3F879B2DA59BD15747F4E3DA92C5900_1590607535650_Screenshot+2020-05-27+at+8.25.26+PM.png)

## Conclusion

That was fun! I'm quite impressed with how straightforward it was to get this working. In just a few clicks, I deployed version of my site. If you're interested in learning more about how to deploy another kind of application, The Azure team has a [well-documented guide](https://docs.microsoft.com/en-us/azure/static-web-apps/) on how to do that. I hope this was helpful as much I enjoyed writing and trying out Azure Static Web Apps.
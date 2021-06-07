---
title: Setup Sub-Domain on Polywork with Netlify + Namecheap
date: 2021-06-07T04:54:18.508Z
published: true
tags:
  - polywork
  - tutorial
canonical_url: true
description: I joined Polywork and as a result ended up setting up a custom
  Domain for my profile. Here's how I did it.
---
I joined [Polywork](https://www.polywork.com/) and as a result found out they allow you setup a custom domain for your profile which is very cool! In this article, I'll share how I did this with a setup hosted on [Netlify](https://www.netlify.com/).

### Wait what's Polywork?

Polywork is a platform for **Multiplayers** - creatives, developers, designers, anyone who is looking to build a platform with their personal and professional work and achievements that allows you to represent who you really are and the value you create.

![Polywork Landing Page](/images/uploads/screen-shot-2021-06-07-at-6.54.44-am.png)

Think of it as a mix of LinkedIn and Twitter where it's a platform you can share literally anything without feeling as though it's not the right place for it to be shared.

Polywork is still in beta at the moment of writing but if you'll like to join you can reach to me and I'll share an invite code with you.

Now let's assume you have already setup a profile and now you want to create a custom domain, how do you go about this?

You can create this in your profile settings page. You need to select one of the options they provide you and add your domain as well.

![Polywork Settings Page](/images/uploads/screen-shot-2021-06-07-at-6.31.12-am.png)

### Setting Up Custom Domain

Luckily, you can find a [document that shows you how to do this on the settings page](https://docs.google.com/document/d/1YVHDrYJMXIRULWmS-ayrSWgL7Scdv0H3U_4lTMBV4Y8/edit) but for my case I was not using Namecheap's Basic DNS setup but instead connected my domain to my Netlify as a Custom DNS.

![Namecheap DNS Setup](/images/uploads/screen-shot-2021-06-07-at-6.33.15-am.png)

So what this meant was I couldn't follow the guide because I can't setup a host record directly on Namecheap.

![Namecheap Host Setup](/images/uploads/screen-shot-2021-06-07-at-6.35.18-am.png)

In my case, I needed to this this bit on my Netlify Domains instead. So if this is the same for your case then follow the steps outlined below:

* Step 1: Go over to your Netlify Dashboard and navigate to domains.

  ![Netlify Dashboard](/images/uploads/screen-shot-2021-06-07-at-6.39.30-am.png)
* Step 2: Select the domain you want to setup the subdomain for your Polywork profile.

  ![Netlify Domains](/images/uploads/screen-shot-2021-06-07-at-6.39.38-am.png)
* Step 3: Navigate to the DNS Settings and click on the add new record button. Here you can already see mine as I set it up on [timeline.giftegwuenu.com](http://timeline.giftegwuenu.com)

  ![Netlify DNS Setup](/images/uploads/screen-shot-2021-06-07-at-6.39.49-am.png)
* Now, add the details for your custom domain here you can choose the CNAME record type and add the name you want to use as subdomain, I used timeline but you can use anything you want and lastly, go over to your Polywork settings page and copy the **Heroku domain** you have there and set the TTL to 1 sec.

![Netlify Add New DNS Record](/images/uploads/screen-shot-2021-06-07-at-6.40.41-am.png)

That's all you need to do, save this and wait for at least 24hours to allow the Heroku domain map to your newly setup domain and you should have it all working when next you visit you new domain!

I hope you found this helpful!
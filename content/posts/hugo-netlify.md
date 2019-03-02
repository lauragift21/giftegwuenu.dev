---
title: Build a Static Site with Hugo and Deploy with Netlify
date: 2018-03-20
published: true
tags: ['jamstack','netlify']
# cover_image: https://giuliovdev.gallerycdn.vsassets.io/extensions/giuliovdev/hugo-extension/1.0.0/1503297014062/images/hugo-logo.png
canonical_url: false
description: "Hugo is a static site generator. We'll be looking at how to build a static site generator with Hugo and deploy to Netlify"
---

<iframe style="width: 100%; max-height: 115px; border: none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2F4e14e9cd196b843045b1c504a7656d71b2930c37.306c19cd-4385-4366-8542-3dd992d86bbe.mp3'></iframe>

 I'll be highlighting how to build a quick site with Hugo and deploy to netlify in a jiffy. But we have to understand what Hugo and Netlify are before we start building.

 [**Hugo**](https://gohugo.io) is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

 [**Netlify**](https://www.netlify.com) is a unified platform that automates your code to create high-performant, easily maintainable sites, and web apps.


#### Step 1: Install Hugo

 To be able to use Hugo we will need to install it by running this command for Mac or Ubuntu users.

```js
brew install Hugo
```

```js
sudo apt-get install Hugo
```

#### Step 2: Create a new Hugo site

```js
hugo new site -siteName
```

#### Step 3: Pick a theme

One of my best features of Hugo is you get to pick from a diverse list of themes available here [hugo themes](https://themes.gohugo.io/), Go ahead and pick a theme I'll be using hugo-hikari-theme. Make sure you go through the instructions for using the theme.

Copy the theme.toml into your config.toml file.

#### Step 4: Running the theme

```js
hugo server
```

You should get a build process and  a message like so:

```js
Server is available at http://localhost:1818/
```

Feel free to modify the theme to your personal preference.

#### Step 5: Deploy to Netlify

This is pretty much the easiest step to finally get our site running live we simply need to create an account with netlify, connect your GitHub profile to netlify.

![alt text](https://cdn.netlify.com/6ce8bf46dcc8bfc6d6ef982c7870eb86e32d2b8c/89152/img/blog/step-2-hugo.png)

After that step create a new site from the Netlify dashboard and connect your remote repository on GitHub.

Create a deploy command with this setting and deploy.

![Screenshot](https://res.cloudinary.com/lauragift/image/upload/v1519148146/Screenshot_from_2018-02-20_18-30-47_zoifgr.png)

Viola, you have successfully built and deployed your site with Hugo and Netlify with these quick steps.

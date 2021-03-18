---
title: Deployment with Cloudflare Pages
date: 2021-03-18T08:12:25.109Z
published: true
tags:
  - jamstack
  - cloudflare
canonical_url: true
description: In this tutorial, we'll spin up a Nuxt.js app and deploy it to
  Cloudflare Pages.
---
[Cloudflare Pages](https://pages.cloudflare.com/) was recently just released in public beta and I'm very happy to give it my first try. In this tutorial, we'll walk through a step-by-step process of deploying a Nuxt.js application using Cloudflare Pages.

# What is Cloudflare Pages?

[Pages](https://pages.cloudflare.com/) is a platform for deploying your frontend application. Pages are super-fast, always up-to-date, and deployed directly from your GitHub account.

![Cloudflare Pages landing page](/images/uploads/screenshot-2021-03-18-at-09.31.42.png)

## Getting Started

Let's start with creating a [Nuxt.js](https://nuxtjs.org/) website. I wanted the core of the tutorial to be Cloudflare Pages so I went with a miminal demo.

To set up a new Nuxt.js app you need to use the command:

```
npx create-nuxt-app cloudflare-demo
  or
yarn create nuxt-app cloudflare-demo


```

You'll get prompted to answer some questions like what UI framework, Linter, Testing Framework you want to use. we'll skip all that but pick [Tailwind CSS](https://tailwindcss.com/) as the UI library of choice for the purpose of not writing our own CSS from scratch.

After following this, all the dependencies will be installed and our project is now ready to work with. To start your local environment and get into coding :), run the following commands:

```
cd cloudflare-demo

yarn dev
```

The application should now be available on localhost:3000!

\## Designing the Demo











If you prefer a video tutorial. I made one on my channel check it out.

https://www.youtube.com/embed/Fkm3e0j2sbU
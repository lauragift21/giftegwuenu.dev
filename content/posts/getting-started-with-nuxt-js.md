---
title: 'Getting Started with Nuxt.js '
date: 2020-01-07T14:17:40.761Z
published: true
tags:
  - guestpost
  - links
canonical_url: true
description: ' In this article, we''ll be taking a look at Nuxt framework, and will discuss how to set it up on an Alibaba Cloud ECS server. '
---
## Introduction

[Nuxt.js](https://nuxtjs.org/) is a universal framework for creating Vue.js applications. The goal behind having a universal framework is so that it is flexible enough to be used as both a server-side rendered app, a static generated site or a single page application.

Nuxt.js main focus is on the UI Rendering aspect of development while abstracting away the client/server distribution. In this article, we'll be taking a look at Nuxt framework, how to set it up and also how it is structured in building Vue powered applications.

## Why Use Nuxt?

Nuxt.js comes bundled with features that are hard to miss and all these features are available out of the box for you to utilize in building web applications. Some of these features include:

* Automatic Code Splitting
* Vue Powered
* Static File Rendering
* Hot Module Replacement
* Pre-processors: Sass, Stylus, Less
* Server-Side Rendering
* HTTP/2 Support

## Scaffolding a Nuxt App

Nuxt.js is really easy to get started with. The Nuxt team has created a scaffolding tool that will enable you to create a nuxt app in seconds called `create-nuxt-app`. You can either use `npx` or `yarn` to create a Nuxt project with the following commands.

```javascript
npx create-nuxt-app <project-name> or 
yarn create nuxt-app <project-name>
```

![1](https://yqintl.alicdn.com/87344d0a7d9675eebeca5394b7882fbf7eabb3f9.gif "1")

The options available when using the `create-nuxt-app` command is diverse, you can either choose between having an integrated server-side frameworks, UI frameworks, testing frameworks and other tools needed like PWA and linting and it'll be automatically generated and setup for you. But for this tutorial, we'll be doing the bare minimum so I opted out of some of the features.

## Run the Project

Once the dependencies are installed, the command available to run the project is the following command:

```
yarn run dev
```

There are other commands available to either build the app, lint the entire project or generate a static site using the `generate` script.

![2](https://yqintl.alicdn.com/a5a711bae5635ffacd1671c3aa3ec818e5f9ab9a.png "2")

After running the command to start the app, If we navigate to `[http://localhost:3000](http://localhost:3000/)`, you should now be able to see our application running on the screen like the one below.

![3](https://yqintl.alicdn.com/e7d17d20266c1f3d0d2b6a83183537071b3a98e5.png "3")

## Folder Structure

The folder structure for a nuxt app comprises of the following files and folder directory and we'll be taking a look at each one of them to determine what they represent.

![4](https://yqintl.alicdn.com/1e37b6e634f61e7411c63b16cd6f61ccdb7b00ea.png "4")

**Assets:** The files contained in this folder consists of assets such as images, fonts, and stylesheets that will be used in the Nuxt app.

**Components:** The `components` directory consists of reusable Vue.js components that will be used in building the application such as (Input, Button, and Card), etc.

**Layouts:** The `layouts` directory includes your application layouts. Layouts are used to change the look and feel of your page (for example by including a homepage). The `layouts` directory defines all of the various layouts that your application can use. This is a great place to add common global components that are used across your app like the header and footer. You should include components in this file that you don't want to redefine for each new page over and over again.

**Middleware:** The `middleware` directory contains your application middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages.

**Pages:** The `pages` directory contains your application views and routes. The framework reads all the `.vue` files inside this directory and creates the application router. For example if you have an `index.vue` that will become the `/` route and `about.vue` will become `/about` route.

**Plugins:** The `plugins` directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application. This is the place to register components globally and to inject functions or constants.

**Static:** The `static` directory is similar to `assets` but it is directly mapped to the server root (`/static/robots.txt` is accessible under `http://localhost:3000/robots.txt`) and contains files that likely won't be changed (i.e. the favicon).

**Store:** The `store` directory houses your [Vuex Store](http://vuex.vuejs.org/en/) files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an `index.js` file in this directory enables the store.

**nuxt.config.js:** This file contains Nuxt.js custom configurations. Note that the file cannot be renamed without extra configurations.

**package.json:** This file is where all dependencies and scripts lives and the file cannot be renamed.

## Routing

The way routing works with Nuxt.js is it automatically generates the [vue-router](https://github.com/vuejs/vue-router) configuration based on your file tree of `.vue` files inside the `pages` directory. It looks at the structure and automatically generates the route configurations based off that structure. Nuxt and vue-router do all the work under the hood.

An example of such structure is the following, the file tree will look exactly like the structure below

```
pages/
--|index.vue
--|product.vue
 --|index.vue
 --|one.vue 
```

and that will generate routes like the following:

```
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'product',
      path: '/product',
      component: 'pages/product/index.vue'
    },
    {
      name: 'product-one',
      path: '/product/one',
      component: 'pages/product/one.vue'
    }
  ]
}
```

## Dynamic Routes

You might be wondering how this will work in cases when we are dealing with dynamic routes. In order to define a dynamic route with a parameter, you need to define a `.vue` file OR a directory **prefixed by an underscore,** let's take a look at an example.

```
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```

and that will generate the following routes:

```
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```

## Nested Routes

Nuxt.js lets you create a nested route by using the children routes of vue-router.

To define the parent component of a nested route, you need to create a Vue file with the **same name as the directory** which contains your children views.

```
pages/
--| products/
-----| _id.vue
-----| index.vue
--| products.vue
```

will become:

```
router: {
  routes: [
    {
      path: '/products',
      component: 'pages/products.vue',
      children: [
        {
          path: '',
          component: 'pages/products/index.vue',
          name: 'products'
        },
        {
          path: ':id',
          component: 'pages/products/_id.vue',
          name: 'products-id'
        }
      ]
    }
  ]
}
```

When navigating between pages, Nuxt recommends we use `nuxt-link` component that is built in as opposed to using `router-link` that is used by vue-router.

## Deploying A Nuxt.js App

Nuxt.js comes with a set of useful commands, both for development and production purpose.

We will have a look at all the scripts used in running a nuxt app and delve dipper into the script for deploying a Nuxt app.

| Command  | Description                                                                               |
| -------- | ----------------------------------------------------------------------------------------- |
| dev      | Launch a development server on localhost:3000 with hot-reloading.                         |
| build    | Build your application with webpack and minify the JS & CSS (for production).             |
| start    | Start the server in production mode (after running `nuxt build`).                         |
| generate | Build the application and generate every route as an HTML file (used for static hosting). |

The commands outlined above are scripts we can run using either `yarn` or `npm` on the terminal. For production, we'll need to deploy the application. Nuxt.js lets you choose between three modes to deploy your application: Server-Side Rendering, Static Generated, or Single Page Applications.

Depending on your choice for deployment the following are ways you can build your Nuxt application for production.

**Server Rendering**

To run your application, you will need to run the command below:

```
$ yarn build or npm run build
```

**Static Generated**

To generate our application into static files, we would have to run the command below:

```
$ yarn generate or npm run generate
```

**Single Page Applications**

SPA's in Nuxt can be generated using two modes:

* Adding `mode: 'spa'` to `nuxt.config.js` file

```
export default { 
  mode: 'spa'
}
```

* Adding `--spa` flag to every script command

```
"scripts": {
    "dev": "nuxt --spa",
    "build": "nuxt build --spa",
    "start": "nuxt start --spa",
    "generate": "nuxt generate --spa",
  },

```

With the following steps outlined above, we have the option of deploying our Nuxt app in three different modes.

## Deploying Nuxt App To Alibaba Cloud

We will be deploying our nuxt application using [Alibaba Object Storage Service](https://www.alibabacloud.com/product/oss) which is a cloud storage service that can be used to store massive amount of data anywhere in the world and we'll be using this service to deploy our static website.

To get started, You'll need to already have an account with Alibaba Cloud, if you don't go ahead and [create one](https://account.alibabacloud.com/register/intl_register.htm).

In order to host our static website on Alibaba Cloud OSS, we must first complete the following steps:

* Create a bucket where we will store our website's files such as files, images, and scripts.
* Then upload the files to our bucket.
* Set our bucket to Static Website Hosting Mode.

After going through these steps we will have our site deployed to Alibaba Cloud and then we can access it using a similar link <http://nuxt-app.oss-ap-southeast-1.aliyuncs.com/>

**Creating a Bucket on Alibaba OSS**

In order to create a bucket, go ahead and click on the create bucket button as displayed on the image. You'll be prompted with a modal to enter your **bucket name** and **region**. Make sure to set the **Storage Class** and **Access Control List(ACL)** to the default in the image below.

![5](https://yqintl.alicdn.com/3a013831ed47e306ac1897beedf80a83d5fe91fe.png "5")

![6](https://yqintl.alicdn.com/557e6c0201f783ee8257e3c2c31585140d8404b2.png "6")

**Upload Files To Bucket**

Next step is to upload our files to the bucket we just created. Because we are deploying as a static site we'll need to run the `nuxt generate` command to create static files that we can upload. After running that command a `dist` folder will be created in our project directory. Then we head over to Alibaba to upload the files, click on **files** and you'll then be able to click on **Upload**. Go ahead and drag the entire `dist` folder to upload modal and in a few seconds we'll have our files uploaded.

![7](https://yqintl.alicdn.com/e43d8de0763b7b193b2d6f2c2f8610836079d022.png "7")

**Set Bucket To Static Site Mode**

And for the last step, we'll need to set the bucket to static website hosting mode. On the dashboard, click on **Basic settings** and navigate to **static pages** and add `index.html` as the default homepage.

![8](https://yqintl.alicdn.com/b901e4dee7175d767833e42990594a897d2dc457.png "8")

After going through the following steps, We will have our site running on a custom domain generated by Alibaba OSS <http://nuxt-app.oss-ap-southeast-1.aliyuncs.com/>

![9](https://yqintl.alicdn.com/aff0d5da1d3c8990938393e42be24b9596729044.png "9")

## Conclusion

Nuxt.js as an application can be either used for generating Static sites, Server rendered and Single page applications using Vue.js and this is what makes it universal. In this article, We have seen how to get started with Nuxt.js from setting up the project to understanding the features of Nuxt.js and also we looked at the directory structure and how to deploy a different version of your Nuxt app. Now you can go ahead and build web applications using Nuxt.js.

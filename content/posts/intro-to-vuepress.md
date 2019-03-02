---
title: Getting Started With VuePress
date: 2018-04-21
published: true
tags: ['jamstack','vue']
canonical_url: false
description: "VuePress is a Vue-powered Static Site Generator mainly designed for documentation purposes."
---

![banner](https://thepracticaldev.s3.amazonaws.com/i/xnkv5z7k6vl3qs495q1d.png)

<iframe style="width: 100%; max-height: 115px; border: none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2F9daf3c69e555521c19cd73a938fbd1b677a2fa13.d560bbbc-cfd5-4e3e-9f8c-64e0c6f0e500.mp3'></iframe>

*[VuePress](https://VuePress.vuejs.org/) is the new kid on the block on the list of static site generators. Vue creator Evan You came up with this awesome tool for writing documentation for Vue based project well that was the inspiration behind the project, But this powerful tool can also be customized to fit your needs.*

*A VuePress site is, in fact, an SPA powered by Vue, Vue Router, and webpack. After the build, a server-rendered version of the app is created. Similar to Nuxt's and Gatsby approach.*

*Each markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. This allows you to directly use Vue inside your markdown files and is great when you need to embed dynamic content.*

### Features

- Built-in Markdown extension
- Default Theme
- Automatic Service Worker
- Google Analytics Integration
- Multi-language Support

### Installation

```js
// install globally
yarn global add VuePress
npm install -g VuePress

// create a markdown file
echo '# Hello VuePress' > docs/README.md

// start writing
VuePress dev

// build
VuePress build
```

After the setup we should configure the site, VuePress is highly customizable it ships with the default theme which can be configured [here](https://VuePress.vuejs.org/config/). This is file needed to configure a VuePress website is  `docs/.VuePress/config.js`

```js
module.exports = {
  title: "Welcome to Wakanda",
  description: "The cultured people of Wakanda welcome you"
}
```

Now we can add more data into our markdown `README.md` file

```js
---
home: true
actionText: Get Started →
actionLink: /guide/
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present Evan You
---
# Wakanda Heritage

## Alert Options

::: tip
This is a tip
:::

::: warning No
This is a warning
:::

::: danger
This is a dangerous warning
:::

### Line highlight in code blocks

```js

export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}

```

#### Using Vue in Markdown

```

{{ 4 + 5 * 9 }}

<MyComponent :start="5"></MyComponent>

```

With markdown content, we can achieve a lot by using Vue's inbuilt syntax and also using vue component. All markdown files are compiled into Vue components and processed by webpack, therefore you can and should prefer referencing any asset using relative URLs.


### Overriding Styles

If you want to override the styling you can simply do that by creating a `.VuePress/override.styl` to change the default theme styles.

```css

$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34

```

### Deploying with Netlify

The following guides assume you are placing your files inside the docs directory of your project and using the default build output location.
Your `package.json` file should have the following commands for building your docs.

```js

"scripts": {
  "dev": "VuePress dev:docs"
  "build": "VuePress build:docs"
}

```

Netlify is one of the best CDN for Static websites, I'll be deploying this VuePress project on Netlify, setup up a new project from GitHub with the following settings:

```js

Build Command:npm run docs:build or yarn docs: build
Publish directory:docs/.VuePress/dist

```

Hit the deploy button!

![Wakanda](http://res.cloudinary.com/lauragift/image/upload/c_crop/v1524289619/Screenshot_from_2018-04-20_22-33-04_pgvl39.png)

VuePress is amazingly fast and easy to get started with this tutorial breaks all VuePress is capable of doing in bite-sized sections. With the ability to write Vue within markdown files, customize themes and also delivers a pre-rendered HTML and runs as an SPA when loaded. Feel free to checkout the [docs](https://VuePress.vuejs.org/guide/) to find out more about what VuePress offers. Our final project [lives here](https://gallant-nobel-d7c6cd.netlify.com/) and [repo](https://github.com/lauragift21/VuePress).

_Also feel free to leave a comment with questions or thoughts on VuePress._
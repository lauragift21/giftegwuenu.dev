---
title: Getting Started with Eleventy
date: 2019-01-16
published: true
tags: ['jamstack','11ty']
# cover_image: https://res.cloudinary.com/lauragift/image/upload/v1547576269/gift-egwuenu/Screen%20Shot%202019-01-15%20at%207.13.40%20PM.png
canonical_url: false
description: "The era of static sites generators is ever growing due to the popularity of JamStack on the web. We'll learn how to get started with 11ty, a static site generator and explore its use cases."
---

<iframe title="parler" style="width: 100%; max-height: 115px; border:none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2Ff5a2aefd034c4c23303ac013b55cd0b7f324fd44.1767b4f5-64d9-46b9-b0e0-eb43db5ecc21.mp3'></iframe>

_Due to the ever evolving nature of the web, there's always a buzzword here and there or new tech popping, leaving us as developers in awe of what to actually learn and get a hang of._

_In a previous post I talked about_ [JamStack](https://www.giftegwuenu.com/what-is-jamstack-and-why-you-should-try-it/) _and how it is one of the best things that happened to the web and also reason why you should try it out. This post is going to introduce you to a static site generator called_ [Eleventy](https://www.11ty.io/) _also known as 11ty. We'll take a look at how to get started with it and also explore its use cases._

_![11ty](https://res.cloudinary.com/lauragift/image/upload/v1547576269/gift-egwuenu/Screen%20Shot%202019-01-15%20at%207.13.40%20PM.png "11ty")_

_Eleventy is a simpler static site generator. -- tag word simpler stating that it is going to be a breeze to work it. Eleventy is quite similar to Jekyll, but instead of Ruby it was written in JavaScript and requires a zero-config setup how interesting can this get?  It is still quite a new kid on the block in terms of how long other static sites have been going it was released early 2018_

_Eleventy is quite flexible to work with. It allows you pick a template to work with and you can choose one or use all together in a project. It supports the following templating languages:_

* _HTML_
* _Nunjucks_
* _EJS_
* _Markdown_
* _Liquid_
* _Handlebars_
* _Mustache_
* _Haml_
* _Pug_
* _JavaScript Template Literals (ES2015)_

_One great deal with 11ty is every template files in your directory is a page on it's own leading to great structure of codebase._

### _Prerequisites_

_This tutorial requires that you have version 8 of Node.js or higher and basic knowledge of JavaScript._

### _Installation_

```bash
// you can choose to install globally

  npm install -g @11ty/eleventy

// install locally within the project directory

  npm install --save-dev @11ty/eleventy
```

### _Running the app_

    // initialize a new project and navigate to the directory

    mkdir eleventy-site
    cd eleventy-site

    // run to start the app
    eleventy


![img](https://res.cloudinary.com/lauragift/image/upload/v1547579929/gift-egwuenu/Screen%20Shot%202019-01-15%20at%208.18.16%20PM.png)

_After running the_ `_eleventy_` _command we get the above report because we currently don't have any files for it to process. Let's add more content to our site._

```bash
  // create a README.md file and run the app

  ### Eleventy Site tutorial

  > I'm just testing out it's awesomeness
```

_Now we see an actual difference in the output with the file processed into an html file within the_ `___site/__` _folder._

![img](https://res.cloudinary.com/lauragift/image/upload/v1547580896/gift-egwuenu/Screen%20Shot%202019-01-15%20at%208.33.30%20PM.png)

_One of the benefits of using Static sites is really for efficiency and performance. Take note of how fast the file was processed in the output above._

### _Layout_

_Layouts are templates that can be used to wrap other content. In order to denote that a content should be wrapped within a template, we simply add the layout key to the front matter._

```md
<-- layout.md-->

---
layout: layout.njk
title: New Blog Post
---

# New Blog Post
```

_This content will be passed into the layout file as specified above_

```html
<-- _includes/layout.njk -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
  </head>
  <body>
    {{ content | safe }}
  </body>
</html>
```

_The output for this template will now be populated with the data from the content file like so._

```html
<-- _site/layout/index.html -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Blog Post</title>
  </head>
  <body>
    <h1>New Blog Post </h1>
  </body>
</html>
```

### _Configuration_

_With Eleventy we can have a custom configuration that fits our need such that you override the default configuration settings by creating a_ `_.eleventy.js_` _file. We can leverage this by creating a custom configuration by modifying the default input and output directory like so._

```js
<-- .eleventy.js -->

module.exports = {
  dir: {
      input: "views",
        output: "dist"
    }
};
```

_A lot can be achieved with the custom configuration file. Here's a list of some_ [_configuration options_](https://www.11ty.io/docs/config) _that you can look up and add to the list within the config file._

### _Consuming Data_

_Eleventy can use data from different sources on a template. The order in  which it populates data from it sources ranges from highest priority to lowest priority. These are the sources according to that range._

* [Front Matter Data in a Template](https://www.11ty.io/docs/data-frontmatter/)
* [Front Matter Data in Layouts](https://www.11ty.io/docs/layouts/#front-matter-data-in-layouts)
* [Template Data Files](https://www.11ty.io/docs/data-template-dir/)
* [Directory Data Files (and ascending Parent Directories)](https://www.11ty.io/docs/data-template-dir/)
* [Global Data Files](https://www.11ty.io/docs/data-global/)

### _Deployment_

_A number of options are available for deploying 11ty sites. For one I really love using_ [_Netlify_](https://www.netlify.com/) _for the job. But I reckon anyone has the option of choosing to go with other choices for deploying, which works great too._

### _Wrapping Up_

_One of the ways in which we can embrace a new tech is by trying it out. This is a quick introduction to 11ty. Quite a number of developers are already building blogs, websites, documentation sites with eleventy and I think you should give it a try._
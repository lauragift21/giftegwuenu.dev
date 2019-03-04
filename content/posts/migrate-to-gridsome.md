---
title: Migrating to Gridsome from Hugo
date: 2019-03-04
published: false
tags: ['Hugo','gridsome', 'jamstack']
canonical_url: true
description: "I recently moved my blog from Hugo to Gridsome static site generator. its great to adopt change I did because I wanted a more flexible solution and Gridsome offers that and more."
---

I was going through my twitter timeline last week and I stumbled on this tweet. And after checking out gridsome-starter-blog I decided to make the switch.

https://twitter.com/gridsome/status/1101282439320797187?ref_src=twsrc%5Etfw

## Why I Made The Switch?
I was pretty comfortable with the design of the previous blog I had, I also like using Hugo this post is not to bash Hugo 😄. I wanted flexibility and since I couldn't get that with my previous blog I decided to make the switch. I'm currently using the official [Gridsome Blog Starter](https://github.com/gridsome/gridsome-starter-blog), I just tweaked a few things and added a couple of features I require that was not in the starter.

In this post, I'll be highlighting how I made the switch and also add details of features I added to support my personal blog. Let's get started, shall we?

## Introducing Gridsome

![Gridsome](https://d2mxuefqeaa7sj.cloudfront.net/s_3D517D01AFC7E74C96BBEC559A051E8481EFE4E7CA50AF0EC2D3A5EA7519BF92_1548180739910_Screen+Shot+2019-01-22+at+7.11.51+PM.png)

[Gridsome](https://gridsome.org) is a Vue-powered static site generator for building blazing fast websites and Apps. Its a Vue alternative to Gatsby. I mostly like Gridsome because of its supports for GraphQL as a single source of truth for its data layer, allowing you connect to any headless CMS or external API like Google sheets, Airtable, local markdown files etc.  
When I was using Hugo it was stress-free I was able to find my way around the codebase with little knowledge of Go programming language because Hugo was built using Go. But I've found that its a bit tricky when I need to add extra features that are not present in the template I was making use of. So really It wasn't that flexible for me. I've been having an issue with syntax highlighting and when I tried to fix this recently it was a disaster. So before I moved I weighed down the pros and cons of moving will my readers still recognise my blog when they visit?  I did make the move anyway.

## Content Migration
Moving my content from Hugo to Gridsome was not that difficult because they are just markdown files and in Hugo I had my content in `content/post` and luckily enough Gridsome had the same directory. The only thing I had to do was format the frontmatter to fit Gridsome's format. One thing I really liked is the starter I'm currently using adopted [Dev.to](dev.to) frontmatter format and I'm a constant user of Dev so this was also easy for me to adopt.

## Customizing the Starter
This was really fun because the Gridsome team really made this a great starter. Some of the features supported already includes tags, dark/light toggle, beautiful and minimalistic UI and markdown support. These are the steps I took in installing and using this starter.

I created a new Gridsome project using these commands:

```
<!-- install gridsome globally -->
npm install --global @gridsome/cli

<!-- Then clone the starter repo -->
gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git

<!-- navigate to the directory -->
cd gridosme-blog

<!-- run the app on your local server -->
gridsome develop
```
There you have it! 🎉 We've just created a Gridsome blog.


## Integrating Additional Features
I had to make some additional changes to this blog because a couple of integration I needed was not available. By default, you get gridsome/source-filesystem and gridsome/remark-prismjs. But I needed to add additional features like 
 - Google Analytics Support
 - Disqus for commenting
 - Newsletter
 - About Me Page
 - Share on Twitter functionality


 I've been able to add a few of these already. I was lucky to get Google analytics plugin already available so I only needed to install it. For Disqus I installed a package called `vue-disqus` and migrated the form I used for the newsletter over to this new blog only needed to tweak some styling so it fits this new layout.  This blog is still a work in progress as I add the other features I have pending. Overall so far moving to Gridsome has been great!

## Deploying
I used Netlify for hosting the previous blog and configured it to use a custom domain. I recently bought [giftegwuenu.dev](giftegwuenu.dev) and just make it redirect to [giftegwuenu.com](giftegwuenu.com). Switching from the previous blog to this was really quick because with Netlify you already have a domain assigned to any projects you create. So I deleted the custom domain from my previous blog and added it to this new one. And it worked pretty seamlessly. Netlify is Bae 💚  

![netlify](https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fd2mxuefqeaa7sj.cloudfront.net%2Fs_0359E29EF9AFDFD62C78AB13AD32DC2BCF0651A56D00A7FF5B337BAA1E7D7742_1551707469947_Screen%2BShot%2B2019-03-04%2Bat%2B2.50.52%2BPM.png&hmac=CB9d%2BCoRUgooKGKIdt%2FsDyJybccC2wXgvnqdKyrLgrc%3D&width=1490)

## Conclusion
Making this move wasn't as daunting as I thought it'll be. I'm happy I was able to do this and now I can play with Vue a framework I'm more familiar with as compared with when I was using Hugo and have to understand Go to make additional implementation changes. I'm now going to focus on creating content and don't worry I'm switching anytime soon.

If you have a question regarding JAMStack, Gridsome or why I switch you can reach out to me on twitter [@lauragift21](www.twitter.com/lauragift21)
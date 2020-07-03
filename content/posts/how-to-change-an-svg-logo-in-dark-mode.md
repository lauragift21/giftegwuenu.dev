---
title: How to Switch Logo in Dark Mode
date: 2020-07-03T10:52:03.096Z
published: false
tags:
  - CSS
canonical_url: true
description: I share how I was able to switch the color of my logo in dark mode
  using CSS custom properties.
---
I designed my website with two versions of the logo - one for light mode and another for dark mode. In this article, I'll share how I switched the color of the logo in light/dark mode.

### NB - Add Images of two logos side by side

When it came to implementing this design I was a bit confused about how to go about switching between these two versions when either dark/light mode is selected.

### NB - Add Gif showing how it switches

I found a way to do this and I'll share how I was able to achieve it. Btw I'm open to hearing how you'll typically implement this if you were trying to implement it.

Let's dive in!! So I've got an image tag with the light-colored logo.

```html
<img class="logo" src="../assets/img/logo.png" alt="original logo" />
```

## Solution: Using CSS Variables

We can use CSS custom properties(CSS Variables) to solve this problem. Here's what I did, I defined a variable called logo for both dark and light mode and set it as the background image which you'll see in a moment.

```css
// variables.scss
body {
  --logo: url(logo.png) no-repeat;

}


body[data-theme="dark"] {
  --logo: url(logo-light.png) no-repeat;
}
```

Then I applied the following style to the `.logo` class. It sets the background image to both versions of the logo depending on which one is selected and the background-size and height properties help position the image directly on top of the original image.

```css
.logo {
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: var(--logo);
  background-size: 60px;
  height: 80px;
  padding-left: 100px;
}
```

That's it! I now have two different versions of my logo for dark and light mode.  If you're interested in seeing the implementation in more detail, the code for my website is open-source and [you can check it out](https://github.com/lauragift21/giftegwuenu.dev/blob/master/src/components/Nav.vue).
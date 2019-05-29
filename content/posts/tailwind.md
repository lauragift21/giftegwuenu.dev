---
title: Love At Second Sight With TailwindCSS
date: 2019-05-29
published: true
tags: ['css']
canonical_url: true
description: "I recently checked out TailwindCSS a utility-first CSS framework and I share my thoughts about it and how to get started with it in your project."
---
<!-- ![banner](https://res.cloudinary.com/practicaldev/image/fetch/s--HzMShc7o--/c_imagga_scale,f_auto`,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/rbaft4bt2unw0yln27uj.png) -->

Imagine my thoughts when I first saw the TailwindCSS Framework, in my head I already thought this was one of the usual frameworks like Bootstrap, Bulma, and Foundation, etc that I have tried using before and I took my eyes off it for a second. Until recently I decided to give it another look after I saw the recent release of v1 and to my greatest surprise, I fell in love with TailwindCSS. In this article, I’ll be introducing you to TailwindCSS and why I think it is a different ball game entirely with useful examples. Let’s get right into it, shall we?

![tailwind](https://res.cloudinary.com/lauragift/image/upload/v1558984626/image_preview_s8bbns.png)

## Introduction

[TailwindCSS](https://tailwindcss.com/) is a utility first CSS framework for building custom user interface designs. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

## Why TailwindCSS?

One of the common reasons why I think I got love struck with TailwindCSS is that I found out I can get the following out of the box:
- **Customization on the fly:** Tailwind is easily customizable to fit your needs. You can customize your own colors, border-sizes, shadows, spacing and a whole lot more. You're the limit as far as customization is concerned with TailwindCSS.
- **Component-friendly:** TailwindCSS is also a component friendly CSS framework, what this means is that instead of having repeated utility classes for your UI, you can combine common patterns and abstract it out as component classes that eventually become reusable.
- **Responsive to the Core:** TailwindCSS comes bundled with responsive variants for different screen sizes that can be adopted in your UI by only prefixing the screen size to the class.



### Getting Started

To get started with TailwindCSS in your project you will need to install it as a dependency or you can use it as a CDN. But mind you it's not a recommended choice to use the CDN option because some features that make tailwind awesome won't be available for use.

```html
// using CDN
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">

```

```bash
# using npm
npm install tailwindcss -save-dev or

# using yarn
yarn add tailwindcss --dev

```
After installation, we will need to inject tailwind's styling into our CSS using the `@tailwind` directive. So let's go ahead and add Tailwind's base, components, and utility styles into our `styles.css`


```css
@tailwind base;

@tailwind components;

@tailwind utilities;

```
>With the recent release of `v1.0`, the good news is we won't need to create `tailwind.config.js` file anymore as this is now optional.

## Using TailwindCSS CLI
Now, we can use tailwind's CLI to build out our CSS into tailwind's styles using the command below.

```bash
npx tailwind build style.css -o output.css

```

The tailwind command is simply taking our default CSS file `style.css` as the input and processing the styles into `output.css` as the output file.

Instead of using `style.css` as the stylesheet in our HTML you can now use `output.css` to ensure tailwind styles are being applied to our HTML content.

```html
  <link rel="stylesheet" type="text/css" href="output.css">

```

Let's now go ahead and create some examples that we can utilize to explore the capabilities of TailwindCSS. We can also spin up tailwindcss on codepen or have it on our local computer whichever one works for you.

## Example 1: Creating a Card
Let's create a card using TailwindCSS and see how seamless this process is without writing any line of CSS.

```html
<div class="mx-auto my-3 max-w-md rounded overflow-hidden shadow-lg">
  <img src="https://images.unsplash.com/photo-1557310717-d6bea9f36682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=400&w=634&q=80" class="w-full" alt="a platter of cookies">
 <div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">Chocolate Chip Cookies</div>
  <p class="text-base text-gray-700">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  </p>
 </div>
 <div class="px-6 py-4">
  <span class="inline-block bg-gray-300 px-3 py-2 text-sm font-semibold mr-2 text-gray-700 rounded-full">
   #photography
  </span>
   <span class="inline-block bg-gray-300 px-3 py-2 text-sm font-semibold mr-2 text-gray-700 rounded-full">
   #food
  </span>
   <span class="inline-block bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 rounded-full">
   #cookies
  </span>
 </div>
 </div>

```
![card](https://thepracticaldev.s3.amazonaws.com/i/0sxm0lavhep6rxvaufk0.png)

## Example 2: Custom Buttons

The second example we'll be looking at is how to create buttons using TailwindCSS.


```html
<button class="bg-blue-400 text-white font-bold py-2 px-5 rounded my-2">Button</button>
<button class="bg-red-600 text-white font-bold py-2 px-5 rounded my-2">Button</button>
<button class="bg-gray-600 text-white font-bold py-2 px-5 rounded my-2">Button</button>
<button class="bg-green-500 text-white font-bold py-2 px-5 rounded my-2">Button</button>

```
![button](https://thepracticaldev.s3.amazonaws.com/i/lisvz2yc589jn50xht4e.png)

I absolutely enjoyed playing around with the docs to create these examples and one thing you can also leverage is extracting utility classes as a component.

## Extracting Utility Classes as Components
You can additionally extract utility classes as a component as I mentioned earlier. Tailwind advocates for `Utility-first` workflow but when you find out that you're reusing the same styles over again then this is when you should think of extracting them into components. Here's how to accomplish just that.

From example 2 above, We can further reduce the number of utility classes by extracting it out as a component using `@apply`.

```html

<button class="btn btn-blue">
  Button
</button>
<button class="btn btn-gray">
  Button
</button>


<style>
.btn {
  @apply text-white font-bold py-2 px-4 rounded my-2;
}
.btn-blue {
  @apply bg-blue-500;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.btn-gray {
  @apply bg-gray-500;
}
.btn-gray:hover {
  @apply bg-gray-700;
}

</style>
```

And you still get the same result but with a lot, fewer utility classes applied. Note that variants like `hover:`, `focus:,` and `{screen}:` can't be applied directly, so instead apply the plain version of the utility to the appropriate pseudo-selector or media query.

I absolutely had fun exploring TailwindCSS and I can't wait to work with it in my projects. Have you tried TailwindCSS or used it in a project? What are your thoughts about it?.

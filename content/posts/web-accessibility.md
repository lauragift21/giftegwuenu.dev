---
title: Web Accessibility For Beginners
date: 2019-03-22
published: true
tags:
  - links
  - accessibility
canonical_url: true
description: Building accessible applications or websites is not the norm today.
  This is because the idea of accessibility is known to most developers, while
  in actual sense it is often neglected and not a common practice today in the
  world of web development.
---
Building accessible applications or websites is not the norm today. This is because the idea of accessibility is known to most developers, while in actual sense it is often neglected and not a common practice today in the world of web development. According to [World Bank Statistics](https://www.worldbank.org/en/topic/disability) about 15% of the world population experience some form of disability. This amounts to almost half the population of the web.

In this tutorial, I’ll be explaining what web accessibility is to us as developers, how it affects the users of the web, and also ways to improve our application and tools to leverage to improve accessibility in our workflow.

## What is Web Accessibility?

Web Accessibility or a11y as it is often called is a practice whereby websites, tools, and technologies are designed and developed so that people with disabilities can use them.

> "Accessibility" is often denoted as "a11y" because there are 11 letters between the "A" and "Y" in the word "Accessibility". This pattern is known as a Numeronym.

Accessibility is all about making the web accessible to everyone. This includes people with all forms of disabilities including the following:

* cognitive
* neurological
* physical
* speech
* visual
* auditory disabilities.

Accessibility encompasses disability and still account for cases whereby the people using the web have the following limitations:

* Poor Internet connectivity.
* Temporary injury i.e broken arm.
* People using devices with smaller screens such as Smartwatches, Smart TVs.

## The POUR principle

The POUR principle is what guides building accessible websites. This principle helps put people at the center of the process. Every website should fulfill the following principles:

**Perceivable**
Content on the web should be perceivable, This means the web should be available to the senses (vision, touch, and hearing) either through the browser or through assistive technologies like screen readers, screen enlargers, etc.

**Operable**

Content on the web must be operable, This means users can interact with all controls and interactive elements using either the mouse, keyboard, or an assistive device. If the content is impossible to navigate then it is inaccessible.

**Understandable**

The content on the web should be clear and concise and easy to understand. Try as much as possible to cut down spelling errors and complex grammar. This is because as web developers we should never assume knowledge for the user.

**Robust**

It is really important to have consistency across the web. What this means is are you maximizing compatibility with the tools you are building for? Does your site work the same way across all platforms i.e Browsers, Operating systems, and Device sizes, etc?

## Tips For Making Your Site Accessible on the Web

I’ll be highlighting tips to help incorporate accessibility into your usual routine when building websites. Most of these tips can be implemented easily and will not impact the overall look and feel of your website.

* **Add Alternative Text for Images:** When using images in your websites, One important thing people miss out on is adding the `alt=""` attribute to images. Here’s an example of an accessible image tag.

![https://www.kimballstock.com/pix/CAT/02/CAT_02_RK0640_03_P.JPG](https://www.kimballstock.com/pix/CAT/02/CAT_02_RK0640_03_P.JPG)

`<img src="./cat.png' alt="A cat sitting on a chair">`

The big picture difference between having the alt attribute in all images and not including it at all is that it goes a long way in making sure your website is accessible because now screen readers can announce the alt tags for people with visual and cognitive disabilities. One rule of thumb here is to make sure the alt description is in context meaning it should describe the intent of the actual image. In the example above, I used `A cat sitting on a chair` and not just `cat` for the description.

**Make use of Semantic HTML**

This is another important rule missed out on. Most developers use `div` to represent everything and forget about the appropriate mark-up for headings, lists, tables that exists. HTML5 provides additional elements, such as `<nav>` , `section` and `<aside>`, to better structure your content. This is an example of a well-structured page using semantic HTML.

**Always provide an option to skip the Main Content**

I’ve found that for people making use of screen readers and keyboard, this feature is really important because it provides the option to skip to the main content when using either the keyboard or screen readers for navigation. The technique for achieving this by adding a link to skip to the main content and make it invisible until the element receives keyboard focus. An example of this is [BBC.com](http://BBC.com) official website. When using your keyboard to navigate the option to skip to the main content is provided when the keyboard focuses on that element and it is visible.

**Identify page language and language changes**

Most people miss out on this, I feel like it should be one of the things we look out for when building accessible sites. Always remember to indicate the primary language of every page by using the `lang` attribute in the `HTML` tag, for example, `<html lang="en">`. Use the `lang` attribute on specific elements when the language of the element differs from the rest of the page.

`<--here the language can either be switched to the default language used in the page.--> <html lang="en"> <head> ... </head> <body>...</body> </html>`

**Associate a label with every form element**

Whenever possible, use the `label` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control. In specific situations, it may be acceptable to hide `<label>` elements visually, but in most cases, labels are needed to help all readers understand the required input.

`<form> <label for="username">Username</label> <input type="text" name="username" id="username"> <label for="email">Email</label> <input type="email" name="email" id="email"> </form>`

## Tools To Leverage When Building Accessible Sites

I found this interesting while researching this topic, there are countless tools available to help you build accessible sites. The question right now is why aren’t people making use of these to build accessible websites? The reason might be because getting started with accessibility may seem difficult and challenging at first, especially for teams that are maintaining a legacy codebase. I’ll be sharing some tools to leverage when thinking of accessibility.

* [a11y.css](http://ffoodd.github.io/a11y.css/)
* [Accessibility Insights](https://accessibilityinsights.io/)
* [aXe](https://www.deque.com/axe/)
* [Chrome Vox](http://www.chromevox.com/)
* [Contrast Checker](https://contrastchecker.com/)
* [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
* [No Coffee](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)
* [Pa11y](http://pa11y.org/)
* [Tota11y](https://khan.github.io/tota11y/)
* [Tenon](https://www.tenon.io/)
* [Voice Over](http://www.apple.com/accessibility/voiceover/)
* [Wave](http://wave.webaim.org/)

These tools will go a long way in helping you build accessible applications. You can find more tools to leverage from the compiled [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/).

## Further Resources

* [Web Content Accessibility Guidelines (WCAG 2.1)](http://www.w3.org/TR/WCAG20/)
* [W3C’s Web Accessibility Initiative](http://www.w3.org/WAI/)
* [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)
* [a11y Project Checklist](https://a11yproject.com/checklist)
* [a11y & Me](https://a11y.me/)

## Conclusion

In this article, We have gotten a good understanding of web accessibility and what it means for users with disabilities. I’ll like to end this by saying we should all be accessibility advocates by driving this force together, we’ll see a significant change in the way the web is approached. We should always remember to build for the user and this includes all users with any kind of disability.
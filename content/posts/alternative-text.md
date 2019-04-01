---
title: Guide to using Alternative Text on Images
date: 2019-04-01
published: true
tags: ['accessibility']
canonical_url: false
description: "In this article, I'll explain the importance of adding alternative text to image element and how this practice  can improve accessibility"
---

Today, A lot of developers are conversant with the `alt` attribute on images. I can say most of us know that it is one way of making webpages accessible but do we really understand the scope of the alternative text, when to make use of it, how to use it. I agree it is one step to being an accessibility advocate so that is why in this article, I'll be explaining in detail the alt attribute and how practicing it can improve web accessibility in a long run.  

Truthful confession here, before I became really involved with accessibility I didn't understand the importance of having a descriptive text for all images on the web. I'm mostly guilty of leaving the `alt` attribute blank. Now that I know better I can't keep it to myself which is one of the reasons I'm writing this article to share this new knowledge gained with everyone.

## What is Alternative Text?
Alternative text or alt text as it is fondly called is a written text description for an image on the web.
Alt text is really useful and can come in handy in any of these scenarios:
- people using assistive technology such as screen readers and so on.
- people that have images turned off on their devices due to a poor internet connection.
- it helps improve SEO for the webpage.

Writing good alt text for images is very important and shouldn't be sidelined. To show how important this is the Web Content Accessibility Guidelines document [WCAG 2.1](https://www.w3.org/TR/WCAG21/#text-alternatives) have it has the first rule which shows that it's really important.

> Guideline 1.1 Text Alternatives: Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.

## How to Use Alt Text
Typically, when adding an image to a webpage, we use the HTML image element to represent the image and the alt attribute on the image tag to give a description of the image. Here's an example:

![girl holding burger](https://res.cloudinary.com/lauragift/image/upload/v1554123305/photo-1551212721-f0d4160f0abd_fxpx0w.jpg)

```html
<img src="./burger.png" alt="A girl holding a hamburger.">
```
The above alt attribute describes the context of the image. In this case, if a screen reader is being used on this page. It'll read the alt text instead and the user gets a very descriptive context of the image used.
There are other things to consider when writing alt text this is just a primer to writing descriptive alternate text for images. I'll be going over the important concepts to take note of when using images on the webpages.   
All images on the web must have alternative text that describes the function of the image. 
There are seven concepts for using images on the web I'll be outlining each of them and they include:

1. **Informative Images:** Informative images are images that describe a piece of information or concept. The information described can be anything from an emotion/impression to a label or the file format used in a link. The text alternative for an informative image should convey the meaning or content of the image. Here's an example:

![girl smiling happily](https://res.cloudinary.com/lauragift/image/upload/v1554128116/photo-1492633423870-43d1cd2775eb_xgcd0p.jpg)

```html
<img src="./girl.png" alt="A girl smiling happily.">
```
The image illustrated above shows the emotion of a girl. The idea therefore, is to make the alternative text convey this information.

2. **Decorative Images:** Decorative images are images that don't necessarily convey meaning or information. These images don't add information to the content of the page mainly because the content description is already provided or the image is used for styling purposes. Therefore, the `alt` attribute is not provided or left empty `(alt="")`. The reason for this is to avoid assistive technologies such as screen readers from reading a redundant text to its users. Leaving the `alt` attribute out entirely is not a good practice because some screen readers will announce the file name of the image instead. An example is shown below:

```html 
<img src="./line.png" alt="">
```
3. **Functional Images:** Functional images are images that convey an action to be taken rather than informative images that only conveys the information of the image. They are mostly used in links, buttons, and other interactive elements. The alternative text should convey the action to be taken rather than the description of the image. For example, having an alternative text that says `search list` instead of `a microscope` or `print page` instead of `image of a printer`. Having an empty `alt` attribute won't be helpful too because you want to be able to notify users using screen readers to navigate your site that you want them to take an action at that point. Here's an example:

![search](https://res.cloudinary.com/lauragift/image/upload/v1554130730/how-to-search-gmail_etobms.jpg)
```html
<input type="image" src="search.png" alt="search this page">
```
4. **Images of text:** Images of text like the name implies is describing the text illustrated in an image. This is rarely used because with most modern browsers we can use CSS to style text to look exactly the way we want it rather than using images to represent text. Using text instead of images to display content has more advantages as the text can easily be scaled or resized without losing clarity but with images, the text becomes distorted and loses image quality. In the event that the only possible option available is to use images to describe a text then the alternative text must also contain the text in the image. For example, we can have:

![](https://res.cloudinary.com/lauragift/image/upload/c_crop,h_111/v1554131437/Screen_Shot_2019-04-01_at_4.10.10_PM_mkphqf.png)
```html
<img src="text.png" alt="For sale: baby shoes, never worn.">
``` 
5. **Group of Images:** This type of images represent images that are grouped together to convey a single piece of information. An example can be a collection of heart icons to represent a rating. When adding descriptive text for each image, the alt attribute for only one of the image should have a description of the group of images, while the other images have an empty `alt` attribute so they are ignored by screen readers. Here's an example:

![heart](https://res.cloudinary.com/lauragift/image/upload/v1554132040/lLdzWnJ_v1o7ie.png)

```html
<img src="full-heart.png" alt="1.5 of 3 hearts">
<img src="half-heart.png" alt="">
<img src="empty-heart.png" alt="">
```

6. **Complex Images:** Complex images convey a very detailed and substantial amount of information. These type of images ranges from graphs to bar charts, maps showing locations and diagram or illustration, etc. In these cases, two text alternative description is provided. The first one being the short description of the image. The second is the long description of the image to fully explain the information conveyed by the image. Here's an example:

![image](https://res.cloudinary.com/lauragift/image/upload/v1554132643/count-vs-animals_kjpeh5.png)
```html
<figure role="group">
  <img src="bar.png" alt="Bar chart showing population of animals in SA and LA zoos.">
  <figcaption>
    <p>The bar chart shows a population of the animals in South African Zoo compared to Los Angelos Zoo. With the number of giraffes, monkeys and orangutans compared in both zoos.</p>
  </figcaption>
</figure>
```

7. **Image maps:** Image maps are images that have been divided into various regions, each region represented by the `area` elements. An example can be an organizational chart. Image maps are created using `<img>` and `<map>` elements. The text alternative is needed on both the `img` elements and each `area` element. The example below illustrates an organization chart with each node represented to identify an individual in the organization.


![map](https://res.cloudinary.com/lauragift/image/upload/v1554133167/orgchart-b583d8ff_b3fqaw.png)

```html
<img src="orgchart.png"
     alt="Board of directors and related staff: "
     usemap="#Map">
<map name="Map" id="Map">
	<area
		shape="rect"
		coords="176,14,323,58"
		href="…"
		alt="Davy Jones: Chairman"
	>
 ...
</map>
```

With all these images types listed, how do you know which one to use when implementing alt text. [The Alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) is a guide provided to help you make that decision. So when in doubt use the alt decision tree.

## Tips To Note When Writing Alternative Text
- End the alt text with a full stop. This will make the screen readers pause for a bit before reading other content. which improves the experience for the user.
- Don't start alt text with `image of` or `photo of`.
- Be specific when describing the image.
- Avoid cramping in keywords for SEO purposes.
- Don't add line breaks in the `alt` text. This can cause a weird pause when the screen reader is describing the image.
- Use the empty `alt` attribute `alt=""` for decorative images. for example, the background image of a website because understanding the context used here is not required.
## Conclusion
In this article, I've explained in detail the benefit of using alternative text for images and how to go about using them in a different context. I'm happy you read this far and my ask therefore is not to only read this but also learn to practice it. I believe the web will become more accessible with a collective effort from everyone.
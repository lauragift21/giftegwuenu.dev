---
title: A Practical Guide To Optimizing Performance On The Web
date: 2019-05-07
published: true
tags: ['performance']
canonical_url: true
description: "The web is continuously evolving and today we have millions of sites on the web and several users consuming these content. In this article, I'll be outlining performance tips we can leverage in optimizing our websites. "
---

The web is continuously evolving and today we have millions of sites on the web and several users waiting to load these sites for one reason or another. There’s nothing more frustrating when you have to wait for a page to load for more than the expected time required due to slow internet connection or unforeseeable reasons. According to this [study](http://Statisticbrain.com), An average users attention span only lasts for about eight seconds. So imagine if you have to wait for about three minutes before a sites loads, That automatically means with crappy performance on any website the adoption of users will eventually decline and that’s not what we want to achieve. 
Web Performance is the speed in which it takes for web pages to get downloaded and displayed on the user's web browser.

## Why Performance Matters?

Web performance is a rather interesting topic if you ask me, I think it is one of the things developers should be more focused on because, at the end of the day, we are building the web so it can be accessible to all our users regardless of any obstacles or challenges. Today, a lot of users browse the internet with 2G, 3G, 4G, and LTE connections and we are still expected to serve the web to them at the same speed. Performance is necessary and important for our users because of these reasons.

- Our users are our priority and they are the reason why we are building in the first place. Without users visiting the webpages I’m sure there won’t be any reason to create it at first. So because we are building for the users they should also be considered at every step of development and our number one goal should be that they are able to conveniently use the websites we build.
- Incrementally improve conversion rates. When we build websites that are fully optimized for speed and usage then we’ll see a huge retention rate because users will continue using your site because they had a great experience the first time they visited. But the opposite will be the case if your website performance is not optimized. 

So how do we make sure our users are happy using our sites and will gladly return back after using it because they love it and the performance is great? I’ll be outlining some tips and steps we can take to build faster web experiences for all our users.

### Tips For Improving Web Performance
1. **Fewer HTTP Requests:** There are several cases, where a huge portion of website load times is generated from external HTTP requests. The speed at which external resource loads can vary depending on the hosting provider’s server infrastructure or location. The general goal here is to make sure we can reduce the external HTTP requests so we need to examine the requests and eliminate any resource that is not adding any benefits to user experiences such as unnecessary images,  unnecessary JavaScript and CSS code.
    
2. **Code Splitting and Tree Shaking:** Code Splitting and Tree Shaking is another technique used in improving performance. How do we code split or tree shake right? This is done by using packages like Webpack, Rollup in development. Code Splitting is a feature that allows you split your code into various bundles or components which can then be loaded on demand or in parallel on the other hand Tree Shaking is a concept that involves the elimination of unused or dead code.  

3. **Lazy Loading:** Lazy loading is a web performance pattern that delays the loading of images in the browser until the user needs to see it and it is a great way to optimize performance. It ensures your site isn’t bloated, and your users can quickly download the images they want to see.
    
4. **Defer Scripts:** Deferring a script means preventing it from loading until after other elements have loaded. When you defer larger files, like JavaScript, you ensure that the rest of your content can load without a delay caused by waiting for the larger files to load. The syntax for this is indicated by adding defer in a script tag. 

```html
<script defer></script>
```

5. **Optimize Images:** It is important to optimize images on the web. According to the HTTP Archive, [61 percent of a website’s page weight](http://httparchive.org/interesting.php#bytesperpage) on the web is images. Now we don’t want all our images taking up all the space when we have other content to display too right. There are some ways we can further leverage to optimize images on the web.  
 - Using a Service like Cloudinary: [Cloudinary](https://cloudinary.com) is a platform that you can use to manage all your images and videos. It does the heavy lifting for you so you don’t have to bother about the size of images you currently have on your website. It comes bundled with features like Image Optimization, Image Manipulation, Responsive Images, and Image Delivery out of the box.
        
6. **CDN’s to the Rescue:**  We can significantly optimize page load times on our websites by using a Content Delivery Network. A CDN can be used to store resources like images and videos we will usually load directly into the webpage. When you use a [CDN](https://www.keycdn.com/what-is-a-cdn), you link your website’s static content to an extended network of servers across the globe. The CDN allows your site’s visitors to load data from their nearest server. If you use a CDN, your site’s files will automatically be compressed for rapid delivery across the globe. [Cloudinary](https://cloudinary.com) is an example of CDN that can be used in this case.
    
7. **Enable Caching:** Caching is a technique used for temporarily storing web pages in order to reduce bandwidth and improve performance. When a user visits your site and the page is cached, the same cached page will be served to the user when he revisits again unless it has changed since the last cache. This saves the user the time they have to wait for the page to be loaded and makes things faster. arrives at your site the cached version will be served up unless it has changed since the last cache. This saves server time and makes things altogether faster.

8. **Prefetch Resources:** Prefetching can improve your user’s browsing experience and significantly improve performance by fetching the necessary resources and related data **before they are needed**. There are 3 main types of prefetching:
- **Link Prefetching:**  If you are sure that a user will click on a specific link to navigate to some page, you can apply this type of prefetching. The method is useful for stable user journey actions, like moving to the shopping cart page after one or several items were added. 
```html
<link rel="prefetch" href="/img/cat.png">
```
- **DNS Prefetching:** This allows the browser to resolve domains into IP addresses in advance. This minimizes latency as when the user clicks on a link with DNS prefetch enabled, they do not have to wait for the DNS lookup to take place as it already has.  
```html
<link rel="dns-prefetch" href="https://www.keycdn.com">
```
- **Prerendering:** This approach means rendering an entire page or some elements of it in advance. 
```html
<link rel="prerender" href="/second-page.html">
```
    
## Tools For Measuring Speed On The Web

It is important for us to know how to measure the speed for our websites as well as improve the speed if we are not satisfied with the current page speed. We can do this by making use of dedicated tools available for testing speed. Some of which include.

- [**WebPagetest**](https://www.webpagetest.org)
- [**Pagespeed Insights**](https://developers.google.com/speed/pagespeed/insights/)
- [**Lighthouse**](https://web.dev/measure)
- [**KeyCDN Speed Check**](https://tools.keycdn.com/speed)

## Conclusion

Web Performance optimizations can significantly improve the user experience on webpages and it is getting more and more important for web development as applications get bigger and more complex. The one thing we should always take note of as developers is that we are building for the users and we should make sure we prioritize them and their needs when building websites.


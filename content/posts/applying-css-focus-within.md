---
title: ' Applying CSS :focus-within '
date: 2020-02-13T12:26:34.510Z
published: true
tags:
  - CSS
canonical_url: true
description: 'Let''s learn what the :focus-within pseduo-class is and how to apply it.'
---
In my quest to learn something new every week. I came across a not so new pseudo-class element [:focus-within](https://drafts.csswg.org/selectors-4/#the-focus-within-pseudo). Let's take a look at how it works and how to apply it to our styles.

The `:focus-within` pseudo-class represents an element that is paired with the `:focus` pseudo-class or has a descendant that is matched by `:focus`.

> NB: the focus here means when you click, tap or tab through an element such as a form input or a link.

I like how [Chris Coyier](https://css-tricks.com/almanac/selectors/f/focus-within/) explains it in simple terms:

> It selects an element if that element contains any children that have `:focus`.

## How is this different from `:focus`?

The `:focus` pseudo-element works differently, an element receives focus when the `:focus` element is applied to it, but, in a case when you have a collection of child elements it is not common to use `:focus` pseudo-class to select the parent element. The `:focus` pseudo-class applies only to the focused element itself.

https://codepen.io/lauragift21/pen/VwLLggX?tabs=result,css

This is what `:focus-within` is able to solve. We can use `:focus-within `pseudo-class if we want to select an element that contains a focused element or elements that has descendants matched by `:focus`. Let's see how to achieve that.

## Applying :focus-within

`:focus-within` is useful for different use-cases. You can think of using it:

* To highlight an entire form when one of its input fields is in focus.
* Highlight rows of a table and change the background color when a user clicks on it.

Here's an example, for highlighting an entire `<form>` container when the user focuses on one of its `<input>` fields.

https://codepen.io/lauragift21/pen/gOppEVP?tabs=result,css

## Browser Support

As of 2020, This CSS feature is widely supported only IE browsers don't have support yet. Here's a table of current browser that fully supports `:focus-within`.

![Can I use](https://dev-to-uploads.s3.amazonaws.com/i/nu2usvsjsm47xyraenqe.png)

## Final Thoughts

The `:focus-within` element is an accessibility win for developers and users on the web. We should always keep it in mind while coding it's way better to reach for this than use JavaScript to accomplish the same task. 

## Resources

[CSS Focus Within Spec](https://drafts.csswg.org/selectors-4/#the-focus-within-pseudo)

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) [](https://css-tricks.com/almanac/selectors/f/focus-within/)

[CSS Tricks :focus-within](https://css-tricks.com/almanac/selectors/f/focus-within/)

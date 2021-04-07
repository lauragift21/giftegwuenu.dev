---
title: Optional Chaining In JavaScript
date: 2021-04-07T08:44:56.771Z
published: true
tags:
  - javascript
canonical_url: true
description: In this article, I will show you how to use the JavaScript Optional
  Chaining Operator.
---
Are you always frustrated when you try to access a value from an object/array and it returns this error `Uncaught TypeError: Cannot read property 'value' of undefined` because the value is not available yet or does not exist? Let's see an example, say we have `countries` object with values like this:

```js
countries = {
  name: 'Nigeria',
  region: 'Africa',
  population: 186988000,
  currency: {
    code: 'NGN',
    name: 'Nigerian Naira',
    symbol: '₦',
  }
};
```

and we try to return a value that is not yet available or doesn't exist yet:

```js
console.log(countries.languages.name);
```

we will get back an error from the browser that the value is undefined. How do we tackle this problem? we can validate that each reference in the nested property is available with an expression like this:

```js
console.log(countries.languages && countries.languages.name);
```

Now, this won't throw an error and will return `undefined` if a value doesn't exist. To avoid doing that extra step of validating we can use a different method - **Optional Chaining**.

### Introducing the Optional Chaining Operator

The JavaScript Optional Chaining Operator is a native feature introduced in ES2020 that allows you to safely access deeply nested properties of an object without having to check for the existence of each of them. 

Optional Chaining uses the `?.` operator to access the properties of objects. The usage of the `?.` operator is similar to the typical `.` operator, but when a reference is `undefined` or `null`, rather than throwing an error, it would return `undefined`. 

The syntax for optional chaining can be used in any of the following positions:

```md
obj?.prop       // optional static property access
obj?.[expr]     // optional dynamic property access
func?.(...args) // optional function or method call
```

In our previous example, we can then change the expression to this:

```js
console.log(countries?.languages?.name);
```

This will check if the parent value exists and if it doesn't it returns `undefined`. Optional chaining can be used often when we are fetching responses from an API we may not be 100% sure if a certain object exists in our API response.

### Browser Support

The Optional Chaining Operator is currently supported in all browsers except Internet Explorer as seen from [CanIUse](https://caniuse.com/?search=optional%20chaining).

![Can I use - Optional Chaining](/images/uploads/mdn-javascript__operators__optional_chaining-1617785356676.png)

## Resources

* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
* <https://github.com/tc39/proposal-optional-chaining>

## Video

https://www.youtube.com/embed/u29ZiZnR-q0
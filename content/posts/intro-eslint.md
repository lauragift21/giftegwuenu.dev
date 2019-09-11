---
title: Quick Guide to Linting JavaScript Codebase with ESLint
date: 2018-07-29
published: true
tags: ['eslint','tools']
canonical_url: false
description: "Linting is a way of keeping your code clean from any issues and generally improving your code style."
---

<!-- <iframe title="parler" style="width: 100%; max-height: 115px; border: none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2F14f848c2c826aa748e367ca4920584fedbf5dd8a.9d3b8a6f-bb7a-4797-b6f6-a3944e7284c6.mp3'></iframe> -->

*Linting in JavaScript is really important, Most developers tend to skip this step when developing software, When in an actual sense this should be one important step before starting out your projects.*

## What is Linting?

*Linting in Javascript is a coding style integration that checks your code quality and enable you to fix possible problems with your code style.*

## Why should you Lint?

*Yes why is this step actually important. I can kick off my project without worrying about this step right?
The answer to that is NO!! Some important reasons on why you should consider linting you JavaScript code are:*

- *It helps you figure out mistakes with your code.*
- *It helps you stay consistent with a preferred coding style.*
- *It saves you time debugging syntax errors.*

## ESLINT
*[ESLint](https://eslint.org/) is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to act as a tool for identifying and reporting on patterns found in JavaScript code, with the goal of making the code more consistent and avoiding bugs.*

## Installation
*ESLint requires Node.js >6.14 to run. It can also be installed using two different methods, either Globally or Locally.*

### Local Installation
*If you want to use ESLint as a part of your project build system it is recommended to install it locally. You can achieve that By following these steps:*

```js

$ npm install eslint --save-dev // or yarn install eslint --dev

// setup eslint configuration by running
$ ./node_modules/.bin/eslint --init

// After that, you can run ESLint in your project’s root directory like this:

$ ./node_modules/.bin/eslint yourfile.js

```

### Global Installation
*If you want to make ESLint available to tools that run across all of your projects, we recommend installing ESLint globally. You can do so using npm:*

```js

$ npm install -g eslint // or yarn add global eslint

// initial eslint configuration
$ eslint --init

// After that, you can run ESLint in your project’s root directory like this:
$ eslint yourfile.js

```

## Code Editor Integration
*Another cool tool you can integrate into your code editor preferably VS Code is installing the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)*

## ESLint Configuration

*ESLint is designed to be configured in so many different ways to suit your use case. You require a `.eslintrc.json` file which will act as a config file. ESLint also enables you to integrate a style guide to stick with when you writing code. Some examples include:*

- [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [Google Style Guide](https://google.github.io/styleguide/jsguide.html)
- [React Style Guide](https://github.com/airbnb/javascript/tree/master/react)

```js

// install it as a dev dependency
npm install --save-dev eslint-config-airbnb // or yarn add --dev eslint-config-airbnb

// add the style guide name i.e:airnbnb
{
  "extends": "airbnb"
}

```
## ESLint Rules

*Eslint comes bundled with a large number of rules, which you can either work with or modify the rules your project requires by either using configuration files or configuration comments.* *The following are the rules guidelines:*

```js

- "off" or 0 - turn the rule off
- "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
- "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

```

*To configure rule inside a config file `eslintrc.json` you need to add the rules key and the options you want to modify, For example:*

```js
// sets the no-console rule off
"rules" : {
  no-console: 0; // or "off"
}

```

*To configure rules within a configuration comment you need to add the rules key and the options you want to modify, For example:*

```

// This disables the entire eslint rules in a js file
/* eslint-disable */
console.log('test');

// This disable a specific rule within a js file
/* eslint-disable  no-console*/
console.log('test');

// This disable a specific rule on a  single line
console.log('test'); // eslint-disable-line no-console

```

>Using a linting library is really important and ESLint is one tool that solves the problem of writing error-prone code.

---
title: Setup Continuous Integration with Travis CI in Your Nodejs App
date: 2018-06-22
published: true
tags: ['CI','express']
# cover_image: http://res.cloudinary.com/lauragift/image/upload/v1529656180/logo-travisci-wide1_lcjhdf.jpg
canonical_url: false
description: "This tutorial will take you through how to setup CI with travis in nodejs app"
---

<iframe style="width: 100%; max-height: 115px; border: none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2F0c36c2d676426bcaac9fa74cee12dbd86607a879.59c77039-9f59-4802-896c-22ccfd8feeff.mp3'></iframe>

This post will explain in detail how to go about setting up [Travis CI](https://travis-ci.org/) deployment in a nodejs project.

**What is Continuous Integration?**  
[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) is the continuous practice of merging in small code changes frequently - rather than merging in a large change at the end of a development cycle. The goal is to build healthier software by developing and testing in smaller increments. This is where Travis CI comes in.

### Project Setup
In order to test the way Travis CI works we need to setup a Node project with tests.
Make sure you have node and npm installed `node -v` and `npm -v` to check the versions.


```
# start up your project

mkdir travis-ci
cd travis-ci
npm init

# install the dependencies required for this project
npm install express mocha chai
```

create an _index.js_ file  in root directory with the following.

```
# index.js

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ci with travis');
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;
```

Also create a test folder and an __index-spec.js__ file for testing our node app.

```
# index.spec.js

const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});

```
![test](http://res.cloudinary.com/lauragift/image/upload/v1529662546/Screenshot_from_2018-06-22_11-11-40_nyow0d.png)

**NPM Script**  
Make sure app and test is working by running these scripts.
```

"scripts": {
  "start": "node index.js",
  "test": "mocha"
}
```

**Travis Setup**

create a file __.travis.yml__ in your root directory.

```

language: node_js
node_js: 
  - "stable"
cache:
  directories:
    - "node_modules"
```
The .travis.yml file indicated above is what instructs Travis on what to build. the language option can be whatever language your app is running in and the "node_js": "stable" indicates Travis should use a stable version of node. You can also cache your node_modules directory on Travis to avoid installing all dependencies every time a build is triggered but rather it updates packages that has newer versions. more options that be added to this file can be found [here](https://docs.travis-ci.com/user/getting-started/).

### _Integrate Travis with GitHub_

Travis is a CI service which simply means it a automated process. A typical workflow with Travis ad GitHub goes like this:  
_* A commit is pushed to to GitHub_  
_* Travis build is triggered and it checks if the test is passing or failing._

![travis ui](http://res.cloudinary.com/lauragift/image/upload/v1529664742/Screenshot_from_2018-06-22_11-49-48_abjiek.png)

#### Travis Build setup

_* Create a github repo and push the project folder to GitHub._  
_* Add the repo to [Travis Website](https://travis-ci.org/)_  
_* Make a change and push a commit to the repo. You should automatically see your build process running._  
_* Add the travis badge to a README.md file in your GitHub repo._

**Conclusion**
Travis CI makes developing software efficient. it ensures you deploy clean code that follows good practice and also detects if there are possible bugs or deficit in your code caused by a change or refactor in your project.

All code is available on the [Github repo](https://github.com/lauragift21/travis-blog).

_Also feel free to leave a comment with questions or thoughts._
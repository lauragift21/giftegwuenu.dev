---
title: How to Center Anything in CSS
date: 2018-03-23
published: true
tags: ['css']
canonical_url: false
description: "Learn how to center elements with Flexbox and CSS Grid."
---

<iframe title="parler" style="width: 100%; max-height: 115px; border: none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2F7a89f3a2653c0ba3d4f570af5f19fadc51a2d9f1.ac5b952c-03a2-4eb5-bf29-ef6cf3d6b635.mp3'></iframe>

Centering in CSS can be a pain in the ass. There are several methods to achieve just one task, centering an element. To cut to the chase i'll outline two quick methods to achieve this in a jiffy ✈.

* Flexbox Method

```
<div class="flex">EGWUENU GIFT NDUDI</div>
<!-- CSS using flexbox as a default method for centering div -->
```

```
.flex {
margin: 20px;
font-size: 30px;
color: #133B49;
font-family: 'Ubuntu', sans-serif;
display: flex;
justify-content: center;
align-items: center;
}
```

* Grid Method

```
<div class="flex">EGWUENU GIFT NDUDI</div>
<!-- CSS using grid system as a default method for centering div -->
```

```
.grid {
margin: 20px;
font-size: 30px;
color: #D6005C;
font-family: 'Ubuntu', sans-serif;
display: grid;
justify-items: center;
align-items: center;
}
```

 <p data-height="265" data-theme-id="light" data-slug-hash="QmMbma" data-default-tab="css,result" data-user="lauragift21" data-embed-version="2" data-pen-title="Centering in CSS" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/lauragift21/pen/QmMbma/">Centering in CSS</a> by Egwuenu Gift (<a href="https://codepen.io/lauragift21">@lauragift21</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

> "There are 1000 ways to do a particular thing in CSS. The question is are you doing it correctly? - Unknown"
---
title: Useful Tips for Writing Better Git Commit Messages
date: 2018-05-04
published: true
tags: ['git','github']
canonical_url: false
description: " Awesome tips on how to write better git commit messages."
---

<iframe style="width: 100%; max-height: 115px; border: none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2Fabd1faaf3f2d74f786b992c54dc14f96cf25165f.5b1fa3dd-ba67-4e9e-bb70-c71e6ecdda37.mp3'></iframe>

Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. As a developer one of the basic tools we can’t escape using is making use of git for our workflow. One of the mistakes most developers make. Well this is technically not a mistake but you know the saying “ if you can do it better then why not”.

**Some Rules to keep in mind when writing commit messages**

* Separate subject from body with a blank line
* Limit the subject line to 50 characters
* Capitalize the subject line
* Do not end the subject line with a period
* Use the imperative mood in the subject line
* Wrap the body at 72 characters
* Use the body to explain what and why vs. how

**Mistake 1: We tend to mash the subject of a commit message with the body**

Writing a subject of a commit together with the body of that commit message is the wrong way to go. When you notice your commit message is getting too long to explain this means that commit is doing too many things break it down.

_Doing this:_

```
git commit -m "added new css styling for danger button in other to differentiate between the primary button and other button styles."
```

_Instead of this:_

```js
git commit -m "Add new feature"
```

**Mistake 2: Not limiting the subject to more than 50 chars**

Always make sure the subject of commit never exceeds 50 characters it’s a general rule of thumb. Having more characters tends to get truncated by GitHub and what we are striving for is for a user to know what a commit is doing at one glance.

**Mistake 3: Using lower case format for the subject of a commit**

_Doing this:_

```js
git commit -m "added new feature"
```

_Instead of this:_

```js
git commit -m "Add new feature"
```

**Mistake 4: Ending a subject line with a period**

Always make sure you never end a subject with a period.

_Doing this:_

```js
git commit -m "Modified codebase."
```

_Instead of this:_

```js
git commit -m "Modify codebase"
```

**Mistake 5: Not always using the imperative mood in the subject line**

Every proper git commit should be in imperative mood. “what this means is simply a sentence that is written with action or command”. A properly formed Git commit subject line should always be able to complete the following sentence:

**If applied, this commit will your subject line here**

For example:

**If applied, this commit will "Add auth to X"**

Notice how this doesn’t work for the other non-imperative forms:

**If applied, this commit will "added auth to Y"**

**Mistake 6: Making a long note for body of commit message**

Some commit messages requires more explanation especially when the subject line is vague. adding body to the commit comes handy in cases like this. Always strive to limit the number of char in the body to 72 char. let your body explain what the commit is doing and why it is doing it.

**Mistake 7: Use the body to explain what and why vs. how**

Like i explained in #6 above always make sure the body of your commit explains what and why the commit is doing exactly. explain why the change is necessary, and what side effect does it have. Instead of describing how you solved the problem.

_Some useful resources for more explanation:_

[A note about git commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)

[Git commit message](https://chris.beams.io/posts/git-commit/)

[The art of git commit message](http://alistapart.com/article/the-art-of-the-commit)

Thanks for reading. Hope you learnt from these tips.

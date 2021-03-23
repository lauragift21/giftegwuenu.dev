---
title: "Git: Delete Multiple Branches"
date: 2021-03-23T13:13:04.758Z
published: true
tags:
  - git
canonical_url: true
description: Learn a quick way of deleting multiple remote branches.
---
Have you been piling up so many branches you don't even use anymore and want to clean them up? In this article, I'll share snippets you can use to do that quickly from your terminal.

> Note: Only use this if you're sure the branches are not needed anymore.

### Deleting Local Branch

You can delete a local branch that has been merged into the remote and also delete an un-merged local branch. You want to make sure you know which branch is merged in or not and to do that you can use the following commands:

* `git branch` - to list out all local branches
* `git branch -r` - to list all remote branches
* `git branch -a` - to list both local and remote branches
* `git branch --merged` - to list all the branches that have been merged
* `git branch --no-merged` - to list all branches not merged

Now to delete the local branches, you want to do either of these:

```bash
# delete fully merged branch
git branch -d 'name-of-branch' 

# I use the git alias a lot so this also applies
gbd 'name-of-branch'

# delete branch (even if not merged)
git branch -D 'name-of-branch'

# alias 
gbD 'name-of-branch'
```

### Deleting Multiple Local Branches

Feeling confident enough and you want to delete multiple local branches you can do so using the command:

> Note: You need to be careful when doing this so you don't delete a branch that is not merged in yet and adding the `--merged` flag helps ascertain that you don't do that.

```bash
git branch --merged | egrep -v "(^\*|master|main)" | xargs git branch -d
```

To further explain the command above, `git branch --merged` will list out all the merged branches, `egrep -v "(^\*|master|main)"` will ensure the master and main branch is not deleted,  you can add other branches you want to exclude here. `xargs git branch -d` will go ahead and delete the remaining branches.

```bash
# ⚠️ adding --no-merged and -D flag will go ahead and delete unmerged branches
git branch --no-merged | egrep -v "(^\*|master|main)" | xargs git branch -D

# ⚠️ use this for when you want to delete all the branches both merged and unmerged
git branch | egrep -v "(^\*|master|main)" | xargs echo git branch -D
```

### Deleting Remote Branches

In a case where you need to delete a remote branch because you are done working on it and it had been merged into the remote master branch. You can delete a remote branch using the `--delete` flag and a git push to the remote branch:

```bash
git push origin --delete 'name-of-branch'
```

### Deleting Multiple Remote Branches

When you need to delete multiple remote branches and don't want to do them individually with the command previously stated, you can do so using:

```bash
git branch -r --merged | egrep -v "(^\*|master|main)" | sed 's/origin\///' | xargs -n 1 git push origin --delete
```

This will delete all remote merged branches excluding `master` and `main`. To further explain the command:

* `git branch -r --merged` - will list out all the remote branches that are merged
* `egrep -v "(^\*|master|main)"` - exclude branch master and main
* `sed 's/origin\///'` - because the remote branches are prefixed with `origin/` this command will filter that part out so it returns only the branch name.
* `xargs -n 1 git push origin --delete` - deletes the remaining branches.

Now if you're feeling very confident and want to delete all un-merged branches or all the remote branches use this:

```bash
// ⚠️ deletes all un-merged branches from remote 
git branch -r --merged | egrep -v "(^\*|master|main)" | sed 's/origin\///' | xargs -n 1 echo git push origin --delete

// delete all branches including merged and unmerged 🙊 
git branch -r | egrep -v "(^\*|master|main)" | sed 's/origin\///' | xargs -n 1 echo git push origin --delete
```

I added the `echo` command to print what I'll be doing to the screen so I'm sure I know what I'm about to delete.

![List of remote branches](/images/uploads/screenshot-2021-03-23-at-14.09.22.png)

Now you can take the `echo` command out:

```bash
# ⚠️ deletes all un-merged branches from remote 
git branch -r --merged | egrep -v "(^\*|master|main)" | sed 's/origin\///' | xargs -n 1 git push origin --delete

# delete all branches including merged and unmerged 🙊 
git branch -r | egrep -v "(^\*|master|main)" | sed 's/origin\///' | xargs -n 1 git push origin --delete
```

That's it! I hope this was helpful for you. I know I will be referencing this again when I need it.
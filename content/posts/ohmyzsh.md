---
title: Quick Setup of Oh My ZSH! terminal on Ubuntu
date: 2018-04-27
published: true
tags: ['tools','productivity']
# cover_image: http://res.cloudinary.com/lauragift/image/upload/c_crop/v1524901971/8356e1fb62e77c8b132b10ec4f0b846e_amnahc.jpg
canonical_url: false
description: "Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration.Learn the nitty gritty of using Oh My Zsh for make your terminal com alive"
---

<iframe style="width: 100%; max-height: 115px; border: none;" src='https://api.parler.io/ss/player?url=https%3A%2F%2Fwww.parler.io%2Faudio%2F16923918848%2F6f48f43e318a0676ad198fa89223a3f758fee41d.4ef465eb-2ff9-47f2-a1ea-b45b63e798e3.mp3'></iframe>

Tired of the good ol' boring looking terminal? Do you want to try something different and funky then you should definitely try Oh-my-zsh! As developers, we can't deny the fact that the Command line terminal is part of our existence._

![banner](http://res.cloudinary.com/lauragift/image/upload/v1524834046/Screenshot_from_2018-04-27_13-58-51_ffofu9.png)

_[Oh-My-Zsh](http://ohmyz.sh/) is an open source, community-driven framework for managing your ZSH configuration. It comes bundled with a ton of helpful functions, helpers, plugins, themes, and a few things that will make you shout._

__*Prerequisites*__
------

_* Disclaimer: Oh My Zsh works best on macOS and Linux._

+ Unix-like operating system (macOS or Linux)

+ Zsh should be installed (v4.3.9 or more recent). `sudo apt-get install zsh` If not pre-installed (zsh --version to confirm), curl or wget should be installed

+ git should be installed

__*Installation*__
----

_Via wget_

```

$ sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

```

_Via curl_

```

$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

```
Now we have zsh and oh-my-zsh installed next step is to go ahead with configuration.

**THEMES**
-----------

Oh-My-Zsh comes bundled with several [themes](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes) located in `~/.zshrc/themes` which can be enabled by adding the name of the theme in the ~/.zshrc file.

```bash
# nano ~/.zshrc
# This can be changed to whatever theme is preferred
ZSH_THEME="agnoster"
```

![agnoster](http://res.cloudinary.com/lauragift/image/upload/v1524845811/Screenshot_from_2018-04-27_17-12-52_nlj66n.png)

**PLUGINS**
-----------

Oh-my-zsh also includes a handful of [plugins](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins) available to help make development faster and easier. One of my best is the fact that auto-completion works out of the box. You would not need to type a whole command just hitting tab helps by suggesting possible command related to your needs.

Another awesome thing to try is the [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)  This package provides syntax highlighting for the shell zsh. It enables highlighting of commands whilst they are typed at a zsh prompt into an interactive terminal. This helps in reviewing commands before running them, particularly in catching syntax errors.

__Tip 💡__

_You can easily switch between bash and zsh by running this command_

```bash
# switching from zsh to bash
exec bash
```

```bash
# switching from bash to zsh
exec zsh
```

_There you go, I hope after reading this you switch from whatever shell you were using to zsh and also try out oh-my-zsh they are both awesome.🚀_

_Feel free to share your comments and thoughts._

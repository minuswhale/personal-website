---
title: 'My terminal, five years in the making'
titleCN: '我的终端，五年调教史'
titleTW: '我的終端機，五年調校史'
description: 'The dotfiles pilgrimage: from 400-line configs I didn''t understand to a 60-line setup I do.'
descriptionCN: 'Dotfiles 朝圣之路：从看不懂的 400 行配置，回到看得懂的 60 行。'
descriptionTW: 'Dotfiles 朝聖之路：從看不懂的 400 行設定，回到看得懂的 60 行。'
pubDate: 2026-09-02
tags: ['tooling']
minutes: 7
---

My shell history says I've opened a terminal about 120 times a day for five years. Here's what survived.

## What I deleted

The turning point was deleting, not adding. I removed a 40-line git prompt, a fuzzy-finder config with 15 keybindings I never pressed, and an entire framework whose job was to draw a powerline. Each deletion made the terminal *faster to think about*, which matters more than faster to render.

## What stayed

- **A fast prompt.** Two lines: path + git branch. Nothing else. The prompt is a cursor, not a dashboard.
- **Six aliases.** `gs`, `gl`, `..`, ... — the ones my fingers actually know.
- **One editor config.** Consistency beats features.

```bash
# the whole philosophy, roughly
alias gs='git status -sb'
alias ..='cd ..'
export PS1='\w $(git branch --show-current 2>/dev/null)\n→ '
```

## The lesson

Tools should disappear. Every setting I keep is a setting I'll debug in five years at 1 a.m. — so the config file has become a short letter to my future self: *less, but understood.*

Next up: probably a post about fonts, because yes, I have opinions about mono fonts now. Send help.

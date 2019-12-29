# sodium-colors

You can see the colors [here](https://joe.xoxomoon.com/colors/).

Forked from [nova](https://github.com/trevordmiller/nova-colors) (archived).

## Build the website

```bash
$ yarn build
```

## Build alacritty color scheme

```bash
$ yarn alacritty
```

## Build vim-colortemplate template

1. Install [vim-colortemplate](https://github.com/lifepillar/vim-colortemplate).
2. `yarn colortemplate`
3. `vim build/sodium.colortemplate`
4. `:Colortemplate! ~/.vim`
5. `:color sodium`

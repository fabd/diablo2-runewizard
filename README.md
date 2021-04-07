<p align="center">
  <img width="600" src="https://user-images.githubusercontent.com/169391/112649013-59306500-8e4a-11eb-8761-5e2df91856fb.png" />
</p>

# Runewizard for Diablo II LoD

_Runewizard for Diablo II helps you keep track of the runes you have found and what runewords you can make with them._

Live site **[fabd.github.io/diablo2-runewizard](https://fabd.github.io/diablo2-runewizard)**

<!-- TOC depthFrom:1 -->
<!-- /TOC -->

## Background

Runewizard can be traced as far back as 2003, when I started writing a mini fan site for Diablo II LoD called _The Tankazon Resource_. In 2014, I restored the site from old backups and hosted it on Github through my [diablo2](https://github.com/fabd/diablo2) repository.

Up until March 2021, Runewizard was included in this diablo2 repo, as part of a Jekyll site. So it came with a lot of unrelated content. It was also written in vanilla JS which is simpler in some ways, but also more difficult to maintain.

Recently I became aware of at least two modified versions for popular mods _Path of Diablo_ and _Project Diablo 2_. This, along with the annoucement of _Diablo II Resurrected_, motivated me to do a full rewrite using modern Javascript. 😈

## Features

🩸 **This is a new version of Runewizard rewritten from scratch** using Vite, Vue3, TypeScript and TailwindCSS/JIT.

🩸 **Easy to modify** : for Diablo II mods, just update the _runes_ & _runewords_ data files.

🩸 This **standalone version** features a custom header. It can be turned off for eg. including in an existing layout.

🩸 It can also run completely offline with a little extra work (instructions below)

## Changelog

See [Releases](https://github.com/fabd/diablo2-runewizard/releases) tab. I'll try to document meaningful user-facing updates there.

## Feedback

Please report any bugs or incorrect information in the [Issues](https://github.com/fabd/diablo2-runewizard/issues) tab. Other feedback & suggestions is welcome too. If I like an idea maybe I will work on it. If you need help with a fork (eg. for a Diablo II mod), don't hesitate to ask in the Issues tab and I can try to help you set it up. `fabd#3839` on discord.

Contributions & PRs: keep in mind this is a fun little side project for me to experiment with tech like Vite and Tailwind/JIT. I'd love to learn some new tricks, but if you have substantial changes, it's probably best to let me know in advance so I can tell you if I am interested.

If you do something cool in a fork, let me know! I'd love to check it out and if there are changes I like, I might pull them back into this repo. Also if you modified Runewizard for a Diablo II mod, let me know and I may add a link in the footer.

# Getting started

## Local development

Clone the repository, install the dependencies, and start the Vite server:

```bash
git clone https://github.com/fabd/diablo2-runewizard.git
npm install
npm run dev
```

Vite will show in the console where to preview the website:

```bash
  > Local:    http://localhost:8080/
```

Other scripts in `package.json`:

- `test`: do a real world test with the built files in `dist/` folder (can be useful if you disable `minify` in vite.config.ts, to see the output css/js before minification)
- `disable-warnings`: I don't like annoying warning messages about experimental features 😠 (one is related to `<script setup>` which is triggered by vite-plugin-md, another is from Tailwind about the new JIT mode)

Linting should already happen within your IDE if it has eslint plugins/addons. Or use `npm run lint`.

## Build to host online (eg. a Diablo II mod site)

Use `npm run build` (or just `vite build` to skip the TypeScript check which is kinda slow). Then deploy all the files in the `dist/` folder to wherever you'd like to host it.

Be aware that small images can be encoded inside the JS or CSS as base64 URLs. If you don't like this and would rather have all images output separately, set `assetsInlineLimit` in vite.config.ts to zero.

Take special note of [Public Base Path](https://vitejs.dev/guide/build.html#public-base-path) configuration if your images aren't showing (cf. `base` in `vite.config.ts`).

## Build for use offline

Sadly we can not simply drag-and-drop the **index.html** file into a browser. The browser will issue [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors, and refuse to load both Javascript and Css files.

Follow these steps to make it work offline:

1. set `base` in vite.config.ts to `./` (a relative path) : this causes references to images and other assets to be relative eg. './images/foo.png' instead of '/images/foo.png'
2. disable code splitting to simplify next step (this is already configured so we have a single output css and js file)
3. manually edit the html to "inline" the contents of the CSS and JS

Remove these

```html
<script type="module" crossorigin src="/assets/index.18705ba6.js"></script>
<link rel="stylesheet" href="/assets/style.06ce5f32.css" />
```

And instead add script & style tags and copy the file contents inside:

```html
<head>
  ...
  <style type="text/css">
    /* copy/paste contents of the css file here */
  </style>
</head>
<body>
  <div id="app"></div>
  ...
  <script type="module">
    /* copy/paste contents of the javascript file here */
  </script>
</body>
```

# Dev notes

## Updating your fork

You can sync your fork as [documented by Github here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

Alternatively instead of commiting to `main`, you could work into a separate branch (like a long running feature branch). Then configure your `main` branch to be the same as origin. Then you can `git merge` or selectively pick commits you want with `git cherry-pick`, from the `main` branch into your development branch.

```bash
git remote add upstream https://github.com/fabd/diablo2-runewizard.git
git fetch upstream
git branch --set-upstream-to=upstream/main main
```

## Recommended IDE

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). See also the original [README](https://github.com/vitejs/vite/tree/main/packages/create-app/template-vue-ts) from the vue+ts app scaffolding.

Other VSCode extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) should pick up the `.eslintrc.js` file and provide linting in the IDE
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) will use the included `.prettierrc.js` for consistent formatting
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) should pickup the `stylelint.config.js` and provide linting in the IDE

## Notes on the repo & file structure

## Optional header

Since the old Runewizard was included in my [diablo2 mini site](https://github.com/fabd/diablo2) as part of an existing layout, it didn't have its own header. I added a very simple header to be shown for the new Runewizard as it is hosted from this repo with Github Pages. In my header, there is a link that takes the user back to my diablo2 mini site (which you can also turn off in the .env file).

### .env files

I've designed the header so it's possible to customize it with just a few edits in the `.env` file. See the comments in the file.

Note that you can also override these settings with a `.env.local` file (see [.env files](https://vitejs.dev/guide/env-and-mode.html#env-files) in Vite guide). This local env file is useful if you need to store a private key of some sort.

### Stylesheets (css, scss)

Stylesheets are kept in one folder under `src/assets/`. This is convenient for me and avoids issues with .scss linting of .vue files in VSCode not working properly (could be a bug with Vetur/Vite or maybe I misconfigured something).

I like to take advantage of both Sass and Tailwind. For this to work the ordering of CSS declarations matters (cf. Tailwind imports in the main stylesheet). It also requires a consistent and strict use of [BEM-like syntax](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md), in order to "flatten" most css selectors to the lowest specificity. For example `.rw-Dialog-headerTitle` has a specificity of 1, therefore we can override its default styles in a template: `<div class="rw-Dialog-headerTitle text-lg mb-4">`.

### Using localStorage vs cookie

Runewizard uses **localStorage** (instead of a cookie in the old version) to maintain selected runes: this is so that the app can be built to work completely offline. In the case of loading index.html via `file:///` URL, cookies don't work.

Either way it is a known limitation that if the user clears "Cookie & other site related data" manually in their browser, the user state will be reset. For such a small app I felt it's an acceptable tradeoff, as creating a server for that seems overkill.

### SVG icons

The icons come from [icones.js](https://icones.js.org/collection/fa-solid). Click "Components > Vue" in the bottom bar of that site to get the code for an icon. Could use [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons) instead.

# Todos & ideas

Features:

- [ ] "Wanted" list : ability to pin runewords to the top of the list, whether they are completed or not. Useful to keep track of required runes, and for planned builds.
- [ ] Character tabs : could be useful if playing several solo self-found (ssf) characters, in which case you might want to keep track of runes in separate individual stashes
- [ ] Required Level : could be displayed in the Runeword popup
- [ ] Runes popup : could be very handy to display the Rune upgrade formulae and any other related formulae such as crafted items (this is a lot of work, and also for a Diablo II mod a lot more data to keep updated... unless you have a script of some sort to parse the data files and generate source for Runewizard)

# Contact

Feel free to leave a message in the [Issues](https://github.com/fabd/diablo2-runewizard/issues) tab. `fabd#3839` on discord (not sure how this works).

# Thanks

- @migouelBL for providing required levels data (in the old repository)
- @ThisIsSammysAccount for showing interest and suggestions for the new standalone repo

# Copyright notices

The rune icon in the header is Copyright (c) BLIZZARD ENTERTAINMENT. It is from a screenshot of Diablo II Resurrected.

SVG icons come from [icones.js.org](https://icones.js.org/) and are all licensed [under some kind of open-source or free licence](https://github.com/iconify/iconify#licence) (cf. Iconify License)

# License

MIT.

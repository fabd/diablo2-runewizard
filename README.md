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

Up until March 2021, Runewizard was included in this diablo2 repo, as part of a Jekyll site. It was also written in vanilla JS which is simpler in some ways, but also more difficult to maintain.

With the annoucement of _Diablo II Resurrected_, I was motivated to do a full rewrite using modern Javascript. The refactor uses: Vite, Vue3, TypeScript and TailwindCSS/JIT. 🔥🔥🔥

Runewizard is now hosted and deployed from this new repository. It will be easier to update and maintain should any new patches happen to Diablo II... 😈

## Changelog

See **[Releases](https://github.com/fabd/diablo2-runewizard/releases)** tab for meaningful user-facing updates. Other changes are documented in the commits.

## Feedback

Please report **any bugs or incorrect information** in the **[Issues](https://github.com/fabd/diablo2-runewizard/issues)** tab. Other general feedback is welcome too. If I like an idea, maybe I'll work on it.

If you need help to modify Runewizard for a Diablo II mod, feel free to ask in the Issues tab and I'll try to help you set it up. Let me know about your fork! I may post a link here and/or in the Runewizard footer.

Pull requests: in general PRs for small fixes/typos are welcome. For substantial changes, it's probably best to let me know in advance so I can tell you if I am interested.

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
  > Local:    http://localhost:8080/diablo2-runewizard/
```

## Build to host online (eg. a Diablo II mod site)

Use `npm run build` (or just `vite build` to skip the TypeScript check which is kinda slow). Then deploy all the files in the `dist/` folder to wherever you'd like to host it.

Be aware that small images can be encoded inside the JS or CSS as base64 URLs. If you don't like this and would rather have all images output separately, set `assetsInlineLimit` in vite.config.ts to zero.

Take special note of [Public Base Path](https://vitejs.dev/guide/build.html#public-base-path) configuration if your images aren't showing (cf. `base` in `vite.config.ts`).

## Build for use offline (without development environment)

Sadly we can not simply drag-and-drop the **index.html** file (from the dist/ folder) into a browser. The browser will issue [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors, and refuse to load both Javascript and Css files.

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

## Notes on the repo & file structure

## Customizing the header

The game version as well as links in the header can be configured in the `.env` file. It can also be turned off, for eg. including in an existing layout.

### Stylesheets (css, scss)

Stylesheets are kept in one folder under `src/assets/`. This is convenient for me and avoids issues with .scss linting of .vue files in VSCode not working properly (could be a bug with Vetur/Vite or maybe I misconfigured something).

I like to take advantage of both Sass and Tailwind. For this to work the ordering of CSS declarations matters (cf. Tailwind imports in the main stylesheet). It also requires a consistent and strict use of [BEM-like syntax](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md), in order to "flatten" most css selectors to the lowest specificity. For example `.rw-Dialog-headerTitle` has a specificity of 1, therefore we can override its default styles in a template: `<div class="rw-Dialog-headerTitle text-lg mb-4">`.

### Using localStorage vs cookie

Runewizard uses **localStorage** (instead of a cookie in the old version) to maintain selected runes: this is so that the app can be built to work completely offline. In the case of loading index.html via `file:///` URL, cookies don't work.

Either way it is a known limitation that if the user clears "Cookie & other site related data" manually in their browser, the user state will be reset. For such a small app I felt it's an acceptable tradeoff, as creating a server for that seems overkill.

### SVG icons

The icons come from [icones.js](https://icones.js.org/collection/fa-solid). Click "Components > Vue" in the bottom bar of that site to get the code for an icon. Could use [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons) instead.

# Thanks

- @migouelBL for providing required levels data (in the old repository)
- @ThisIsSammysAccount for showing interest and suggestions for the new standalone repo

# Copyright notices

The rune icon in the header is Copyright (c) BLIZZARD ENTERTAINMENT. It is from a screenshot of Diablo II Resurrected.

SVG icons come from [icones.js.org](https://icones.js.org/) and are all licensed [under some kind of open-source or free licence](https://github.com/iconify/iconify#licence) (cf. Iconify License)

# License

MIT.

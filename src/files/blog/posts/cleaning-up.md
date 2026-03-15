---
title: Cleaning Up the Website
date: Apr 17, 2022
---

I like this website. I made it in 2018, back then it was a fun challenge. I had a clear vision, the features that I wanted it to have. Over the time I've made additions, changes. The core implementation has remained, and looking at it with a fresh (and more experienced) pair of eyes I notice lot of decisions what could be improved. From better implementations, optimizing some stuff, reducing building size, a bit of everything. So, I've decided to document a bit on these changes, a complete (ish) clean up, pimp my ride style.

## Dependency Cleanup

Lots of dependencies that needed updating. Some even were not being used at all.

Updated babel and presets, added the sweet **automatic** runtime to auto import JSX transpiling functions. Updated webpack to v5, and all plugin and loaders. This included removing unnecessary loaders like **file-loader**, now that Webpack 5 uses [asset modules](https://webpack.js.org/guides/asset-modules/). Found an issue with Webpack's latest version that created a memory leak (See [this](https://github.com/webpack/webpack/issues/15619)). Figured I stayed on **5.66.0** and just wait it out and try again in the future.

## Improving bundle size

Installed [bundle analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to check what I could improve on. This is how the original report looked like.

<figure>
  <img alt="initial bundle" src="/images/blog/cu-bundle_og.jpg" width="932" height="464" />
  <figcaption>A total of 645.92KB parsed size</figcaption>
</figure>

You can see 2 big libs that take most of the space: **@fortawesome** and **katex**.

[Katex](https://www.npmjs.com/package/katex) is an awesome math rendering tool. I used it for a [blog entry](#/?file=Blog/animation_and_positioning.txt), so having a whole lib just for that is not exactly efficient. An easy way out would be just type in whatever expression I wanted in text (though seeing **1/2 x** is not as pretty as the real thing). A nice alternative I found was use an external tool to generate my expressions as **png** images, then just those images instead. Having 20 small sized images is way better than having the whole library, bundle size at least.

Another lib taking a lot of space, **@fortawesome**. One thing that I was not aware years ago when I added it was tree shaking. That means, having an import like the following:

```js
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faSteamSymbol,
  faCodepen,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
```

...ends up bundling all icons, even the ones I'm not using. Direct imports allow webpack to take just what is needed.

```js
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faSteamSymbol } from '@fortawesome/free-brands-svg-icons/faSteamSymbol';
import { faCodepen } from '@fortawesome/free-brands-svg-icons/faCodepen';
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
```

Another lib that was taking a lot of space was [react-markdown](https://www.npmjs.com/package/react-markdown). This one is used to read markdown and return HTML. Here, is used to read the **README.md** of the personal projects I've worked on. After looking for other alternatives, I found [marked](https://www.npmjs.com/package/marked) to be the best solution for my needs (thanks for Adam Leggett for his useful and complete [SO answer!](https://stackoverflow.com/a/40066280/2756370)). Even if **react-markdown** (100.22KB parsed size) is React focused, **marked** (35.1KB parsed size) was a 3rd of the former's size, and the difference in both's implementation wasn't that big

```js
import ReactMarkdown from 'react-markdown';

// ...

const [text, setText] = useState('');

useEffect(() => {
  fetchReadme(name).then(setText);
}, []);

return (
  <div className={styles.wrapper}>
    <ReactMarkdown>{text}</ReactMarkdown>
  </div>
);
```

```js
import { marked } from 'marked';

// ...

const div = useRef(null);

useEffect(() => {
  fetchReadme(name).then(res => {
    div.current.innerHTML = marked.parse(res);
  });
}, []);

return <div className={styles.wrapper} ref={div} />;
```

These were the most noticeable libraries. In addition, I've configured webpack to bundle all **node_modules** and **react** in different chunks. And with just those changes, we ended up with a total of 325.8 KB, half of the original size.

<figure>
  <img alt="bundle update" src="/images/blog/cu-bundle_update.jpg" width="932" height="464" />
  <figcaption>A total of 246.12KB parsed size. Big difference.</figcaption>
</figure>

## State Management

I opted for Redux since it was growing in popularity and I decided to used it so I can learn about it. Afterwards, I updated the code using [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit). Lot of boilerplate code removed. Given the very simple scope on this site, redux was kind of overkill, and it was noticeable on the bundle size as well. I went through some other alternatives that looked interesting: Recoil, MobX, XState. This of course included React's own Context. Focusing on lightweight, I was stuck between 2: [jotai](https://www.npmjs.com/package/jotai) and [zustand](https://www.npmjs.com/package/zustand).

Jotai has Recoil's mentality around atoms, kind of like its lightweight version. Same relationship between Zustand and Redux. Since Redux was already being used, I thought making the jump to Zustand would be easier, less refactoring and changes overall.

I added [immer](https://www.npmjs.com/package/immer) to the formula. Changes were smooth, and even simpler than Redux's. I managed to reduce the vendors file by 15KB, very little difference. But even with less or slightly more, it was just for the sake of trying the new options out there.

## Adding Typescript

I wanted to add typescript to keep everything together and clear when I come back periodically to make some changes. This required a fresh install, creating a **tsconfig.json** (allowJs: true as a temporary solution while I refactor all JS files into TS/TSX).

Changed `webpack.config` file to bundle everything with `ts-loader`, added [fork-ts-checker-webpack-plugin](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) to run type checker on a different proccess.

<figure>
  <img alt="bundle end" src="/images/blog/cu-bundle_end.jpg" width="932" height="464" />
  <figcaption>132.86KB from react. 105.24KB from vendors, and 60.04KB from the main bundle</figcaption>
</figure>

I have more changes in mind, but mostly from my own code.

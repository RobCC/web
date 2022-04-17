import initialBundle from '~/public/images/blog/bundle_og.png';
import bundleUpdate from '~/public/images/blog/bundle_update.png';
import bundleEnd from '~/public/images/blog/bundle_end.png';

import { createFile } from '#/utils/explorer';
import { Wrapper, Gist, Image } from '#/files/blog/shared';

const imgSize = {
  width: 932,
  height: 464,
};

function CleaningUp() {
  return (
    <Wrapper>
      <h1>Cleaning Up the Website</h1>
      <h4>Apr 17, 2022</h4>
      <p>
        I like this website. I made it in 2018, back then it was a fun
        challenge. I had a clear vision, the features that I wanted it to have.
        Over the time I&apos;ve made additions, changes. The core implementation
        has remained, and looking at it with a fresh (and more experienced) pair
        of eyes I notice lot of decisions what could be improved. From better
        implementations, optimizing some stuff, reducing building size, a bit of
        everything. So, I&apos;ve decided to document a bit on these changes, a
        complete (ish) clean up, pimp my ride style.
      </p>
      <h2>Dependency Cleanup</h2>
      <p>
        Lots of dependencies that needed updating. Some even were not being used
        at all.
      </p>
      <p>
        Updated babel and presets, added the sweet <b>automatic</b> runtime to
        auto import JSX transpiling functions. Updated webpack to v5, and all
        plugin and loaders. This included removing unnecessary loaders like{' '}
        <b>file-loader</b>, now that Webpack 5 uses{' '}
        <a href="https://webpack.js.org/guides/asset-modules/">asset modules</a>
        . Found an issue with Webpack&apos;s latest version that created a
        memory leak (See{' '}
        <a href="https://github.com/webpack/webpack/issues/15619">this</a>).
        Figured I stayed on <b>5.66.0</b> and just wait it out and try again in
        the future.
      </p>
      <h2>Improving bundle size</h2>
      <p>
        Installed{' '}
        <a href="https://www.npmjs.com/package/webpack-bundle-analyzer">
          bundle analyzer
        </a>{' '}
        to check what I could improve on. This is how the original report looked
        like.
      </p>
      <Image
        alt="initial bundle"
        src={initialBundle}
        width={imgSize.width}
        height={imgSize.height}
        footer="A total of 645.92KB parsed size"
      />
      <p>
        You can see 2 big libs that take most of the space: <b>@fortawesome</b>{' '}
        and <b>katex</b>.
      </p>
      <p>
        <a href="https://www.npmjs.com/package/katex">Katex</a> is an awesome
        math rendering tool. I used it for a{' '}
        <a href="#/?file=Blog/animation_and_positioning.txt">blog entry</a>, so
        having a whole lib just for that is not exactly efficient. An easy way
        out would be just type in whatever expression I wanted in text (though
        seeing <b>1/2 x</b> is not as pretty as the real thing). A nice
        alternative I found was use an external tool to generate my expressions
        as <b>png</b>
        images, then just those images instead. Having 20 small sized images is
        way better than having the whole library, bundle size at least.
      </p>
      <p>
        Another lib taking a lot of space, <b>@fortawesome</b>. Given the whole
        idea of this site, this one is kinda necessary. But, one thing that I
        was not aware years ago when I added it was tree shaking. That means,
        having an import like the following:
      </p>
      <Gist
        gist="RobCC/0ec2b10448bf966bf6ce142badd3246d"
        file="icons-no-treeshake.ts"
      />
      <p>
        ...ends up bundling all icons, even the ones I&apos;m not using. Direct
        imports allow webpack to take just what is needed.
      </p>
      <Gist
        gist="RobCC/0ec2b10448bf966bf6ce142badd3246d"
        file="icons-treeshake.ts"
      />
      <p>
        Another lib that was taking a lot of space was{' '}
        <a href="https://www.npmjs.com/package/react-markdown">
          react-markdown
        </a>
        . This one is used to read markdown and return HTML. Here, is used to
        read the <b>README.md</b> of the personal projects I&apos;ve worked on.
        After looking for other alternatives, I found{' '}
        <a href="https://www.npmjs.com/package/marked">marked</a> to be the best
        solution for my needs (thanks for Adam Leggett for his useful and
        complete{' '}
        <a href="https://stackoverflow.com/a/40066280/2756370">SO answer!</a>).
        Even if <b>react-markdown</b> (100.22KB parsed size) is React focused,{' '}
        <b>marked</b> (35.1KB parsed size) was a 3rd of the former&apos;s size,
        and the difference in both&apos;s implementation wasn&apos;t that big
      </p>
      <Gist
        gist="RobCC/0ec2b10448bf966bf6ce142badd3246d"
        file="react-markdown.ts"
      />
      <Gist gist="RobCC/0ec2b10448bf966bf6ce142badd3246d" file="marked.ts" />
      <p>
        These were the most noticeable libraries. In addition, I&apos;ve
        configured webpack to bundle all <b>node_modules</b> and <b>react</b> in
        different chunks. And with just those changes, we ended up with a total
        of 325.8 KB, half of the original size.
      </p>
      <Image
        alt="bundle update"
        src={bundleUpdate}
        width={imgSize.width}
        height={imgSize.height}
        footer="A total of 246.12KB parsed size. Big difference."
      />
      <h2>State Management</h2>
      <p>
        I opted for Redux since it was growing in popularity and I decided to
        used it so I can learn about it. Afterwards, I updated the code using{' '}
        <a href="https://www.npmjs.com/package/@reduxjs/toolkit">
          Redux Toolkit
        </a>
        . Lot of boilerplate code removed. Given the very simple scope on this
        site, redux was kind of overkill, and it was noticeable on the bundle
        size as well. I went through some other alternatives that looked
        interesting: Recoil, MobX, XState. This of course included React&apos;s
        own Context. Focusing on lightweight, I was stuck between 2:{' '}
        <a href="https://www.npmjs.com/package/jotai">jotai</a> and{' '}
        <a href="https://www.npmjs.com/package/zustand">zustand</a>.
      </p>
      <p>
        Jotai has Recoil&apos;s mentality around atoms, kind of like its
        lightweight version. Same relationship between Zustand and Redux. Since
        Redux was already being used, I thought making the jump to Zustand would
        be easier, less refactoring and changes overall.
      </p>
      <p>
        I added <a href="https://www.npmjs.com/package/immer">immer</a> to the
        formula. Changes were smooth, and even simpler than Redux&apos;s. I
        managed to reduce the vendors file by 15KB, very little difference. But
        even with less or slightly more, it was just for the sake of trying the
        new options out there.
      </p>
      <h2>Adding Typescript</h2>
      <p>
        I wanted to add typescript to keep everything together and clear when I
        come back periodically to make some changes. This required a fresh
        install, creating a <b>tsconfig.json</b> (allowJs: true as a temporary
        solution while I refactor all JS files into TS/TSX).
      </p>
      <p>
        Changed `webpack.config` file to bundle everything with `ts-loader`,
        added{' '}
        <a href="https://www.npmjs.com/package/fork-ts-checker-webpack-plugin">
          fork-ts-checker-webpack-plugin
        </a>{' '}
        to run type checker on a different proccess.
      </p>
      <Image
        alt="bundle end"
        src={bundleEnd}
        width={imgSize.width}
        height={imgSize.height}
        footer="132.86KB from react. 105.24KB from vendors, and 60.04KB from the main bundle"
      />
      <p>I have more changes in mind, but mostly from my own code.</p>
    </Wrapper>
  );
}

export default createFile('cleaning_up.txt', CleaningUp);

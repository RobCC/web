import initialBundle from '~/public/images/blog/bundle_og.png';

import { createFile } from '#/utils/explorer';
import { Wrapper, Gist, Image } from '#/files/blog/shared';

const imgSize = {
  width: 932,
  height: 464,
};

function CleaningUp() {
  return (
    <Wrapper>
      <h1>Cleaning Up</h1>
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
    </Wrapper>
  );
}

export default createFile('cleaning_up.txt', CleaningUp);

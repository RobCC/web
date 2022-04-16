/* eslint-disable max-len */

import { createFile } from '#/utils/explorer';
import { Wrapper, Gist, Image } from '#/files/blog/shared';

const imgStyle = {
  width: 788,
  height: 442,
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
        auto import JSX transpiling functions. Removed `enzyme` now that React
        Testing Library is the de facto lib to use. Updated webpack to v5, and
        all plugin and loaders. This included removing unnecessary loaders like{' '}
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
      <Gist
        id="RobCC/0ec2b10448bf966bf6ce142badd3246d"
        file="icons-no-treeshake.ts"
      />
    </Wrapper>
  );
}

export default createFile('cleaning_up.txt', CleaningUp);

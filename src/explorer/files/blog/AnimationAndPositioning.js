import React, { useEffect, useRef } from 'react';
// import { MathJax } from 'better-react-mathjax';

import { Title, Wrapper, Image } from '#/explorer/files/blog/shared';
import { createFile } from '#/explorer/utils';

import videoFull from '#/explorer/files/blog/assets/full.png';
import videoFinal from '#/explorer/files/blog/assets/final.png';

const imgStyle = {
  width: 788,
  height: 442,
};

function AnimationAndPositioning() {
  const refF1 = useRef();

  useEffect(() => {
    refF1.current.appendChild(
      // MathJax.tex2svg('//frac{1}{x^2-1}', { display: true }),
      MathJax.tex2svg('\\frac{\\frac{1}{x^2-1}}{x}', { display: true }),
    );
  }, []);

  return (
    <Wrapper>
      <Title>Animation &amp; Positioning</Title>
      <div>
        Working on an &quot;On Next&quot; functionality. Usually seen on
        streaming applications when a movie or an episode is about to end, to
        recommend you more content within the app.
      </div>
      <Image alt="Fullscreen player" src={videoFull} style={imgStyle} />
      On TV streaming apps, the player is usually fullscreen by default. When
      credits start rolling, an animation occurs. The player shrinks and moves
      to the right of the screen, revealing some carousels with episodes,
      metadata on the next episode to play, a countdown perhaps. You get the
      idea.
      <Image alt="Fullscreen player" src={videoFinal} style={imgStyle} />
      The main focus on this blog will the the transition on the player. Both on
      scaling, and position.
      <div>
        There are 2 things to consider:
        <ol>
          <li>
            <b>Pixel perfect with designs: </b>
            This means to follow the exact position and scaling of the player.
          </li>
          <li>
            <b>Resolution compatibility: </b>
            Not to work with hardcoded values of a commonly used TV resolution
            (say, 1080p).
          </li>
        </ol>
      </div>
      The real UI was made on on Figma, with the following values:
      <ul>
        <li>
          Screen was designed on a 1080p screen, where the video was fullscreen
          (so, 1920x1080)
        </li>
        <li>
          The video would be shrunk to 548x308, with a top position of 325px and
          a left position of 1244px
        </li>
      </ul>
      <div ref={refF1} />
    </Wrapper>
  );
}

export default createFile(
  'animation_and_positioning.txt',
  AnimationAndPositioning,
);

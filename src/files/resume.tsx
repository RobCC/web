/* eslint-disable max-len */
import videoFull from '~/public/images/blog/full.png';

import { Wrapper, Image } from '#/components/Blog';
import { fileUtils } from '#/utils/directory';

const imgStyle = {
  width: 788,
  height: 442,
};

function AnimationAndPositioning() {
  return (
    <Wrapper>
      <h1>Animation &amp; Positioning</h1>
      <h4>Jan 14, 2022</h4>
      <p>
        This was something interesting I worked in a while back, so I though I
        could share it. Working on an &quot;On Next&quot; functionality, usually
        seen on streaming applications when a movie or an episode is about to
        end, to recommend you more content within the app.
      </p>
      <Image alt="Fullscreen player" src={videoFull} style={imgStyle} />
      <p>
        On TV streaming apps, the player is usually fullscreen by default. When
        credits start rolling, an animation occurs. The player shrinks and moves
        to the right of the screen, revealing some carousels with episodes,
        metadata on the next episode to play, a countdown perhaps. You get the
        idea.
      </p>
    </Wrapper>
  );
}

export default fileUtils.create('resume.md', AnimationAndPositioning);

/* eslint-disable max-len */
// Generated with http://www.latex2png.com/ (Resolution: 200)
import videoFull from '~/public/images/blog/full.png';
import videoFinal from '~/public/images/blog/final.png';
import videoCenter from '~/public/images/blog/scaled.png';
import videoCorner from '~/public/images/blog/corner.png';
import scaleX from '~/public/images/blog/scaleX.png';
import scaleY from '~/public/images/blog/scaleY.png';
import deviceHeightRatio from '~/public/images/blog/deviceHeightRatio.png';
import deviceLeftPosition from '~/public/images/blog/deviceLeftPosition.png';
import deviceLeftPositionR from '~/public/images/blog/deviceLeftPositionR.png';
import dk from '~/public/images/blog/dk.png';
import form from '~/public/images/blog/form.png';
import height from '~/public/images/blog/height.png';
import heightFinal from '~/public/images/blog/heightFinal.png';
import width from '~/public/images/blog/width.png';
import widthFinal from '~/public/images/blog/widthFinal.png';
import maxTopPosition from '~/public/images/blog/maxTopPosition.png';
import maxLeftPosition from '~/public/images/blog/maxLeftPosition.png';
import simp from '~/public/images/blog/simp.png';
import simpk from '~/public/images/blog/simpk.png';
import translateX from '~/public/images/blog/translateX.png';
import translateY from '~/public/images/blog/translateY.png';
import deviceTopPosition from '~/public/images/blog/deviceTopPosition.png';
import deviceTopPositionR from '~/public/images/blog/deviceTopPositionR.png';
import deviceWidthRatio from '~/public/images/blog/deviceWidthRatio.png';

import { createFile } from '#/utils/explorer';
import { Title, Wrapper, Image } from '#/files/blog/shared';

const imgStyle = {
  width: 788,
  height: 442,
};

const IFRAME_PROPS = {
  allowtransparency: 'true',
};

function AnimationAndPositioning() {
  return (
    <Wrapper>
      <Title>Animation &amp; Positioning</Title>
      <div>
        This was something interesting I worked in a while back, so I though I
        could share it. Working on an &quot;On Next&quot; functionality, usually
        seen on streaming applications when a movie or an episode is about to
        end, to recommend you more content within the app.
      </div>
      <Image alt="Fullscreen player" src={videoFull} style={imgStyle} />
      On TV streaming apps, the player is usually fullscreen by default. When
      credits start rolling, an animation occurs. The player shrinks and moves
      to the right of the screen, revealing some carousels with episodes,
      metadata on the next episode to play, a countdown perhaps. You get the
      idea.
      <Image alt="Final" src={videoFinal} style={imgStyle} />
      The main focus on this blog will the the transition on the player. Both on
      scaling, and positioning.
      <div>
        There are 2 things to consider:
        <ol>
          <li>
            <b>Pixel perfect with designs: </b>
            This means to follow the exact position and scaling of the player as
            specified on the designs.
          </li>
          <li>
            <b>Resolution compatibility: </b>
            Position and scale should be the same on all TV resolutions.
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
      <h2>Get the scaling values</h2>
      <div>
        <p>
          This is very straightforward. We calculate the scale ratio (k)
          dividing each of the shrunk&apos;s dimensions by the original
          size&apos;s.
        </p>
        <div>
          <Image alt="scaleX" src={scaleX} center />
          <Image alt="scaleY" src={scaleY} center />
        </div>
        <p>
          Result of both is 0.28 approximately, but we will keep the decimals
          in. This means that the player is to be shrunk to roughly 28% of its
          original size. These will be use for the values for <b>scaleX</b> and{' '}
          <b>scaleY</b> respectively during the animation.
        </p>
      </div>
      <h2>Get the device size ratio</h2>
      <div>
        <p>
          Figma designs were made for a 1080p resolution screen. Still,
          everything should look the same on other resolutions, like 720p
          (1280x720).
        </p>
        <p>
          So, we calculate the ratio (r) of our current window size against
          Figma&apos;s. We will take 720p as an example.
        </p>
        <div>
          <Image alt="deviceWidthRatio" src={deviceWidthRatio} center />
          <Image alt="deviceHeightRatio" src={deviceHeightRatio} center />
        </div>
        <p>
          The ratio agains a 720p resolution is 0.666. For TV resolutions, both
          sould usually have the same value. Still, let us separate and name
          them <b>deviceWidthRatio</b> and <b>deviceHeightRatio</b>{' '}
          respectively.
        </p>
      </div>
      <h2>Know where to move, and how much</h2>
      <div>
        <Image alt="Center player" src={videoCenter} style={imgStyle} />
        Following with the designs, the player should be positioned somewhere on
        the middle right side of the screen. A top position of 325px and a left
        position of 1244px, to be precise. Another thing to consider is the
        initial position of the player once it is scale down. Since initially
        the player covers the entire screen, applying a transition to `scaleX`
        and `scaleY` will bring the player down to the center of the screen.
        <p>
          The position desired will be `top: 325px`, `left: 1244px`. First, we
          need to consider the scale values of the player, using the values of
          the ratio (k) we calculated previously: <b>deviceWidthRatio</b> and{' '}
          <b>deviceHeightRatio</b> respectively.
        </p>
        <div>
          <Image alt="deviceLeftPosition" src={deviceLeftPosition} center />
          <Image alt="deviceTopPosition" src={deviceTopPosition} center />
        </div>
        <p>
          These values will help us determine how much we should move to reach
          the desired position. We will name these <b>deviceLeftPosition</b> and{' '}
          <b>deviceTopPosition</b>, since both represent the ideal `top` and
          `left` values, as if we were to move a div element with CSS.
        </p>
        <p>
          One thing that we did not consider was our current screen&apos;s
          dimensions. We need to divide this values by our previouslty
          calculated device size ratio (r), represented by{' '}
          <b>deviceWidthRatio</b> and <b>deviceHeightRatio</b>.
        </p>
        <div>
          <Image alt="deviceLeftPositionR" src={deviceLeftPositionR} center />
          <Image alt="deviceTopPositionR" src={deviceTopPositionR} center />
        </div>
        <p>
          This would be enough if the player started on the top left corner of
          the screen. Since the initial position of the player will be the exact
          center, we need to rest that initial position first. In other words,
          we can calculate the distance from the center to the top-left corner,
          and then apply the distance previously calculated.
        </p>
        <p>
          To get these, we need to consider our current screen&apos;s dimensions
          (d), and multiply it by our scaled value of each axis (k). First, we
          calculate the dimension of the shrunk player.
        </p>
        <div>
          <Image alt="dk" src={dk} center />
        </div>
        <Image alt="Center player" src={videoCorner} style={imgStyle} />
        <p>
          Since when scaling down the player goes to the center, we need to get
          the remaining distance from the top of the video to the top of the
          screen (to emulate a `top: 0` positioning). This can be calculated by
          taking half the screen&apos;s width, and rest half our shrunk
          player&apos;s width
        </p>
        <div>
          <Image alt="form" src={form} center />
        </div>
        <p>A simplification of this formula would be:</p>
        <div>
          <Image alt="simp" src={simp} center />
        </div>
        <p>
          We then scale the distance, to get the actual distance needed,
          dividing it again to the scaled value (k).
        </p>
        <div>
          <Image alt="simpk" src={simpk} center />
        </div>
        <p>For our width and height, these would be:</p>
        <h3>Width</h3>
        <div>
          <Image alt="width" src={width} center />
          <Image alt="widthFinal" src={widthFinal} center />
        </div>
        <h3>Height</h3>
        <div>
          <Image alt="height" src={height} center />
          <Image alt="heightFinal" src={heightFinal} center />
        </div>
        <p>
          These values go to the other way (top and left), so when we add to our
          device position variables. Because of that, we will negate both of
          these values. We end up with
        </p>
        <div>
          <Image alt="maxLeftPosition" src={maxLeftPosition} center />
          <Image alt="maxTopPosition" src={maxTopPosition} center />
        </div>
        <h2>Get the final translate values</h2>
        <p>
          Now that we have the distance needed to move the playyer to a top:
          0/left: 0 position, we add these to our deviceWidthPosition and
          deviceLeftPosition in order to get the final values needed for{' '}
          <b>translateX</b> and <b>translateY</b> to move the player to the
          desired position.
        </p>
        <div>
          <Image alt="translateX" src={translateX} center />
          <Image alt="translateY" src={translateY} center />
        </div>
        <h2>Wrap things up</h2>
        We now have the final values needed for the CSS&apos;s transform
        attribute:
        <ul>
          <li>scaleX: 0.28541666666666665</li>
          <li>scaleY: 0.2851851851851852</li>
          <li>translateX: 1303px</li>
          <li>translateY: -143px</li>
        </ul>
        <p>
          As displayed on codepen, the div moves to a position equivalent to the
          one on the designs, taking in consideration the window&apos;s
          dimensions.
        </p>
      </div>
      <iframe
        {...IFRAME_PROPS}
        height="300"
        style={{
          width: '100%',
        }}
        scrolling="no"
        title="Shrink animation"
        src="https://codepen.io/robcc/embed/preview/ExoPprp?default-tab=js%2Cresult&theme-id=dark"
        frameBorder="no"
        loading="lazy"
        allowFullScreen
      >
        See the Pen{' '}
        <a href="https://codepen.io/robcc/pen/ExoPprp">Shrink animation</a> by
        José Roberto Chávez Cobián (
        <a href="https://codepen.io/robcc">@robcc</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </Wrapper>
  );
}

export default createFile(
  'animation_and_positioning.txt',
  AnimationAndPositioning,
);

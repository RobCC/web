---
title: Animation & Positioning
date: Jan 14, 2022
---

This was something interesting I worked in a while back, so I though I could share it. Working on an "On Next" functionality, usually seen on streaming applications when a movie or an episode is about to end, to recommend you more content within the app.

<img alt="Fullscreen player" src="/images/blog/aap-full.jpg" width="788" height="442" />

On TV streaming apps, the player is usually fullscreen by default. When credits start rolling, an animation occurs. The player shrinks and moves to the right of the screen, revealing some carousels with episodes, metadata on the next episode to play, a countdown perhaps. You get the idea.

<figure>
  <img alt="Final" src="/images/blog/aap-final.jpg" width="788" height="442" />
  <figcaption>The main focus on this blog will the the transition on the player. Both on scaling, and positioning.</figcaption>
</figure>

There are 2 things to consider:

1. **Pixel perfect with designs:** This means to follow the exact position and scaling of the player as specified on the designs.
2. **Resolution compatibility:** Position and scale should be the same on all TV resolutions.

The real UI was made on on Figma, with the following values:

- Screen was designed on a 1080p screen, where the video was fullscreen (so, 1920x1080)
- The video would be shrunk to 548x308, with a top position of 325px and a left position of 1244px

## Get the scaling values

This is very straightforward. We calculate the scale ratio (k) dividing each of the shrunk's dimensions by the original size's.

![scaleX](/images/blog/aap-scaleX.png)
![scaleY](/images/blog/aap-scaleY.png)

Result of both is 0.28 approximately, but we will keep the decimals in. This means that the player is to be shrunk to roughly 28% of its original size. These will be use for the values for **scaleX** and **scaleY** respectively during the animation.

## Get the device size ratio

Figma designs were made for a 1080p resolution screen. Still, everything should look the same on other resolutions, like 720p (1280x720).

So, we calculate the ratio (r) of our current window size against Figma's. We will take 720p as an example.

![deviceWidthRatio](/images/blog/aap-deviceWidthRatio.png)
![deviceHeightRatio](/images/blog/aap-deviceHeightRatio.png)

The ratio agains a 720p resolution is 0.666. For TV resolutions, both sould usually have the same value. Still, let us separate and name them **deviceWidthRatio** and **deviceHeightRatio** respectively.

## Know where to move, and how much

<img alt="Center player" src="/images/blog/aap-scaled.jpg" width="788" height="442" />

Following with the designs, the player should be positioned somewhere on the middle right side of the screen. A top position of 325px and a left position of 1244px, to be precise. Another thing to consider is the initial position of the player once it is scale down. Since initially the player covers the entire screen, applying a transition to `scaleX` and `scaleY` will bring the player down to the center of the screen.

The position desired will be `top: 325px`, `left: 1244px`. First, we need to consider the scale values of the player, using the values of the ratio (k) we calculated previously: **deviceWidthRatio** and **deviceHeightRatio** respectively.

![deviceLeftPosition](/images/blog/aap-deviceLeftPosition.png)
![deviceTopPosition](/images/blog/aap-deviceTopPosition.png)

These values will help us determine how much we should move to reach the desired position. We will name these **deviceLeftPosition** and **deviceTopPosition**, since both represent the ideal `top` and `left` values, as if we were to move a div element with CSS.

One thing that we did not consider was our current screen's dimensions. We need to divide this values by our previouslty calculated device size ratio (r), represented by **deviceWidthRatio** and **deviceHeightRatio**.

![deviceLeftPositionR](/images/blog/aap-deviceLeftPositionR.png)
![deviceTopPositionR](/images/blog/aap-deviceTopPositionR.png)

This would be enough if the player started on the top left corner of the screen. Since the initial position of the player will be the exact center, we need to rest that initial position first. In other words, we can calculate the distance from the center to the top-left corner, and then apply the distance previously calculated.

To get these, we need to consider our current screen's dimensions (d), and multiply it by our scaled value of each axis (k). First, we calculate the dimension of the shrunk player.

![dk](/images/blog/aap-dk.png)

<img alt="Center player" src="/images/blog/aap-corner.jpg" width="788" height="442" />

Since when scaling down the player goes to the center, we need to get the remaining distance from the top of the video to the top of the screen (to emulate a `top: 0` positioning). This can be calculated by taking half the screen's width, and rest half our shrunk player's width

![form](/images/blog/aap-form.png)

A simplification of this formula would be:

![simp](/images/blog/aap-simp.png)

We then scale the distance, to get the actual distance needed, dividing it again to the scaled value (k).

![simpk](/images/blog/aap-simpk.png)

For our width and height, these would be:

### Width

![width](/images/blog/aap-width.png)
![widthFinal](/images/blog/aap-widthFinal.png)

### Height

![height](/images/blog/aap-height.png)
![heightFinal](/images/blog/aap-heightFinal.png)

These values go to the other way (top and left), so when we add to our device position variables. Because of that, we will negate both of these values. We end up with

![maxLeftPosition](/images/blog/aap-maxLeftPosition.png)
![maxTopPosition](/images/blog/aap-maxTopPosition.png)

## Get the final translate values

Now that we have the distance needed to move the playyer to a top: 0/left: 0 position, we add these to our deviceWidthPosition and deviceLeftPosition in order to get the final values needed for **translateX** and **translateY** to move the player to the desired position.

![translateX](/images/blog/aap-translateX.png)
![translateY](/images/blog/aap-translateY.png)

## Wrap things up

We now have the final values needed for the CSS's transform attribute:

- scaleX: 0.28541666666666665
- scaleY: 0.2851851851851852
- translateX: 1303px
- translateY: -143px

As displayed on codepen, the div moves to a position equivalent to the one on the designs, taking in consideration the window's dimensions.

<iframe allowtransparency="true" height="300" style="width: 100%;" scrolling="no" title="Shrink animation" src="https://codepen.io/robcc/embed/preview/ExoPprp?default-tab=js%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowfullscreen>
  See the Pen <a href="https://codepen.io/robcc/pen/ExoPprp">Shrink animation</a> by José Roberto Chávez Cobián (<a href="https://codepen.io/robcc">@robcc</a>) on <a href="https://codepen.io">CodePen</a>.
</iframe>

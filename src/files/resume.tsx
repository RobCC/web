/* eslint-disable max-len */
import { Wrapper } from '#/components/blog';
import { fileUtils } from '#/utils/directory';

function AnimationAndPositioning() {
  return (
    <Wrapper>
      <h1>Animation &amp; Positioning</h1>
      <h4>Jan 14, 2022</h4>
    </Wrapper>
  );
}

export default fileUtils.create('resume.md', AnimationAndPositioning);

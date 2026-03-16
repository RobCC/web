import BlogPost from '~/src/components/blog/BlogPost';
import { fileUtils } from '#/utils/directory';

import mdFile from './posts/animation-and-positioning.md?raw';

function AnimationAndPositioning() {
  return <BlogPost file={mdFile} />;
}

export default fileUtils.create(
  'animation_and_positioning.md',
  AnimationAndPositioning,
);

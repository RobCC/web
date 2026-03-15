import BlogPost from '~/src/components/blog/BlogPost';
import { fileUtils } from '#/utils/directory';

import mdFile from './posts/cleaning-up.md?raw';

function CleaningUp() {
  return <BlogPost file={mdFile} />;
}

export default fileUtils.create('cleaning_up.txt', CleaningUp);

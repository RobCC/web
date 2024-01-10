import { folderUtils } from '#/utils/directory';

import projects from './projects';
import blog from './blog';
// import test from './test';
import readme from './readme';
import resume from './resume';
import contact from './contact';

export default folderUtils.create('', [
  contact,
  readme,
  blog,
  projects,
  resume,
]);

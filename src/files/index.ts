import { folderUtils } from '#/utils/directory';

import projects from './projects';
import blog from './blog';
import test from './test';
import readme from './readme';
import contact from './contact';
import Settings from './_Settings/Settings';
import Resume from './_Resume/Resume';

export default folderUtils.create('', [
  contact,
  readme,
  test,
  blog,
  projects,
  Settings,
  Resume,
]);

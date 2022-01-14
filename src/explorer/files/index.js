import { createExplorerRoot } from '#/explorer/utils';

import greet from './greet';
import contact from './contact';
import projects from './projects';
import blog from './blog';

export const rootFiles = createExplorerRoot([contact, greet, blog, projects]);

export default rootFiles;

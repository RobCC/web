import { folderUtils } from '#/utils/directory';

import sub2Test from './sub2Test';
import sub3Group from './sub3Group';

export default folderUtils.create('sub2Group', [sub2Test, sub3Group]);

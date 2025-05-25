import { folderUtils } from '#/utils/directory';

import sub2Test from './subTest';
import sub2Group from './sub2Group';

export default folderUtils.create('subGroup', [sub2Test, sub2Group]);

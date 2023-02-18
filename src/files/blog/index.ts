import { folderUtils } from '#/utils/directory';

import AnimationAndPositioning from './AnimationAndPositioning';
import CleaningUp from './CleaningUp';

export default folderUtils.create(
  'Blog',
  [AnimationAndPositioning, CleaningUp],
);

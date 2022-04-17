import { createFolderAndContent } from '#/utils/explorer';
import subTest from './subTest';
import subTest2 from './subTest2';
import subTest3 from './subTest3';
import subTest4 from './subTest4';
import subTest5 from './subTest5';
import sub2Group from './sub2Group';

export default createFolderAndContent(
  'Sub Group',
  subTest,
  subTest2,
  subTest3,
  subTest4,
  subTest5,
  sub2Group,
);

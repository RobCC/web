import subTest from './subTest';
import subTest2 from './subTest2';
import subTest3 from './subTest3';
import sub2Group from './sub2Group';

export default [
  'Sub Group',
  (new Map([
    subTest,
    subTest2,
    subTest3,
    sub2Group,
  ])),
];

import parseToCodelines from '#/utils/parseToCodelines';

const name = 'subtest2.json';
const content = parseToCodelines(`
Test 22
`);

export default [
  name,
  content,
];

import parseToCodelines from '#/utils/parseToCodelines';

const name = 'subtest.json';
const content = parseToCodelines(`
Test 2
`);

export default [
  name,
  content,
];

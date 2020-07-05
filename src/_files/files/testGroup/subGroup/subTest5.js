import parseToCodelines from '#/utils/parseToCodelines';

const name = 'subtest5.json';
const content = parseToCodelines(`
Test 55
`);

export default [
  name,
  content,
];

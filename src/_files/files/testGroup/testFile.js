import parseToCodelines from '#/utils/parseToCodelines';

const name = 'test.json';
const content = parseToCodelines(`
Test
`);

export default [
  name,
  content,
];

import parseToCodelines from '#/utils/parseToCodelines';

const name = '/Test group/test.json';
const content = parseToCodelines(`
hi :)
`);

export default [
  name,
  content,
];

import parseToCodelines from '#/utils/parseToCodelines';

const name = 'test.json';
const content = parseToCodelines`
hi :)
`;

export default [
  name,
  content,
];

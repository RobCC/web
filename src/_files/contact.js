import parseToCodelines from '#/utils/parseToCodelines';

const name = '/contact.css';
const content = parseToCodelines(`
You can reach me through email at $(red, rrc0138@gmail.com).
`);

export default [
  name,
  content,
];

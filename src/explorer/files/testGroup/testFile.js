import { createCodeText } from '#/utils/codeParser';

const name = 'test.json';
const content = createCodeText(`
Test
`);

export default [name, content];

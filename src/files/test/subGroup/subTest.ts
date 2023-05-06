import { fileUtils } from '#/utils/directory';
import { toCodeLines } from '#/utils/codeParser';

const name = 'subTest.json';
const content = toCodeLines(`
Test
`);

export default fileUtils.create(name, content);

import { fileUtils } from '#/utils/directory';
import { toCodeLines } from '#/utils/codeParser';

const name = 'sub5Test2.json';
const content = toCodeLines(`
Test 5.1
`);

export default fileUtils.create(name, content);

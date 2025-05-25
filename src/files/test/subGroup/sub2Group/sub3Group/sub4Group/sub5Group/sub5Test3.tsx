import { fileUtils } from '#/utils/directory';
import { toCodeLines } from '#/utils/codeParser';

const name = 'sub5Test3.json';
const content = toCodeLines(`
Test 5.2
`);

export default fileUtils.create(name, content);

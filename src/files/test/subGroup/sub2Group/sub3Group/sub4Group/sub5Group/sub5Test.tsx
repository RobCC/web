import { fileUtils } from '#/utils/directory';
import { toCodeLines } from '#/utils/codeParser';

const name = 'sub5Test.json';
const content = toCodeLines(`
Test 5
`);

export default fileUtils.create(name, content);

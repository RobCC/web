import { fileUtils } from '#/utils/directory';
import { toCodeLines } from '#/utils/codeParser';

const name = 'sub3Test.json';
const content = toCodeLines(`
Test 3
`);

export default fileUtils.create(name, content);

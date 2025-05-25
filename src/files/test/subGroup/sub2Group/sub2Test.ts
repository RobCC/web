import { fileUtils } from '#/utils/directory';
import { toCodeLines } from '#/utils/codeParser';

const name = 'sub2Test.json';
const content = toCodeLines(`
Test 2
`);

export default fileUtils.create(name, content);

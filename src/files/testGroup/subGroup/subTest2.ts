import { createCodeText } from '#/utils/codeParser';
import { createFile } from '#/utils/explorer';

const name = 'subtest2.json';
const content = createCodeText(`
Test 22
`);

export default createFile(name, content);

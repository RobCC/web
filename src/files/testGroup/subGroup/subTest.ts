import { createCodeText } from '#/utils/codeParser';
import { createFile } from '#/utils/explorer';

const name = 'subtest.json';
const content = createCodeText(`
Test 2
`);

export default createFile(name, content);

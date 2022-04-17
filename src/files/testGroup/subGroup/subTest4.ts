import { createCodeText } from '#/utils/codeParser';
import { createFile } from '#/utils/explorer';

const name = 'subtest4.json';
const content = createCodeText(`
Test 44
`);

export default createFile(name, content);

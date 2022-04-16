import { createCodeText } from '#/utils/codeParser';
import { createFile } from '#/utils/explorer';

const name = 'subtest5.json';
const content = createCodeText(`
Test 55
`);

export default createFile(name, content);

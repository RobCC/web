import { createCodeText } from '#/utils/codeParser';
import { createFile } from '#/utils/explorer';

const name = 'subtest3.json';
const content = createCodeText(`
Test 33
`);

export default createFile(name, content);

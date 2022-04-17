import { createCodeText } from '#/utils/codeParser';
import { createFile } from '#/utils/explorer';

const name = 'test.json';
const content = createCodeText(`
Test
`);

export default createFile(name, content);

import { fileUtils } from '#/utils/directory';
import { createCodeText } from '#/utils/codeParser';

const name = 'sub5Test.json';
const content = createCodeText(`
Test 5
`);

export default fileUtils.create(name, content);

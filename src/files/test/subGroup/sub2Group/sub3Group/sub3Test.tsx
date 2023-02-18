import { fileUtils } from '#/utils/directory';
import { createCodeText } from '#/utils/codeParser';

const name = 'sub3Test.json';
const content = createCodeText(`
Test 3
`);

export default fileUtils.create(name, content);

import { fileUtils } from '#/utils/directory';
import { createCodeText } from '#/utils/codeParser';

const name = 'sub2Test.json';
const content = createCodeText(`
Test 2
`);


export default fileUtils.create(name, content);

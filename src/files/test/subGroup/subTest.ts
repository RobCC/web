import { fileUtils } from '#/utils/directory';
import { createCodeText } from '#/utils/codeParser';

const name = 'subTest.json';
const content = createCodeText(`
Test
`);


export default fileUtils.create(name, content);

import { createCodeText } from '#/utils/codeParser';
import { createFile } from '#/utils/explorer';

const name = 'sub2Test.json';
const content = createCodeText(`
sub2Test :)
`);

export default createFile(name, content);

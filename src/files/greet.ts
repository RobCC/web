import { createCodeText } from '#/utils/codeParser';
import getRandomGreet from '#/utils/getRandomGreet';
import { createFile } from '#/utils/explorer';

const content = createCodeText(`
${getRandomGreet()}
Hi! My name's Roberto. I'm a $(web, green) developer, living in Guadalajara, México.
Currently working at $[Accedo,https://www.accedo.tv/]. // As a web developer

// Check out the latest blog. CodePen included!
Newer blog $[entry,#/?file=Blog/cleaning_up.txt]! No CodePen, but fancy gists included ( ˘ ³˘)ノ
`);

export default createFile('README.md', content);

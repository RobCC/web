import { createCodeText } from '#/utils/codeParser';
import getRandomGreet from '#/utils/getRandomGreet';
import { createFile } from '#/utils/explorer';

const name = 'greet.md';
const content = createCodeText(`
${getRandomGreet()}
Hi! My name's Roberto. I'm a $(web, green) developer, living in Guadalajara, México.
Currently working at $[Accedo,https://www.accedo.tv/]. // As a web developer

Check out the $[latest blog,#/?file=Blog/animation_and_positioning.txt]. CodePen included!
`);

export default createFile(name, content);

/* eslint-disable prettier/prettier */
import { toCodeLines, colorParser, linkParser } from '#/utils/codeParser';
import getRandomGreet from '#/utils/getRandomGreet';
import { fileUtils } from '#/utils/directory';

export const name = 'README.md';

const content = toCodeLines(`
${getRandomGreet()}
Hi! My name's Roberto. I'm a ${colorParser.parse('web', 'green')} developer, living in Guadalajara, México.
Currently working at ${linkParser.parse('Accedo', 'https://www.accedo.tv/', 'blue')}. // As a web developer

// Check out the latest blog. CodePen included!
Newer blog ${linkParser.parse('entry', '#/?file=Blog/cleaning_up.txt', 'blue')}! No CodePen, but fancy gists included ( ˘ ³˘)ノ
`);

export default fileUtils.create('README.md', content);

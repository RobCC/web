import parseToCodelines from '#/utils/parseToCodelines';
import getRandomGreet from '#/utils/greets';

const name = 'greet.md';
const preContent = [
  ...getRandomGreet(),
  "Hi! My name's Roberto. I'm a $(green, web) developer, living in Guadalajara, México",
  'Currently working at $[Accedo,https://www.accedo.tv/]. // As a web developer',
].join('\n');
const content = parseToCodelines(`
${preContent}
`);

export default [name, content];

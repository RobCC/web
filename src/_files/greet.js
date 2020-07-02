import parseToCodelines from '#/utils/parseToCodelines';
import getRandomGreet from '#/utils/greets';

const name = '/greet.md';
const content = parseToCodelines`
Hi! My name's Roberto. I'm a $(green, web) developer, living in Guadalajara, México.

Currently working at $[Accedo,https://www.accedo.tv/]. // As a web developer
`;

export default [
  name,
  [
    ...getRandomGreet(),
    ...content,
  ],
];

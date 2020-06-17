import lines from '#/codeLines';

const getRandomElement = (items) => items[Math.floor(Math.random() * items.length)];
const getRandomGreet = (greets) => getRandomElement(Object.keys(greets).map((k) => greets[k]));

export const tabList = {
  greet: 'greet',
  contact: 'contact',
};

// TODO: Refactor
const getCodeLines = ([string]) => string.split('\n').slice(1, -1);

const home = getCodeLines`
Hi! My name's Roberto. I'm a $(green, web) developer, living in Guadalajara, México.

Currently working at $[Accedo,https://www.accedo.tv/]. // As a web developer
`;

export const tabMap = {
  [tabList.greet]: [...getRandomGreet(lines.greets), ...home],
  [tabList.contact]: lines.contact,
};

export default {
  tabList,
  tabMap,
};

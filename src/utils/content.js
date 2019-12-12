import getRandomElement from '#/utils/getRandomElement';
import lines from '#/codeLines';

const getRandomGreet = (greets) => getRandomElement(Object.keys(greets).map((k) => greets[k]));

export const tabList = {
  greet: 'greet',
  contact: 'contact',
};

export const tabMap = {
  [tabList.greet]: [...getRandomGreet(lines.greets), ...lines.home],
  [tabList.contact]: lines.contact,
};

export default {
  tabList,
  tabMap,
};

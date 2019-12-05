import React from 'react';

import L from 'Components/CodeLine/CodeLine';

import greets from '#/codeLines/home/greets';
import home from '#/codeLines/home/home';
import getRandomElement from '#/utils/getRandomElement';

const greet = getRandomElement(Object.keys(greets).map((k) => greets[k]));

const Home = () => (
  <div>
    {[...greet, ...home].map((line, i) => (
      <L key={line} lineNumber={i + 1}>{line}</L>
    ))}
  </div>
);

export default Home;

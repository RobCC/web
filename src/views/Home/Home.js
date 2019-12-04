import React from 'react';

import L from 'Components/CodeLine/CodeLine';

import greets from '#/codeLines/home/greet';

const Home = () => (
  <div>
    {greets.trustNoOne.map((line, i) => (
      <L key={line} lineNumber={i}>{line}</L>
    ))}
  </div>
);

export default Home;

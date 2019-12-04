import React from 'react';

import L from 'Components/CodeLine/CodeLine';

import homeLines from '#/codeLines/home';

const Home = () => (
  <div>
    {homeLines.map((line, i) => (
      <L key={line} lineNumber={i}>{line}</L>
    ))}
  </div>
);

export default Home;

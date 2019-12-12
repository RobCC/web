import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Editor from 'Components/Editor/Editor';
import getRandomElement from '#/utils/getRandomElement';
import codeLines from '#/codeLines';

const {
  greets,
  home,
  contact,
} = codeLines;

const greet = getRandomElement(Object.keys(greets).map((k) => greets[k]));


// TODO: Remove
const FileRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Editor codeLines={[...greet, ...home]} />
    </Route>

    <Route path="/contact" exact>
      <Editor codeLines={contact} />
    </Route>
  </Switch>
);

export default FileRoutes;

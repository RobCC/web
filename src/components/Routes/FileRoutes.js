import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Editor from 'Components/Editor/Editor';
import getRandomElement from '#/utils/getRandomElement';
import codeLines from '#/codeLines';

const {
  greets,
  home,
} = codeLines;

const greet = getRandomElement(Object.keys(greets).map((k) => greets[k]));

const FileRoutes = () => (
  <Switch>
    <Route path="/home" exact>
      <Redirect to="/home/greet" />
    </Route>

    <Route path="/home/greet" exact>
      <Editor codeLines={[...greet, ...home]} />
    </Route>

    <Route path="/home/intro2" exact>
      <div>Help Me</div>
    </Route>
  </Switch>
);

export default FileRoutes;

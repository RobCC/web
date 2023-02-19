import { HashRouter, Routes, Route } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';

import SideMenu from '#/components/SideMenu/SideMenu';
import Explorer from '#/components/Explorer/Explorer';
import { Content, Resume } from '#/views/index';

config.autoAddCss = false;

export default function App() {
  return (
    <HashRouter basename="/">
      <SideMenu />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Explorer />} />
        </Route>
      </Routes>
      <Resume />
    </HashRouter>
  );
}

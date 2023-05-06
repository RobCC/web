import { HashRouter, Routes, Route } from 'react-router-dom';

import SideMenu from '#/components/SideMenu/SideMenu';
import Explorer from '#/components/Explorer/Explorer';
import { Content } from '#/views/index';

export default function App() {
  return (
    <HashRouter basename="/">
      <SideMenu />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Explorer />} />
        </Route>
      </Routes>
      {/* <Resume /> */}
    </HashRouter>
  );
}

import { HashRouter, Routes, Route } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';

import SideMenu from '#/components/SideMenu/SideMenu';
import SideView from '#/components/SideView/SideView';
import { Content, Resume } from '#/views';

import styles from './app.scss';

config.autoAddCss = false;

const PATHS = {
  root: '/',
  allPaths: '*',
};

/**
 * Idea: Router is around sideView, Content will be present always
 *
 * <Routes>
 *   <Route path="/" SideView>
 *     <Route index component={Explorer} />
 *     <Route path="/something-else" ... />
 *   </Route>
 * </Routes>
 * <Content />
 */

export default function App() {
  return (
    <HashRouter basename="/">
      <div className={styles.root}>
        <SideMenu />

        <div className={styles.content}>
          <SideView />
          <Routes>
            <Route path={PATHS.root} element={<Content />} />
            <Route path={PATHS.allPaths} element={<Content />} />
          </Routes>
        </div>

        <Resume />
      </div>
    </HashRouter>
  );
}

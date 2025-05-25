import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { ActivityBar, SideBar } from '#/components';
import {
  themeController,
  fontController,
} from '#/utils/settingsOptionController';

export default function App() {
  useEffect(() => {
    themeController.init();
    fontController.init();
  }, []);

  return (
    <>
      <ActivityBar />
      <SideBar />
      <Outlet />
    </>
  );
}

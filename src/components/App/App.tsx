import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { ActivityBar, SideBar } from '#/components';
import theme from '#/utils/theme';

export default function App() {
  useEffect(() => {
    theme.init();
  }, []);

  return (
    <>
      <ActivityBar />
      <SideBar />
      <Outlet />
    </>
  );
}

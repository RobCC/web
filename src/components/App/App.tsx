import { Outlet } from 'react-router-dom';

import { ActivityBar, SideBar } from '#/components';

export default function App() {
  return (
    <>
      <ActivityBar />
      <SideBar />
      <Outlet />
    </>
  );
}

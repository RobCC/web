import { Outlet } from 'react-router-dom';

import ActivityBar from '#/components/ActivityBar/ActivityBar';
import SideBar from '#/components/SideBar/SideBar';

export default function App() {
  return (
    <>
      <ActivityBar />
      <SideBar />
      <Outlet />
    </>
  );
}

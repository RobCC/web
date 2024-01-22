import { Outlet } from 'react-router-dom';

import ActivityBar from '#/components/ActivityBar/ActivityBar';
import SideBar from '#/components/SideBar/SideBar';

import styles from './app.scss';

export default function App() {
  return (
    <div className={styles.container}>
      <ActivityBar />
      <SideBar />
      <Outlet />
    </div>
  );
}

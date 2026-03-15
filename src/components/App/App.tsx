import { useEffect, type PropsWithChildren } from 'react';

import { ActivityBar, SideBar } from '#/components';
import {
  themeController,
  fontController,
} from '#/utils/settingsOptionController';

export default function App({ children }: PropsWithChildren) {
  useEffect(() => {
    themeController.init();
    fontController.init();
  }, []);

  return (
    <>
      <ActivityBar />
      <SideBar />
      {children}
    </>
  );
}

import { useEffect, type PropsWithChildren } from 'react';

import { ActivityBar, SideBar } from '#/components';
import {
  themeController,
  fontController,
  blogThemeController,
} from '#/utils/settingsOptionController';

export default function App({ children }: PropsWithChildren) {
  useEffect(() => {
    themeController.init();
    fontController.init();
    blogThemeController.init();
  }, []);

  return (
    <>
      <ActivityBar />
      <SideBar />
      {children}
    </>
  );
}

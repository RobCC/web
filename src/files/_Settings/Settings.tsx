import { fileUtils } from '#/utils/directory';
import {
  themeController,
  fontController,
  blogThemeController,
} from '#/utils/settingsOptionController';

import DropdownSetting from './DropdownSetting';
import styles from './settings.module.css';

function Settings() {
  return (
    <div className={styles.container}>
      <DropdownSetting controller={themeController} />
      <DropdownSetting controller={fontController} />
      <DropdownSetting controller={blogThemeController} />
    </div>
  );
}

export default fileUtils.create('Settings', Settings, {
  visible: false,
});

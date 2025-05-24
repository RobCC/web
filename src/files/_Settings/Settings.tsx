import { fileUtils } from '#/utils/directory';

import SettingsSection from './SettingsSection';
import styles from './settings.module.css';

// TODO: add Dark Modern (default theme)

function Settings() {
  return (
    <div className={styles.container}>
      <SettingsSection />
    </div>
  );
}

export default fileUtils.create('Settings', Settings, {
  visible: false,
});

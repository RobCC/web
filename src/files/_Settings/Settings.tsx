import { fileUtils } from '#/utils/directory';
import {
  themeController,
  fontController,
} from '#/utils/settingsOptionController';

import SettingsSection from './SettingsSection';
import styles from './settings.module.css';

// TODO: add Dark Modern (default theme)

const isAppearanceTransition =
  typeof document !== 'undefined' &&
  // @ts-expect-error: Transition API
  document.startViewTransition &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function handleTransition(transitionCb: () => void) {
  if (!isAppearanceTransition) {
    transitionCb();
    return;
  }

  const transition = document.startViewTransition(transitionCb);

  void transition.ready.then(() => {
    document.documentElement.animate(
      {},
      {
        duration: 400,
        easing: 'ease-in',
      },
    );
  });
}

function Settings() {
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleTransition(() =>
      themeController.set(
        e.target.value as keyof typeof themeController.options,
      ),
    );
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleTransition(() =>
      fontController.set(e.target.value as keyof typeof fontController.options),
    );
  };

  return (
    <div className={styles.container}>
      <SettingsSection
        title="Color Theme"
        description="Specifies the color theme used."
      >
        <select
          className={styles.select}
          onChange={handleThemeChange}
          defaultValue={themeController.get()}
        >
          {Object.entries(themeController.options).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </SettingsSection>
      <SettingsSection
        title="Font Family"
        description="Controlls the font famiy."
      >
        <select
          className={styles.select}
          onChange={handleFontChange}
          defaultValue={fontController.get()}
        >
          {Object.entries(fontController.options).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </SettingsSection>
    </div>
  );
}

export default fileUtils.create('Settings', Settings, {
  visible: false,
});

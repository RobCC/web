import { fileUtils } from '#/utils/directory';
import theme from '#/utils/theme';

import SettingsSection from './SettingsSection';
import styles from './settings.module.css';

// TODO: add Dark Modern (default theme)

const isAppearanceTransition =
  typeof document !== 'undefined' &&
  // @ts-expect-error: Transition API
  document.startViewTransition &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Settings() {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as keyof typeof theme.THEMES;

    if (!isAppearanceTransition) {
      theme.set(newTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      theme.set(newTheme);
    });

    void transition.ready.then(() => {
      document.documentElement.animate(
        {},
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  };

  return (
    <div className={styles.container}>
      <SettingsSection
        title="Color Theme"
        description="Specifies the color theme used in the workbench."
      >
        <select className={styles.select} onChange={handleChange}>
          {Object.entries(theme.THEMES).map(([key, value]) => (
            <option key={key} value={key} selected={key === theme.get()}>
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

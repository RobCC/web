import { type PropsWithChildren } from 'react';

import { SettingsOptionController } from '#/utils/settingsOptionController';
import SettingsSection from './SettingsSection';
import styles from './settings.module.css';

type Props = {
  controller: SettingsOptionController<any>;
};

export default function DropdownSetting({
  controller,
}: PropsWithChildren<Props>) {
  return (
    <SettingsSection
      title={controller.title}
      description={controller.description}
    >
      <select
        className={styles.select}
        onChange={controller.onChange.bind(controller)}
        defaultValue={controller.get() as string}
      >
        {Object.entries(controller.options).map(([key, value]) => (
          <option key={key} value={key}>
            {value as string}
          </option>
        ))}
      </select>
    </SettingsSection>
  );
}

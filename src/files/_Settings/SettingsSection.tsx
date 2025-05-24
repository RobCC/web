import { type PropsWithChildren } from 'react';
import styles from './settings.module.css';

type Props = {
  title: string;
  description: string;
};

export default function SettingsSection({
  title,
  description,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={styles.section}>
      <span className={styles.title}>
        <span className={styles.workbench}>Workbench:</span> {title}
      </span>
      <span className={styles.description}>{description}</span>
      {children}
    </div>
  );
}

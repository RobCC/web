import styles from './settings.module.css';

export default function SettingsSection() {
  return (
    <div className={styles.section}>
      <span className={styles.title}>
        <span className={styles.workbench}>Workbench:</span> Color Theme
      </span>
      <span className={styles.description}>
        Specifies the color theme used in the workbench.
      </span>
      <div>
        <select className={styles.select}>
          <option value="monokai">Monokai</option>
          <option value="onedark">One Dark Pro</option>
        </select>
      </div>
    </div>
  );
}

import { fileUtils } from '#/utils/directory';

import styles from './resume.module.css';

function Resume() {
  return (
    <div className={styles.container}>
      <span className={styles.wip}>Work In Progress</span>
    </div>
  );
}

export default fileUtils.create('Resume', Resume, {
  visible: false,
});

import root from '#/files';
import File from '#/components/File/File';
import Folder from '#/components/Folder/Folder';

import styles from './explorer.module.css';

export default function Explorer() {
  const { files, folders } = root.content;

  return (
    <>
      <div className={styles.title}>EXPLORER</div>
      {folders.map(folder => (
        <Folder key={folder.name} data={folder} />
      ))}
      {files
        .filter(file => file.visible)
        .map(file => (
          <File key={file.name} data={file} />
        ))}
    </>
  );
}

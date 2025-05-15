import allFiles from '#/files';
import File from '#/components/File/File';
import Folder from '#/components/Folder/Folder';

import styles from './explorer.module.css';

export default function Explorer() {
  const { files, folders } = allFiles.content;

  return (
    <>
      <div className={styles.title}>EXPLORER</div>
      {folders.map(folder => (
        <Folder key={folder.name} data={folder} />
      ))}
      {files.map(file => (
        <File key={file.name} data={file} />
      ))}
    </>
  );
}

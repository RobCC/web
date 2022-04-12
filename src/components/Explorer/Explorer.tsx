import rootFiles, { getFilesFolders } from '#/explorer';

import File from './components/File/File';
import Folder from './components/Folder/Folder';

import styles from './sideExplorerView.scss';

export default function Explorer() {
  const [files, folders] = getFilesFolders(rootFiles);

  return (
    <>
      <div className={styles.title}>EXPLORER</div>
      {folders.map((folderFullName) => (
        <Folder
          key={folderFullName}
          name={folderFullName}
          content={rootFiles.get(folderFullName)}
        />
      ))}
      {files.map((fileFullName) => (
        <File key={fileFullName} name={fileFullName} />
      ))}
    </>
  );
}

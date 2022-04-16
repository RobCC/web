import rootFiles from '#/files';
import { getFolderContent } from '#/utils/files';

import useStore, { getCurrentFile } from '#/store';
import File from './components/File/File';
import Folder from './components/Folder/Folder';

import styles from './sideExplorerView.scss';

export default function Explorer() {
  const currentFile = useStore(getCurrentFile);
  const [files, folders] = getFolderContent(rootFiles);

  return (
    <>
      <div className={styles.title}>EXPLORER</div>
      {folders.map((folderFullName) => (
        <Folder
          key={folderFullName}
          name={folderFullName}
          content={rootFiles.get(folderFullName) as AppFolderContent}
          currentFile={currentFile}
        />
      ))}
      {files.map((fileFullName) => (
        <File
          key={fileFullName}
          name={fileFullName}
          isActive={currentFile === fileFullName}
        />
      ))}
    </>
  );
}

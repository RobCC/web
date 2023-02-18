import newRoot from '#/files';
import { folderUtils } from '#/utils/directory';

import useStore, { getCurrentFile } from '#/store';
import File from '#/components/File/File';
import Folder from '#/components/Folder/Folder';

import styles from './sideExplorerView.scss';

export default function Explorer() {
  const currentFile = useStore(getCurrentFile);
  const [files, folders] = folderUtils.filterFileFolder(newRoot);

  return (
    <>
      <div className={styles.title}>EXPLORER</div>
      {folders.map((f) => (
        <Folder key={f.name} data={f} currentFile={currentFile} />
      ))}
      {files.map((file) => (
        <File
          key={file.name}
          data={file}
          isActive={currentFile === file.name}
        />
      ))}
    </>
  );
}

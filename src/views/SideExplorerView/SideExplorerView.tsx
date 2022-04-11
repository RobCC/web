import classNames from 'classnames';

import File from './components/File/File';
import Folder from './components/Folder/Folder';

import useStore, { getIsExplorerOpen } from '#/store';
import rootFiles, { getFilesFolders } from '#/explorer';

import styles from './sideExplorerView.scss';

export default function SideExplorerView() {
  const isExplorerOpen = useStore(getIsExplorerOpen);
  const [files, folders] = getFilesFolders(rootFiles);

  return (
    <div
      className={classNames(styles.explorer, {
        [styles.active]: isExplorerOpen,
      })}
    >
      <div className={styles.title}>EXPLORER</div>
      {folders.map((folderFullName) => (
        <Folder
          key={folderFullName}
          name={folderFullName}
          items={rootFiles.get(folderFullName)}
        />
      ))}
      {files.map((fileFullName) => (
        <File key={fileFullName} name={fileFullName} />
      ))}
    </div>
  );
}

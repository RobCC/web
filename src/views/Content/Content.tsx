import { useEffect } from 'react';
import classNames from 'classnames';
import { Outlet, useSearchParams } from 'react-router-dom';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import Editor from '#/components/Editor/Editor';
import { file, explorer } from '#/store';
import { fileUtils } from '#/utils/directory';

import styles from './content.scss';

const { useExplorerStore, getIsSideBarOpen } = explorer;
const { useFileStore, getCurrentFile, openFile } = file;

function renderContent(FileContent: fileUtils.File['content']) {
  if (FileContent instanceof Array) {
    return <Editor file={FileContent} />;
  }

  return <FileContent />;
}

function Content() {
  const currentFile = useFileStore(getCurrentFile);
  const isSideBarOpen = useExplorerStore(getIsSideBarOpen);
  const [params] = useSearchParams();
  const urlFile = params.get('file');

  useEffect(() => {
    if (urlFile) {
      openFile(urlFile);
    }
  }, [urlFile]);

  return (
    <div
      className={classNames(styles.container, {
        [styles.sideBarOpened]: isSideBarOpen,
      })}
    >
      <div className={classNames(styles.sideBar)}>
        <Outlet />
      </div>
      <div className={classNames(styles.content)}>
        <FileTabMenu />
        {currentFile ? (
          renderContent(currentFile.content)
        ) : (
          <div className={styles.placeholder}>( ´◔ ω◔`) ノシ</div>
        )}
      </div>
    </div>
  );
}

export default Content;

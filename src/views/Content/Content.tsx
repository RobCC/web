import { useEffect } from 'react';
import classNames from 'classnames';
import { Outlet, useSearchParams } from 'react-router-dom';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import Editor from '#/components/Editor/Editor';

import useStore, { getIsExplorerOpen, getCurrentFile, openFile } from '#/store';
import { getFileContent } from '#/explorer';

import styles from './content.scss';

const DEFAULT_FILE = getCurrentFile(useStore.getState());

function renderContent(fileContent) {
  if (fileContent instanceof Array) {
    return <Editor file={fileContent} />;
  }

  const FileContent = fileContent;

  return <FileContent />;
}

function Content() {
  const [searchParams] = useSearchParams();
  const currentFile = searchParams.get('file') || DEFAULT_FILE;
  const isExplorerOpen = useStore(getIsExplorerOpen);
  const fileContent = getFileContent(currentFile);

  const sideViewStyles = {
    [styles.sideViewActive]: isExplorerOpen,
  };

  useEffect(() => {
    openFile(currentFile);
  }, [currentFile]);

  return (
    <div className={styles.container}>
      <div className={classNames(styles.sideView, sideViewStyles)}>
        <Outlet />
      </div>
      <div className={classNames(styles.content, sideViewStyles)}>
        <FileTabMenu />
        {fileContent ? (
          renderContent(fileContent)
        ) : (
          <div className={styles.placeholder}>( ´◔ ω◔`) ノシ</div>
        )}
      </div>
    </div>
  );
}

export default Content;

import { useEffect } from 'react';
import classNames from 'classnames';
import { Outlet, useSearchParams } from 'react-router-dom';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import Editor from '#/components/Editor/Editor';

import useStore, { getIsSideViewOpen, getCurrentFile, openFile } from '#/store';
import { getFileContent } from '#/utils/files';

import styles from './content.scss';

function renderContent(fileContent: AppFileContent) {
  if (fileContent instanceof Array) {
    return <Editor file={fileContent} />;
  }

  const FileContent = fileContent;

  return <FileContent />;
}

function Content() {
  const currentFile = useStore(getCurrentFile);
  const isSideViewOpen = useStore(getIsSideViewOpen);
  const [params] = useSearchParams();
  const fileContent = getFileContent(currentFile);
  const urlFile = params.get('file');

  useEffect(() => {
    if (urlFile) {
      openFile(urlFile);
    }
  }, [urlFile]);

  const sideViewStyles = {
    [styles.sideViewActive]: isSideViewOpen,
  };

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

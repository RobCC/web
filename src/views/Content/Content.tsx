import classNames from 'classnames';
import { Outlet } from 'react-router-dom';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import Editor from '#/components/Editor/Editor';

import useStore, { getIsSideViewOpen, getCurrentFile, openFile } from '#/store';
import history from '#/utils/history';
import { getFileContent } from '#/utils/files';
import getFileParam from '#/utils/getFileParam';

import styles from './content.scss';

history.listen((update) => {
  const file = getFileParam(update.location);

  openFile(file);
});

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
  const fileContent = getFileContent(currentFile);

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

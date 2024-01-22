import { useEffect } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import Editor from '#/components/Editor/Editor';
import { file } from '#/store';
import { fileUtils } from '#/utils/directory';

import styles from './content.scss';

const { useFileStore, getCurrentFile, openFile } = file;

function renderContent(FileContent: fileUtils.File['content']) {
  if (FileContent instanceof Array) {
    return <Editor file={FileContent} />;
  }

  return <FileContent />;
}

function Content() {
  const currentFile = useFileStore(getCurrentFile);
  const { fileFullPath } = useParams();

  useEffect(() => {
    if (fileFullPath) {
      openFile(fileFullPath);
    }
  }, [fileFullPath]);

  return (
    <div className={classNames(styles.wrapper)}>
      <div id="content" className={classNames(styles.content)}>
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

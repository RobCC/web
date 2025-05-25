import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useShallow } from 'zustand/shallow';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import { Editor } from '#/components';
import { file } from '#/store';
import { fileUtils } from '#/utils/directory';

import styles from './content.module.css';

const { useFileStore, getCurrentFile, openFile } = file;

// TODO: close tabs by wheel button click

function renderContent(FileContent: fileUtils.File['content']) {
  if (FileContent instanceof Array) {
    return <Editor file={FileContent} />;
  }

  return <FileContent />;
}

function Content() {
  const currentFile = useFileStore(useShallow(getCurrentFile));
  const { fileFullPath } = useParams();

  useEffect(() => {
    if (fileFullPath) {
      openFile(fileFullPath);
    }
  }, [fileFullPath]);

  return (
    <div className={styles.wrapper}>
      <div id="content" className={styles.content}>
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

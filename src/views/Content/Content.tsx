import { useEffect } from 'react';
import { useParams } from 'wouter';
import { useShallow } from 'zustand/shallow';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import { Editor } from '#/components';
import { fileSystem } from '#/store';
import { fileUtils } from '#/utils/directory';

import Placeholder from './Placeholder';
import styles from './content.module.css';

const { useFileStore, getCurrentFile, openFile } = fileSystem;

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
      openFile(decodeURIComponent(fileFullPath));
    }
  }, [fileFullPath]);

  return (
    <div className={styles.wrapper}>
      <div id="content" className={styles.content}>
        <FileTabMenu />
        {currentFile ? renderContent(currentFile.content) : <Placeholder />}
      </div>
    </div>
  );
}

export default Content;

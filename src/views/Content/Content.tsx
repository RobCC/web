import { useEffect } from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import Editor from '#/components/Editor/Editor';

import useStore, { getIsExplorerOpen, getCurrentFile, openFile } from '#/store';
import { getFileContent } from '#/explorer';

import styles from './content.scss';

const DEFAULT_FILE = getCurrentFile(useStore.getState());

function renderContent(fileContent) {
  const isEditorContent = fileContent?.[0] === '!editor';

  if (isEditorContent) {
    return <Editor file={fileContent} />;
  }

  const FileContent = fileContent;

  return <FileContent />;
}

function Content() {
  const [searchParams] = useSearchParams();
  const currentFile = searchParams.get('file') || DEFAULT_FILE;
  const isExplorerOpen = useStore(getIsExplorerOpen);
  const currentFileContent = getFileContent(currentFile);

  useEffect(() => {
    openFile(currentFile);
  }, [currentFile]);

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.explorerOpen]: isExplorerOpen,
      })}
    >
      <FileTabMenu />
      {currentFileContent ? (
        renderContent(currentFileContent)
      ) : (
        <div className={styles.placeholder}>( ´◔ ω◔`) ノシ</div>
      )}
    </div>
  );
}

export default Content;

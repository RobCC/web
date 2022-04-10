import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FileTabMenu from '#/components/FileTabMenu/FileTabMenu';
import Editor from '#/components/Editor/Editor';

import useStore, { getIsExplorerOpen, getCurrentFile } from '#/store';
import { getFileContent } from '#/explorer';

import styles from './content.scss';

function renderContent(fileContent) {
  const isEditorContent = fileContent?.[0] === '!editor';

  if (isEditorContent) {
    return <Editor file={fileContent} />;
  }

  const FileContent = fileContent;

  return <FileContent />;
}

function Content() {
  const currentFile = useStore(getCurrentFile);
  const isExplorerOpen = useStore(getIsExplorerOpen);
  const currentFileContent = getFileContent(currentFile);

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

Content.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Content;

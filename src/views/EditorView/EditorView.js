import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import FileTabMenu from 'Components/FileTabMenu/FileTabMenu';
import Editor from 'Components/Editor/Editor';
import { isExplorerOpen as isExplorerOpenFn } from '#/store/ducks/explorer';
import { getCurrentFile } from '#/store/ducks/file';
import { getFileContent } from '#/explorer';

import styles from './editorView.scss';

function renderContent(fileContent) {
  const isEditorContent = fileContent?.[0] === '!editor';

  if (isEditorContent) {
    return <Editor file={fileContent} />;
  }

  const Content = fileContent;

  return <Content />;
}

function EditorView() {
  const currentFile = useSelector(getCurrentFile);
  const isExplorerOpen = useSelector(isExplorerOpenFn);
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

EditorView.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default EditorView;

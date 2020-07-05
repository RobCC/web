import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TabMenu from 'Components/TabMenu/TabMenu';
import Editor from 'Components/Editor/Editor';
import { getCurrentFile } from '#/store/ducks/file';
import { getFileContent } from '#/_files';

import styles from './editorView.scss';

function renderContent(fileContent) {
  const isEditorContent = fileContent?.[0] === '!editor';

  if (isEditorContent) {
    return <Editor file={fileContent} />;
  }

  const Content = fileContent;

  return <Content />;
}

const EditorView = () => {
  const currentFile = useSelector((store) => getCurrentFile(store));
  const currentFileContent = getFileContent(currentFile);

  return (
    <div className={styles.wrapper}>
      <TabMenu />
      {currentFileContent
        ? renderContent(currentFileContent)
        : <div className={styles.placeholder}>:)</div>}
    </div>
  );
};

EditorView.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default EditorView;

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TabMenu from 'Components/TabMenu/TabMenu';
import Editor from 'Components/Editor/Editor';
import { getCurrentFile } from '#/store/ducks/file';
import files from '#/_files';

import styles from './editorView.scss';

const EditorView = () => {
  const currentTabName = useSelector((store) => getCurrentFile(store));
  const currentFileContent = files.get(currentTabName);

  return (
    <div className={styles.wrapper}>
      <TabMenu />
      {currentFileContent
        ? <Editor file={currentFileContent} />
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

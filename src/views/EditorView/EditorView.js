import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TabMenu from 'Components/TabMenu/TabMenu';
import Editor from 'Components/Editor/Editor';
import { getCurrentFile } from '#/store/ducks/file';
import files from '#/_files';

import styles from './editorView.scss';

const fileNames = Object.keys(files).map((file) => files[file].name);

const EditorView = ({ location }) => {
  // TODO: To be used
  /* eslint-disable */
  const [, ...path] = location.pathname.split('/');
  const currentTabName = useSelector((store) => getCurrentFile(store));
  const currentFile = files[currentTabName];


  return (
    <div className={styles.wrapper}>
      <TabMenu openFiles={fileNames} />
      <Editor file={currentFile.content} />
    </div>
  );
};


EditorView.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default EditorView;

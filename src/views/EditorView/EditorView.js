import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TabMenu from 'Components/TabMenu/TabMenu';
import Editor from 'Components/Editor/Editor';
import { getCurrentFile } from '#/store/ducks/file';
import files from '#/_files';

import styles from './editorView.scss';

const EditorView = ({ location }) => {
  // TODO: To be used?
  /* eslint-disable */
  const [, ...path] = location.pathname.split('/');
  const currentTabName = useSelector((store) => getCurrentFile(store));
  const currentFile = files.get(currentTabName);

  return (
    <div className={styles.wrapper}>
      <TabMenu />
      <Editor file={currentFile} />
    </div>
  );
};


EditorView.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default EditorView;

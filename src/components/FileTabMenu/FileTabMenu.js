import React from 'react';
import PropTypes from 'prop-types';

import FileTab from 'Components/FileTab/FileTab';
import styles from './fileTabMenu.scss';

const FileTabMenu = ({ files }) => (
  <div className={styles.menu}>
    {files.map((file) => (<FileTab>{file.name}</FileTab>))}
  </div>
);

FileTabMenu.propTypes = {
  files: PropTypes.arrayOf(PropTypes.string),
};

export default FileTabMenu;

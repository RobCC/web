import React from 'react';
import PropTypes from 'prop-types';

import FileTab from 'Components/FileTab/FileTab';
import styles from './fileTabMenu.scss';

const FileTabMenu = ({ files }) => (
  <div className={styles.menu}>
    {files.map((file) => (<FileTab key={file.name} to={file.to}>{file.name}</FileTab>))}
  </div>
);

FileTabMenu.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      to: PropTypes.string,
    }),
  ),
};

export default FileTabMenu;

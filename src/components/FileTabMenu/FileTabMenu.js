import React from 'react';
import PropTypes from 'prop-types';

import FileTab from 'Components/FileTab/FileTab';
import styles from './fileTabMenu.scss';

const FileTabMenu = ({ files }) => (
  <div className={styles.menu}>
    {files.map(({ name, to, extension }) => (
      <FileTab key={name} to={to} extension={extension}>{name}</FileTab>
    ))}
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

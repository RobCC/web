import React from 'react';
import PropTypes from 'prop-types';

import FileTab from 'Components/FileTab/FileTab';
import getFileIcon from '#/utils/getFileIcon';

import styles from './tabMenu.scss';

const FileTabMenu = ({ openFiles }) => (
  <div className={styles.tabMenu}>
    {
      openFiles.map((name) => <FileTab key={name} name={name} icon={getFileIcon(name)} />)
    }
  </div>
);

FileTabMenu.propTypes = {
  openFiles: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default FileTabMenu;

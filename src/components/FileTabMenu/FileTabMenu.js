import React from 'react';
import PropTypes from 'prop-types';

import FileTab from 'Components/FileTab/FileTab';
import styles from './fileTabMenu.scss';

const FileTabMenu = ({ tabs }) => (
  <div className={styles.tabMenu}>
    {tabs.map(({ id, name, extension }) => (
      <FileTab key={name} id={id} extension={extension}>{name}</FileTab>
    ))}
  </div>
);

FileTabMenu.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      to: PropTypes.string,
    }),
  ),
};

export default FileTabMenu;

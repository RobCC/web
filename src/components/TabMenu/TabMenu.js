import React from 'react';
import PropTypes from 'prop-types';

import FileTab from 'Components/FileTab/FileTab';
import styles from './tabMenu.scss';

const FileTabMenu = ({ tabs }) => (
  <div className={styles.tabMenu}>
    {
      tabs.map(({ id, name, icon }) => <FileTab key={name} name={name} id={id} icon={icon} />)
    }
  </div>
);

FileTabMenu.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default FileTabMenu;

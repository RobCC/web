import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './fileTab.scss';

const FileTab = ({ to, children: fileName }) => (
  <NavLink to={to} className={styles.tab}>
    {fileName}
  </NavLink>
);

FileTab.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};

export default FileTab;

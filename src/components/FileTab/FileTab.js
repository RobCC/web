import React from 'react';
import PropTypes from 'prop-types';

import styles from './fileTab.scss';

const FileTab = ({ children: fileName }) => (
  <button type="button" className={styles.tab}>{fileName}</button>
);

FileTab.propTypes = {
  children: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default FileTab;

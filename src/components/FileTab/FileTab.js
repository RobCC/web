import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import styles from './fileTab.scss';

const FileTab = ({ location, to, children: fileName }) => {
  const tabClasses = classNames(styles.tab, {
    [styles.active]: location.pathname === to,
  });

  return (
    <NavLink to={to} className={tabClasses}>
      {fileName}
    </NavLink>
  );
};

FileTab.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default React.memo(withRouter(FileTab));

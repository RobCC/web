import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import styles from './fileTab.scss';

const FileTab = ({
  location, to, extension, children: fileName,
}) => {
  const tabClasses = classNames(styles.tab, {
    [styles.active]: location.pathname === to,
  });

  const extensionClasses = classNames({
    [styles.js]: extension && extension === 'JS',
    [styles.css]: extension && extension === '#',
  });

  return (
    <NavLink to={to} className={tabClasses}>
      {extension && <span className={extensionClasses}>{extension}</span>}
      {fileName}
    </NavLink>
  );
};

FileTab.propTypes = {
  extension: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(withRouter(FileTab));

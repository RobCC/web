import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { tabs } from '#/store/ducks';
import styles from './fileTab.scss';

const FileTab = ({
  id, extension, children: fileName,
}) => {
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => tabs.getCurrentTab(store));
  const tabClasses = classNames(styles.tab, {
    [styles.active]: currentTab === id,
  });

  const extensionClasses = classNames({
    [styles.js]: extension && extension === 'JS',
    [styles.css]: extension && extension === '#',
  });

  const changeCurrentTab = () => {
    dispatch(tabs.changeTab(id));
  };

  return (
    <button type="button" to={id} className={tabClasses} onClick={changeCurrentTab}>
      {extension && <span className={extensionClasses}>{extension}</span>}
      {fileName}
    </button>
  );
};

FileTab.propTypes = {
  id: PropTypes.string.isRequired,
  extension: PropTypes.string,
  children: PropTypes.string,
};

export default React.memo(FileTab);

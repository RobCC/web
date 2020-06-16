import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { getCurrentTab, changeTab } from '#/store/ducks/tabs';
import styles from './fileTab.scss';

const FileTab = ({ id, icon, name }) => {
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => getCurrentTab(store));
  const tabClasses = classNames(styles.tab, {
    [styles.active]: currentTab === id,
  });

  const iconClasses = classNames({
    [styles.js]: icon && icon === 'JS',
    [styles.css]: icon && icon === '#',
  });

  const changeCurrentTab = () => {
    dispatch(changeTab(id));
  };

  return (
    <button type="button" to={id} className={tabClasses} onClick={changeCurrentTab}>
      {icon && <span className={iconClasses}>{icon}</span>}
      {name}
    </button>
  );
};

FileTab.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default React.memo(FileTab);

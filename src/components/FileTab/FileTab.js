import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { getCurrentTab, changeTab } from '#/store/ducks/tabs';
import styles from './fileTab.scss';

function getTabStyles(isCurrentTab) {
  return classNames(styles.tab, {
    [styles.active]: isCurrentTab,
  });
}

const FileTab = ({ id, icon, name }) => {
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => getCurrentTab(store));
  const tabClasses = getTabStyles(id === currentTab);

  const iconClasses = classNames({
    [styles.js]: icon && icon === 'JS',
    [styles.css]: icon && icon === '#',
  });

  const changeCurrentTab = useCallback(() => {
    dispatch(changeTab(id));
  }, [id]);

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

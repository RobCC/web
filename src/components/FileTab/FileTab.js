import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { getCurrentFile, changeFile } from '#/store/ducks/file';
import styles from './fileTab.scss';

function getTabStyles(isCurrentTab) {
  return classNames(styles.tab, {
    [styles.active]: isCurrentTab,
  });
}

const FileTab = ({ icon = '', name }) => {
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => getCurrentFile(store));
  const tabClasses = getTabStyles(name === currentTab);

  const iconClasses = classNames({
    [styles.js]: icon && icon === 'JS',
    [styles.css]: icon && icon === '#',
  });

  const changeCurrentTab = useCallback(() => {
    dispatch(changeFile(name));
  }, [name]);

  return (
    <button type="button" className={tabClasses} onClick={changeCurrentTab}>
      {icon && <span className={iconClasses}>{icon}</span>}
      {name}
    </button>
  );
};

FileTab.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default React.memo(FileTab);

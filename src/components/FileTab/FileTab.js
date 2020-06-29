import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { getCurrentFile, changeFile, closeFile } from '#/store/ducks/file';
import { getFileName } from '#/_files';

import styles from './fileTab.scss';

function getTabStyles(isCurrentTab) {
  return classNames(styles.tab, {
    [styles.active]: isCurrentTab,
  });
}

const FileTab = ({ icon = '', name }) => {
  const [showClose, setShowClose] = useState(false);
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => getCurrentFile(store));
  const tabClasses = getTabStyles(name === currentTab);

  const onMouseEnter = useCallback(() => setShowClose(true, []));
  const onMouseLeave = useCallback(() => setShowClose(false, []));
  const closeTab = useCallback((e) => {
    e.stopPropagation();

    if (!showClose) {
      return;
    }

    dispatch(closeFile(name));
  }, [showClose, name]);

  const changeCurrentTab = useCallback(() => {
    dispatch(changeFile(name));
  }, [name]);

  const iconClasses = classNames({
    [styles.js]: icon && icon === 'JS',
    [styles.css]: icon && icon === '#',
  });

  const closeClasses = classNames(styles.close, {
    [styles.show]: showClose,
  });

  return (
    <div
      role="button"
      tabIndex={0}
      className={tabClasses}
      onClick={changeCurrentTab}
      onKeyDown={changeCurrentTab}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button type="button" className={closeClasses} onClick={closeTab}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      {icon && <span className={iconClasses}>{icon}</span>}
      {getFileName(name)}
    </div>
  );
};

FileTab.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default React.memo(FileTab);

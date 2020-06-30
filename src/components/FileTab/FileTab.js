import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { getCurrentFile, changeFile, closeFile } from '#/store/ducks/file';
import { getFileName, getFileIcon } from '#/_files';

import styles from './fileTab.scss';

function getTabStyles(isCurrentTab) {
  return classNames(styles.tab, {
    [styles.active]: isCurrentTab,
  });
}

function getIconStyles(extension, icon) {
  return classNames({
    [styles.icon]: typeof icon === 'string',
    [styles.logoIcon]: typeof icon !== 'string',
    [styles.js]: (typeof icon === 'string') && extension === 'js',
    [styles.css]: (typeof icon === 'string') && extension === 'css',
    [styles.md]: extension === 'md',
  });
}

const FileTab = ({ name }) => {
  const [showClose, setShowClose] = useState(false);
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => getCurrentFile(store));

  const [extension, icon] = getFileIcon(name);
  const [fileName] = getFileName(name);

  const onMouseEnter = useCallback(() => setShowClose(true, []));
  const onMouseLeave = useCallback(() => setShowClose(false, []));
  const closeTab = useCallback((e) => {
    e.stopPropagation();

    if (showClose || name === currentTab) {
      dispatch(closeFile(name));
    }
  }, [showClose, name]);

  const changeCurrentTab = useCallback(() => {
    dispatch(changeFile(name));
  }, [name]);

  const tabClasses = getTabStyles(name === currentTab);
  const iconClasses = getIconStyles(extension, icon);
  const closeClasses = classNames(styles.close, {
    [styles.show]: showClose || name === currentTab,
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
      {typeof icon === 'string' && <span className={iconClasses}>{icon}</span>}
      {typeof icon !== 'string' && <FontAwesomeIcon icon={icon} className={iconClasses} />}
      {fileName}

      <button type="button" className={closeClasses} onClick={closeTab}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

FileTab.propTypes = {
  name: PropTypes.string,
};

export default React.memo(FileTab);

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

import { openChangeFile, getCurrentFile } from '#/store/ducks/file';
import { getFileName, getFileIcon } from '#/_files';

import styles from './explorerItem.scss';

function getIconStyles(extension, icon) {
  return classNames(styles.icon, {
    [styles.js]: (typeof icon === 'string') && extension === 'js',
    [styles.css]: (typeof icon === 'string') && extension === 'css',
    [styles.md]: extension === 'md',
  });
}

const ExplorerItem = ({ name }) => {
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => getCurrentFile(store));
  const [extension, icon] = getFileIcon(name);
  const [fileName] = getFileName(name);

  const onClick = useCallback(() => {
    dispatch(openChangeFile(name));
  }, [name]);

  const iconClasses = getIconStyles(extension, icon);

  return (
    <div
      role="button"
      tabIndex={0}
      className={classNames(styles.item, {
        [styles.active]: fileName === currentTab,
      })}
      onClick={onClick}
      onKeyDown={onClick}
    >
      {typeof icon === 'string'
      && (
        <div className={styles.iconWrapper}>
          <div className={iconClasses}>
            {icon}
          </div>
        </div>
      )}
      {typeof icon !== 'string' && (
        <div className={styles.iconWrapper}>
          <div className={iconClasses}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
      )}
      {fileName}
    </div>
  );
};

ExplorerItem.propTypes = {
  name: PropTypes.string,
};

export default ExplorerItem;

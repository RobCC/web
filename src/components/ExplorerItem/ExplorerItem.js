import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

import { openChangeFile, getCurrentFile } from '#/store/ducks/file';
import { getFileName, getFileIcon } from '#/_files';

import styles from './explorerItem.scss';

const ExplorerItem = ({ name }) => {
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => getCurrentFile(store));
  const {
    extension, icon, iconStyles, isStringIcon,
  } = getFileIcon(name);
  const [fileName] = getFileName(name);

  const onClick = useCallback(() => {
    dispatch(openChangeFile(name));
  }, [name]);

  const explorerIconClasses = classNames(iconStyles, {
    [styles.icon]: isStringIcon,
    [styles.logoIcon]: !isStringIcon,
    [styles.json]: extension === 'json',
  });

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
      {isStringIcon
      && (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>
            {icon}
          </div>
        </div>
      )}
      {!isStringIcon && (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>
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

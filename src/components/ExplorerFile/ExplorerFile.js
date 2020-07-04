import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

import { openChangeFile, getCurrentFile } from '#/store/ducks/file';
import { getShortName, getFileIcon } from '#/_files';

import styles from './explorerFile.scss';

const ExplorerFile = ({ level = 0, name }) => {
  const dispatch = useDispatch();
  const currentTab = useSelector((store) => getCurrentFile(store));
  const {
    extension, icon, iconStyles, isStringIcon,
  } = getFileIcon(name);
  const [shortName] = getShortName(name);

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
      onClick={onClick}
      onKeyDown={onClick}
      className={classNames(styles.item, {
        [styles.active]: shortName === currentTab,
      })}
      style={{
        paddingLeft: 15 + (level * 7),
      }}
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
      {shortName}
    </div>
  );
};

ExplorerFile.propTypes = {
  level: PropTypes.number,
  name: PropTypes.string,
};

export default ExplorerFile;

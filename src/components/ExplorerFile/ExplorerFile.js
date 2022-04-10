import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStore, { getCurrentFile, openChangeFile } from '#/store';
import { getShortName, getFileIcon } from '#/explorer';

import styles from './explorerFile.scss';

function ExplorerFile({ level = 0, name, parent = '' }) {
  const [, setSearchParams] = useSearchParams();
  const currentTab = useStore(getCurrentFile);
  const { extension, icon, iconStyles, isStringIcon } = getFileIcon(name);
  const shortName = getShortName(name);
  const fullName = `${parent}${parent ? '/' : ''}${name}`;

  const onClick = useCallback(() => {
    openChangeFile(fullName);
    setSearchParams({
      file: fullName,
    });
  }, [fullName]);

  const explorerIconClasses = classNames(iconStyles, {
    [styles.icon]: isStringIcon,
    [styles.logoIcon]: !isStringIcon,
    [styles.json]: extension === 'json',
  });

  return (
    <div
      role="button"
      title={shortName}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
      className={classNames(styles.item, {
        [styles.active]: fullName === currentTab,
      })}
      style={{
        paddingLeft: 15 + level * 8,
      }}
    >
      {isStringIcon && (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>{icon}</div>
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
}

ExplorerFile.propTypes = {
  parent: PropTypes.string,
  level: PropTypes.number,
  name: PropTypes.string,
};

export default ExplorerFile;

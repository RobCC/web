import { useState, useCallback } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import useStore, { closeFile, getCurrentFile } from '#/store';
import { getShortName, getFileIcon } from '#/explorer';
import { getLocation } from '#/utils/getLocation';

import styles from './fileTab.scss';

type Props = {
  name: string;
};

function getTabStyles(isCurrentTab) {
  return classNames(styles.tab, {
    [styles.active]: isCurrentTab,
  });
}

export default function FileTab({ name }: Props) {
  const navigate = useNavigate();
  const [showClose, setShowClose] = useState(false);
  const currentTab = useStore(getCurrentFile);

  const { icon, iconStyles, isStringIcon } = getFileIcon(name);
  const shortName = getShortName(name);

  const onMouseEnter = useCallback(() => setShowClose(true), []);
  const onMouseLeave = useCallback(() => setShowClose(false), []);
  const closeTab = useCallback(
    (e) => {
      e.stopPropagation();

      if (showClose || name === currentTab) {
        closeFile(name);
      }
    },
    [showClose, name],
  );

  const changeCurrentTab = useCallback(() => {
    // Using this instead of useSearchParams, since that one
    // navigates to root, resetting hash
    navigate(`${getLocation()}?file=${name}`);
  }, [name]);

  const tabClasses = getTabStyles(name === currentTab);
  const tabIconStyles = classNames(iconStyles, {
    [styles.icon]: isStringIcon,
    [styles.logoIcon]: !isStringIcon,
  });
  const closeClasses = classNames(styles.close, {
    [styles.show]: showClose || name === currentTab,
  });

  return (
    <div
      role="button"
      title={shortName}
      tabIndex={0}
      className={tabClasses}
      onClick={changeCurrentTab}
      onKeyDown={changeCurrentTab}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isStringIcon && <div className={tabIconStyles}>{icon}</div>}
      {!isStringIcon && (
        <div className={tabIconStyles}>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      {shortName}

      <button type="button" className={closeClasses} onClick={closeTab}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

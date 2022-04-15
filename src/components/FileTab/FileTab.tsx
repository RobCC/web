import { useCallback } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import useStore, { closeFile, openFile, getCurrentFile } from '#/store';
import { getShortName, getFileIcon } from '#/explorer';
import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './fileTab.scss';

type Props = {
  fullName: string;
};

export default function FileTab({ fullName }: Props) {
  const currentTab = useStore(getCurrentFile);
  const { icon, iconStyles, isStringIcon } = getFileIcon(fullName);
  const shortName = getShortName(fullName);

  const closeTab = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();

      closeFile(fullName);
    },
    [fullName],
  );

  const changeCurrentTab = useCallback(() => {
    openFile(fullName);
  }, [fullName]);

  const tabIconStyles = classNames(iconStyles, {
    [styles.icon]: isStringIcon,
    [styles.logoIcon]: !isStringIcon,
  });

  return (
    <div
      role="button"
      title={shortName}
      tabIndex={0}
      className={classNames(styles.tab, {
        [styles.active]: fullName === currentTab,
      })}
      onClick={changeCurrentTab}
      onKeyDown={handleOnKeyDownButton(changeCurrentTab)}
    >
      {isStringIcon ? (
        <div className={tabIconStyles}>{icon}</div>
      ) : (
        <div className={tabIconStyles}>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      {shortName}

      <button type="button" className={styles.close} onClick={closeTab}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

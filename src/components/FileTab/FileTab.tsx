import { useCallback } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import useStore, { closeFile, openFile, getCurrentFile } from '#/store';
import { getFileMetadata, getShortName, isIconString } from '#/utils/files';
import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './fileTab.scss';

type Props = {
  fullName: string;
};

export default function FileTab({ fullName }: Props) {
  const currentTab = useStore(getCurrentFile);
  const { icon, iconStyles } = getFileMetadata(fullName);
  const isString = isIconString(icon);
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
    [styles.icon]: isString,
    [styles.logoIcon]: !isString,
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
      {isString ? (
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

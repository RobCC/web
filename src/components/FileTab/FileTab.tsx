import { useCallback } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { file } from '#/store';
import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './fileTab.scss';

type Props = {
  fullName: string;
};

const { useFileStore, getCurrentFile, openFile, closeFile } = file;

export function getShortName(fullName: string) {
  const lastSlashIndex = fullName.lastIndexOf('/');
  const isRoot = lastSlashIndex === -1;

  if (isRoot) {
    return fullName;
  }

  return fullName.slice(lastSlashIndex + 1);
}

export default function FileTab({ fullName }: Props) {
  const currentFile = useFileStore(getCurrentFile);
  const { icon, iconStyles, isIconString } = currentFile.metadata;
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
    [styles.icon]: isIconString,
    [styles.logoIcon]: !isIconString,
  });

  return (
    <div
      role="button"
      title={shortName}
      tabIndex={0}
      className={classNames(styles.tab, {
        [styles.active]: fullName === currentFile.fullName,
      })}
      onClick={changeCurrentTab}
      onKeyDown={handleOnKeyDownButton(changeCurrentTab)}
    >
      {isIconString ? (
        <div className={tabIconStyles}>{icon as string}</div>
      ) : (
        <div className={tabIconStyles}>
          <FontAwesomeIcon icon={icon as IconProp} />
        </div>
      )}
      {shortName}

      <button
        type="button"
        className={styles.close}
        onClick={closeTab}
        aria-label="Close"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

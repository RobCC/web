import { useCallback, useMemo } from 'react';
import classNames from 'classnames';

import ExtensionIcon from '#/components/ExtensionIcon/ExtensionIcon';
import { IconCloseTab } from '#/components/Icones';
import { getFileFromFullName } from '#/utils/directory';
import { FILE_ICONS } from '#/utils/constants';
import { handleOnKeyDownButton } from '#/utils/a11y';
import * as store from '#/store';
import rootFiles from '#/files';

import styles from './fileTab.scss';

type Props = {
  fullName: string;
};

const { useFileStore, getCurrentFullName, openFile, closeFile } = store.file;

export function getShortName(fullName: string) {
  const lastSlashIndex = fullName.lastIndexOf('/');
  const isRoot = lastSlashIndex === -1;

  if (isRoot) {
    return fullName;
  }

  return fullName.slice(lastSlashIndex + 1);
}

export default function FileTab({ fullName }: Props) {
  const currentFileFullName = useFileStore(getCurrentFullName);
  const file = useMemo(
    () => getFileFromFullName(fullName, rootFiles),
    [fullName],
  );
  const { extension } = file.metadata;
  const shortName = getShortName(fullName);
  const Icon = FILE_ICONS[extension];

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

  return (
    <div
      role="button"
      title={shortName}
      tabIndex={0}
      className={classNames(styles.tab, {
        [styles.active]: fullName === currentFileFullName,
      })}
      onClick={changeCurrentTab}
      onKeyDown={handleOnKeyDownButton(changeCurrentTab)}
    >
      <ExtensionIcon extension={extension} Icon={Icon} />
      <span>{shortName}</span>

      <button
        type="button"
        className={styles.close}
        onClick={closeTab}
        aria-label="Close"
      >
        <IconCloseTab />
      </button>
    </div>
  );
}

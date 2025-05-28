import { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import ExtensionIcon from '#/components/ExtensionIcon/ExtensionIcon';
import { IconCloseTab } from '#/components/Icones';
import { getFile } from '#/utils/directory';
import { handleOnKeyDownButton } from '#/utils/a11y';
import {
  useFileStore,
  getCurrentFullName,
  closeFile,
} from '~/src/store/fileSystem';
import rootFiles from '#/files';

import styles from './fileTab.module.css';

type Props = {
  fullName: string;
};

const MIDDLE_MOUSE_BUTTON = 1;

function getShortName(fullName: string) {
  const lastSlashIndex = fullName.lastIndexOf('/');
  const isRoot = lastSlashIndex === -1;

  if (isRoot) {
    return fullName;
  }

  return fullName.slice(lastSlashIndex + 1);
}

export default function FileTab({ fullName }: Props) {
  const navigate = useNavigate();
  const currentFileFullName = useFileStore(getCurrentFullName);
  const file = useMemo(() => getFile(fullName, rootFiles), [fullName]);
  const { extension } = file!.metadata;
  const shortName = getShortName(fullName);

  const handleClick = useCallback(() => {
    navigate(`/${encodeURIComponent(fullName)}`);
  }, [fullName]);

  const closeTab = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();

      closeFile(fullName);
    },
    [fullName],
  );

  return (
    <div
      role="tab"
      title={shortName}
      tabIndex={0}
      className={classNames(styles.tab, {
        [styles.active]: fullName === currentFileFullName,
      })}
      onClick={handleClick}
      onKeyDown={handleOnKeyDownButton(handleClick)}
      onAuxClick={e => {
        if (e.button === MIDDLE_MOUSE_BUTTON) {
          e.preventDefault();
          closeFile(fullName);
        }
      }}
    >
      {<ExtensionIcon extension={extension} shortName={shortName} />}
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

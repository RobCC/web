import { useCallback } from 'react';
import classNames from 'classnames';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { file } from '#/store';
import { fileUtils } from '#/utils/directory';
import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './file.scss';

type Props = {
  /** Depth level on the file system */
  level?: number;
  data: fileUtils.File;
  /** Parent folder */
  parent?: string;
};

const INITIAL_PADDING = 15;
const LEVEL_PADDING_DELTA = 8;

const { useFileStore, openFile, getCurrentFileFullName } = file;

export default function File({ level = 0, data, parent = '' }: Props) {
  const currentFileName = useFileStore(getCurrentFileFullName);
  const { extension, icon, iconStyles, isIconString } = data.metadata;
  const fullName = `${parent}${parent ? '/' : ''}${data.name}`;

  const onClick = useCallback(() => {
    openFile(fullName);
  }, [fullName]);

  const explorerIconClasses = classNames(iconStyles, {
    [styles.icon]: isIconString,
    [styles.logoIcon]: !isIconString,
    [styles.json]: extension === 'json',
  });

  return (
    <div
      role="button"
      tabIndex={0}
      title={fullName}
      onClick={onClick}
      onKeyDown={handleOnKeyDownButton(onClick)}
      className={classNames(styles.item, {
        [styles.active]: fullName === currentFileName,
      })}
      style={{
        paddingLeft: INITIAL_PADDING + level * LEVEL_PADDING_DELTA,
      }}
    >
      {isIconString ? (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>{icon as string}</div>
        </div>
      ) : (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>
            <FontAwesomeIcon icon={icon as IconProp} />
          </div>
        </div>
      )}
      {data.name}
    </div>
  );
}

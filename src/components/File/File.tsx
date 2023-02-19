import { useCallback } from 'react';
import classNames from 'classnames';
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

const { useFileStore, openFile, getCurrentFullName } = file;

export default function File({ level = 0, data, parent = '' }: Props) {
  const currentFileName = useFileStore(getCurrentFullName);
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
      {typeof icon === 'string' ? (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>{icon}</div>
        </div>
      ) : (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
      )}
      {data.name}
    </div>
  );
}

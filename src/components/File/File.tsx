import { useCallback } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { openFile } from '#/store';
import { fileUtils } from '#/utils/directory';
import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './file.scss';

type Props = {
  /** Depth level on the file system */
  level?: number;
  data: AppFile2;
  /** Parent folder */
  parent?: string;
  /** Whether the current opened file is the same as this */
  isActive?: boolean;
};

const INITIAL_PADDING = 15;
const LEVEL_PADDING_DELTA = 8;

export default function File({
  level = 0,
  data,
  parent = '',
  isActive = false,
}: Props) {
  const { extension, icon, iconStyles } = fileUtils.getMetadata(data.name);
  const isString = fileUtils.isIconString(icon);
  const fullName = `${parent}${parent ? '/' : ''}${data.name}`;

  const onClick = useCallback(() => {
    openFile(fullName);
  }, [fullName]);

  const explorerIconClasses = classNames(iconStyles, {
    [styles.icon]: isString,
    [styles.logoIcon]: !isString,
    [styles.json]: extension === 'json',
  });

  return (
    <div
      role="button"
      title={fullName}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleOnKeyDownButton(onClick)}
      className={classNames(styles.item, {
        [styles.active]: isActive,
      })}
      style={{
        paddingLeft: INITIAL_PADDING + level * LEVEL_PADDING_DELTA,
      }}
    >
      {isString ? (
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

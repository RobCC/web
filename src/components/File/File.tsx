import { useCallback } from 'react';
import classNames from 'classnames';

import ExtensionIcon from '#/components/ExtensionIcon/ExtensionIcon';
import { FILE_ICONS } from '#/utils/constants';
import { fileUtils } from '#/utils/directory';
import { handleOnKeyDownButton } from '#/utils/a11y';
import { file } from '#/store';

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
  const { extension } = data.metadata;
  const fullName = `${parent}${parent ? '/' : ''}${data.name}`;
  const Icon = FILE_ICONS[extension];

  const onClick = useCallback(() => {
    openFile(fullName);
  }, [fullName]);

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
      <ExtensionIcon
        extension={extension}
        className={styles.iconWrapper}
        Icon={Icon}
      />
      <span>{data.name}</span>
    </div>
  );
}

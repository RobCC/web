import { useCallback } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import ExtensionIcon from '#/components/ExtensionIcon/ExtensionIcon';
import { fileUtils, getFullPathname } from '#/utils/directory';
import { file } from '#/store';

import styles from './file.module.css';

type Props = {
  /** Depth level on the file system */
  level?: number;
  data: fileUtils.File;
  /** Parent folder */
  parent?: string;
};

const INITIAL_PADDING = 15;
const LEVEL_PADDING_DELTA = 8;

const { openFile, useFileStore, getCurrentFullName } = file;

export default function File({ level = 0, data, parent = '' }: Props) {
  const navigate = useNavigate();
  const currentFileName = useFileStore(getCurrentFullName);
  const { extension } = data.metadata;
  const fullPathname = getFullPathname(data.name, parent);

  const handleClick = useCallback(() => {
    const [, currentFileParam] = window.location.hash.split('#/');

    // no need to navigate, but still need to open file
    if (fullPathname === decodeURIComponent(currentFileParam)) {
      openFile(fullPathname);
    } else {
      navigate(`/${encodeURIComponent(fullPathname)}`);
    }
  }, [fullPathname]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(styles.item, {
        [styles.active]: fullPathname === currentFileName,
      })}
      style={{
        paddingLeft: INITIAL_PADDING + level * LEVEL_PADDING_DELTA,
      }}
    >
      <ExtensionIcon
        extension={extension}
        className={styles.iconWrapper}
        shortName={data.name}
      />
      {data.name}
    </button>
  );
}

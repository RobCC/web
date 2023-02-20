import { useState } from 'react';
import classNames from 'classnames';

import File from '#/components/File/File';
import { FolderIcon } from '#/components/Icones';
import { folderUtils } from '#/utils/directory';
import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './folder.scss';

type Props = {
  /** Depth level on the file system. */
  level?: number;
  /** Folder data. */
  data: folderUtils.Folder;
  /** Parent folder. */
  parent?: string;
};

export default function Folder({ level = 0, data, parent = '' }: Props) {
  const [isClosed, setIsClosed] = useState(true);
  const { files, folders } = data.content;
  const fullName = `${parent}${parent ? '/' : ''}${data.name}`;

  const onClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div
      className={classNames(styles.group, {
        [styles.closed]: isClosed,
      })}
      title={data.name}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleOnKeyDownButton(onClick)}
        className={styles.title}
        style={{
          paddingLeft: 15 + level * 7,
        }}
      >
        <div className={styles.caret}>
          <FolderIcon />
        </div>
        {data.name}
      </div>
      {folders.map(folder => (
        <Folder
          key={`${fullName}/${folder.name}`}
          data={folder}
          parent={fullName}
          level={level + 1}
        />
      ))}
      {files.map(file => (
        <File
          key={`${fullName}/${file.name}`}
          data={file}
          parent={fullName}
          level={level + 1}
        />
      ))}
    </div>
  );
}

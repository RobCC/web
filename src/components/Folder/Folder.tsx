import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

import File from '#/components/File/File';
import { folderUtils } from '#/utils/directory';
import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './folder.scss';

type Props = {
  /** Depth level on the file system */
  level?: number;
  /** Folder name */
  data: Folder;
  /** Parent folder */
  parent?: string;
  /** Current file */
  currentFile: string;
};

export default function Folder({
  level = 0,
  data,
  parent = '',
  currentFile,
}: Props) {
  const [isClosed, setIsClosed] = useState(true);
  const [files, folders] = folderUtils.filterFileFolder(data);
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
        <FontAwesomeIcon icon={faAngleRight} className={styles.caret} />
        {data.name}
      </div>
      {folders.map((f) => (
        <Folder
          key={`${fullName}/${f.name}`}
          data={f}
          parent={fullName}
          level={level + 1}
          currentFile={currentFile}
        />
      ))}
      {files.map((file) => (
        <File
          key={`${fullName}/${file.name}`}
          isActive={currentFile === `${fullName}/${file.name}`}
          data={file}
          parent={fullName}
          level={level + 1}
        />
      ))}
    </div>
  );
}

import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

import { getFolderContent } from '#/utils/files';
import { handleOnKeyDownButton } from '#/utils/a11y';
import File from '../File/File';

import styles from './folder.scss';

type Props = {
  /** Depth level on the file system */
  level?: number;
  /** Folder name */
  name: string;
  /** Folder content */
  content: AppFolderContent;
  /** Parent folder */
  parent?: string;
  /** Current file */
  currentFile: string;
};

export default function Folder({
  level = 0,
  name,
  content,
  parent = '',
  currentFile,
}: Props) {
  const [isClosed, setIsClosed] = useState(true);
  const [files, folders] = getFolderContent(content);
  const fullName = `${parent}${parent ? '/' : ''}${name}`;

  const onClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div
      className={classNames(styles.group, {
        [styles.closed]: isClosed,
      })}
      title={name}
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
        {name}
      </div>
      {folders.map((folderName) => (
        <Folder
          key={`${fullName}/${folderName}`}
          name={folderName}
          parent={fullName}
          level={level + 1}
          content={content.get(folderName) as AppFolderContent}
          currentFile={currentFile}
        />
      ))}
      {files.map((fileName) => (
        <File
          key={`${fullName}/${fileName}`}
          isActive={currentFile === `${fullName}/${fileName}`}
          name={fileName}
          parent={fullName}
          level={level + 1}
        />
      ))}
    </div>
  );
}
